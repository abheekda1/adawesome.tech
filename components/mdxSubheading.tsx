import { ReactNode } from "react";
import { FaLink } from "react-icons/fa";

export default function MDXSubheading({
  id,
  children,
  className,
}: {
  id?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <h2 id={id} className={`${className} font-semibold mb-2`}>
      <a className="inline-block text-sm" href={`#${id}`}>
        <FaLink className="m-1" />
      </a>{" "}
      {children}
    </h2>
  );
}
