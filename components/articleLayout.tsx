import { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Header from './header';
import Subheading from './subheading';
import Blockquote from './blockquote';
import DropdownImage from './dropdownImage';
import Link from 'next/link';
import Pre from './pre';
import Layout from './layout';
import dynamic from 'next/dynamic';

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
  const DynamicDate = dynamic(() => import('../components/date'), {
    ssr: false,
  })

  return (
    <Layout title={meta.title}>
      <article className={'prose'}>
        <Header id='title'>{meta.title}</Header>
        By: {meta.author}
        <span className='block text-xs text-gray-400'>
          Created: <DynamicDate timestamp={meta.timestamp}/>
        </span>{' '}
        <span className='block text-xs text-gray-400'>Tags: [</span>
        {meta.tags.map((t, idx) => {
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
        <MDXProvider
          components={{
            h1: (props) => <Header {...props} />,
            h2: (props) => <Subheading {...props} />,
            blockquote: (props) => <Blockquote {...props} />,
            img: (props) => <DropdownImage {...props} />,
            pre: (props) => <Pre {...props} />,
          }}
        >
          {children}
        </MDXProvider>
      </article>
    </Layout>
  );
}
