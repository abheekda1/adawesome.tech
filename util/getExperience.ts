export type Experience = {
  organization: string;
  role: string;
  dates: string;
  description: string;
  link?: string;
};

const experience: Experience[] = [
  {
    organization: 'Yale Quantum Institute',
    role: 'Research Assistant',
    dates: 'June 2025 – August 2025',
    description:
      'Developed interactive visualizations under Prof. Yongshan Ding to teach and demonstrate quantum computing concepts.',
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
  {
    organization: 'Summer Science Program',
    role: 'Researcher',
    dates: 'June 2023 – July 2023',
    description:
      'Captured asteroid images using the UNC-Chapel Hill Morehead Observatory and implemented the Method of Gauss in Python to derive orbital elements and model trajectories.',
    link: 'https://summerscience.org',
  },
];

export default experience;
