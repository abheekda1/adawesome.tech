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

export async function getStaticProps() {
  let props = {};
  let articleProps = await getArticles();
  let projectProps = await getProject();
  Object.assign(props, articleProps.props, projectProps.props);
  return {props: props};
};

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
            I&apos;m Abheek, a passionate developer intent on learning
            everything there is to learn about many interesting
            technology-related topics. These include, but are not limited to:
            programming languages such as Go, C++, and TypeScript; the workings
            of OSes on a software level as well as the hardware counterpart; and
            finally the inner workings of different software, games, and other
            media and reverse engineering them. In addition, I run a YouTube
            channel where I post tech videos. I hope this website will serve as
            a hub for my many different endeavors and will allow for others to
            follow along or learn something.
          </p>

          <p>
            <span>
              <Link href='https://youtube.com/AbheeksTechAdventures'>
                <a>YouTube</a>
              </Link>
            </span>{' '}
            <span>
              <Link href='https://github.com/abheekda1'>
                <a>GitHub</a>
              </Link>
            </span>
          </p>

          {/*<DropdownImage
            src='https://fllstl.codes/_next/image?url=%2Fimg%2Fteam%2Fabheek-dhawan.png&w=1920&q=75'
            title='This is me!'
            alt={'Picture of Abheek'}
          />*/}

          <div className={'not-prose mt-5 mb-5'}>
            <Header id={'blog'}>
              <Link href={'/blog'}>
                <a className={'first-letter:text-current'}>Blog</a>
              </Link>
            </Header>
            <Subheading id={'latest-articles'}>Latest articles:</Subheading>
            <ArticleList articles={articles} limit={2} />
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
