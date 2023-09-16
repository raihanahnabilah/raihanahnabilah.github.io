import {Box, Button, Heading, Icon, Link, Text} from "@chakra-ui/react";
import {FaGithub, FaLinkedin} from "react-icons/all";
import * as React from "react";

const Timeline = () => {
    return (
        <section className="timeline timeline-container">
            <ul>
                <li className="in-view">
                    <div>
                        2017 - 2019<br/>
                        Pearson College UWC, Canada<br/>
                        International Baccalaureate
                    </div>
                </li>
                <li className="in-view">
                    <div>
                        2019 - present<br/>
                        Yale-NUS College, Singapore<br/>
                        BSc (Hons) in Computer Science
                    </div>
                </li>
                <li className="in-view">
                    <div>
                        2020 - 2021<br/>
                        UWC Indonesia National Committee<br/>
                        Software Engineering Intern<br/>
                    </div>
                </li>
                <li className="in-view">
                    <div>
                        2020 - 2021<br/>
                        Thryft Asia<br/>
                        Frontend Engineering Intern<br/>
                    </div>
                </li>
                <li className="in-view">
                    <div>
                        2022 <br/>
                        Uppsala University, Sweden <br/>
                        Visiting Student, Department of Information Technology
                    </div>
                </li>
                <li className="in-view">
                    <div>
                        2022<br/>
                        Bluente<br/>
                        Software Engineering Intern<br/>
                    </div>
                </li>
                <li className="in-view">
                    <div>
                        2022 - 2023 <br/>
                        Kargo Technologies<br/>
                        Software Engineering Intern<br/>
                    </div>
                </li>
                <li className="in-view">
                    <div>
                        2023<br/>
                        SAP<br/>
                        Software Engineering Intern<br/>
                    </div>
                </li>
            </ul>
            <Box className="description">
                <Text fontSize='lg'>
                    For more information about my past experience,
                </Text>
                <Link href="https://www.linkedin.com/in/hanabilaf/" isExternal>
                    <Button marginTop="1.5em" gap="0.5em">
                        <Icon as={FaLinkedin} w={8} h={8}/> View my LinkedIn
                    </Button>
                </Link>
            </Box>
        </section>
    )
}

export default Timeline;