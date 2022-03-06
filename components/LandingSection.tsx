import { Flex } from "@chakra-ui/react";
import React from "react";
import CookesPolicy from "./CookesPolicy";
import LandingImage from "./LandingImage";
import LandingText from "./LandingText";

const LandingSection: React.FC = () => {
  return (
    <Flex h={"88vh"} w={"100%"} flexWrap={"wrap"} overflowX={"hidden"} p={0}>
      <LandingText />
      <LandingImage />
      <CookesPolicy />
    </Flex>
  );
};

export default LandingSection;
