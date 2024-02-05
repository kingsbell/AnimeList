import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/index";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SLH Anime List",
  description: "Soleh Wahyu Pratama",
  icons: {
    icon: ["/favicon.ico?v=2"],
    apple: ["/apple-touch-icon.png?=v2"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        {/* Menambahkan tag <link> untuk mengganti favicon */}
        <link rel="icon" href="/src/components/Img/logo.png" />
      </Head>
      <html lang="en">
        <body className={`${inter.className} dark:bg-dark`} suppressHydrationWarning={true}>
          <Navbar></Navbar>
          {children}
        </body>
      </html>
    </>
  );
}
