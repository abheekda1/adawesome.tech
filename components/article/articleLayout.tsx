import { ReactNode } from 'react';
import Header from '../mdx/header';
import Link from 'next/link';
import Layout from '../layout';
import dynamic from 'next/dynamic';

// Dates render client-side only so they use the reader's locale.
const DynamicDate = dynamic(() => import('../util/dynamicDate'), {
  ssr: false,
});

export type Metadata = {
  title: string;
  description: string;
  author: string;
  tags: Array<string>;
  slug?: string;
  timestamp: number;
};

export default function ArticleLayout({
  children,
  meta,
}: {
  children: ReactNode;
  meta: Metadata;
}) {
  return (
    <Layout title={meta.title}>
      <article className={'prose max-w-none'}>
        <Header id='title'>{meta.title}</Header>
        By: {meta.author}
        <span className='block text-xs text-gray-400'>
          Created: <DynamicDate timestamp={meta.timestamp} />
        </span>{' '}
        <span className='block text-xs text-gray-400'>Tags: [</span>
        {meta.tags.map((t, idx) => {
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
        <p>{meta.description}</p>
        {children}
      </article>
    </Layout>
  );
}
