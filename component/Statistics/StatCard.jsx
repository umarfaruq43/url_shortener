import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const StatCard = ({ text, title, imageUrl, ...props }) => {
  return (
    <Box {...props}>
      <Box
        bgColor="#fff"
        px="6"
        py="8"
        pt="20"
        borderRadius="8"
        position={"relative"}
      >
        <Flex
          position="absolute"
          top="-14"
          left={{ base: "50%", md: "unset" }}
          translateX={{ base: "-50%", md: "unset" }}
          transform="auto"
          w="100px"
          h="100px"
          borderRadius="full"
          bgColor="brand.dv"
          overflow="hidden"
          justifyContent="center"
          align="center"
        >
          {/* icon */}
          <Image src={imageUrl} alt="icon brand recognition" />
        </Flex>

        <Text fontWeight="700" fontSize="20px" mb="4">
          {/* Brand Recognition */}
          {title}
        </Text>

        <Text color="neutral.grayvio" fontSize="14px">
          {/* Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content. */}
          {text}
        </Text>
      </Box>
    </Box>
  );
};

export default StatCard;
