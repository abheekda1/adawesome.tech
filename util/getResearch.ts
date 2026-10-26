export type Research = {
  title: string;
  context: string;
  dates: string;
  description: string;
  image?: { src: string; alt: string };
  link?: { href: string; label: string };
};

const research: Research[] = [
  {
    title:
      'Veering Off Track: Testing the High-Redshift Star-Forming Main Sequence in SPHINX',
    context: 'Universidad de Chile · Tetelman Fellowship',
    dates: '2026',
    description:
      "Studied how star formation scales with stellar mass in the early universe (redshifts 4.6–10) using the SPHINX20 simulation. The catalogue's fixed star-formation cut makes low-mass galaxies look far more active than they are; modeling that cut with a truncated-Gaussian likelihood flattens the fitted mass slope from −0.51 to −0.09 while keeping all 1,380 galaxies instead of the 141 a simple mass cut leaves.",
    image: {
      src: '/img/research/sphinx-selection-floor.webp',
      alt: 'Specific star formation rate versus stellar mass for SPHINX20 galaxies, colored by redshift, with the catalogue selection floor shown as a dashed diagonal line that the low-mass galaxies hug.',
    },
  },
  {
    title: 'Interactive Visualizations for Quantum Computing',
    context: 'Yale Quantum Institute · Prof. Yongshan Ding',
    dates: '2025',
    description:
      'Designed and built scroll-driven visual notes for Yale CPSC 4470 that walk students through quantum circuits, superposition, the Bloch sphere, and Feynman path sums, including 3D circuit animations and a circuit parser that turns written circuits into interactive diagrams.',
    image: {
      src: '/img/research/quantum-visual-notes.webp',
      alt: 'The visual-notes Visualization Engine showing a five-qubit circuit of Hadamard, CNOT, and Z gates above a Feynman path diagram of how amplitudes flow through each basis state.',
    },
  },
  {
    title: 'Asteroid Orbit Determination',
    context: 'Summer Science Program · UNC-Chapel Hill',
    dates: '2023',
    description:
      'Captured asteroid images at the UNC-Chapel Hill Morehead Observatory and implemented the Method of Gauss in Python to derive orbital elements and model the trajectory.',
  },
];

export default research;
