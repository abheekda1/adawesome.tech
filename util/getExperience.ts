export type Experience = {
  organization: string;
  role: string;
  dates: string;
  description: string;
  link?: string;
};

const experience: Experience[] = [
  {
    organization: 'CourseTable',
    role: 'Software Engineer',
    dates: 'August 2024 – Present',
    description:
      "Build and maintain Yale's course-planning platform, used by more than 95% of students. Improved course search and UI/UX in an established TypeScript/React codebase, and implemented PWA installation and offline caching so saved course plans work without a network connection.",
    link: 'https://coursetable.com',
  },
  {
    organization: 'Universidad de Chile',
    role: 'Astrophysics Research Assistant (Tetelman Fellowship)',
    dates: 'June 2026 – August 2026',
    description:
      'Built a modular Python pipeline to study the star-forming main sequence across 1,380 simulated galaxies from SPHINX20, comparing star formation over 3–100 Myr timescales and modeling how the catalogue’s selection biases the fitted relation.',
  },
  {
    organization: 'Yale Quantum Institute',
    role: 'Software Engineer',
    dates: 'June 2025 – August 2025',
    description:
      'Built and deployed visual-notes, interactive courseware for Yale CPSC 4470 used in lectures to teach seven quantum computing concepts. Developed scroll-driven circuit, Bloch sphere, and Feynman path visualizations with React Three Fiber, and set up the testing and linting workflow.',
    link: 'https://quantuminstitute.yale.edu',
  },
  {
    organization: 'St. Louis Modern Chinese School',
    role: 'Programming Teacher',
    dates: 'August 2023 – May 2024',
    description:
      'Taught 50 students weekly, from text-based programming introductions to Python classes and web development, as part of the Coding Academy St. Louis nonprofit.',
  },
  {
    organization: 'Medicardia',
    role: 'Programmer (Internship)',
    dates: 'September 2021 – September 2023',
    description:
      'Designed and implemented natural language processing pipelines to extract and tag key patient information, such as medications and demographics, from clinical reports.',
  },
];

export default experience;
