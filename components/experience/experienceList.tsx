import Link from 'next/link';
import { Experience } from '../../util/getExperience';

export default function ExperienceList({
  experience,
}: {
  experience: Array<Experience>;
}) {
  return (
    <div>
      {experience.map((item, idx) => {
        return (
          <div key={idx}>
            <div className={'block mb-5'}>
              {item.link ? (
                <Link href={item.link} className='text-lg'>
                  {item.organization}
                </Link>
              ) : (
                <span className='text-lg'>{item.organization}</span>
              )}
              <div className='flex flex-row flex-wrap justify-between mb-2'>
                <span className='font-semibold'>{item.role}</span>
                <span className='text-gray-500 text-sm'>{item.dates}</span>
              </div>
              <p className={'text-gray-600 text-base'}>{item.description}</p>
            </div>
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
          </div>
        );
      })}
    </div>
  );
}
