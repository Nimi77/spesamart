import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buyo | Shop Quality Electronics, Fashion & More",
  description: "Discover electronics, fashion, and home essentials at Buyo. Shop now for unbeatable prices and fast shipping.",
  keywords: "electronics, fashion, home essentials, online shopping, Buyo Store",
  openGraph: {
    title: "Buyo | Shop Quality Electronics, Fashion & More",
    description: "Shop electronics, fashion, and more at unbeatable prices. Fast worldwide shipping.",
    url: "https://buyo.vercel.app"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}