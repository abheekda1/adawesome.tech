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
  PYTHON,
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
    case Language.PYTHON:
      ret = { name: 'Python', color: '#3572A5' };
      break;
  }
  return ret;
}

const projects: Metadata[] = [
  {
    name: 'CourseTable',
    description:
      "Implemented full progressive web app (PWA) support, including offline caching and install prompts, for Yale's most popular unofficial course browsing platform, used by over 95% of students.",
    used: {
      inOrBy: InOrBy.BY,
      what: ['over 95% of Yale students'],
    },
    link: 'https://github.com/coursetable/coursetable',
    languages: [Language.TYPESCRIPT],
  },
  {
    name: 'Sonara',
    description:
      'Automated transcript classification and summarization system built on Deepgram streaming and HuggingFace zero-shot models. Runner-up at the NYC ASA AI4Purpose Hackathon (2025).',
    link: 'https://github.com/abheekda1/sonara',
    languages: [Language.PYTHON],
  },
  {
    name: 'AwesomeSciBo',
    description:
      'The most popular Science Bowl training Discord bot (over 2,000 peak users), with subject-targeted rounds, randomly generated (non-stock) questions, and a live, competitive cross-server leaderboard.',
    used: {
      inOrBy: InOrBy.BY,
      what: ['over 2,000 peak users'],
    },
    link: 'https://github.com/abheekda1/AwesomeSciBo',
    languages: [Language.TYPESCRIPT, Language.JAVASCRIPT],
  },
  {
    name: 'Wwise Audio Tools',
    description:
      'C++ toolset for reverse-engineering and decoding Wwise SoundBank and WEM files, letting mod developers inspect and extract game audio assets.',
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
      'A 3D raycasting engine in Java that simulates early first-person rendering and collision logic, built to explore computer graphics fundamentals.',
    link: 'https://github.com/abheekda1/raycaster',
    languages: [Language.JAVA],
  },
  {
    name: 'Brainfuck Interpreter',
    description:
      'A brainfuck interpreter written in x64 NASM to learn the fundamentals of Assembly.',
    link: 'https://github.com/abheekda1/brainf-interpreter',
    languages: [Language.ASSEMBLY],
  },
  {
    name: 'The Witcher 3 Achievement StatTrak',
    description:
      'A Witcher 3 mod that adds an in-game book listing achievement progress, published as a verified Nexus Mods author.',
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
