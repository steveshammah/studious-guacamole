import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  HStack,
  Switch,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

interface ICookies {
  type: string;
  details: string;
  isDisabled: boolean;
  defaultChecked: boolean;
}

const CookiesDetails: FC = () => {
  const cookies: ICookies[] = [
    {
      type: "Strictly Necessary Cookies",
      details:
        "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.",
      isDisabled: true,
      defaultChecked: true,
    },
    {
      type: "Performance Cookies",
      details:
        "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.    All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.",
      isDisabled: false,
      defaultChecked: false,
    },
    {
      type: "Functional Necessary Cookies",
      details:
        "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.",
      isDisabled: false,
      defaultChecked: false,
    },
    {
      type: "Targeting Cookies",
      details:
        "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.    They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.",
      isDisabled: false,
      defaultChecked: false,
    },
  ];

  return (
    <Accordion cursor={"pointer"}>
      {cookies.map((cookie, index) => {
        return (
          <AccordionItem
            display={"flex"}
            flexDir={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
            fontSize={"0.9rem"}
            mb={1}
            key={`cookie-${index}`}
          >
            <HStack justifyContent={"space-between"} w={"100%"}>
              <AccordionButton>
                <Text fontWeight={600}>{cookie.type}</Text>
              </AccordionButton>{" "}
              <Switch
                defaultChecked={cookie.defaultChecked}
                isDisabled={cookie.isDisabled}
                colorScheme={"red"}
                ml={1}
              />
            </HStack>
            <AccordionPanel>{cookie.details}</AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default CookiesDetails;
