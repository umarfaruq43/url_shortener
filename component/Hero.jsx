import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ScreenWidth from "../Layout/ScreenWidth";
import ActionButton from "./Form/ActionButton";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <Box>
      <ScreenWidth>
        <Flex
          mt={[null, null, "35"]}
          align="center"
          flexDir={["column-reverse", null, "row"]}
          gap={["5"]}
          // minH="70vh"
        >
          <Box w={["100%"]} color="neutral.grayvio" maxW="500px">
            <Text
              fontSize={["24", "32", "54"]}
              lineHeight="shorter"
              fontWeight="extrabold"
              color="neutral.darkvio"
              textAlign={["center", null, "left"]}
            >
              More than just shorter links
            </Text>
            <Text
              fontSize={["14", null, "16"]}
              fontWeight="500"
              maxW="400"
              mx={["auto",null, "0"]}
              textAlign={["center", null, "left"]}
            >
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </Text>

            <Flex justify={["center", null, "flex-start"]} mt="25">
              <ActionButton text="Get Started" fontWeight="700" borderRadius="full" />
            </Flex>
          </Box>
          <Box w={["140%", null, "150%"]}>
            <Image
              src="images/illustration-working.svg"
              alt="working illustration "
              objectFit="cover"
              ml={["0", "70", "180"]}
            />
          </Box>
        </Flex>
      </ScreenWidth>
    </Box>
  );
};

export default Hero;
