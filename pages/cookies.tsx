import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Link,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CookiesDetails } from "../components/cookies/CookieDetails";
import Cookies from "../components/cookies/cookies.config.json";
import { ICookies } from "../components/cookies/CookiesList";
import { CookiesQA } from "../components/cookies/CookiesQA";

const CookiesPolicy = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const showPopUp = () => {
    onOpen();
  };
  return (
    <Stack
      spacing={"1.5rem"}
      alignItems={"flex-start"}
      w={"80%"}
      margin={"auto"}
      p={5}
      lineHeight={"1.8"}
      letterSpacing={"0.1rem"}
    >
      <Stack spacing={"0.75rem"}>
        <Heading
          as={"h2"}
          fontWeight={900}
          fontSize={{ base: "1rem", md: "1.25rem", lg: "1.8rem" }}
        >
          {Cookies.title}
        </Heading>
        <Text>{Cookies.policy}</Text>
        <Spacer height={"1rem"} />
        <Text>
          Read our{" "}
          <Link href="#privacy-policy" fontWeight={600} color="red">
            privacy policy.
          </Link>
        </Text>
      </Stack>

      <Stack spacing="1rem" divider={<Divider />}>
        <Heading fontWeight={700} fontSize={{ base: "1.1rem", lg: "1.7rem" }}>
          Categories of Cookies
        </Heading>
        {Cookies.categories.map((category: ICookies, index: number) => {
          return (
            <Box
              key={`category-${index}`}
              className={category.url}
              id={category.url}
            >
              <Text fontSize={"1.1rem"} fontWeight={600}>
                {category.name}
              </Text>
              <Text>{category.details}</Text>
            </Box>
          );
        })}
      </Stack>
      <Stack spacing="1rem">
        <Heading fontWeight={800} fontSize={{ base: "1.1rem", lg: "1.7rem" }}>
          Managing Cookies
        </Heading>
        <Text>{Cookies.managing.details}</Text>
        <Text>{Cookies.managing.disclaimer}</Text>
        <ButtonGroup>
          <Button
            colorScheme={"red"}
            variant="solid"
            size={"sm"}
            rounded={2}
            onClick={showPopUp}
          >
            My Cookies
          </Button>
        </ButtonGroup>

        {/* <CookiesTable /> */}
        <Spacer height={"10rem"} />
        <CookiesQA />
        <Box>
          <Text letterSpacing={"1px"}>
            More Information about cookies:{" "}
            <Link
              href={`https://${Cookies.managing.more_info}`}
              target="_blank"
              color={"red"}
            >
              {Cookies.managing.more_info}
            </Link>{" "}
          </Text>
          <Text>
            More Information about advertising cookies:{" "}
            <Link
              href={`https://${Cookies.managing.advertising}`}
              target="_blank"
              color={"red"}
            >
              {Cookies.managing.advertising}
            </Link>{" "}
          </Text>
          <Text>
            More Information about google analytics cookies:{" "}
            <Link
              href={`https://${Cookies.managing.google_analytics}`}
              target="_blank"
              color={"red"}
            >
              {Cookies.managing.google_analytics}
            </Link>{" "}
          </Text>
        </Box>
      </Stack>
      {/* Cookie Prompt */}
      <CookiesDetails
        isOpen={isOpen}
        onClose={onClose}
        policyKey={"cookiePolicy"}
      />
    </Stack>
  );
};

export default CookiesPolicy;
