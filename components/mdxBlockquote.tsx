import { ReactNode } from "react";

export default function MDXBlockquote({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${className} pl-3 border-l-2 border-l-gray-400 opacity-60`}
    >
      {children}
    </div>
  );
}
