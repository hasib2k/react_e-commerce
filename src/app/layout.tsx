import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Buyble - Modern E-commerce Platform",
  description: "Buyble: Your premier destination for electronics, accessories, and gadgets. Modern e-commerce platform built with React and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <CartProvider>
          <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
            <Navbar />
            <main className="container mx-auto px-2 md:px-4 max-w-7xl">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
