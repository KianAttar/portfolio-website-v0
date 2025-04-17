import "@/styles/scss/styles.scss";
import "@/styles/swiper-bundle.min.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Head from "next/head";
import React from "react";
import NavProvider from "@/components/context/NavContext";
import {ThemeProvider} from "@/components/context/ThemeContext";
export default function App({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: Record<string, any>;
}) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <meta name="apple-mobile-web-app-title" content="Hassan's Portfolio"/>
        <meta name="application-name" content="Hassan's Portfolio"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-config" content="/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <NavProvider>
        <ThemeProvider>
          <Header/>
          <main className="main">
            <Component {...pageProps} />
          </main>
          <Footer/>
        </ThemeProvider>
      </NavProvider>
    </>
  );
}
