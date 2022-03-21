import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

import LandingSection from "../components/LandingSection";


const Home: NextPage = () => {
  return (
    <Box overflowY={"hidden"}>
      <Head>
        <title>CyberPunk</title>
        <meta name="description" content="Cyper Punk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingSection />
    </Box>
  );
};

export default Home;
