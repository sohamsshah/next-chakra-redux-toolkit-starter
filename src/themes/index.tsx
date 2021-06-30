import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Inter, system-ui, sans-serif",
  },
  colors: {
    brand: {
      500: "#00F0FF",
    },
    black: {
      700: "#383838",
      800: "#2B2B2B",
      900: "#000000",
    },
  },
});
