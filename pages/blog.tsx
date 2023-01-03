import Box from '../components/box';
import { Metadata } from '../components/articleLayout';
import Link from 'next/link';
import getArticles from '../util/getArticles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import dynamic from 'next/dynamic';

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

  const DynamicDate = dynamic(() => import('../components/date'), {
    ssr: false,
  });

  return (
    <Layout title={'Blog'}>
      <>
        <h1>Articles</h1>
        {articleList.map((article, idx) => {
          return (
            <div key={idx}>
              <Link href={`/blog/${article.slug || ''}`}>
                <a>{article.title}</a>
              </Link>{' '}
              <span className={'text-gray-400 text-xs select-none'}>
                <DynamicDate timestamp={article.timestamp}/>
              </span>
            </div>
          );
        })}
      </>
    </Layout>
  );
};

export default Blog;
