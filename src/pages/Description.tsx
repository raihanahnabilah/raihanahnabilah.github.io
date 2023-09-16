import * as React from "react";
import {Box, Heading, Text, Highlight, Button, Link} from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react';
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/all";
import { EmailIcon } from '@chakra-ui/icons';

const Description = () => {
    return (
        <Box className="description">
            <Heading as='h3' size='lg' textAlign='center' paddingBottom='1em'>
                {/*<Highlight*/}
                {/*    query='Hana'*/}
                {/*    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}*/}
                {/*>*/}
                    Hi, I am Hana 👋
                {/*</Highlight>*/}
            </Heading>
            <Text marginLeft='4em' marginRight='4em'>
            I am a final year computer science student at Yale-NUS College 
            with a wide range of experience in tech industry, starting from Data Analytics, 
            UI/UX Design, Product Management, to Software Engineering (Full-Stack). 
            </Text>
            <Link href="https://github.com/raihanahnabilah/" isExternal>
                <Button marginTop="1.5em" gap="0.5em">
                    <Icon as={FaGithub} w={8} h={8}/> View my GitHub
                </Button>
            </Link>
            {/*<Box marginTop="1em" className="links">*/}
            {/*    <Icon as={FaGithub} w={8} h={8}/>*/}
            {/*    <Icon as={FaLinkedin} w={8} h={8}/>*/}
            {/*    <Icon as={FaTwitter} w={8} h={8}/>*/}
            {/*</Box>*/}
        </Box>
    )
}

export default Description;