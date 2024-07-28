import Image from "next/image";
import Link from "next/link";
import {Container, Flex, Grid, Heading, Text} from "@radix-ui/themes";

const ProjectsPage = () => {
    return(
        <>
            <Container size="2">
                <Heading as="h1" weight="regular" size="6" mb="4">Projects</Heading>
                <Grid display="grid" columns="2" gap="7">
                    <Flex className="project" display="flex" direction="column" gap="2">
                        <Image src="/img/project.webp" alt="" width="1280" height="720" className="rounded-xl"/>
                        <Link href="" className="project-detail flex flex-col">
                            <Heading as="h6" size="3" weight="bold" className="project-title underline underline-offset-4 cursor-pointer">Game
                                of life</Heading>
                            <Text className="antialiased truncate" size="2" weight="regular">
                                Selamlar millet bu benim projem ben proeje yapmayı çok severim çünkü bu beni
                                geliştirir
                            </Text>
                            <Flex display="flex" direction="row" gap="2" align="center">
                                <Text as="span" className="programming-language-color rounded-full size-2.5 bg-amber-100"></Text>
                                <Text as="span" className="programming-language-name antialiased font-extralight text-xs">Java</Text>
                            </Flex>
                        </Link>
                    </Flex>
                </Grid>
            </Container>
        </>
    )
};

export default ProjectsPage;