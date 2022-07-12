import { ReactNode } from 'react';

export default function Header({
  id,
  children,
  className,
}: {
  id?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <>
      <div className='flex flex-row space-x-4 items-start mb-3'>
        <h1 className='text-center m-auto flex'>
          <a className='mt-auto' href={`#${id}`}>
            #
          </a>
        </h1>
        <h1
          id={id}
          className={`${className || ''} m-auto font-extrabold flex grow`}
        >
          {children}
        </h1>
      </div>
    </>
  );
}
