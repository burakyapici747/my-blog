'use client'
import {Container, Flex, Grid, Heading, Text} from "@radix-ui/themes";
import Link from "next/link";
import useFetch from "@/hook/useFetch";
import {getAllGroupedByCategoryName} from "@/service/articleService";
import React from "react";
import {BaseResponseModel} from "@/service/model/baseResponseModel";
import {Article} from "@/service/model/article";
import {ArticlePreviewWrapper} from "@/components/article/ArticlePreviewWrapper";

const CategoriesPage = () => {
    const [loading, data] = useFetch(getAllGroupedByCategoryName, {});

    return(
        <>
            <Container className="site-main-container site-margin-top site-margin-bottom" size="2">
               <Flex display="flex" direction="column" gap="8">
                    <ul className="taxonomy grid grid-cols-3 gap-4 site-margin-bottom">
                        {
                            data && Object.entries(data).map(([categoryName, groupedArticles]) => (
                                <li className="border-b border-[#525252]">
                                    <Link href="" className="flex flex-row justify-between">
                                        <strong className="taxonomy-articles-year antialiased font-bold text-xs">{categoryName}</strong>
                                        <Text as="span" className="taxonomy-articles-count antialiased" size="2" weight="regular">
                                            {groupedArticles.length}
                                        </Text>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                   {
                       data && Object.entries(data).map(([categoryName, groupedArticles]) => (
                           <section id={categoryName} key={categoryName}>
                               <Heading as="h2" className="article-taxonomy-year" size="6" weight="bold" color="tomato" mb="6">
                                   {categoryName}
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
}

export default CategoriesPage;