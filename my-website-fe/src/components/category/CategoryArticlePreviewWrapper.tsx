import {Box, Grid, Heading} from "@radix-ui/themes";
import {useArticleStore} from "@/lib/articleStore";
import {CategoryArticlePreviewTitle} from "@/components/category/CategoryArticlePreviewTitle";
import {CategoryArticlePreviewBody} from "@/components/category/CategoryArticlePreviewBody";

export const CategoryArticlePreviewWrapper = () => {
    const articles = useArticleStore((state) => state.articlesGroupedByCategoryName);

    const renderArticles = () => {
        return (
            <>
                {
                    articles && Object.entries(articles).map(([categoryName, groupedArticles]) => (
                        <section id={categoryName} key={categoryName}>
                            <Heading as="h2" className="article-taxonomy-year" size="6" weight="bold" color="tomato"
                                     mb="6">
                                {categoryName}
                            </Heading>
                            <Grid className="articles site-margin-bottom" gap="2" columns="1">
                                {groupedArticles.map((article, index) => (
                                    <Box className="article-item" id={index.toString()} key={index}>
                                        <article className="article-archive-item flex flex-col mb-1">
                                            <CategoryArticlePreviewTitle title={article.attributes.title}/>
                                            <CategoryArticlePreviewBody
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