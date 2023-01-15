import { promises as fs } from 'fs';
import path from 'path';
import { Metadata } from '../components/article/articleLayout';

// eslint-disable-next-line import/no-anonymous-default-export
export default async function () {
  let articleFiles = await fs.readdir(
    path.join(process.cwd(), 'pages', 'blog')
  );

  articleFiles = articleFiles.filter((file: string) => file.match(/^.+\.mdx$/));

  const postModules = await Promise.all(
    articleFiles.map(async (p) => import(`../pages/blog/${p}`))
  );

  const tags = new Set<string>();
  const postMetadata = postModules.map((m: { meta: Metadata }, idx) => {
    m.meta.slug = path.parse(articleFiles[idx]).name;
    m.meta.tags.forEach((t) => tags.add(t));
    return m.meta;
  });

  postMetadata.sort(function (a, b) {
    return b.timestamp - a.timestamp;
  });

  return {
    props: {
      articles: postMetadata,
      tags: Array.from(tags),
    },
  };
}
