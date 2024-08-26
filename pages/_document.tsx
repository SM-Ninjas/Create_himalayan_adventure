import { Head, Html, Main, NextScript } from "next/document";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="hide-scrollbar mx-0 px-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
