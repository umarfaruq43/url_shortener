import { Box } from "@chakra-ui/react";
import React from "react";

const ScreenWidth = ({ children, ...props }) => {
  return (
    <Box {...props} maxWidth="1140px" py="4" px="4" mx="auto" fontFamily="pop">
      {children}
    </Box>
  );
};

export default ScreenWidth;
