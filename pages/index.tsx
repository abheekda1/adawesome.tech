import type { NextPage } from 'next';
import Link from 'next/link';
import Box from '../components/box';
import DropdownImage from '../components/dropdownImage';

const Home: NextPage = () => {
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
        </div>
      </Box>
    </div>
  );
};

export default Home;
