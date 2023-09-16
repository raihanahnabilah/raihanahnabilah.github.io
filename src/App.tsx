import * as React from "react"
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid, Divider,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import Header from "./pages/Header";
import theme from "./theme";
import Profile from "./pages/Profile";
import SWEPortfolio from "./pages/SWEPortfolio";
import Description from "./pages/Description";
import Title from "./components/Title";
import UIPortfolio from "./pages/UIPortfolio";
import Timeline from "./pages/Timeline";
import Featured from "./pages/Featured";
import Footer from "./pages/Footer";
import HackathonPortfolio from "./pages/HackathonPortfolio";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header/>
    <Profile/>
    <Description/>
    <Title title="hackathon"/>
    <HackathonPortfolio/>
    <Title title="swe"/>
    <SWEPortfolio/>
    <Title title="pm"/>
    <UIPortfolio/>
    <Title title="timeline"/>
    <Timeline/>
    <Title title="featured"/>
    <Featured/>
    <Footer/>
      {/*<Feature/>*/}
    {/*<Box textAlign="center" fontSize="xl">*/}
    {/*  <Grid minH="100vh" p={3}>*/}
    {/*    <ColorModeSwitcher justifySelf="flex-end" />*/}
    {/*    <VStack spacing={8}>*/}
    {/*      <Logo h="40vmin" pointerEvents="none" />*/}
    {/*      <Text>*/}
    {/*        Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.*/}
    {/*      </Text>*/}
    {/*      <Link*/}
    {/*        color="teal.500"*/}
    {/*        href="https://chakra-ui.com"*/}
    {/*        fontSize="2xl"*/}
    {/*        target="_blank"*/}
    {/*        rel="noopener noreferrer"*/}
    {/*      >*/}
    {/*        Learn Chakra*/}
    {/*      </Link>*/}
    {/*    </VStack>*/}
    {/*  </Grid>*/}
    {/*</Box>*/}
  </ChakraProvider>
)
