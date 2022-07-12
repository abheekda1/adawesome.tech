import type { NextPage } from 'next';
import Box from '../components/box';
import { Metadata } from '../components/articleLayout';
import { promises as fs } from 'node:fs';
import path from 'path';
import Link from 'next/link';

export const getStaticProps = async () => {
  const articleFiles = await fs.readdir(
    path.join(process.cwd(), 'pages', 'blog')
  );

  const postModules = await Promise.all(
    articleFiles.map(async (p) => import(`./blog/${p}`))
  );

  const tags = new Set<string>();
  const postMetadata = postModules.map((m: { meta: Metadata }, idx) => {
    m.meta.slug = path.parse(articleFiles[idx]).name;
    m.meta.tags.forEach((t) => tags.add(t));
    return m.meta;
  });

  return {
    props: {
      articles: postMetadata,
      tags: Array.from(tags),
    },
  };
  /*
  console.log(fs.readFileSync('terminal-customization.mdx', 'utf-8'));
  console.log(import(process.cwd() + '\\terminal-customization.mdx'));
  const data = new Array<Metadata>();
  const tags = new Set<string>();

  for (const file of articleFiles) {
    if (!path.parse(file).ext.endsWith('mdx')) continue;
    import(file).then(({ meta }: { meta: Metadata }) => {
      console.log(meta);
      meta.slug = path.parse(file).name;
      data.push(meta);
      meta.tags.forEach((tag) => {
        tags.add(tag);
      });
    });
  }

  return {
    props: {
      articles: data,
      tags: Array.from(tags),
    },
  };*/
};

const Blog = ({
  articles,
  tags,
}: {
  articles: Array<Metadata>;
  tags: Set<string>;
}) => {
  return (
    <Box>
      <>
        <h1>Articles</h1>
        {articles.map((article, idx) => {
          return (
            <div key={idx}>
              <Link href={`/blog/${article.slug || ''}`}>
                <a>{article.title}</a>
              </Link>{' '}
              <span className={'text-gray-400 text-xs'}>
                {new Date(article.timestamp).toLocaleString().split(',')[0]}
              </span>
            </div>
          );
        })}
      </>
    </Box>
  );
};

export default Blog;
