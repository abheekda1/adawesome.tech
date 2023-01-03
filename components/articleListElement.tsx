import Link from "next/link";
import { Metadata } from "./articleLayout";
import dynamic from "next/dynamic";

export default function ArticleListElement({ article }: { article: Metadata }) {
    const DynamicDate = dynamic(() => import('../components/dynamicDate'), {
        ssr: false,
    });

    return (
        <div className={'block mb-3'}>
            <div className={'text-gray-400 text-[0.6rem] select-none'}>
                <DynamicDate timestamp={article.timestamp} />
            </div>
            <p className={'text-gray-600 text-[0.6rem] select-none'}>{'['}{article.tags.join(', ')}{']'}</p>
            <Link href={`/blog/${article.slug || ''}`}>
                <a>{article.title}</a>
            </Link>
        </div>
    )
}