import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans } from "next/font/google";

import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/navbar/Header";
import Head from "next/head";

const inter = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="description" content="Create Himalayan Trek" />
      </Head>
      <main
        className={`
        ${inter.className}
          relative mx-0 min-h-screen w-screen bg-gray-50 px-0`}
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
