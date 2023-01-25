enum InOrBy {
  IN,
  BY,
}

export type Metadata = {
  name: string;
  description: string;
  used?: {
    inOrBy: InOrBy;
    what: string[];
  };
  link: string;
};

const projects: Metadata[] = [
  {
    name: 'AwesomeSciBo',
    description:
      'Open-source Discord bot that aims to aid up-and-coming Scibowlers with randomly generated (non-stock) rounds and training. It has many features, including subject-targeted training, a cross-server leaderboard, and a plethora of slash commands!',
    used: {
      inOrBy: InOrBy.BY,
      what: ['>1600 people in over >400 servers'],
    },
    link: 'https://github.com/abheekda1/AwesomeSciBo',
  },
  {
    name: 'Wwise Audio Tools',
    description:
      "A collection of tools to manipulate Wwise's elusive WEM file format and its accomplices",
    used: {
      inOrBy: InOrBy.IN,
      what: ['The WolvenKit Project'],
    },
    link: 'https://github.com/WolvenKit/wwise-audio-tools',
  },
  {
    name: 'Raycasting Engine',
    description:
      'Work-in-progress raycasting engine for an AP Computer Science individual project',
    link: 'https://github.com/abheekda1/raycaster',
  },
  {
    name: 'Brainfuck Interpreter',
    description:
      'A simple brainfuck interpreter in x64 NASM to learn more about Assembly and its fundamentals',
    link: 'https://github.com/abheekda1/brainf-interpreter',
  },
  {
    name: 'Curve Fitting',
    description:
      'A WIP library to fit many different types of functions, such as polynomials, logarithms, and exponentials',
    link: 'https://github.com/abheekda1/curve-fitting',
  },
  {
    name: 'Lotsa Commits',
    description: 'Pushing the limits of Git commits',
    link: 'https://github.com/abheekda1/lotsa-commits',
  },
];

export default async function () {
  return {
    props: {
      projects: projects,
    },
  };
}
