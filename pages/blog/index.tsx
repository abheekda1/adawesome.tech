import { Metadata } from '../../components/article/articleLayout';
import Link from 'next/link';
import getArticles from '../../util/getArticles';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import Layout from '../../components/layout';
import ArticleList from '../../components/article/articleList';

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

  // Filter by ?tags=a,b once the query is available on the client.
  const tagQuery = router.query.tags?.toString();
  const articleList = useMemo(() => {
    if (!tagQuery) return articles;
    const queryTags = tagQuery.split(',');
    return articles.filter((a) => queryTags.some((t) => a.tags.includes(t)));
  }, [articles, tagQuery]);

  {
    /* todo: search */
  }
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
                <Link
                  href={`/blog/?${params.toString()}`}
                  className='inline-block ml-2 text-xs text-gray-600'>
                  {t}
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
