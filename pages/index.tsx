import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>The Good Network</title>
        <meta name="description" content="The Good Network" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </Box>
  );
};

export default Home;
