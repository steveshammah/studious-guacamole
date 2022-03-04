import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <Flex
      bg={"black"}
      height="14vh"
      minW={"100vw"}
      alignItems={"center"}
      justifyContent={"center"}
      color={"whiteAlpha.800"}
    >
      <Stack
        pl={"4"}
        justifyContent={"center"}
        w={"12rem"}
        h={"100%"}
        overflow={"hidden"}
        cursor={"pointer"}
      >
        <Image
          src={"/assets/images/tgc_blue_logo.png"}
          height={"90%"}
          width={"100%"}
          layout={"fixed"}
          alt={"TGC_Logo"}
        />
      </Stack>

      <Spacer />
      <Flex w={["70%", "80%", "50%"]} p={2}>
        <Flex
          mr={"2rem"}
          justifyContent={"space-around"}
          fontSize={{ base: "0.8rem", sm: "1rem", md: "1.2rem" }}
          fontWeight={"500"}
          p={"2"}
          w={"90%"}
        >
          <Text cursor={"pointer"} mr={"5"}>
            Youtube
          </Text>
          <Text cursor={"pointer"} mr={"5"}>
            Events
          </Text>
          <Text cursor={"pointer"}>About</Text>
        </Flex>
        <Button
          variant={"outline"}
          colorScheme={"white"}
          bg={"red"}
          cursor={"pointer"}
        >
          <Text
            fontSize={{ base: "0.6rem", sm: "0.8rem", md: "1rem" }}
            color={"white"}
          >
            Get notified
          </Text>{" "}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
