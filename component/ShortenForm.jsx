import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import ScreenWidth from "../Layout/ScreenWidth";
import Form from "./Form/Form";
import History from "./history/History";
import HistoryCard from "./history/HistoryCard";

const ShortenForm = () => {
  const [newlink, setNewlink] = useState([]);

  return (
    // <Box my="50" >
    <ScreenWidth position="relative">
      {/* <Box mt="-95">
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
            <Form newlink={newlink} setNewlink={setNewlink} />
          </Box>
        </Box>
      </Box> */}
    </ScreenWidth>
    // </Box>
  );
};

export default ShortenForm;
