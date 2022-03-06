import { Flex } from "@chakra-ui/react";

import React from "react";

const LandingImage = () => {
  return (
    <Flex flex={2}>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        src={"/assets/images/cyberpunk-logo.jpg"}
        alt={"Cyberpunk Logo"}
        style={{ objectFit: "fill" }}
      />
    </Flex>
  );
};

export default LandingImage;
