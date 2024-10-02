"use client"
import localFont from "next/font/local";
import "./globals.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;

