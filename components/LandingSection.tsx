import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import CookesPolicy from "./CookesPolicy";
import CookiesContainer from "./CookiesContainer";
// import CookiesPreference from "./CookiesPreference";
import LandingImage from "./LandingImage";
import LandingText from "./LandingText";

const LandingSection: FC = () => {
  return (
    <Flex h={"88vh"} w={"100%"} flexWrap={"wrap"} overflowX={"hidden"} p={0}>
      <LandingText />
      <LandingImage />
      <CookiesContainer />
      <CookesPolicy />
    </Flex>
  );
};

export default LandingSection;
