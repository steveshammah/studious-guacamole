import {
  Button,
  ButtonGroup,
  Divider,
  Link,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import CookiesList from "./CookiesList";
import { useCookie } from "./useCoookie";
import Cookies from "./cookies.config.json";

import { FC } from "react";

export interface ICDetails {
  handleAllCookies: (action: string) => void;
  sessionCookies: string;
  isOpen: boolean;
  onClose: () => unknown;
}

export const CookiesDetails: FC<ICDetails> = ({
  handleAllCookies,
  isOpen,
  onClose,
  sessionCookies,
}) => {
  const [addCookie, deleteCookie] = useCookie();

  const handleClick = (event: any): void => {
    const type: string = event.target.value;
    const status: boolean = event.target.checked;

    if (status) {
      addCookie(type);
    } else {
      deleteCookie(type);
    }
  };

  const handleClose = () => {
    if (!sessionCookies) {
      addCookie("default");
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
      <ModalOverlay />
      <ModalContent>
        <Stack
          justify="center"
          spacing="1rem"
          divider={<Divider />}
          padding="1rem"
        >
          <>
            <ModalHeader fontSize={"1rem"}>
              Powered by{" "}
              <Link href="https://github.com/steveshammah">CyberPunk</Link>
            </ModalHeader>

            <ModalCloseButton onClick={handleClose} />
          </>

          <Stack spacing="1rem" bg={"white"} w={"90%"}>
            <Text fontWeight={800}>Privacy Preference Center</Text>
            <Text fontSize={"0.9rem"} w={"100%"}>
              {Cookies.privacy}
            </Text>
            <Link href="/cookies" color={"red"}>
              More information
            </Link>
          </Stack>
          <ButtonGroup
            spacing="1rem"
            alignItems={"center"}
            alignSelf={"center"}
            justifyContent={"space-evenly"}
          >
            <Button
              size="sm"
              rounded="sm"
              variant="outline"
              colorScheme="blackAlpha.500"
              onClick={() => handleAllCookies("deactivate")}
            >
              Disable All
            </Button>

            <Button
              size="sm"
              rounded="sm"
              variant="outline"
              colorScheme="red"
              onClick={() => handleAllCookies("activate")}
            >
              Accept All
            </Button>
          </ButtonGroup>
          <ModalBody>
            <Text fontWeight={700}>Manage Consent Preference</Text>
            {/* Cookies Accordion list */}
            <CookiesList handleClick={handleClick} />
          </ModalBody>
        </Stack>
      </ModalContent>
    </Modal>
  );
};
