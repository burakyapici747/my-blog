'use client'
import Link from "next/link";
import {Box, Container, Flex, Grid, Heading, Text} from "@radix-ui/themes";

import {ArticlePreviewWrapper} from "@/components/article/ArticlePreviewWrapper";

const BlogPage = () => {
   return (
       <>
           <Container className="site-main-container site-margin-top site-margin-bottom" size="2">
               <Flex display="flex" direction="column" gap="8">
                   <ul className="taxonomy grid grid-cols-3 gap-4 site-margin-bottom">
                       <li className="border-b border-[#525252]">
                           <Link href="#2023" className="flex flex-row justify-between">
                               <strong className="taxonomy-articles-year antialiased font-bold text-xs">2023</strong>
                               <Text as="span" className="taxonomy-articles-count antialiased" size="2"
                                     weight="regular">15</Text>
                           </Link>
                       </li>
                       <li className="border-b border-[#525252]">
                           <Link href="#2024" className="flex flex-row justify-between">
                               <strong className="taxonomy-articles-year antialiased font-bold text-xs">2024</strong>
                               <Text as="span" className="taxonomy-articles-count antialiased" size="2"
                                     weight="regular">15</Text>
                           </Link>
                       </li>
                   </ul>
                   <ArticlePreviewWrapper/>
               </Flex>
           </Container>
       </>
   )
};

export default BlogPage;