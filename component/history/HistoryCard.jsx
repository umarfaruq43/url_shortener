import { Box, Button, Divider, Flex, Text, useToast } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import ActionButton from "../Form/ActionButton";

const HistoryCard = ({ longLink, shortLink }) => {
  const [copied, setCopied] = useState(false);
  const toast = useToast();

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Text Copied",
      position: "top",
      duration: 1000,
      bgColor: "brand.cyan",
    });
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };
  return (
    <Flex
      align="center"
      bgColor="#fff"
      my="5"
      borderRadius="8"
      gap=""
      flexDir={["column", null, "row"]}
      py={["4", null, "3"]}
      px={[0, null, "5"]}
    >
      <Text
        noOfLines="1"
        w="full"
        fontWeight="500"
        color="neutral.darkvio"
        fontSize="16"
        px="4"
        mb="1"
      >
        {longLink}
      </Text>
      <Divider display={["block", null, "none"]} />

      <Flex
        px={[4, null, 0]}
        mt={[2, null, 0]}
        w="full"
        align={["flex-start", null, "center"]}
        justify="flex-end"
        gap={[1, null, "5"]}
        flexDirection={["column", null, "row"]}
      >
        <Text color="brand.cyan" fontWeight="500" fontSize="16">
          {shortLink}
        </Text>

        <Button
          borderRadius="5"
          w={["full", null, "100px"]}
          bgColor={copied ? "brand.dv" : "brand.cyan"}
          onClick={() => copyToClipboard(shortLink)}
          color="#fff"
          fontWeight="700"
          fontSize="14"
          fontFamily="pop"
          _hover={{ bgColor: "" }}
          _focus={{ bgColor: "" }}
          // _disabled={{ opacity: "1" }}
          // disabled={copied ? true : false}
        >
          {copied ? "Copied!" : "Copy"}
        </Button>
      </Flex>
    </Flex>
  );
};

export default HistoryCard;
