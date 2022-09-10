import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import ActionButton from "./Form/ActionButton";
import ScreenWidth from "../Layout/ScreenWidth";
import {
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const link1 = [
    {
      name: "Link Shortening  ",
      href: "",
    },
    {
      name: " Branded Links",
      href: "",
    },
    {
      name: "Analytics",
      href: "",
    },
  ];

  const link2 = [
    {
      name: "Blog",
      href: "",
    },
    {
      name: "Developers",
      href: "",
    },
    {
      name: "Support",
      href: "",
    },
  ];
  const link3 = [
    {
      name: "About  ",
      href: "",
    },
    {
      name: "Our Team  ",
      href: "",
    },
    {
      name: " Careers",
      href: "",
    },
    {
      name: "Contact",
      href: "",
    },
  ];
  return (
    <Box bgColor="neutral.darkvio">
      <ScreenWidth>
        <Flex
          color="#fff"
          justify="space-between"
          flexDirection={["column", null, "row"]}
          align={["center", null, "flex-start"]}
          textAlign={["center", null, "left"]}
          pt={["30", null, 20]}
          pb={["15", null, 10]}
        >
          <Box mr={{ md: "2" }} textAlign={["center", null, "right"]}>
            <Image
              src="/images/logo.svg"
              alt="footer logo"
              className="white"
              filter="auto"
              invert={10}
              mb={[10, null, "20"]}
            />
          </Box>
          {/* ****************** SECond ROW ******** */}
          <Flex
            justifyContent={["center", null, "space-between"]}
            // align={["center", null, "flex-start"]}
            gap={[3, null, "14"]}
            flexDirection={["column", null, "row"]}
          >
            <Box>
              <Text fontWeight="700" mb="4">
                Features
              </Text>
              {link1.map(({ name, href }, i) => {
                return (
                  <NextLink href={href} passHref key={i}>
                    <Link
                      display="block"
                      color="neutral.grayvio"
                      fontSize="14px"
                      my="3"
                    >
                      {name}
                    </Link>
                  </NextLink>
                );
              })}
            </Box>
            <Box>
              <Text fontWeight="700" mb="4">
                Resources
              </Text>
              {link2.map(({ name, href }, i) => {
                return (
                  <NextLink href={href} passHref key={i}>
                    <Link
                      display="block"
                      color="neutral.grayvio"
                      fontSize="14px"
                      my="3"
                    >
                      {name}
                    </Link>
                  </NextLink>
                );
              })}
            </Box>
            <Box>
              <Text fontWeight="700" mb="4">
                Company
              </Text>
              {link3.map(({ name, href }, i) => {
                return (
                  <NextLink href={href} passHref key={i}>
                    <Link
                      display="block"
                      color="neutral.grayvio"
                      fontSize="14px"
                      my="3"
                    >
                      {name}
                    </Link>
                  </NextLink>
                );
              })}
            </Box>
          </Flex>
          {/* ****************** Third ROW ******** */}

          <Box ml="2">
            <Flex gap="7">
              <NextLink href="/" passHref>
                <Link
                  display="block"
                  color="neutral.grayvio"
                  fontSize="14px"
                  my="3"
                >
                  <FaFacebook fontSize="25" color="#fff" />
                </Link>
              </NextLink>

              <NextLink href="/" passHref>
                <Link
                  display="block"
                  color="neutral.grayvio"
                  fontSize="14px"
                  my="3"
                >
                  <FaTwitter fontSize="25" color="#fff" />
                </Link>
              </NextLink>

              <NextLink href="/" passHref>
                <Link
                  display="block"
                  color="neutral.grayvio"
                  fontSize="14px"
                  my="3"
                >
                  <FaPinterestP fontSize="25" color="#fff" />
                </Link>
              </NextLink>

              <NextLink href="/" passHref>
                <Link
                  display="block"
                  color="neutral.grayvio"
                  fontSize="14px"
                  my="3"
                >
                  <FaInstagram fontSize="25" color="#fff" />
                </Link>
              </NextLink>
            </Flex>
          </Box>
        </Flex>
      </ScreenWidth>
    </Box>
  );
};

export default Footer;
