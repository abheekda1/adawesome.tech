import Head from 'next/head';
import Box from './box';
import { ReactNode } from 'react';

export default function Layout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <>
      <Head>
        <title>{`${title} | ADAT`}</title>
      </Head>
      <Box>{children}</Box>
      {/*todo: add footer*/}
    </>
  );
}
