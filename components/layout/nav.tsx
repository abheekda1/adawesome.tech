import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export default function Nav() {
  const router = useRouter();

  return (
    <div>
      {(() => {
        const paths: Array<ReactNode> = [
          <span key='0'>
            <Link href='/'>
              <a>~</a>
            </Link>
          </span>,
        ];
        let tempFull = '/';
        let tempLocal = '';
        for (let i = 1; i < router.pathname.length; i++) {
          const char = router.pathname[i];
          tempFull += char;
          if (char === '/' || i === router.pathname.length - 1) {
            if (char !== '/') tempLocal += char;
            paths.push(
              <span key={(i + 1).toString()}>
                <Link href={tempFull}>
                  <a>{tempLocal}</a>
                </Link>
              </span>
            );
            tempLocal = '';
            continue;
          }
          tempLocal += char;
        }
        return paths.map((p, idx) => {
          return <span key={idx}>{p} / </span>;
        });
      })()}
    </div>
  );
}
