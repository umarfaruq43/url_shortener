import React, { useEffect } from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Flex,
    Text,
    Box,
    Spinner,
    Toast,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import History from "../history/History";
import HistoryCard from "../history/HistoryCard";
import ScreenWidth from "../../Layout/ScreenWidth";

// Function to check if the input link is a valid one.
const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
        "^(https?:\\/\\/)?" + // validate protocol
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
            "(\\#[-a-z\\d_]*)?$",
        "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
};

const Form = ({}) => {
    // useContexts
    const toast = useToast();
    // const links = [];

    // States
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState("");
    const [Err, setErr] = useState(false);
    const [newlink, setNewlink] = useState([]);
    //function to update the input component
    const handleInputChange = (e) => setInput(e.target.value);
    //
    const handleSubmit = (e) => {
        e.preventDefault();

        if (input === "" || !isValidUrl(input)) {
            setErr(true);
            setTimeout(() => {
                setErr(false);
            }, 3000);
        } else {
            setLoading(true);
            fetch(`https://api.shrtco.de/v2/shorten?url=${input}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.error);
                    setLoading(false);
                    setInput("");
                    {
                        data && data.error
                            ? toast({
                                  title: "😲😲😲",
                                  description:
                                      "The link you entered is a disallowed link.",
                                  status: "error",
                                  duration: 2000,
                                  position: "top",
                              })
                            : toast({
                                  title: "Yo! 😎",
                                  description:
                                      "Your link have been shorten successfully 😌",
                                  status: "success",
                                  duration: 2000,
                                  position: "top",
                              });
                    }

                    setNewlink([
                        ...newlink,
                        {
                            shortLink: data.result.full_short_link,
                            longLink: data.result.original_link,
                        },
                    ]);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                    //     toast({
                    //         title: "😰😰😰",
                    //         description:
                    //             "An error was encountered, Unable to perform ",
                    //         status: "error",
                    //         duration: 4000,
                    //         position: "top",
                    //     });

                    console.log(err);
                });
        }
    };
    // console.log(newlink);
    useEffect(() => {
        const initialLinks = JSON.parse(localStorage.getItem("links"));
        if (initialLinks.length != 0) {
            setNewlink(initialLinks);
        }
    }, []);
    useEffect(() => {
        setNewlink;
        const initialLinks = JSON.parse(localStorage.getItem("links"));
        // if (initialLinks.length !== 0) {
        //   setNewlink(initialLinks);
        // } else {
        //   // setNewlink([]);
        // }
        localStorage.setItem("links", JSON.stringify(newlink));
    }, [newlink]);

    return (
        <ScreenWidth position="relative">
            <Box>
                <Box mt="-95">
                    <Box
                        border="3"
                        borderColor="red"
                        display="flex"
                        bgImage="images/bg-shorten-desktop.svg"
                        minH="170"
                        bgColor="brand.dv"
                        bgPos="center"
                        bgSize="cover"
                        bgRepeat="no-repeat"
                        borderRadius="12"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Box w="80%" mx="auto">
                            <form onSubmit={handleSubmit}>
                                <FormControl>
                                    <Flex
                                        gap={["4", null, "7"]}
                                        flexDir={["column", null, "row"]}
                                    >
                                        <Box w="100%">
                                            <Input
                                                type="text"
                                                value={input}
                                                placeholder="Shorten a link here..."
                                                onChange={handleInputChange}
                                                py="6"
                                                bgColor="#fff"
                                                _focus={{
                                                    borderColor: Err
                                                        ? "red"
                                                        : "brand.cyan",
                                                    outline: "4",
                                                }}
                                                borderColor={
                                                    Err ? "red" : "transparent"
                                                }
                                                color={
                                                    Err
                                                        ? "brand.red"
                                                        : "neutral.darkvio"
                                                }
                                            />
                                            {!Err ? (
                                                ""
                                            ) : (
                                                <Text
                                                    m="0"
                                                    p="0"
                                                    fontSize="12"
                                                    // fontStyle=""
                                                    color="brand.red"
                                                    mt="1"
                                                >
                                                    Please input a valid link.🌝
                                                </Text>
                                            )}
                                        </Box>

                                        <Button
                                            py="6"
                                            px="7"
                                            type="submit"
                                            color="#fff"
                                            bgColor="brand.cyan"
                                            _hover={{ bgColor: "brand.cyan" }}
                                            minW="100px"
                                            // onClick=
                                        >
                                            {/**/}

                                            {loading ? (
                                                <Spinner />
                                            ) : (
                                                "Shorten it!"
                                            )}
                                        </Button>
                                    </Flex>
                                </FormControl>
                            </form>
                        </Box>
                    </Box>
                </Box>
                {/*   History */}
                {newlink &&
                    newlink
                        .slice(newlink.length - 3, newlink.length)
                        .reverse()
                        .map(({ longLink, shortLink }, i) => {
                            return (
                                <div key={i}>
                                    <HistoryCard
                                        shortLink={shortLink}
                                        longLink={longLink}
                                    />
                                </div>
                            );
                        })}
            </Box>
        </ScreenWidth>
    );
};
export default Form;
