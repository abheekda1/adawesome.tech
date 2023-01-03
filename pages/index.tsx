import Link from 'next/link';
import Header from '../components/header';
import Subheading from '../components/subheading';
import { Metadata } from '../components/articleLayout';
import getArticles from '../util/getArticles';
import Layout from '../components/layout';
import ArticleList from '../components/articleList';

export const getStaticProps = getArticles;

const Home = ({
  articles,
  tags,
}: {
  articles: Array<Metadata>;
  tags: Set<string>;
}) => {
  return (
    <div>
      <Layout title={'Home'}>
        <div className='prose'>
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

          <div className={'not-prose mt-5'}>
            <Header id={'blog'}>
              <Link href={'/blog'}>
                <a className={'first-letter:text-current'}>Blog</a>
              </Link>
            </Header>
            <Subheading id={'latest-articles'}>Latest articles:</Subheading>
            <ArticleList articles={articles} limit={3} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
