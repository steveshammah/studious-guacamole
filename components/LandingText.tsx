import {
  Box,
  Link,
  Text,
  VStack,
  Image as ChakraImage,
  Button,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";

import React from "react";

const LandingText = () => {
  return (
    <Box
      flex={"2"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"flex-start"}
      justifyContent={"center"}
      p={10}
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
        h={"50%"}
      >
        <Text fontSize={"2.2rem"} fontWeight={"600"}>
          Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Natus
          quod ?
        </Text>
        <VStack mt={5}>
          <Button
            width={"200px"}
            h={"50px"}
            colorScheme={"whiteAlpha"}
            bg={"red"}
            variant={"solid"}
            fontSize={"1.2rem"}
          >
            Log in
          </Button>
          <Text>
            Don&apos;t have an account?{" "}
            <Link href="/signup" textColor={"red"}>
              Signup
            </Link>
          </Text>
        </VStack>{" "}
      </VStack>
      <VStack alignItems={"flex-start"} p={"5"}>
        <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
        <Flex flexWrap={"wrap"}>
          <ChakraImage
            src={"/assets/images/cyberpunk-12.jpg"}
            height={"7rem"}
            width={"18rem"}
            objectFit={"fill"}
            alt={"Download from the app store"}
            borderWidth={"2px"}
            borderRadius={"md"}
            mr={"5"}
          />
          <ChakraImage
            src={"/assets/images/cyberpunk-12.jpg"}
            height={"7rem"}
            width={"18rem"}
            objectFit={"fill"}
            alt={"Download from the app store"}
            borderWidth={"2px"}
            borderRadius={"md"}
          />
        </Flex>
      </VStack>
    </Box>
  );
};

export default LandingText;
