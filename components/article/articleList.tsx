import Link from 'next/link';
import { Metadata } from './articleLayout';
import ArticleListElement from './articleListElement';

export default function ArticleList({
  articles,
  limit,
}: {
  articles: Array<Metadata>;
  limit?: number;
}) {
  return (
    <div>
      {articles.slice(0, limit).map((article, idx) => {
        return <ArticleListElement article={article} key={idx} />;
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
