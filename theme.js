import { extendTheme } from "@chakra-ui/react";
const colors = {
  brand: {
    cyan: "hsl(180, 66%, 49%)",
    dv: "hsl(257, 27%, 26%)",
    red: "hsl(0, 87%, 67%)",
  },
  neutral: {
    gray: "#eff1f7",
    grayvio: "hsl(257, 7%, 63%)",
    darkblue: "hsl(255, 11%, 22%)",
    darkvio: "hsl(260, 8%, 14%)",
  },
};
const breakpoints = {
  sm: "375px",
  md: "680px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({
  colors,
  breakpoints,
  fonts: {
    pop: `poppins, sans-serif`,
  },
});

export default theme;
