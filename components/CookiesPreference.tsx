import { Box, useDisclosure } from "@chakra-ui/react";
import { FC, useMemo, useState } from "react";
import { parseCookies } from "nookies";
import { useCookie } from "./cookies/useCoookie";
import { CookiesDetails } from "./cookies/CookieDetails";
import { CookiesFooter } from "./cookies/CookiesFooter";

export interface ICDetails {
  isOpen: boolean;
  onClose: () => void;
  policyKey?: TPolicyKey;
}
export interface ICFooter {
  onOpen: () => void;
  sessionCookies: string;
}

export type TPolicyKey = "cookiePolicy";

export const CookiesPreference = ({
  policyKey = "Cyber Cookies",
}: TPolicyKey) => {
  // Values update the cookie footer state only
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Check if user has configured cookies
  const sessionCookies: string = useMemo(
    () => parseCookies()[policyKey],
    [policyKey],
  );

  return (
    <Box
      bg={"blackAlpha.500"}
      position={"fixed"}
      right={0}
      bottom={0}
      left={0}
      color={"black"}
      boxShadow={"2xl"}
      zIndex={999}
    >
      <CookiesDetails isOpen={isOpen} onClose={onClose} />
      <CookiesFooter onOpen={onOpen} sessionCookies={sessionCookies} />
    </Box>
  );
};
