import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import CookiesDetails from "./CookieDetails";

const CookiesPreference: FC = () => {
  return (
    <Box
      position={"absolute"}
      top={"50%"}
      left={"50%"}
      transform={"translate(-50%, -50%)"}
      bg={"gray.100"}
      color={"black"}
      boxShadow={"lg"}
      p={5}
      height={"85vh"}
      zIndex={999}
      overflow={"scroll"}
    >
      <HStack
        borderBottom={"1px"}
        borderBottomColor={"whiteAlpha.900"}
        justifyContent={"space-between"}
        mb={3}
      >
        <Text fontWeight={800}>CyberPunk.com</Text>
        <Text fontWeight={800} color={"red"}>
          Close
        </Text>
      </HStack>

      <Container>
        <Text fontWeight={800}>Privacy Preference Center</Text>
        <Text fontSize={"0.9rem"}>
          When you visit any website, it may store or retrieve information on
          your browser, mostly in the form of cookies. This information might be
          about you, your preferences or your device and is mostly used to make
          the site work as you expect it to. The information does not usually
          directly identify you, but it can give you a more personalized web
          experience. Because we respect your right to privacy, you can choose
          not to allow some types of cookies. Click on the different category
          headings to find out more and change our default settings. However,
          blocking some types of cookies may impact your experience of the site
          and the services we are able to offer.{" "}
          <Link href="/" color={"red"}>
            More information
          </Link>
        </Text>
      </Container>
      <Button colorScheme={"red"} borderRadius={0} m={3}>
        Allow All
      </Button>

      <Container mt={5}>
        <Text fontWeight={700} mb={1}>
          Manage Consent Preference
        </Text>

        <FormControl
          mb={3}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"space-evenly"}
          p={3}
        >
          <CookiesDetails />
        </FormControl>
        <ButtonGroup>
          <Button colorScheme={"red"} borderRadius={0}>
            Disable All
          </Button>
          <Button colorScheme={"red"} borderRadius={0}>
            Confirm My Choices
          </Button>
        </ButtonGroup>
      </Container>
    </Box>
  );
};

export default CookiesPreference;
