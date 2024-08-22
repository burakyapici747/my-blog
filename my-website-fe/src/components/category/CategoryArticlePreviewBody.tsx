import {Flex, Text} from "@radix-ui/themes";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";
interface CategoryArticlePreviewBodyProps{
    content: string,
    readingTime: number,
}

export const CategoryArticlePreviewBody = ({content, readingTime}: CategoryArticlePreviewBodyProps) => {
    const deneme = "dede";
    return (
        <>
            <Flex className="" display="flex" direction="column" gap="2">
                <Flex className="flex flex-row gap-1" display="flex" direction="row" gap="2"
                      align="center">
                    <FontAwesomeIcon className="size-3" icon={faClock}/>
                    <Flex className="" display="flex" direction="row" gap="2">
                        <small className="text-xs font-light antialiased">{(readingTime) ? readingTime : 0}</small>
                    </Flex>
                </Flex>
            </Flex>
            <Text as="p" size="2" className="antialiased font-light article-previewContent">
                {(content) ? content : "boş content"}
            </Text>
        </>
    )
};