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
  image?: { src: string; alt: string };
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
    name: 'Wwise Audio Tools',
    description:
      'Reverse-engineered Wwise audio formats and built reusable C++ libraries and a CLI to decode game audio from WEM to OGG. Used as a shared dependency in WolvenKit (1.2k+ GitHub stars) so the modding toolkit can decode game audio as part of its asset pipeline.',
    link: 'https://github.com/WolvenKit/wwise-audio-tools',
    languages: [Language.CPP],
  },
  {
    name: 'Sonara',
    description:
      'Routes patient tasks out of clinical conversations by combining Deepgram speech-to-text with Hugging Face zero-shot classification, helping cut clinician note-taking time by 35%. Runner-up at the 2025 NYC ASA AI4Purpose Hackathon.',
    link: 'https://github.com/abheekda1/sonara',
    languages: [Language.PYTHON, Language.TYPESCRIPT],
  },
  {
    name: 'AwesomeSciBo',
    description:
      'Open-source Science Bowl training bot with more than 2,000 peak users, featuring subject-targeted practice rounds, slash commands, and cross-server leaderboards. Now maintained as training software for the Yale Undergraduate Science Bowl.',
    link: 'https://github.com/abheekda1/AwesomeSciBo',
    languages: [Language.TYPESCRIPT],
  },
  {
    name: 'Quantum Hardware Scrollyteller',
    description:
      'A scroll-driven timeline of quantum hardware progress, plotting qubit count against two-qubit gate error on log-log axes as superconducting and trapped-ion devices close the gap from 2003 to today.',
    link: 'https://github.com/abheekda1/quantum-scrollyteller',
    languages: [Language.TYPESCRIPT],
    image: {
      src: '/img/projects/quantum-scrollyteller.webp',
      alt: 'Dot plot titled Bridging the Gap showing qubit count versus two-qubit gate error rate for superconducting and trapped-ion quantum computers from 2003 to 2023.',
    },
  },
  {
    name: 'abheekd-lang',
    description:
      'An end-to-end compiler for a custom language, with a handwritten lexer and parser, LLVM IR generation, and native object-code output.',
    link: 'https://github.com/abheekda1/abheekd-lang',
    languages: [Language.CPP],
  },
  {
    name: 'Ricochet Robots Agent',
    description:
      'Compares BFS, iterative deepening, Monte Carlo tree search, and value iteration on the Ricochet Robots puzzle across 2–4 robots, measuring success rate, solution length, and runtime. Built with Kashvi Pundir and Daniel Wang.',
    link: 'https://github.com/abheekda1/ricochet-robots-agent',
    languages: [Language.PYTHON],
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
      'A Witcher 3 mod that adds an in-game book listing achievement progress, one of several mods with more than 15,000 combined downloads on Nexus Mods.',
    link: 'https://github.com/abheekda1/tw3-modAchievementStatTrak',
    languages: [Language.WITCHER_SCRIPT],
  },
];

export default async function getProject() {
  return {
    props: {
      projects: projects,
    },
  };
}
