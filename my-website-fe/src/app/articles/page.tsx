'use client'
import useFetch from "@/hook/useFetch";
import {getAllGroupedAndDecreasedByYear} from "@/service/articleService";
import React, {useEffect} from "react";
import {setArticles} from "@/lib/features/articles/articleSlice";
import ArticleYearGroup from "@/service/model/articleYearGroup";
import {Container, Flex, Text} from "@radix-ui/themes";
import Link from "next/link";
import {ArticlePreviewWrapper} from "@/components/article/ArticlePreviewWrapper";

const BlogPage = () => {
    const [loading, data] = useFetch(getAllGroupedAndDecreasedByYear, {});

    useEffect(() => {
        if (data){
            setArticles(data as ArticleYearGroup);
        }
    }, [])

    const renderArticles = () =>{
        return(
            <>
                <Container className="site-main-container site-margin-top site-margin-bottom" size="2">
                    <Flex display="flex" direction="column" gap="8">
                        <ul className="taxonomy grid grid-cols-3 gap-4 site-margin-bottom">
                            <li className="border-b border-[#525252]">
                                <Link href="#2023" className="flex flex-row justify-between">
                                    <strong className="taxonomy-articles-year antialiased font-bold text-xs">2023</strong>
                                    <Text as="span" className="taxonomy-articles-count antialiased" size="2" weight="regular">15</Text>
                                </Link>
                            </li>
                        </ul>
                        <ArticlePreviewWrapper articles={data as ArticleYearGroup}/>
                    </Flex>
                </Container>
            </>
        )
    };

    const listArticles = () => {
        return(
            <>
                {renderArticles()}
            </>
        )
    };

    return(
        <>
            {listArticles()}
        </>
    )
};

export default BlogPage;