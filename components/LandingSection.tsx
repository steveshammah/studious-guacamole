import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";

import LandingImage from "./LandingImage";
import LandingText from "./LandingText";

const LandingSection: FC = () => {
  return (
    <Flex h={"88vh"} w={"100%"} flexWrap={"wrap"} overflowX={"hidden"} p={0}>
      <LandingText />
      <LandingImage />
    
    </Flex>
  );
};

export default LandingSection;
