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
  const postMetadata = postModules.map((m) => (m.meta ? m.meta : null));
  return {
    props: {
      articles: postMetadata,
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
              <Link href={article.slug || '#'}>
                <a>{article.description}</a>
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
