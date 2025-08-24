import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  DM_Sans,
  Instrument_Serif,
  Playfair_Display,
  Poppins,
} from "next/font/google";
import "./globals.css";

// 🟤 Import Navbar & Footer
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper"; // ✅ new wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Invente 2025 - Chrono Shift",
  description:
    "Invente 2025: Imagine. Create. Inspire. - SSN College of Engineering Tech Festival",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${dmSans.variable}
          ${instrumentSerif.variable}
          ${playfairDisplay.variable}
          ${poppins.variable}
          antialiased
          bg-[#DEE8CE]
        `}
      >
        <Navbar />

        {/* ✅ Wrapper decides padding */}
        <PageWrapper>{children}</PageWrapper>

        <Footer />
      </body>
    </html>
  );
}
