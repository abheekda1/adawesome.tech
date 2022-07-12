import classNames from 'classnames';
import { useState } from 'react';
import { FaCamera, FaLock, FaUnlock } from 'react-icons/fa';

export default function DropdownImage({
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
        className={classNames({
          'bg-black text-white': isHovered || isClicked,
        })}
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
      <div className={'not-prose'}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          src={src}
          title={title}
          alt={alt}
          className={classNames(
            className,
            {
              'origin-bottom-left transition-all h-auto':
                isHovered && !isClicked,
            },
            { 'h-0': !isClicked && !isHovered }
          )}
        />
      </div>
    </>
  );
}
