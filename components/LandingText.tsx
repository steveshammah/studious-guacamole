import {
  Box,
  Text,
  VStack,
  Image as ChakraImage,
  Button,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/AuthState";

const LandingText = () => {
  const [active, setActive] = useState<any>("");

  const { checkAuth } = useContext(authContext);

  useEffect(() => {
    // void checkAuth();
    setActive(checkAuth());
    console.log("User landing: ", active);

    return () => {};
  }, [active, checkAuth]);
  return (
    <Box
      flex={"2"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"flex-start"}
      justifyContent={"center"}
      p={5}
      h={"100%"}
      bg={"white"}
      color={"black"}
    >
      <VStack
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        p={5}
        mb={"2"}
        // w={"100%"}
        minH={"50%"}
      >
        <Text
          fontSize={{ base: "1.6rem", md: "2rem", lg: "2.2rem" }}
          fontWeight={"600"}
        >
          Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Natus
          quod ?
        </Text>
        <VStack mt={5}>
          {active ? (
            <Link href="/login" passHref>
              <Button
                width={[100, 120, 180]}
                h={[10, 12, 12]}
                colorScheme={"red"}
                bg={"red"}
                variant={"solid"}
                fontSize={{ base: "1rem", md: "1rem", lg: "1.2rem" }}
                borderRadius={0}
              >
                Log Out
              </Button>
            </Link>
          ) : (
            <Link href="/login" passHref>
              <Button
                width={[100, 120, 180]}
                h={[10, 12, 12]}
                colorScheme={"red"}
                bg={"red"}
                variant={"solid"}
                fontSize={{ base: "1rem", md: "1rem", lg: "1.2rem" }}
                borderRadius={0}
              >
                Log in
              </Button>
            </Link>
          )}

          <Text>
            Don&apos;t have an account?{" "}
            <Link href="/signup" passHref>
              <a>Signup</a>
            </Link>
          </Text>
        </VStack>{" "}
      </VStack>
      <VStack alignItems={"flex-start"} p={"1"}>
        <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
        <Flex flexWrap={"wrap"}>
          <ChakraImage
            src={"/assets/images/cyberpunk.jpg"}
            height={"7rem"}
            width={"18rem"}
            objectFit={"fill"}
            alt={"Download from the app store"}
            // borderWidth={"2px"}
            // borderRadius={"md"}
            mr={"5"}
          />
          <ChakraImage
            src={"/assets/images/cyberpunk-12.jpg"}
            height={"7rem"}
            width={"18rem"}
            objectFit={"fill"}
            alt={"Download from the app store"}
            // borderWidth={"2px"}
            // borderRadius={"md"}
          />
        </Flex>
      </VStack>
    </Box>
  );
};

export default LandingText;
