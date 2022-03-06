import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClick = () => setShow(!show);
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
          <Input placeholder="Username or Email" mb={"5"} borderRadius={0} />
        </InputGroup>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            borderRadius={0}
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
          {/* <Link href="/login-auth" passHref> */}
          <Button
            width={"150px"}
            h={"40px"}
            colorScheme={"red"}
            bg={"red"}
            variant={"solid"}
            fontSize={"1.1rem"}
            isLoading={loading}
            onClick={() => setLoading(!loading)}
            borderRadius={0}
          >
            Log in
          </Button>
          {/* </Link> */}
        </ButtonGroup>
        <Text mt={5}>
          <Link href={"/"}>Forgot password?</Link>
        </Text>{" "}
      </FormControl>
    </Flex>
  );
};

export default LoginForm;
