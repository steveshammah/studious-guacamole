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

import { CookiesList } from "./CookiesList";
import { ICookiePolicy, useCookie } from "./useCoookie";
import Cookies from "./cookies.config.json";
import { useCallback, useState } from "react";
import { ICDetails } from "../CookiesPreference";

export const CookiesDetails = ({ isOpen, onClose, policyKey }: ICDetails) => {
  const { setPolicy, addCookie } = useCookie();
  const [statePolicy, setStatePolicy] = useState<ICookiePolicy>({
    performance: false,
    analytics: false,
  });

  const handleClick = useCallback(
    (event): void => {
      const value = event.target.value;
      const status: boolean = event.target.checked;

      if (status) {
        setStatePolicy({ ...statePolicy, [value]: true });
      } else {
        setStatePolicy({ ...statePolicy, [value]: false });
      }
    },
    [statePolicy],
  );

  const handleAcceptAll = useCallback(() => {
    if (onClose) {
      void onClose();
    }
    return addCookie("cookiePolicy", "all");
  }, [addCookie, onClose]);

  const handleSave = () => {
    if (onClose) {
      void onClose();
    }
    if (Object.values(statePolicy).every((cookie) => cookie === false)) {
      return setPolicy({ essential: true });
    }
    return setPolicy(statePolicy);
  };

  return (
    <Modal
      closeOnOverlayClick={policyKey ? true : false}
      isOpen={isOpen}
      onClose={onClose}
      size={"xl"}
    >
      <ModalOverlay
        bg="blackAlpha.100"
        backdropFilter="blur(0.5px) hue-rotate(0deg)"
      />
      <ModalContent>
        <Stack
          justify="center"
          spacing="1rem"
          divider={<Divider />}
          padding="1rem"
        >
          <ModalHeader fontSize={"1rem"}>
            Powered by{" "}
            <Link href="https://github.com/steveshammah">Cyber Punk</Link>
            {policyKey && <ModalCloseButton />}
          </ModalHeader>

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
              colorScheme="black"
              onClick={handleAcceptAll}
              data-testid={"accept-all"}
            >
              Accept All
            </Button>

            <Button
              size="sm"
              rounded="sm"
              variant="outline"
              colorScheme="red"
              onClick={handleSave}
              data-testid={"save-preference"}
            >
              Save Preference
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
