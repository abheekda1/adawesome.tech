import Head from './head';
import Box from './box';
import Particles from './particles';
import { ReactNode } from 'react';

import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
//import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Layout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <>
      <Head title={title} />
      <Box>{children}</Box>
      <Particles />
      {/*todo: add footer*/}
    </>
  );
}
