import HanaPicture from "../images/Hana-Profile.jpg"
import {Box} from "@chakra-ui/react";

const Cover = () => {
    return (
        <Box className="background-container">
            <Box className="background-picture">
            </Box>
            <Box className="background-profile">
                <img src={HanaPicture} className="profile-picture"/>
            </Box>
        </Box>
    )
}

export default Cover;