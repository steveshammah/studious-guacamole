import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const CookesPolicy = () => {
  const [active, setActive] = useState(true);

  return (
    <Box
      position={"absolute"}
      bottom={0}
      bg={"black"}
      w={"100%"}
      p={3}
      justifyContent={"space-around"}
      alignItems={"center"}
      display={active ? "flex" : "none"}
    >
      <Text color={"white"} maxW={"80%"} fontSize={"0.9rem"}>
        We use cookies on our website to give you the most relevant experience
        by remembering your preferences and repeat visits. By clicking “Accept”,
        you consent to the use of ALL the cookies.
      </Text>
      <Button borderRadius={0}>Accept</Button>
      <Text onClick={() => setActive(!active)}>Close</Text>
    </Box>
  );
};

export default CookesPolicy;
