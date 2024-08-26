'use client'
import {Avatar, Box, Container, Flex, Grid, Heading, Text} from "@radix-ui/themes";
import {Noto_Sans_Georgian} from "@next/font/google"
import {ArticlePreviewWrapper} from "@/components/article/ArticlePreviewWrapper";
import React from "react";
import useFetch from "@/hook/useFetch";
import {getRecentByLimit} from "@/service/articleService";

const roboto = Noto_Sans_Georgian({
    subsets: ['latin-ext'],
    style: "normal",
    weight: "600"
});

function Page() {
    const [loading, data] = useFetch(getRecentByLimit, {});
    debugger;
    return (
        <>
            <Box
                className={`welcome-message`}
                py="7"
                style={{borderRadius: 'var(--radius-3)' }}
                mb="8"
            >
                <Container size="2">
                    <h1 className={`welcome-message-title font-serif`} style={{fontFamily: "georgia", color: "#333", fontSize: "40px"}}>
                        Hello there...
                    </h1>
                    <Text
                        style={{color: '#333333'}}
                        className="welcome-message-content"
                        size="2"
                        weight="regular"
                        align="left"
                        as="p"
                    >
                        Welcome to my blog.
                        The content you will find here mostly consists of notes that I have taken for myself.
                        Without adhering to a specific category, I mainly share reviews of the books I've read, my experiences in the field of software, and occasionally writings on various other topics.
                        I hope you find the content here as interesting and useful as I do.
                    </Text>
                </Container>
            </Box>

            <Container className="site-main-container" size="2">
                <section>
                    <Heading as="h2" className="article-taxonomy-year" size="6" weight="bold" color="tomato" mb="6">
                        Last Articles
                    </Heading>
                    <Grid className="articles site-margin-bottom" gap="2" columns="1">
                        {
                            data && Object.values(data).map((articles, index) => {
                                return <ArticlePreviewWrapper key={index} article={articles} index={index}/>
                            })
                        }
                    </Grid>
                </section>
            </Container>
        </>
    );
}

export default Page;