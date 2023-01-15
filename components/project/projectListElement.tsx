import Link from 'next/link';
import { Metadata } from '../../util/getProject';

export default function ProjectListElement({
  project,
  descLimit,
}: {
  project: Metadata;
  descLimit?: number;
}) {
  return (
    <div className={'block mb-3'}>
      {/* <div className={'text-gray-400 text-[0.6rem] select-none'}>
                <DynamicDate timestamp={article.timestamp} />
            </div>
            <p className={'text-gray-600 text-[0.6rem] select-none'}>{'['}{article.tags.join(', ')}{']'}</p> */}
      <Link href={project.link}>
        <a>{project.name}</a>
      </Link>
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
