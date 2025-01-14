import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "../components/layouts/navbar";
import Footer from "../components/layouts/footer";
import PageLine from "../components/UI/pageLine";
import { Suspense } from "react";
import Loading from "./loading";
import { Toaster } from "@/components/UI/toaster";
import { montserrat, angelo, playfair } from "./fonts/fonts";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Obaidah Shop",
  description:
    "Browse & discover many of products. we ship to you. Shop top brands in clothing and more.",
  category: "e-commerce",
  metadataBase: new URL("https://project-obaidah-adnan.vercel.app/"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${angelo.variable} ${playfair.variable}`}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageLine />
        <Toaster />
        <NavBar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
