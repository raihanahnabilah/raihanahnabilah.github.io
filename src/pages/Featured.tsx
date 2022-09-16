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
            <LinkModal
                title="Britzone"
                description="“What your English teacher did not tell you (with Hana N. Fatinah)”"
                link="https://www.instagram.com/p/CECHwyGsLvG/"
            />
            <LinkModal
                title="KIR at SMAN 90 Jakarta"
                description="Workshop on applying for scholarships and studying abroad."
                link="https://www.instagram.com/stories/highlights/17874575911330813/"
            />
            <LinkModal
                title="Yale-NUS College"
                description="Recess Week Work at Yale-NUS Student Services."
                link="https://www.linkedin.com/feed/update/urn:li:activity:6643787174334521345/"
            />
            <LinkModal
                title="Yale-NUS College"
                description="Winning Case Competition at LTA x NUS Economics."
                link="https://www.facebook.com/yalenuscollege/posts/pfbid02JYXQUDjCk2htknaevQe5E2wkXH633fh11mCmcEa4zkx6tYYWKYA4EMK2Y9EnGtsRl"
            />
            <LinkModal
                title="Podcast Pemuda Selatan"
                description="“Kehidupan Lockdown di Negara Tetangga (ft. Raihanah Nabilah Fatinah)”"
                link="https://open.spotify.com/episode/6fJjNN6jgXKYH30WCqpWnY?si=90f30ea55d8a472f"
            />
            <LinkModal
                title="Yale-NUS College"
                description="Talking about my experience performing at Bread and Jam 2022 with Arkipelago band."
                link="https://www.yale-nus.edu.sg/story/24-dec-2019-on-campus-music-events-give-students-opportunities-to-showcase-talent/"
            />
        </Box>
    );
}
export default Featured;