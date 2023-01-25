import Link from 'next/link';
import { Metadata, getLanguageInfo, LanguageInfo } from '../../util/getProject';

export default function ProjectListElement({
  project,
  descLimit,
}: {
  project: Metadata;
  descLimit?: number;
}) {
  return (
    <div className={'block mb-5'}>
      {/* <div className={'text-gray-400 text-[0.6rem] select-none'}>
                <DynamicDate timestamp={article.timestamp} />
            </div>
            <p className={'text-gray-600 text-[0.6rem] select-none'}>{'['}{article.tags.join(', ')}{']'}</p> */}
      <Link href={project.link}>
        <a className='text-lg'>{project.name}</a>
      </Link>
      <div className='flex flex-row justify-left mb-2'>
        {project.languages?.slice(0, 10).map((language, idx) => {
          const languageInfo: LanguageInfo = getLanguageInfo(language);
          return (
            <div className='flex flex-row items-center mr-3' key={idx}>
              <span
                className={`flex-none w-4 h-4 shadow-inner rounded-sm mr-1`}
                style={{ backgroundColor: languageInfo.color }}
              ></span>
              <span className={'flex-auto h-6 align-baseline font-semibold'}>
                {languageInfo.name}
              </span>
            </div>
          );
        })}
      </div>
      <p className={'text-gray-600 text-base'}>
        {descLimit
          ? project.description.length > descLimit
            ? project.description.slice(0, descLimit - 3) + '...'
            : project.description
          : project.description}
      </p>
    </div>
  );
}
