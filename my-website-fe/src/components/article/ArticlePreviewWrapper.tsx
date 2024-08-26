import {Box, Grid} from "@radix-ui/themes";
import {ArticlePreviewTitle} from "@/components/article/ArticlePreviewTitle";
import {ArticlePreviewBody} from "@/components/article/ArticlePreviewBody";
import {BaseResponseModel} from "@/service/model/baseResponseModel";
import {Article} from "@/service/model/article";
interface ArticlePreviewProps{
    article: BaseResponseModel<Article>,
    index: number
}

export const ArticlePreviewWrapper = ({article, index}: ArticlePreviewProps) => {

    const renderArticles = () => {
        return (
            <>
                <Box className="article-item">
                    <article className="article-archive-item flex flex-col mb-1">
                        <ArticlePreviewTitle title={article.attributes.title}/>
                        <ArticlePreviewBody
                            content={article.attributes.content}
                            readingTime={article.attributes.readingTime}
                        />
                    </article>
                </Box>
            </>
        )
    };

    const listArticles = () => {
        return (
            <>
                {renderArticles()}
            </>
        )
    };

    return (
        <>
            {listArticles()}
        </>
    )
};