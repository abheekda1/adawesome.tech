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
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
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
  tags,
}: {
  articles: Array<ArticleMetadata>;
  projects: Array<ProjectMetadata>;
  tags: Set<string>;
}) => {
  return (
    <div>
      <Layout title={'Home'}>
        <div className='max-w-none prose'>
          <p>
            Hey there! I&apos;m Abheek, a self-proclaimed developer and astrophysicist.
          </p>
          <div className={'flex justify-center items-center mb-2'}>
            <GrDocumentText className={'ml-1'} />
            <div className={'flex-row items-center mx-1'}>
              <Link href='/docs/resume.pdf'>
                <a className={'pl-1 pr-2 flex items-center'}>
                  <span>Resume</span>
                </a>
              </Link>
            </div>
          </div>
          <div className={'flex justify-center items-center'}>
            <div className={'flex-row items-center mx-1'}>
              <Link href='https://youtube.com/AbheeksTechAdventures'>
                <a className={'px-2 flex items-center'}>
                  <FaYoutube className={'mr-1'} />
                  <span>YouTube</span>
                </a>
              </Link>
            </div>
            <div className={'flex-row items-center mx-1'}>
              <Link href='https://github.com/abheekda1'>
                <a className={'px-2 flex items-center'}>
                  <FaGithub className={'mr-1'} />
                  <span>GitHub</span>
                </a>
              </Link>
            </div>
            <div className={'flex-row items-center mx-1'}>
              <Link href='https://linkedin.com/in/abheek-dhawan'>
                <a className={'px-2 flex items-center'}>
                  <FaLinkedin className={'mr-1'} />
                  <span>LinkedIn</span>
                </a>
              </Link>
            </div>
          </div>
          <p>
            I am currently intent on learning everything there is to learn about many interesting
            technology-related topics. These include, but are not limited to:
            programming languages such as Go, C++, and TypeScript; the workings
            of OSes on a software level as well as the hardware counterpart; and
            finally the inner workings of different software, games, and other
            media and reverse engineering them. In addition, I run a YouTube
            channel where I post tech videos. I hope this website will serve as
            a hub for my many different endeavors and will allow others to
            follow along or learn something.
            <br /><br />
            I am also delving into the world of astrophysics. I enjoy learning about
            the universe from a theoretical standpoint as well as a philosophical one,
            both learning what makes it up and why I&apos;m here to learn that. The universe
            is particularly fascinating, as Carl Sagan once put it, because we are not just
            observing it but rather a part of it. I hope to pursue astrophysics in the future by
            utilizing computational methods to learn more about the history of the cosmos,
            how it developed, and where it may lead us.
          </p>

          <div className={'not-prose mt-5 mb-5'}>
            <Header id={'blog'}>
              <Link href={'/blog'}>
                <a className={'first-letter:text-current'}>Blog</a>
              </Link>
            </Header>
            <Subheading id={'latest-articles'}>Latest articles:</Subheading>
            <ArticleList articles={articles} limit={3} descLimit={200} />
          </div>
          <div className={'not-prose mt-5 mb-5'}>
            <Header id={'projects'}>
              <Link href={'/projects'}>
                <a className={'first-letter:text-current'}>Projects</a>
              </Link>
            </Header>
            <ProjectList projects={projects} limit={3} descLimit={100} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
