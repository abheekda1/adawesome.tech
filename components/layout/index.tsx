import Head from 'next/head';
import Box from './box';
import { ReactNode } from 'react';

import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Layout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <>
      <Head>
        <title>{`${title} | ADAT`}</title>

        {/* metadata */}
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta property='og:title' content={`${title} | ADAT`} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://adawesome.tech' />
        <meta
          property='og:image'
          content='https://adawesome.tech/img/logo.png'
        />
        <meta
          property='og:description'
          content={
            "I'm Abheek, a passionate developer intent on learning everything there is to learn about many interesting technology-related topics. These include, but are not limited to: programming languages such as Go, C++, and TypeScript; the workings of OSes on a software level as well as the hardware counterpart; and finally the inner workings of different software, games, and other media and reverse engineering them. In addition, I run a YouTube channel where I post tech videos. I hope this website will serve as a hub for my many different endeavors and will allow for others to follow along or learn something."
          }
        />
        <meta name='theme-color' content='#607dfa' />
      </Head>
      <Box>{children}</Box>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        className={'fixed -z-50'}
        options={{
          particles: {
            number: {
              value: 355,
              density: {
                enable: true,
                value_area: 789.1476416322727,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.48927153781200905,
              random: false,
              anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 83.91608391608392,
                size: 1,
                duration: 3,
                opacity: 1,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      {/*todo: add footer*/}
    </>
  );
}
