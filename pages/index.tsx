import Link from 'next/link';
import Header from '../components/mdx/header';
import Subheading from '../components/mdx/subheading';
import { Metadata as ArticleMetadata } from '../components/article/articleLayout';
import { Metadata as ProjectMetadata } from '../util/getProject';
import getArticles from '../util/getArticles';
import Layout from '../components/layout';
import ArticleList from '../components/article/articleList';
import ProjectList from '../components/project/projectList';
import getProject from '../util/getProject';
import experience from '../util/getExperience';
import research from '../util/getResearch';
import ExperienceList from '../components/experience/experienceList';
import ResearchList from '../components/research/researchList';
import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { GrDocumentText } from 'react-icons/gr';

export async function getStaticProps() {
  const props = {};
  const articleProps = await getArticles();
  const projectProps = await getProject();
  Object.assign(props, articleProps.props, projectProps.props);
  return { props: props };
}

const links = [
  { href: 'https://github.com/abheekda1', label: 'GitHub', Icon: FaGithub },
  {
    href: 'https://linkedin.com/in/abheek-dhawan',
    label: 'LinkedIn',
    Icon: FaLinkedin,
  },
  { href: 'mailto:abheek.dhawan@yale.edu', label: 'Email', Icon: FaEnvelope },
  {
    href: 'https://youtube.com/AbheeksTechAdventures',
    label: 'YouTube',
    Icon: FaYoutube,
  },
];

const leadership = [
  {
    title: 'President, Yale Undergraduate Science Bowl',
    detail:
      'Hosted a Science Bowl competition for over 120 students and maintain AwesomeSciBo for team training.',
  },
  {
    title: 'Captain, Yale Jashan Bhangra',
    detail:
      "Lead Yale's Punjabi folk dance team in collegiate competitions across the U.S.",
  },
];

const awards = [
  'Tetelman Fellowship (2026)',
  'NYC ASA AI4Purpose Hackathon Runner-Up (2025)',
  '21st in the U.S., USAAAO National Astronomy Competition (2023)',
];

const Home = ({
  articles,
  projects,
}: {
  articles: Array<ArticleMetadata>;
  projects: Array<ProjectMetadata>;
}) => {
  return (
    <div>
      <Layout title={'Home'}>
        <div className='max-w-none prose'>
          <p>
            Hey there! I&apos;m Abheek, a Computer Science &amp; Astrophysics
            student at Yale.
          </p>
          <div className={'flex justify-center items-center mb-2'}>
            <GrDocumentText className={'ml-1'} />
            <div className={'flex-row items-center mx-1'}>
              <Link
                href='/docs/resume.pdf'
                className={'pl-1 pr-2 flex items-center'}
              >
                <span>Resume</span>
              </Link>
            </div>
          </div>
          <div className={'flex flex-wrap justify-center items-center gap-y-1'}>
            {links.map(({ href, label, Icon }) => (
              <div className={'flex-row items-center mx-1'} key={label}>
                <a href={href} className={'px-2 flex items-center'}>
                  <Icon className={'mr-1'} />
                  <span>{label}</span>
                </a>
              </div>
            ))}
          </div>
          <p>
            I like building software that people actually use. I work on
            CourseTable, which most Yale students use to plan their semesters,
            and I&apos;ve built everything from tools for reverse-engineering
            game audio to interactive visualizations that make quantum computing
            concepts click.
            <br />
            <br />
            On the astrophysics side, I&apos;m interested in using computational
            methods to learn about the history of the cosmos: how it formed, how
            it developed, and where it may lead. This past summer I was in
            Santiago as a Tetelman Fellow at the Universidad de Chile, studying
            how star formation in the earliest galaxies depends on which
            galaxies you can see. As Carl Sagan put it, we aren&apos;t just
            observing the universe, we&apos;re a part of it, and that&apos;s a
            big part of why I find it so fascinating.
          </p>

          <div className={'not-prose mt-5 mb-5'}>
            <Header id={'experience'}>Experience</Header>
            <ExperienceList experience={experience} />
          </div>
          <div className={'not-prose mt-5 mb-5'}>
            <Header id={'research'}>Research</Header>
            <ResearchList research={research} />
          </div>
          <div className={'not-prose mt-5 mb-5'}>
            <Header id={'projects'}>
              <Link href={'/projects'} className={'first-letter:text-current'}>
                Projects
              </Link>
            </Header>
            <ProjectList projects={projects} limit={4} />
          </div>
          <div className={'not-prose mt-5 mb-5'}>
            <Header id={'leadership'}>Leadership &amp; Awards</Header>
            {leadership.map((item) => (
              <div className={'block mb-4'} key={item.title}>
                <span className='font-semibold'>{item.title}</span>
                <p className={'text-gray-600 text-base'}>{item.detail}</p>
              </div>
            ))}
            <ul className={'list-disc pl-5 text-gray-600 text-base'}>
              {awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </div>
          <div className={'not-prose mt-5 mb-5'}>
            <Header id={'blog'}>
              <Link href={'/blog'} className={'first-letter:text-current'}>
                Blog
              </Link>
            </Header>
            <Subheading id={'latest-articles'}>Latest articles:</Subheading>
            <ArticleList articles={articles} limit={3} descLimit={200} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
