import {Box, Icon, Text, Link} from "@chakra-ui/react";
import {FaGithub, FaLinkedin, FaMedium, FaTwitter} from "react-icons/all";

const Footer = () => {
    return (
        <>
        <Box className="footer">
            <Link href="https://github.com/raihanahnabilah/" isExternal>
                <Icon as={FaGithub} w={8} h={8}/>
            </Link>
            <Link href="https://www.linkedin.com/in/hanabilaf/" isExternal>
                <Icon as={FaLinkedin} w={8} h={8}/>
            </Link>
            <Link href="https://twitter.com/hanabilaf" isExternal>
                <Icon as={FaTwitter} w={8} h={8}/>
            </Link>
            <Link href="https://heyhana.medium.com/" isExternal>
                <Icon as={FaMedium} w={8} h={8}/>
            </Link>
        </Box>
            <Box className="credits">
                <Text>
                    Created by <Link href="raihanahnabilah.github.io" isExternal>Hana Nabilah Fatinah</Link> with <Link href="https://reactjs.org/" isExternal>ReactJS</Link> and <Link href="https://chakra-ui.com/" isExternal>ChakraUI</Link>.
                </Text>
            </Box>
        </>
    )
}

export default Footer;