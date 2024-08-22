'use client'
import useFetch from "@/hook/useFetch";
import {getAllGroupedAndDecreasedByYear} from "@/service/articleService";
import React, {useEffect} from "react";
import ArticleYearGroup from "@/service/model/articleYearGroup";
import {Container, Flex, Text} from "@radix-ui/themes";
import {ArticlePreviewWrapper} from "@/components/article/ArticlePreviewWrapper";
import {useArticleStore} from "@/lib/articleStore";
import Link from "next/link";
const BlogPage = () => {
    const [loading, data] = useFetch(getAllGroupedAndDecreasedByYear, {});
    const setArticlesGroupedByYear = useArticleStore((state) => state.setArticlesGroupedByYear);

    useEffect(() => {
        if (data){
            setArticlesGroupedByYear(data as ArticleYearGroup);
        }
    }, [data])

    const renderArticles = () =>{
        return(
            <>
                <Container className="site-main-container site-margin-top site-margin-bottom" size="2">
                    <Flex display="flex" direction="column" gap="8">
                        <ul className="taxonomy grid grid-cols-3 gap-4 site-margin-bottom">
                            {
                                data && Object.entries(data).map(([year, groupedArticles]) => (
                                    <li className="border-b border-[#525252]">
                                        <Link href={`#${year}`} className="flex flex-row justify-between">
                                            <strong className="taxonomy-articles-year antialiased font-bold text-xs">{year}</strong>
                                            <Text as="span" className="taxonomy-articles-count antialiased" size="2" weight="regular">
                                                {groupedArticles.length}
                                            </Text>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <ArticlePreviewWrapper/>
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