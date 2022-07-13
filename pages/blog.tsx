import type { NextPage } from 'next';
import Box from '../components/box';
import { Metadata } from '../components/articleLayout';
import { promises as fs } from 'node:fs';
import path from 'path';
import Link from 'next/link';
import getArticles from '../util/getArticles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// todo: make single util function
export const getStaticProps = getArticles;

const Blog = ({
  articles,
  tags,
}: {
  articles: Array<Metadata>;
  tags: Set<string>;
}) => {
  const router = useRouter();

  const [articleList, setArticleList] = useState<Array<Metadata>>(articles);

  let filteredArticles = articles;
  useEffect(() => {
    setArticleList(
      filteredArticles.filter((a) => {
        if (router.query.tags) {
          const queryTags = router.query.tags.toString().split(',');
          if (queryTags.filter((t) => a.tags.includes(t)).length > 0) {
            return true;
          } else {
            return false;
          }
        }
        return true;
      })
    );
  }, [filteredArticles, router]);

  return (
    <Box>
      <>
        <h1>Articles</h1>
        {articleList.map((article, idx) => {
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
