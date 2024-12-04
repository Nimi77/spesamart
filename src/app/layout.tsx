import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import jost from "./fonts/jost";
import "./globals.css";

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
        <div id="main" role="main">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
