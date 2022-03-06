import { Button, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
// import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <Flex
      bg={"black"}
      height="12vh"
      w={"100vw"}
      alignItems={"center"}
      justifyContent={"center"}
      color={"whiteAlpha.900"}
      position={"sticky"}
      top={"0"}
      left={"0"}
      zIndex={"999"}
      borderBottom={"1px"}
    >
      <Stack
        pl={"4"}
        justifyContent={"center"}
        w={"12rem"}
        h={"100%"}
        overflow={"hidden"}
        cursor={"pointer"}
      >
        <Link href={"/"} passHref>
          <Text
            textTransform={"uppercase"}
            fontWeight={"1000"}
            fontSize={{ base: ".8rem", md: "1.2rem", lg: "1.2rem" }}
            letterSpacing={"2px"}
          >
            CyberPunk
          </Text>
        </Link>
      </Stack>

      <Spacer />
      <Flex w={["70%", "80%", "50%"]} p={2}>
        <Flex
          mr={"2rem"}
          justifyContent={"space-around"}
          fontSize={{ base: "0.8rem", sm: "1rem", md: "1.2rem" }}
          fontWeight={"800"}
          p={"2"}
          w={"90%"}
        >
          <Text cursor={"pointer"} mr={"5"}>
            Blog
          </Text>
          <Text cursor={"pointer"} mr={"5"}>
            Events
          </Text>
          <Text cursor={"pointer"}>About</Text>
        </Flex>
        <Button
          variant={"solid"}
          colorScheme={"red"}
          bg={"red"}
          cursor={"pointer"}
          borderRadius={"0"}
        >
          <Text
            fontSize={{ base: "0.6rem", sm: "0.8rem", md: "1rem" }}
            color={"white"}
          >
            Download Now
          </Text>{" "}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
