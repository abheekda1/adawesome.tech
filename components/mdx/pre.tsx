import { ReactNode, useRef, useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';
import classNames from 'classnames';

export default function Pre({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const [isHovered, setHovered] = useState(false);
  const [justCopied, setJustCopied] = useState(false);
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
          onClick={() => {
            navigator.clipboard.writeText((codeText.current as any)?.innerText)
            setJustCopied(true);
            setTimeout(() => {
              setJustCopied(false);
            }, 3000);
          }
          }
        >
          {justCopied
            ? <FaCheck style={{ color: "lightseagreen" }} />
            : <FaCopy />
          }
        </button>
        <div ref={codeText}>{children}</div>
      </pre>
    </div>
  );
}
