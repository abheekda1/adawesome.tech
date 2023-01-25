import Link from 'next/link';
import { Metadata } from './articleLayout';
import dynamic from 'next/dynamic';

export default function ArticleListElement({
  article,
  descLimit,
}: {
  article: Metadata;
  descLimit?: number;
}) {
  const DynamicDate = dynamic(() => import('../util/dynamicDate'), {
    ssr: false,
  });

  return (
    <div className={'block mb-3'}>
      <div className={'text-gray-400 text-[0.6rem] select-none'}>
        <DynamicDate timestamp={article.timestamp} />
      </div>
      <p className={'text-gray-600 text-[0.6rem] select-none'}>
        {'['}
        {article.tags.join(', ')}
        {']'}
      </p>
      <Link href={`/blog/${article.slug || ''}`}>
        <a>{article.title}</a>
      </Link>
      <p className={'text-gray-600 text-xs'}>
        {descLimit
          ? article.description.length > descLimit
            ? article.description.slice(0, descLimit - 3) + '...'
            : article.description
          : article.description}
      </p>
    </div>
  );
}
