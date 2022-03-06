import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import LandingImage from "../components/LandingImage";
import LoginForm from "../components/LoginForm";

const login = () => {
  return (
    <Flex h={"88vh"} w={"100%"} flexWrap={"wrap"} overflowX={"hidden"} p={0}>
      <LoginForm />
      <LandingImage />
    </Flex>
  );
};

export default login;
