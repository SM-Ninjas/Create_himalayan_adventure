import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Noto_Sans } from "next/font/google";

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
        relative min-h-screen overflow-x-hidden bg-gray-100`}
    >
      <Header />
      <Component {...pageProps} />
    </main> 
  )
}
