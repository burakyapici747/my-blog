import Link from "next/link";

interface CategoryPreviewArticleTitleProps{
    title: string,
}

export const CategoryArticlePreviewTitle = ({title}: CategoryPreviewArticleTitleProps) => {
    return(
        <>
            <Link href="/articles/dsadsa"
                  className="article-title antialiased text-xl underline-offset-2 font-semibold truncate mb-1 hover:underline"
                  style={{fontFamily: 'georgiai'}}
            >
                {(title) ? title : "Test Title"}
            </Link>
        </>
    )
}