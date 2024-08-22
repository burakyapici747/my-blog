import {Box, Grid, Heading} from "@radix-ui/themes";
import {ArticlePreviewTitle} from "@/components/article/ArticlePreviewTitle";
import {ArticlePreviewBody} from "@/components/article/ArticlePreviewBody";
import {useArticleStore} from "@/lib/articleStore";

export const ArticlePreviewWrapper = () => {
    const articles = useArticleStore((state) => state.articlesGroupedByYear);

    const renderArticles = () => {
        return (
            <>
                {
                    articles && Object.entries(articles).map(([year, groupedArticles]) => (
                        <section id={year} key={year}>
                            <Heading as="h2" className="article-taxonomy-year" size="6" weight="bold" color="tomato"
                                     mb="6">
                                {year}
                            </Heading>
                            <Grid className="articles site-margin-bottom" gap="2" columns="1">
                                {groupedArticles.map((article, index) => (
                                    <Box className="article-item" id={index.toString()} key={index}>
                                        <article className="article-archive-item flex flex-col mb-1">
                                            <ArticlePreviewTitle title={article.attributes.title}/>
                                            <ArticlePreviewBody
                                                content={article.attributes.content}
                                                readingTime={article.attributes.readingTime}
                                            />
                                        </article>
                                    </Box>
                                ))}
                            </Grid>
                        </section>
                    ))
                }
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