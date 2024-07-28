import { Box, Container, Heading, Text } from "@radix-ui/themes";
import { FC } from "react";

interface pageProps {
  params: { articleId: String };
}

const ArticleDetailPage: FC<pageProps> = ({ params }) => {
  return (
    <> 
    <Container></Container> 
      <Container className="site-main-container" size="3">
        <article>
          <Box>
            <Heading
              className="article-content-title"
              as="h1"
              size="8"
              weight="regular"
              trim="normal"
              mb="5"
            >
              Hello there
            </Heading>
            <Text
              style={{ color: "#333333" }}
              className="welcome-message-content"
              size="2"
              weight="regular"
              align="left"
              as="p"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </Box>
        </article>
      </Container>
    </>
  );
};

export default ArticleDetailPage;
