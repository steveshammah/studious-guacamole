import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Link,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";

// import { FaQuestionCircle, FaAngleDown, FaAngleUp } from "react-icons/fa";
import Cookies from "./cookies.config.json";
import { FC, useCallback, useState } from "react";

export interface ICookies {
  name: string;
  details: string;
  isDisabled: boolean;
  defaultChecked: boolean;
  type: string;
  url: string;
}

export const CookiesList: FC<{ handleClick: (event: any) => void }> = ({
  handleClick,
}) => {
  const [expanded, setExpanded] = useState("");

  // Change arrow direction
  const handleExpand = useCallback(
    (cookie: string) => {
      if (expanded) {
        setExpanded("");
      } else {
        setExpanded(cookie);
      }
    },
    [expanded],
  );

  return (
    <Accordion cursor={"pointer"} allowToggle>
      {Cookies.categories.map((cookie: ICookies, index: number) => {
        return (
          <AccordionItem
            display={"flex"}
            flexDir={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
            fontSize={"0.9rem"}
            key={`cookie-${index}`}
            p={0}
            w="100%"
          >
            <AccordionButton
              paddingBlock=".5rem"
              onClick={() => handleExpand(cookie.type)}
            >
              <Stack w="full" direction="row" justifyContent={"space-between"}>
                <Stack align="center" direction="row" spacing="0.5rem">
                  <Text>{cookie.name}</Text>
                </Stack>
                {cookie.defaultChecked && (
                  <Stack align="center" spacing="1rem">
                    <Switch
                      defaultChecked
                      isDisabled
                      colorScheme={"red"}
                      name={cookie.name}
                      value={cookie.type}
                      onChange={handleClick}
                    />
                  </Stack>
                )}
                {!cookie.defaultChecked && (
                  <Stack align="center" justify="space-between">
                    <Switch
                      colorScheme={"red"}
                      name={cookie.name}
                      value={cookie.type}
                      onChange={handleClick}
                    />
                  </Stack>
                )}
              </Stack>
            </AccordionButton>

            <AccordionPanel paddingBlock="1.5rem">
              <Stack spacing="0.5rem">
                <Text>{cookie.details}</Text>

                <Link href={`/cookies/#${cookie.url}`} color={"red"}>
                  Cookie details
                </Link>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
