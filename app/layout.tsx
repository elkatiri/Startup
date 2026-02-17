import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/page";
import Navbar from "./components/navbar/page";
import { FloatingContact } from "./components/ui/floating-contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StartUp — Your partner in digital innovation",
  description: "We build powerful websites, mobile apps, and SaaS platforms for modern businesses. Next.js, React, Laravel, Flutter.",
  openGraph: {
    title: "StartUp — Your partner in digital innovation",
    description: "We build powerful websites, mobile apps, and SaaS platforms for modern businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}