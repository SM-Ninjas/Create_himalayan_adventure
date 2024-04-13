import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans } from "next/font/google";

import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/navbar/Header";

const inter = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`
       ${inter.className}
        max-w-screen relative mx-0 min-h-screen bg-gray-50 px-0`}
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
