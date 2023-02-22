import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
