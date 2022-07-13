import type { NextPage } from 'next';
import Link from 'next/link';
import Box from '../components/box';
import DropdownImage from '../components/dropdownImage';
import Header from '../components/header';
import Subheading from '../components/subheading';
import { Metadata } from '../components/articleLayout';
import getArticles from '../util/getArticles';

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
      <Box>
        <div className='prose'>
          <p>
            I&apos;m Abheek, and I run a YouTube channel where I post tech
            videos! On this website, I put up articles and code for you guys to
            follow along. I love working with computers—particularly servers—and
            open-source software. On my channel, I often show cool Linux tips
            and tricks, interesting GitHub software, and useful server
            applications. Hope you guys enjoy!
          </p>

          <p>
            <span>
              <Link href='https://youtube.com/AbheeksTechAdventures'>
                <a>YouTube</a>
              </Link>
            </span>{' '}
            <span>
              <Link href='https://github.com/ADawesomeguy'>
                <a>GitHub</a>
              </Link>
            </span>
          </p>

          <DropdownImage
            src='https://fllstl.codes/_next/image?url=%2Fimg%2Fteam%2Fabheek-dhawan.png&w=1920&q=75'
            title='This is me!'
            alt={'Picture of Abheek'}
          />

          <div className={'not-prose mt-5'}>
            <Header id={'blog'}>
              <Link href={'/blog'}>
                <a className={'first-letter:text-current'}>Blog</a>
              </Link>
            </Header>
            <Subheading id={'latest-articles'}>Latest articles:</Subheading>
            {articles.slice(0, 3).map((article, idx) => {
              return (
                <div key={idx}>
                  <Link href={`/blog/${article.slug || ''}`}>
                    <a>{article.title}</a>
                  </Link>{' '}
                  <span className={'text-gray-400 text-xs'}>
                    {new Date(article.timestamp).toLocaleString().split(',')[0]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Home;
