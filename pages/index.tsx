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
import ExperienceList from '../components/experience/experienceList';
import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { GrDocumentText } from 'react-icons/gr';

export async function getStaticProps() {
  const props = {};
  const articleProps = await getArticles();
  const projectProps = await getProject();
  Object.assign(props, articleProps.props, projectProps.props);
  return { props: props };
}

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
              <Link href='/docs/resume.pdf' className={'pl-1 pr-2 flex items-center'}>

                <span>Resume</span>

              </Link>
            </div>
          </div>
          <div className={'flex flex-wrap justify-center items-center gap-y-1'}>
            <div className={'flex-row items-center mx-1'}>
              <Link
                href='https://youtube.com/AbheeksTechAdventures'
                className={'px-2 flex items-center'}>

                <FaYoutube className={'mr-1'} />
                <span>YouTube</span>

              </Link>
            </div>
            <div className={'flex-row items-center mx-1'}>
              <Link href='https://github.com/abheekda1' className={'px-2 flex items-center'}>

                <FaGithub className={'mr-1'} />
                <span>GitHub</span>

              </Link>
            </div>
            <div className={'flex-row items-center mx-1'}>
              <Link
                href='https://linkedin.com/in/abheek-dhawan'
                className={'px-2 flex items-center'}>

                <FaLinkedin className={'mr-1'} />
                <span>LinkedIn</span>

              </Link>
            </div>
            <div className={'flex-row items-center mx-1'}>
              <a
                href='mailto:abheek.dhawan@yale.edu'
                className={'px-2 flex items-center'}
              >
                <FaEnvelope className={'mr-1'} />
                <span>Email</span>
              </a>
            </div>
          </div>
          <p>
            I like building software that people actually use, from tools for
            my fellow students to reverse-engineering game file formats to
            interactive visualizations that make tricky physics concepts click.
            Most recently, I worked as a research assistant at the Yale Quantum
            Institute, building visualizations to teach quantum computing.
            <br />
            <br />
            On the astrophysics side, I&apos;m interested in using computational
            methods to learn about the history of the cosmos: how it formed, how
            it developed, and where it may lead. As Carl Sagan put it, we
            aren&apos;t just observing the universe, we&apos;re a part of it, and
            that&apos;s a big part of why I find it so fascinating.
          </p>

          <div className={'not-prose mt-5 mb-5'}>
            <Header id={'experience'}>Experience</Header>
            <ExperienceList experience={experience} />
          </div>
          <div className={'not-prose mt-5 mb-5'}>
            <Header id={'projects'}>
              <Link href={'/projects'} className={'first-letter:text-current'}>
                Projects
              </Link>
            </Header>
            <ProjectList projects={projects} limit={3} descLimit={200} />
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
