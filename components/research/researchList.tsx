import Link from 'next/link';
import { Research } from '../../util/getResearch';

export default function ResearchList({
  research,
}: {
  research: Array<Research>;
}) {
  return (
    <div>
      {research.map((item, idx) => {
        return (
          <div key={idx}>
            <div className={'block mb-5'}>
              <span className='text-lg'>{item.title}</span>
              <div className='flex flex-row flex-wrap justify-between mb-2'>
                <span className='font-semibold'>{item.context}</span>
                <span className='text-gray-500 text-sm'>{item.dates}</span>
              </div>
              {item.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  loading='lazy'
                  className='w-full h-auto mb-3 border border-gray-400'
                />
              )}
              <p className={'text-gray-600 text-base'}>{item.description}</p>
              {item.link && (
                <Link href={item.link.href} className='underline text-sm'>
                  {item.link.label}
                </Link>
              )}
            </div>
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
          </div>
        );
      })}
    </div>
  );
}
