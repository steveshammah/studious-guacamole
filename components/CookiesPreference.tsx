import { Box, useDisclosure } from "@chakra-ui/react";
import { FC, useState } from "react";
import { parseCookies } from "nookies";
import { useCookie } from "./cookies-components/useCoookie";
import { CookiesDetails } from "./cookies-components/CookieDetails";
import { CookiesFooter } from "./cookies-components/CookiesFooter";

export const CookiesPreference: FC = () => {
  const [visible, setVisible] = useState(true);
  // Values update the cookie footer state only
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [addCookie, deleteCookie] = useCookie();

  // Check if user has configured cookies
  const sessionCookies: string = parseCookies()["Cyber Cookies"];

  const handleAllCookies = (action: string) => {
    if (action === "activate") {
      addCookie("all");
    } else if (action === "deactivate") {
      deleteCookie("all");
    }
    setVisible(false)
    return onClose();
  };

  return (
    <Box
      position={"absolute"}
      display={visible ? "initial" : "none"}
      height={"90vh !important"}
      w={"100% !important"}
      bg={"blackAlpha.500"}
      bottom={0}
      left={0}
      color={"black"}
      boxShadow={"2xl"}
      zIndex={999}
    >
      <CookiesDetails
        isOpen={isOpen}
        onClose={onClose}
        handleAllCookies={handleAllCookies}
        sessionCookies={sessionCookies}
        setVisible={setVisible}
      />
      <CookiesFooter
        handleAllCookies={handleAllCookies}
        onOpen={onOpen}
        sessionCookies={sessionCookies}
      />
    </Box>
  );
};
