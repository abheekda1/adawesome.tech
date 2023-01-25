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
  languages?: Language[];
};

export enum Language {
  CPP,
  TYPESCRIPT,
  JAVASCRIPT,
  JAVA,
  ASSEMBLY,
  GO,
  WITCHER_SCRIPT,
  CSHARP,
}

export type LanguageInfo = {
  name: string;
  color: string;
};

export function getLanguageInfo(language: Language): LanguageInfo {
  let ret: LanguageInfo;
  switch (language) {
    case Language.CPP:
      ret = { name: 'C++', color: '#f34b7d' };
      break;
    case Language.TYPESCRIPT:
      ret = { name: 'TypeScript', color: '#3178c6' };
      break;
    case Language.JAVASCRIPT:
      ret = { name: 'JavaScript', color: '#f1e05a' };
      break;
    case Language.JAVA:
      ret = { name: 'Java', color: '#b07219' };
      break;
    case Language.ASSEMBLY:
      ret = { name: 'Assembly', color: '#6E4C13' };
      break;
    case Language.GO:
      ret = { name: 'Go', color: '#00ADD8' };
      break;
    case Language.WITCHER_SCRIPT:
      ret = { name: 'Witcher Script', color: '#ff0000' };
      break;
    case Language.CSHARP:
      ret = { name: 'C#', color: '#178600' };
      break;
  }
  return ret;
}

const projects: Metadata[] = [
  {
    name: 'AwesomeSciBo',
    description:
      'Open-source Discord bot that aims to aid up-and-coming Scibowlers with randomly generated (non-stock) rounds and training. It has many features, including subject-targeted training, a cross-server leaderboard, and a plethora of slash commands!',
    used: {
      inOrBy: InOrBy.BY,
      what: ['over 1600 people in over 400 servers'],
    },
    link: 'https://github.com/abheekda1/AwesomeSciBo',
    languages: [Language.TYPESCRIPT, Language.JAVASCRIPT],
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
    languages: [Language.CPP],
  },
  {
    name: 'Raycasting Engine',
    description:
      'Work-in-progress raycasting engine for an AP Computer Science individual project',
    link: 'https://github.com/abheekda1/raycaster',
    languages: [Language.JAVA],
  },
  {
    name: 'Brainfuck Interpreter',
    description:
      'A simple brainfuck interpreter in x64 NASM to learn more about Assembly and its fundamentals',
    link: 'https://github.com/abheekda1/brainf-interpreter',
    languages: [Language.ASSEMBLY],
  },
  {
    name: 'Curve Fitting',
    description:
      'A WIP library to fit many different types of functions, such as polynomials, logarithms, and exponentials',
    link: 'https://github.com/abheekda1/curve-fitting',
    languages: [Language.CPP],
  },
  {
    name: 'Lotsa Commits',
    description: 'Pushing the limits of Git commits',
    link: 'https://github.com/abheekda1/lotsa-commits',
    languages: [Language.GO],
  },
  {
    name: 'The Witcher 3 Achievement StatTrak',
    description:
      'Simple Witcher 3 mod that adds a book to list achievement progress',
    link: 'https://github.com/abheekda1/tw3-modAchievementStatTrak',
    languages: [Language.WITCHER_SCRIPT],
  },
];

export default async function () {
  return {
    props: {
      projects: projects,
    },
  };
}
