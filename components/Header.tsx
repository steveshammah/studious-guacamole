import { Button, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

import { FC } from "react";

export const Header: FC = () => {
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
          variant="solid"
          colorScheme={"red"}
          cursor={"pointer"}
          rounded="2"
          w={"fit-content"}
        >
          <Text
            fontSize={{ base: "0.6rem", sm: "0.8rem", md: "1rem" }}
            color={"white"}
          >
            Download
          </Text>{" "}
        </Button>
      </Flex>
    </Flex>
  );
};


