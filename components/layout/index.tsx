import Head from './head';
import Box from './box';
import Particles from './particles';
import { ReactNode } from 'react';

//import Particles from 'react-tsparticles';

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
