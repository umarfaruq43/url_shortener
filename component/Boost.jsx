import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ActionButton from "./Form/ActionButton";

const Boost = () => {
  return (
    <Box
      py="10"
      bgImage="images/bg-boost-desktop.svg"
      bgColor="brand.dv"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      px="16px"
    >
      <Text
        fontWeight="700"
        color="#fff"
        fontSize={["20", "26", "44"]}
        textAlign="center"
      >
        Boost your links today
      </Text>
      <Box align="center" mt="5">
        <ActionButton text="Get Started" borderRadius="full" />
      </Box>
    </Box>
  );
};

export default Boost;
