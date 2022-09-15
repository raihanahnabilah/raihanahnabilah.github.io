import {FC} from "react";
import {Box} from "@chakra-ui/react";
import {ColorModeSwitcher} from "../ColorModeSwitcher";
import * as React from "react";

const Header: FC<{
}> = () => {
    return (
        <Box className="header-position">
            <Box className="header-container">
                <Box className="header-title">
                    Hana N. Fatinah
                </Box>
                <Box>
                    <ColorModeSwitcher justifySelf="flex-end" />
                </Box>
            </Box>

        </Box>
    )
}

export default Header;