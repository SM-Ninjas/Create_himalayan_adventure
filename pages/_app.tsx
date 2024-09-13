import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans } from "next/font/google";


import Footer from "@/components/ui/Footer";
import ToTop from "@/components/ui/ToTop";
import Header from "@/components/ui/navbar/Header";
import Head from "next/head";
import "swiper/css";
import ContactLinks from "@/components/ui/contactLink";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const inter = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={new QueryClient}>
      <Head>
        <title>Create Himalayan Adventure</title>
        <meta name="description" content="Create Himalayan Trek" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" className="logo" type="image/svg+xml" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <main
        className={`
          ${inter.className}
          relative mx-0 min-h-screen max-w-screen bg-gray-50 px-0`}
          >
        <Header />
        <Component {...pageProps} />
        <ToTop />
        <ContactLinks />
        <Footer />
      </main>
        </QueryClientProvider>
    </>
  );
}
