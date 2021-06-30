import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./../themes/index";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import store from "./../feature/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
