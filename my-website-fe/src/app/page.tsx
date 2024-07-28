import {Avatar, Box, Container, Flex, Heading, Text} from "@radix-ui/themes";
import {GitHubLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";
import {Noto_Sans_Georgian} from "@next/font/google"

const roboto = Noto_Sans_Georgian({
    subsets: ['latin-ext'],
    style: "normal",
    weight: "600"
});

function Page() {
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
                        Hello there
                    </h1>
                    <Text
                        style={{color: '#333333'}}
                        className="welcome-message-content"
                        size="2"
                        weight="regular"
                        align="left"
                        as="p"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                </Container>
            </Box>

            <Container className="site-main-container" size="2">
                <Flex display="flex" direction="column" gap="9">
                    <Flex className="developer-info" display="flex" direction="row" align="start" justify="between">
                        <Box>
                            <Flex display="flex" direction="column" gap="6" justify="between">
                                <Flex className="developer-info-informations" direction="column" gap="2">
                                    <Heading className="developer-info-name" weight="regular" size="8" as="h6">
                                        Burak Yapıcı
                                    </Heading>
                                    <Text className="developer-info-title" size="3" weight="light" align="left">
                                        Backend Developer
                                    </Text>
                                </Flex>
                                <Flex display="flex" direction="row" gap="3">
                                    <GitHubLogoIcon/>
                                    <LinkedInLogoIcon/>
                                </Flex>
                            </Flex>
                        </Box>
                        <Box>
                            <Avatar src="/img/profile.png" fallback="A" radius="full" variant="soft" size="7"/>
                        </Box>
                    </Flex>

                    <Flex className="bio" display="flex" direction="column" gap="2">
                        <Heading className="" as="h1" size="6" weight="regular">Bio</Heading>
                        <Flex className="" display="flex" direction="column" gap="2">
                            <Flex className="" display="flex" direction="row" gap="3">
                                <Text as="span" weight="bold" size="4">1997</Text>
                                <Text as="p" weight="regular" size="3">Born in Osaka (大阪), Japan.</Text>
                            </Flex>
                        </Flex>
                        <Flex className="" display="flex" direction="column" gap="2">
                            <Flex className="" display="flex" direction="row" gap="3">
                                <Text as="span" weight="bold" size="4">1997</Text>
                                <Text as="p" weight="regular" size="3">Completed the Master's Program in the Graduate School of Information Science at Nara Institute of Science and Technology (奈良先端科学技術大学院大学情報科学研究科修士課程)</Text>
                            </Flex>
                        </Flex>
                        <Flex className="" display="flex" direction="column" gap="2">
                            <Flex className="" display="flex" direction="row" gap="3">
                                <Text as="span" weight="bold" size="4">1997</Text>
                                <Text as="p" weight="regular" size="3">Worked at Yahoo! Japan (ヤフー株式会社入社)</Text>
                            </Flex>
                        </Flex>
                        <Flex className="" display="flex" direction="column" gap="2">
                            <Flex className="" display="flex" direction="row" gap="3">
                                <Text as="span" weight="bold" size="4">1997</Text>
                                <Text as="p" weight="regular" size="3">Working as a freelancer</Text>
                            </Flex>
                        </Flex>
                    </Flex>


                    <Box className="hobbies-info" mb="8">
                        <Heading weight="bold" as="h3" size="5">I ♥</Heading>
                        <Flex display="flex" direction="column">
                            <Text as="p">🏊‍ swimming</Text>
                            <Text as="p">🏕️ camping</Text>
                            <Text as="p">🎿 skiing</Text>
                            <Text as="p">🕹️ computer games</Text>
                        </Flex>
                    </Box>

                </Flex>
            </Container>
        </>
    );
}

export default Page;