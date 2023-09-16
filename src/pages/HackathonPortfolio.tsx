import {Box} from "@chakra-ui/react";
import LinkModal from "../components/LinkModal";

const HackathonPortfolio = () => {
    return(
        <Box className="grid-container">
             <LinkModal
                title="Tokopedia Devcamp, 2022"
                description="[Backend] Created a 'GoSplit' feature on Gojek's GoFood platform. Won 'Best Solution' award with IDR 30,000,000 prize money."
                link="https://www.linkedin.com/posts/pt--tokopedia_devcamp-activity-6990545888356032513-Ha7z?utm_source=share&utm_medium=member_desktop"/>
            <LinkModal
                title="Kargo Technologies Vol. 2, 2022"
                description="[Frontend] Created a Dashboard for transportation management system. Won the hackathon, offered a 3-month internship."
                link="https://www.linkedin.com/posts/kargotech_kargo-excellerate-vol2-hackathon-winners-activity-6972760623684210688-OBPm/?utm_source=share&utm_medium=member_desktop"/>
        </Box>
    )
}
export default HackathonPortfolio;