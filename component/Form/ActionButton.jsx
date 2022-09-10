import { Button } from "@chakra-ui/react";
import React from "react";

const ActionButton = ({ text, ...props }) => {
    return (
        <Button
            {...props}
            px="8"
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            href={"#"}
            bgColor="brand.cyan"
            _hover={{
                opacity: "0.5",
            }}
            // borderRadius="full"
        >
            {text}
        </Button>
    );
};

export default ActionButton;
