import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
  Box,
  Heading,
  Text,
  Spacer,
} from "@chakra-ui/react";
import Cookies from "./cookies.config.json";

export const CookiesQA = () => {
  return (
    <Stack width={"100%"} spacing="2rem">
      <Heading
        fontWeight={900}
        fontSize={{ base: "1rem", md: "1.1rem", lg: "1.5rem" }}
      >
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle width={"100%"}>
        {Cookies.QA.map((question, index) => {
          return (
            <AccordionItem width="100%" key={question.title + index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text> {question.title}</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{question.answer}</AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
      <Spacer height={"10rem"} />
    </Stack>
  );
};
