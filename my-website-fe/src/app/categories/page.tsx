'use client'
import {Container, Flex, Text} from "@radix-ui/themes";
import Link from "next/link";
import {CategoryArticlePreviewWrapper} from "@/components/category/CategoryArticlePreviewWrapper";
import useFetch from "@/hook/useFetch";
import {getAllGroupedByCategoryName} from "@/service/articleService";
import {useArticleStore} from "@/lib/articleStore";
import React, {useEffect} from "react";
import ArticleCategoryNameGroup from "@/service/model/articleCategoryNameGroup";

const CategoriesPage = () => {
    const [loading, data] = useFetch(getAllGroupedByCategoryName, {});
    const setArticlesGroupedByCategoryName = useArticleStore((state) => state.setArticlesGroupedByCategoryName);

    useEffect(() => {
        if(data){
            setArticlesGroupedByCategoryName(data as ArticleCategoryNameGroup)
        }
    }, [data]);

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
                   <CategoryArticlePreviewWrapper/>
               </Flex>
           </Container>
        </>
    )
}

export default CategoriesPage;