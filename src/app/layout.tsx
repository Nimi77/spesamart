import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const jost = localFont({
  src: [
    {
      path: "./fonts/Jost-Regular.woff",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./fonts/Jost-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Jost-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Jost-Bold.woff",
      weight: "bold",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Buyo | Shop Quality Electronics, Fashion & More",
  description:
    "Discover electronics, fashion, and home essentials at Buyo. Shop now for unbeatable prices and fast shipping.",
  keywords:
    "electronics, fashion, home essentials, online shopping, Buyo Store",
  openGraph: {
    title: "Buyo | Shop Quality Electronics, Fashion & More",
    description:
      "Shop electronics, fashion, and more at unbeatable prices. Fast worldwide shipping.",
    url: "https://buyo.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
