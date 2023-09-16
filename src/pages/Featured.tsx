import {Box, Heading, Link, List, ListItem, ListIcon} from "@chakra-ui/react";
import * as React from "react";
import LinkModal from "../components/LinkModal";

const Featured = () => {
    return (
        <Box className="grid-container">
            <LinkModal
                title="Yale-NUS College, 2022"
                description="[English] A semester in Europe: Yale-NUS students reflect on their semester abroad"
                link="https://www.yale-nus.edu.sg/story/a-semester-in-europe-yale-nus-students-reflect-on-their-semester-abroad/"/>
            <LinkModal
                title="Various Indonesian National News, 2022"
                description="[Indonesian] Winning Tokopedia Devcamp Hackathon"
                link="https://jabar.tribunnews.com/2022/10/26/ini-inovasi-digital-bermanfaat-ciptaan-kaum-muda-dalam-devcamp-2022-dari-tokopedia-academy"/>
            <LinkModal
                title="Kargo Technologies, 2022"
                description="[English] Winning Kargo Excellerate Hackathon Vol 2"
                link="https://www.linkedin.com/posts/kargotech_kargo-excellerate-vol2-hackathon-winners-activity-6972760623684210688-OBPm/?utm_source=share&utm_medium=member_desktop"/>
            <LinkModal
                title="Yale-NUS College, 2022"
                description="[English] Winning Case Competition at LTA x NUS Economics."
                link="https://www.facebook.com/yalenuscollege/posts/pfbid02JYXQUDjCk2htknaevQe5E2wkXH633fh11mCmcEa4zkx6tYYWKYA4EMK2Y9EnGtsRl"
            />
            <LinkModal
                title="Peer Podcast, 2021"
                description="[Indonesian] “A Million Ways to Grow (ft. Hana Nabilah Fatinah)”"
                link="https://open.spotify.com/episode/1fV5huDcEad1rlvJ96v7jh?si=25d2abfe12bb4a93"/>
            <LinkModal
                title="CXO Media, 2021"
                description="[Indonesian] “LDR Ep.4 - Negara Kualitas Pendidikan Terbaik Ke-4 di Dunia, Serunya Kuliah di Yale-NUS!”"
                link="https://www.youtube.com/watch?v=RPs6dv8Q520&ab_channel=CXOMedia"
            />
            <LinkModal
                title="Mara Mentoring, 2020"
                description="[English] Testimony about my experience at the mentoring program with Sylvia Lim."
                link="https://www.linkedin.com/feed/update/urn:li:activity:6737343371339292673/"
            />
            <LinkModal
                title="Britzone, 2020"
                description="[English] “What your English teacher did not tell you (with Hana N. Fatinah)”"
                link="https://www.instagram.com/p/CECHwyGsLvG/"
            />
            <LinkModal
                title="Yale-NUS College, 2020"
                description="[English] Recess Week Work at Yale-NUS Student Services."
                link="https://www.linkedin.com/feed/update/urn:li:activity:6643787174334521345/"
            />
            <LinkModal
                title="Podcast Pemuda Selatan, 2020"
                description="[Indonesian] “Kehidupan Lockdown di Negara Tetangga (ft. Raihanah Nabilah Fatinah)”"
                link="https://open.spotify.com/episode/6fJjNN6jgXKYH30WCqpWnY?si=90f30ea55d8a472f"
            />
            <LinkModal
                title="KIR at SMAN 90 Jakarta, 2019"
                description="[Indonesian] Workshop on applying for scholarships and studying abroad."
                link="https://www.instagram.com/stories/highlights/17874575911330813/"
            />
            <LinkModal
                title="Yale-NUS College, 2019"
                description="[English] Talking about my experience performing at Bread and Jam 2022 with Arkipelago band."
                link="https://www.yale-nus.edu.sg/story/24-dec-2019-on-campus-music-events-give-students-opportunities-to-showcase-talent/"
            />
            <LinkModal
                title="Indonesia Mengglobal, 2018"
                description="[Indonesian] Pearson College UWC: Negeri Hijau di Barat Daya Vancouver Island, Kanada"
                link="https://www.indonesiamengglobal.com/2018/01/pearson-college-uwc-negeri-hijau-di-barat-daya-victoria-kanada/"/>
            <LinkModal
                title="UWC Global Video Ambassador, 2018"
                description="[English] “Meet this year’s Media students”"
                link="https://www.pearsoncollege.ca/media-students-2018/"
            />
            <LinkModal
                title="Koran Jakarta, 2017"
                description="[Indonesian] “Wahana Anak Bangsa Mengejar Asa”"
                link="https://koran-jakarta.com/wahana-anak-bangsa-mengejar-asa?page=all"
            />
        </Box>
    );
}
export default Featured;