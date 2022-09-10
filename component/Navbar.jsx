import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Divider,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import ScreenWidth from "../Layout/ScreenWidth";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <ScreenWidth>
      <Box>
        <Flex minH={"60px"} py={{ base: 2 }} align={"center"}>
          <Flex flex={{ md: 1 }} justify={{ base: "center", md: "start" }}>
            <Text>
              <Image src="/images/logo.svg" alt="logo" />
            </Text>

            <Flex align="center" display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            align="center"
          >
            <Button
              display={{ base: "none", md: "inline-flex" }}
              as={"a"}
              fontSize={"sm"}
              fontWeight={500}
              variant={"link"}
              href={"#"}
              color="neutral.grayvio"
              _hover={{
                textDecoration: "none",
                color: "neutral.darkvio",
              }}
            >
              Login
            </Button>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              px="8"
              fontSize={"sm"}
              fontWeight={500}
              color={"white"}
              bg={"pink.400"}
              href={"#"}
              bgColor="brand.cyan"
              _hover={{
                opacity: "0.5",
              }}
              borderRadius="full"
            >
              Sign Up
            </Button>
          </Stack>

          <Flex
            //   flex={{ base: 1, md: "auto" }}
            //   mr={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <GrClose w={3} h={3} /> : <FaBars w={5} h={5} />}
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </ScreenWidth>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            px={2}
            href={navItem.href ?? "#"}
            fontSize={"sm"}
            fontWeight={500}
            color="neutral.grayvio"
            _hover={{
              textDecoration: "none",
              color: "neutral.darkvio",
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          {/* <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} /> */}
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
      position="absolute"
      bgColor="brand.dv"
      right="10"
      left="10"
      borderRadius="8px"
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}

      <Divider pt="2" />

      <Button
        // display={{ base: "none", md: "inline-flex" }}
        px="8"
        fontSize={"sm"}
        fontWeight={500}
        color={"white"}
        bg="transparent"
        _hover={{ bg: "transparent" }}
        _focus={{ bg: "transparent" }}
        href={"#"}
        w="full"
      >
        Login
      </Button>
      <Button
        // display={{ base: "none", md: "inline-flex" }}
        px="8"
        mt="3"
        fontSize={"sm"}
        fontWeight={500}
        color={"white"}
        bg={"pink.400"}
        href={"#"}
        bgColor="brand.cyan"
        _hover={{
          opacity: "0.5",
        }}
        borderRadius="full"
        w="full"
      >
        Sign Up
      </Button>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color="#fff" textAlign="center" w="100%">
          {label}
        </Text>
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {/* {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))} */}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Features",
    href: "#",
  },
  {
    label: "Pricing",
    href: "#",
  },
  {
    label: "Resources",
    href: "#",
  },
];
