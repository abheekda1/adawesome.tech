import { ReactNode, useRef, useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import classNames from 'classnames';

export default function Pre({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const [isHovered, setHovered] = useState(false);
  const codeText = useRef(null);

  return (
    <div
      className={'relative'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <pre className={className}>
        <button
          className={classNames('absolute top-3 right-2 text-xl', {
            hidden: !isHovered,
          })}
          onClick={() =>
            navigator.clipboard.writeText((codeText.current as any)?.innerText)
          }
        >
          <FaCopy />
        </button>
        <div ref={codeText}>{children}</div>
      </pre>
    </div>
  );
}
