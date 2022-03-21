import {
  Button,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
import Link from "next/link";
// import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <Flex
      bg={"black"}
      height="12vh"
      direction="row"
      align={"center"}
      justify={"center"}
      color={"whiteAlpha.900"}
      position={"sticky"}
      top={"0"}
      left={"0"}
      zIndex={"999"}
      // spacing="0.5.5rem"
    >
      <Text
        textTransform={"uppercase"}
        fontWeight={"1000"}
        fontSize={{ base: ".8rem", md: "1.2rem", lg: "1.2rem" }}
        letterSpacing={"2px"}
        paddingLeft="1rem"
        cursor="pointer"
      >
        <Link href={"/"} passHref>
          CYBERPUNK
        </Link>
      </Text>
      {/* </Stack> */}

      <Spacer />
      <Flex w={["70%", "80%", "50%"]} p={2}>
        <Stack
          direction="row"
          spacing="1rem"
          justify="space-around"
          fontSize={{ base: "0.8rem", sm: "1rem", md: "1.2rem" }}
          fontWeight={"800"}
          w={"90%"}
        >
          <Text cursor={"pointer"} mr={"5"}>
            Blog
          </Text>
          <Text cursor={"pointer"} mr={"5"}>
            Events
          </Text>
          <Text cursor={"pointer"}>About</Text>
        </Stack>
        <Button
          variant="outline"
          colorScheme={"white"}
          color="red !important"
          cursor={"pointer"}
          rounded="4"
          w={"fit-content"}
        >
          <Text
            fontSize={{ base: "0.6rem", sm: "0.8rem", md: "1rem" }}
            color={"black"}
          >
            Download
          </Text>{" "}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
