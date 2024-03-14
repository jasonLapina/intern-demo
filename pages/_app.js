import "@/styles/globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Box pb='80px'>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
