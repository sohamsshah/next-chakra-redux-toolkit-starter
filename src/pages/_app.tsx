import '../styles/globals.css'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import store from '../store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </ChakraProvider>
  )
}

export default MyApp
