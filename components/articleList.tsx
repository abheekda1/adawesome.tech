import { Metadata } from "./articleLayout";
import ArticleListElement from "./articleListElement";

export default function ArticleList({ articles, limit }: { articles: Array<Metadata>, limit?: number }) {
    return (
        <div>
            {
                articles.slice(0, limit).map((article, idx) => {
                    return (
                        <ArticleListElement article={article} key={idx} />
                    );
                })
            }
        </div>
    )
}