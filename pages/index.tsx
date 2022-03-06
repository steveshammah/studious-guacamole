import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import LandingSection from "../components/LandingSection";

const Home: NextPage = () => {
  return (
    <Box overflowY={"hidden"}>
      <Head>
        <title>The Good Network</title>
        <meta name="description" content="The Good Network" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LandingSection />
    </Box>
  );
};

export default Home;
