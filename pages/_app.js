import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../component/NavBar";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
