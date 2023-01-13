import Box from '../../components/box';
import { Metadata } from '../../components/articleLayout';
import Link from 'next/link';
import getArticles from '../../util/getArticles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import dynamic from 'next/dynamic';
import ArticleList from '../../components/articleList';

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

  {/* todo: search */}
  return (
    <Layout title={'Blog'}>
      <>
        <div className={'mb-3'}>
          <h1>Articles</h1>
          <span className='block text-xs text-gray-400'>Tags: [</span>
          {/* todo: multiple tags */}
          {/* todo: highlight current tags */}
          {Array.from(tags).map((t, idx) => {
            const params = new URLSearchParams({ tags: t });
            return (
              <span key={idx}>
                <Link href={`/blog/?${params.toString()}`}>
                  <a className='inline-block ml-2 text-xs text-gray-600'>{t}</a>
                </Link>
                {','}
              </span>
            );
          })}
          <span className={'block text-xs text-gray-400'}>]</span>
        </div>

        <ArticleList articles={articleList} />
      </>
    </Layout>
  );
};

export default Blog;
