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
import { googleSignIn, logIn } from "./FirebaseAuth";

import { authContext } from "../contexts/AuthState";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  const { checkAuth } = useContext(authContext);

  useEffect(() => {
    void checkAuth();

    return () => {};
  }, [checkAuth]);

  const handleClick = () => void setShow(!show);

  const handleLogin = (): void => {
    logIn(email, password);
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
          Log in to access your account.
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
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.70rem"
              size="sm"
              fontSize={"0.8rem"}
              onClick={handleClick}
              borderRadius={0}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <ButtonGroup mt={"5"}>
          <Button
            width={"150px"}
            h={"40px"}
            colorScheme={"red"}
            bg={"red"}
            variant={"solid"}
            fontSize={"1.1rem"}
            onClick={() => handleLogin}
            borderRadius={0}
          >
            Log in
          </Button>
          <Button
            width={"150px"}
            h={"40px"}
            colorScheme={"red"}
            bg={"white"}
            variant={"solid"}
            fontSize={"1.1rem"}
            onClick={() => googleSignIn()}
            borderRadius={0}
          >
            Google Sign In
          </Button>
        </ButtonGroup>
        <Text mt={5}>
          <Link href={"/"}>Forgot password?</Link>
        </Text>{" "}
      </FormControl>
    </Flex>
  );
};

export default LoginForm;
