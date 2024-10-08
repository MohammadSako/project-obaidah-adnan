import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "../components/layouts/navbar";
import Footer from "../components/layouts/footer";
import PageLine from "../components/UI/pageLine";
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
  title: "Obaidah Online Shop",
  description: "Obaidah Adnan Online Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageLine />
        <NavBar />
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
