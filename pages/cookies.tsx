import { Box, Divider, Heading, Link, Stack, Text } from "@chakra-ui/react";
import Cookies from "../components/cookies-components/cookies.config.json";
// import { ICookies } from "./components/CookiesList";

export const CookiesPolicy = () => {
  return (
    <Stack
      spacing={"1.5rem"}
      divider={<Divider />}
      alignItems={"flex-start"}
      w={"80%"}
      margin={"auto"}
      p={5}
      height="100%"
    >
      <Box>
        <Heading
          fontWeight={900}
          fontSize={{ base: "1.4rem", md: "1.6rem", lg: "2.2rem" }}
        >
          {Cookies.title}
        </Heading>
        <Text fontSize={{ base: "1rem", md: "1rem", lg: "1.1rem" }}>
          {Cookies.policy}
        </Text>
      </Box>
      <Box>
        <Heading fontWeight={700} fontSize={{ base: "1.4rem", lg: "1.8rem" }}>
          Cookies
        </Heading>
        <Text fontSize={{ base: "1rem", md: "1rem", lg: "1.1rem" }}>
          {Cookies.about}
        </Text>
      </Box>

      <Stack spacing="1.2rem">
        <Heading fontWeight={700} fontSize={{ base: "1.4rem", lg: "1.8rem" }}>
          Categories of Cookies
        </Heading>
        {Cookies.categories.map((category, index: number) => {
          return (
            <Box
              key={`category-${index}`}
              className={category.url}
              id={category.url}
            >
              <Text
                fontSize={{ base: "1.1rem", md: "1rem", lg: "1.1rem" }}
                fontWeight={600}
              >
                {category.name}
              </Text>
              <Text fontSize={{ base: "1rem", lg: "1.1rem" }}>
                {category.details}
              </Text>
            </Box>
          );
        })}
      </Stack>
      <Stack spacing="1.2rem">
        <Heading fontWeight={700} fontSize={{ base: "1.4rem", lg: "1.8rem" }}>
          Managing Cookies
        </Heading>
        <Text fontSize={{ base: "1rem", lg: "1.1rem" }}>
          {Cookies.managing.details}
        </Text>
        <Text fontSize={{ base: "1rem", lg: "1.1rem" }}>
          {Cookies.managing.disclaimer}
        </Text>
        <Box fontWeight={600}>
          <Text>
            More Information about cookies:{" "}
            <Link
              href={`https://${Cookies.managing.more_info}`}
              target="_blank"
              color={"red.500"}
            >
              {Cookies.managing.more_info}
            </Link>{" "}
          </Text>
          <Text>
            More Information about advertising cookies:{" "}
            <Link
              href={`https://${Cookies.managing.advertising}`}
              target="_blank"
              color={"red.500"}
            >
              {Cookies.managing.advertising}
            </Link>{" "}
          </Text>
          <Text>
            More Information about google analytics cookies:{" "}
            <Link
              href={`https://${Cookies.managing.google_analytics}`}
              target="_blank"
              color={"red.500"}
            >
              {Cookies.managing.google_analytics}
            </Link>{" "}
          </Text>
        </Box>
      </Stack>
    </Stack>
  );
};

export default CookiesPolicy;
