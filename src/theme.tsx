import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "5px",

  color: {
    main: "#9c130e",
    // secondary: "magenta",
    text: "#121212",
    bgColor: "f9f6ee",
  },

  // mobile: "576px",
  // mobile: "900px",
  breakpoint: {
    xs: "400px", // for small screen mobile
    sm: "600px", // for mobile screen
    md: "900px", // for tablets
    lg: "1280px", // for laptops
    xl: "1440px", // for desktop / monitors
    xxl: "1920px", // for big screens
  },
};

export { theme };
