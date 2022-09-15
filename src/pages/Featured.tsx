import {Box, Heading, Link} from "@chakra-ui/react";
import * as React from "react";
import LinkModal from "../components/LinkModal";

const Featured = () => {
    return (
        <Box className="grid-container">
            <LinkModal
                title="Peer Podcast"
                description="“A Million Ways to Grow (ft. Hana Nabilah Fatinah)”"
                link="https://open.spotify.com/episode/1fV5huDcEad1rlvJ96v7jh?si=25d2abfe12bb4a93"/>
            <LinkModal
                title="CXO Media"
                description="“LDR Ep.4 - Negara Kualitas Pendidikan Terbaik Ke-4 di Dunia, Serunya Kuliah di Yale-NUS!”"
                link="https://www.youtube.com/watch?v=RPs6dv8Q520&ab_channel=CXOMedia"
            />
            <LinkModal
                title="Mara Mentoring"
                description="Testimony about my experience at the mentoring program with Sylvia Lim."
                link="https://www.linkedin.com/feed/update/urn:li:activity:6737343371339292673/"
            />
            <LinkModal
                title="UWC Global Video Ambassador"
                description="“Meet this year’s Media students”"
                link="https://www.pearsoncollege.ca/media-students-2018/"
            />
            <LinkModal
                title="Koran Jakarta"
                description="“Wahana Anak Bangsa Mengejar Asa”"
                link="https://koran-jakarta.com/wahana-anak-bangsa-mengejar-asa?page=all"
            />
        </Box>
    );
}
export default Featured;