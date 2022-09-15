import {
    Box,
    Heading,
    Link
} from "@chakra-ui/react";
import * as React from "react";
import {FC, useState} from "react";

const LinkModal: FC<{
    title: string,
    description: string,
    link: string
}> = (
    props
) => {
    const {  title, description, link } = props

    return (
        <>
            <Link href={link} className="card-style link-style" isExternal>
                {/*<Box >*/}
                    <Box className="grid-box link-box">
                        <Heading as='h4' size='md' className="card-title">
                            {title}
                        </Heading>
                        <p className="card-description">{description}</p>
                    </Box>
                {/*</Box>*/}
            </Link>
        </>
    )
}

export default LinkModal;