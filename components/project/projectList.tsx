import Link from 'next/link';
import { Metadata } from '../../util/getProject';
import ProjectListElement from './projectListElement';

export default function ProjectList({
  projects,
  limit,
  descLimit,
}: {
  projects: Array<Metadata>;
  limit?: number;
  descLimit?: number;
}) {
  return (
    <div>
      {projects.slice(0, limit).map((project, idx) => {
        return (
          <ProjectListElement
            project={project}
            descLimit={descLimit}
            key={idx}
          />
        );
      })}
      {projects.length > (limit || Infinity) && (
        <div
          className={
            'block text-center p-1 my-2 border-solid border-2 border-black'
          }
        >
          <Link href='/projects'>
            <a className={'underline'}>View more projects</a>
          </Link>
        </div>
      )}
    </div>
  );
}
