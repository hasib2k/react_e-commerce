import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "React E-commerce Platform",
  description: "Modern e-commerce frontend built with React and Next.js",
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
        {children}
      </body>
    </html>
  );
}
