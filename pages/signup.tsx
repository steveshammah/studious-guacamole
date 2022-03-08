import { Flex } from "@chakra-ui/react";
import React from "react";
import LandingImage from "../components/LandingImage";
import SignUpForm from "../components/SignUpForm";

const signup = () => {
  return (
    <Flex h={"88vh"} w={"100%"} flexWrap={"wrap"} overflowX={"hidden"} p={0}>
      <SignUpForm />
      <LandingImage />
    </Flex>
  );
};

export default signup;
