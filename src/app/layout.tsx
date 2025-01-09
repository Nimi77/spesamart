import { AuthProvider, QueryProvider } from '@/libs/provider';
import Header, { TopHeader } from '@/components/Header';
import Footer from '@/components/Footer';
import afacad from './fonts/afacad';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SpesaMart | Discover Quality Products',
  description:
    'SpesaMart offers a curated selection of fashion, electronics, and home essentials. Enjoy fast-delivery, secure payments, and exceptional customer service.',
  keywords:
    'ecommerce, online-shoping, quality-products, fashion, electronics, store',
  openGraph: {
    title: 'SpesapMart | Discover Quality Products',
    description: 'Shop electronics, fashion, and more at unbeatable prices.',
    url: 'https://spesamart.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={afacad.className}>
        <AuthProvider>
          <QueryProvider>
            <TopHeader />
            <Header />
            <div id="main" role="main">
              {children}
            </div>
            <Footer />
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
