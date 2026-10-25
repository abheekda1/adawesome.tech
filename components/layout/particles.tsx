import { useEffect, useState } from 'react';
import TsParticles, { initParticlesEngine } from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';

// Slowly twinkling starfield behind the page.
const options: ISourceOptions = {
  fullScreen: { enable: true, zIndex: -1 },
  detectRetina: true,
  particles: {
    number: {
      value: 355,
      density: { enable: true, width: 789, height: 1000 },
    },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: {
      value: { min: 0, max: 0.49 },
      animation: { enable: true, speed: 0.2, sync: false },
    },
    size: {
      value: { min: 0, max: 2 },
      animation: { enable: true, speed: 2, sync: false },
    },
    links: { enable: false },
    move: {
      enable: true,
      speed: 0.2,
      direction: 'none',
      random: true,
      straight: false,
      outModes: 'out',
    },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onHover: { enable: true, mode: 'bubble' },
      onClick: { enable: true, mode: 'push' },
      resize: { enable: true },
    },
    modes: {
      bubble: { distance: 84, size: 1, duration: 3, opacity: 1 },
      push: { quantity: 4 },
    },
  },
};

export default function Particles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return <TsParticles id='tsparticles' options={options} />;
}
