import type { NextPage } from "next";
import Box from "../components/box";
import { Metadata } from "../components/articleLayout";
import { promises as fs } from "node:fs";
import path from "path";
import Link from "next/link";

export const getStaticProps = async () => {
  const articleFiles = await fs.readdir(process.cwd() + "\\pages\\blog");
  const data = new Array<Metadata>();
  const tags = new Set<string>();

  for (const file of articleFiles) {
    await import(`${__dirname}/blog/${file}`).then(
      ({ meta }: { meta: Metadata }) => {
        meta.slug = path.parse(file).name;
        data.push(meta);
        meta.tags.forEach((tag) => {
          tags.add(tag);
        });
      }
    );
  }

  return {
    props: {
      articles: data,
      tags: Array.from(tags),
    },
  };
};

const Blog = ({
  articles,
  tags,
}: {
  articles: Array<Metadata>;
  tags: Set<string>;
}) => {
  return (
    <Box>
      <>
        <h1>Articles</h1>
        {articles.map((article, idx) => {
          return (
            <div key={idx}>
              <Link href={article.slug || "#"}>
                <a>{article.title}</a>
              </Link>{" "}
              <span className={"text-gray-400 text-xs"}>
                {new Date(article.timestamp).toLocaleString().split(",")[0]}
              </span>
            </div>
          );
        })}
      </>
    </Box>
  );
};

export default Blog;
