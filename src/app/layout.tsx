// RootLayout.js

import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer"
const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight: ['400', '700'], // Include desired font weights
  style: ['normal', 'italic'], // Include desired font styles (normal, italic)
  subsets: ['latin'], // Specify language subset(s) to load
  display: 'swap', // Ensure fast text rendering
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
