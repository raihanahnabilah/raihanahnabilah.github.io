import {
    AspectRatio,
    Link,
    Box,
    Heading,
    Image,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Button,
    ModalFooter,
    Text,
    Icon
} from "@chakra-ui/react";
import * as React from "react";
import {FC, useState} from "react";
import {FaGithub, FaExternalLinkAlt} from "react-icons/all";

const CardModal: FC<{
    picture: string,
    title: string,
    description: string,
    modalDescription: string,
    motivation: string,
    stack: string,
    link: string,
    demo: string
    pictureModal: string,
    projectLink: string
}> = (
props
) => {
    const { picture, title, description, modalDescription, motivation, stack, link, demo, pictureModal, projectLink } = props
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ scrollBehavior ] = useState('inside')

    return (
        <>
        <Box className="card-style" onClick={ onOpen } >
            <Box className="grid-box">
                <Image src={picture} className="grid-image"/>
                <Heading as='h4' size='md' className="card-title">
                    {title}
                </Heading>
                <p className="card-description">{description}</p>
            </Box>
        </Box>
            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior === 'inside' ? 'inside' : 'outside'}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image src={pictureModal} borderRadius="1em"/>
                        <Link href={projectLink} className="modal-link" isExternal>
                            <Button marginTop="1.5em" gap="0.5em">
                                <Icon as={FaExternalLinkAlt} w={5} h={5}/> View my Project
                            </Button>
                        </Link>
                        <Heading as='h4' size='m' marginTop='1em'>Description</Heading>
                        <Text fontSize='md'>{modalDescription}</Text>
                        <Heading as='h4' size='m' marginTop='1em'>Motivation</Heading>
                        <Text fontSize='md'>{motivation}</Text>
                        <Heading as='h4' size='m' marginTop='1em'>Skills</Heading>
                        <Text fontSize='md'>{stack}</Text>
                        <Heading as='h4' size='m' marginTop='1em'>Documentation</Heading>
                        <Text fontSize='md'>Click <Link color='teal.500' href={link} isExternal>here</Link> to access the presentation and or documentation.</Text>
                        {/*<Heading as='h4' size='m' marginTop='1em'>Demo</Heading>*/}
                        {/*<AspectRatio maxW='560px' ratio={16/9}>*/}
                        {/*    <iframe*/}
                        {/*        title='demo'*/}
                        {/*        src={demo}*/}
                        {/*        allowFullScreen*/}
                        {/*    />*/}
                        {/*</AspectRatio>*/}
                    </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CardModal;