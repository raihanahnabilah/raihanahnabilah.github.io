import { FC } from "react";
import {Box, Heading} from "@chakra-ui/react";

const Title: FC<{
    title: string,
}> = (props) => {
    const {title} = props

    const finalTitle = title === "swe" ? "Programming Portfolio" : title === "timeline" ? "Education and Experience" : title === "featured" ? "Featured" : title === "pm" ? "UI Design Portfolio" : title === "hackathon" ? "Hackathon Portfolio" : null;

    return (
        <Box>
            <Heading as='h3' size='lg' textAlign='center'>{finalTitle}</Heading>
        </Box>
    );
};
export default Title;
