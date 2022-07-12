import classNames from 'classnames';
import { useState } from 'react';
import { FaCamera, FaLock, FaUnlock } from 'react-icons/fa';

export default function Image({
  className,
  alt,
  title,
  src,
}: {
  className?: string;
  alt?: string;
  title?: string;
  src?: string;
}) {
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setClicked] = useState(false);

  return (
    <>
      <a
        className='underline inline-block'
        onClick={() => {
          setClicked(!isClicked);
          setHovered(false);
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <FaCamera className='inline-block mx-1' />
        {`${title || ''}`}
        <FaLock
          className={classNames('text-xs', 'm-1', 'inline-block', {
            hidden: !isClicked,
          })}
        />
        <FaUnlock
          className={classNames('text-xs', 'm-1', 'inline-block', {
            hidden: isClicked,
          })}
        />
      </a>
      <div className='not-prose'>
        <img
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          src={src}
          title={title}
          alt={alt}
          className={classNames(
            className,
            'not-prose',
            {
              'origin-bottom-left transition-all h-auto': isHovered && !isClicked,
            },
            { 'h-0': !isClicked && !isHovered }
          )}
        />
        </div>
    </>
  );
}
