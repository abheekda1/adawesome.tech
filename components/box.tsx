import { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import Nav from "./nav";
import Header from "./header";
import Subheading from "./subheading";
import Blockquote from "./blockquote";
import Image from "./image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Box({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto bg-gray-200 p-5 pb-1 pr-1 max-w-lg md:max-w-xl lg:max-w-2xl shadow-lg my-5 font-mono slashed-zero selection:bg-black selection:text-white">
      <div className="block pb-4 pr-4 border-b border-r border-gray-400">
        <Nav />
        <main className="m-3 p-3 border-t border-l border-gray-400">
          {children}
        </main>
      </div>
    </div>
  );
}
