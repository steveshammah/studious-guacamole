import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "../components/Header";
import AuthState from "../contexts/AuthState";
import { CookiesPreference } from "../components/CookiesPreference";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthState>
      <ChakraProvider>
        <Header />
        <Component {...pageProps} />
        <CookiesPreference />
      </ChakraProvider>
    </AuthState>
  );
}

export default MyApp;
