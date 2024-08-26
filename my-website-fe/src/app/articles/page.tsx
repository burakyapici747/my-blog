'use client'
import useFetch from "@/hook/useFetch";
import {getAllGroupedAndDecreasedByYear} from "@/service/articleService";
import React from "react";
import {Container, Flex, Grid, Heading, Text} from "@radix-ui/themes";
import {ArticlePreviewWrapper} from "@/components/article/ArticlePreviewWrapper";
import Link from "next/link";
import {BaseResponseModel} from "@/service/model/baseResponseModel";
import {Article} from "@/service/model/article";
const BlogPage = () => {
    const [loading, data] = useFetch(getAllGroupedAndDecreasedByYear, {});

    const renderArticles = () => {
        return (
            <>
                <Container className="site-main-container site-margin-top site-margin-bottom" size="2">
                    <Flex display="flex" direction="column" gap="8">
                        <ul className="taxonomy grid grid-cols-3 gap-4 site-margin-bottom">
                            {
                                data && Object.entries(data).map(([year, groupedArticles]) => (
                                    <li className="border-b border-[#525252]" id={year} key={year}>
                                        <Link href={`#${year}`} className="flex flex-row justify-between">
                                            <strong className="taxonomy-articles-year antialiased font-bold text-xs">
                                                {year}
                                            </strong>
                                            <Text as="span" className="taxonomy-articles-count antialiased" size="2"
                                                  weight="regular">
                                                {groupedArticles.length}
                                            </Text>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        {
                            data && Object.entries(data).map(([year, groupedArticles]) => (
                                <section id={year} key={year}>
                                    <Heading as="h2" className="article-taxonomy-year" size="6" weight="bold" color="tomato" mb="6">
                                        {year}
                                    </Heading>
                                    <Grid className="articles site-margin-bottom" gap="2" columns="1">
                                        {
                                            groupedArticles.map((articles: BaseResponseModel<Article>, index: number) => {
                                                return <ArticlePreviewWrapper key={index} article={articles} index={index}/>
                                            })
                                        }
                                    </Grid>
                                </section>
                            ))
                        }
                    </Flex>
                </Container>
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

export default BlogPage;