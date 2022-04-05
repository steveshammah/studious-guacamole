import {
  Button,
  ButtonGroup,
  Text,
  Link,
  useDisclosure,
  Stack,
  SlideFade,
} from "@chakra-ui/react";
import { useCallback, useEffect } from "react";
import { ICFooter } from "../CookiesPreference";
import Cookies from "./cookies.config.json";
import { useCookie } from "./useCoookie";

export const CookiesFooter = ({ onOpen, sessionCookies }: ICFooter) => {
  const { isOpen, onToggle } = useDisclosure();
  const { addCookie } = useCookie();

  const toggleFooter = useCallback(() => {
    // Three seconds delay to mount the pop up
    setTimeout(() => {
      // Check if cookies have been set
      if (!isOpen && !sessionCookies) {
        onToggle();
      }
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    toggleFooter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (details?: string) => {
    if (details) {
      addCookie("cookiePolicy", details);
    } else {
      onOpen();
    }
    onToggle();
  };

  return (
    <SlideFade
      offsetY="1rem"
      in={isOpen}
      unmountOnExit={true}
      style={{ zIndex: 10 }}
    >
      <Stack
        position={"absolute"}
        bottom={0}
        bg={"black"}
        w={"100%"}
        p="2rem"
        justifyContent={"space-around"}
        alignItems={"center"}
        direction="row"
        flexWrap={"wrap"}
        rounded="md"
        borderBottomRadius={0}
        shadow="md"
        color="white"
        mt="4"
      >
        <Text color={"white"} maxW={"70%"} fontSize={"1rem"}>
          {Cookies.footer}
        </Text>
        <ButtonGroup
          alignItems={"center"}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          <Link
            color={"gray.100"}
            textDecoration={"underline"}
            onClick={() => handleClick()}
            mr={3}
          >
            Customize Settings
          </Link>
          <Button
            size="sm"
            rounded="sm"
            variant="outline"
            colorScheme="black"
            color="white"
            onClick={() => handleClick("deactivate")}
          >
            Disable All
          </Button>
          <Button
            size="sm"
            rounded="sm"
            variant="solid"
            colorScheme="red"
            color="white"
            onClick={() => handleClick("activate")}
          >
            Accept All
          </Button>
        </ButtonGroup>
      </Stack>
    </SlideFade>
  );
};
