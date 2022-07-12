import { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import Nav from "./nav";
import MDXHeader from "./mdxHeader";
import MDXSubheading from "./mdxSubheading";
import MDXBlockquote from "./mdxBlockquote";
import MDXImage from "./mdxImage";

export default function ArticleLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto bg-gray-200 p-5 pb-1 pr-1 max-w-lg md:max-w-xl lg:max-w-2xl shadow-lg my-5 font-mono slashed-zero selection:bg-black selection:text-white">
      <div className="block pb-4 pr-4 border-b border-r border-gray-400">
        <Nav />
        <article className="m-3 p-3 border-t border-l border-gray-400 prose">
          <MDXProvider
            components={{
              h1: (props) => <MDXHeader {...props} />,
              h2: (props) => <MDXSubheading {...props} />,
              blockquote: (props) => <MDXBlockquote {...props} />,
              img: (props) => <MDXImage {...props} />,
            }}
          >
            {children}
          </MDXProvider>
        </article>
      </div>
    </div>
  );
}
