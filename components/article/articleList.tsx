import Link from 'next/link';
import { Metadata } from './articleLayout';
import ArticleListElement from './articleListElement';

export default function ArticleList({
  articles,
  limit,
  descLimit,
}: {
  articles: Array<Metadata>;
  limit?: number;
  descLimit?: number;
}) {
  return (
    <div>
      {articles.slice(0, limit).map((article, idx) => {
        return (
          <div>
            <ArticleListElement
              article={article}
              descLimit={descLimit}
              key={idx}
            />
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
          </div>
        );
      })}
      {articles.length > (limit || Infinity) && (
        <div
          className={
            'block text-center p-1 my-2 border-solid border-2 border-black'
          }
        >
          <Link href='/blog'>
            <a className={'underline'}>View more articles</a>
          </Link>
        </div>
      )}
    </div>
  );
}
