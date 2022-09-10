import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../../Layout/ScreenWidth";
import StatCard from "./StatCard";

const Statistics = () => {
  return (
    <ScreenWidth mt={[8, null, "16"]}>
      <Text textAlign="center" fontWeight="700" fontSize={["24", 32, "42"]}>
        Advanced Statistics
      </Text>
      <Text
        mx="auto"
        maxW={[270, "500"]}
        align="center"
        fontWeight="500"
        color="neutral.grayvio"
        fontSize={[14, 14, 16]}
      >
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </Text>

      <Box position="relative">
        <Box
          display={["none", null, "block"]}
          w="90%"
          bgColor="brand.cyan"
          mx="auto"
          h="10px"
          position="absolute"
          transform="auto"
          translateX="-50%"
          translateY="-50%"
          top="50%"
          left="50%"
        ></Box>

        <Box
          display={["block", null, "none"]}
          w="10px"
          bgColor="brand.cyan"
          h="90%"
          position="absolute"
          transform="auto"
          translateX="-50%"
          translateY="-50%"
          top="50%"
          left="50%"
          borderRadius="full"
        ></Box>
        <SimpleGrid
          minChildWidth={["370", null, "190px"]}
          gap={["8", null, 5]}
          mt="150"
        >
          <StatCard
            maxW="340px"
            mx="auto"
            imageUrl="images/icon-brand-recognition.svg"
            title="Brand Recognition"
            text="Boost your brand recognition with each click. Generic links don’t 
            mean a thing. Branded links help instil confidence in your content."
          />
          <StatCard
            maxW="340px"
            mx="auto"
            mt={["16", null, "50"]}
            imageUrl="images/icon-detailed-records.svg"
            title="Detailed Records"
            text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
          <StatCard
            maxW="340px"
            mx="auto"
            mt={["20", null, "100"]}
            imageUrl="images/icon-fully-customizable.svg"
            title="Fully Customizable"
            text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </SimpleGrid>
      </Box>
    </ScreenWidth>
  );
};

export default Statistics;
