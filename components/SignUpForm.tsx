import {
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { googleSignIn, signUp } from "./FirebaseAuth";

import { authContext } from "../contexts/AuthState";

const SignUpForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confPassword, setConfPassword] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [showConf, setShowConf] = useState<boolean>(false);

  const { checkAuth } = useContext(authContext);

  useEffect(() => {
    void checkAuth();

    return () => {};
  }, [checkAuth]);

  const handleSignUp = () => {
    if (password === confPassword) {
      return signUp(email, password);
    } else {
      console.log("The passwords do not match");
    }
  };
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      height={"100%"}
      p={5}
      flex={2}
    >
      <FormControl boxShadow={"xl"} p={5} w={[350, 500, 400]} h={"90%"}>
        <Text mb={5} fontSize={"1.2rem"} fontWeight={700}>
          Fill in your data to sign up.
        </Text>
        <InputGroup size="md">
          <Input
            placeholder="Email"
            mb={"5"}
            borderRadius={0}
            onChange={(e) => setEmail(e.target.value)}
            id={"Email"}
          />
        </InputGroup>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            borderRadius={0}
            onChange={(e) => setPassword(e.target.value)}
            id={"Password"}
            mb={"5"}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.70rem"
              size="sm"
              fontSize={"0.8rem"}
              onClick={() => setShow(!show)}
              borderRadius={0}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={showConf ? "text" : "password"}
            placeholder="Confirm password"
            borderRadius={0}
            onChange={(e) => setConfPassword(e.target.value)}
            id={"Confirm Password"}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.70rem"
              size="sm"
              fontSize={"0.8rem"}
              onClick={() => setShowConf(!showConf)}
              borderRadius={0}
            >
              {showConf ? "Hide " : "Show "}
            </Button>
          </InputRightElement>
        </InputGroup>
        <ButtonGroup mt={"5"}>
          <Button
            width={"150px"}
            h={"40px"}
            colorScheme={"black"}
            variant={"outline"}
            fontSize={"1.1rem"}
            onClick={handleSignUp}
            borderRadius={0}
          >
            Sign Up
          </Button>
          <Button
            width={"fit-content"}
            h={"40px"}
            colorScheme={"red"}
            variant={"solid"}
            fontSize={"1.1rem"}
            onClick={() => googleSignIn()}
            rounded={0}
          >
            Sign Up with Google
          </Button>
        </ButtonGroup>
      </FormControl>
    </Flex>
  );
};

export default SignUpForm;
