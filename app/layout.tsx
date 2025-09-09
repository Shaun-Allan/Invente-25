import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  DM_Sans,
  Instrument_Serif,
  Playfair_Display,
  Poppins,
  Orbitron,
  Michroma,
  Exo_2,
  Space_Grotesk,
  Rubik_Glitch,
  Parisienne, // âœ… Added
} from "next/font/google";

import "./globals.css";

// ðŸŸ¤ Import Navbar & Footer
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper"; // âœ… new wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const parisienne = Parisienne({
  variable: "--font-parisienne",
  weight: ["400"], // only one weight available
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

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: ["400"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// âœ… Add Rubik Glitch
const rubikGlitch = Rubik_Glitch({
  variable: "--font-rubik-glitch",
  subsets: ["latin"],
  weight: ["400"], // only one weight
});

export const metadata: Metadata = {
  title: "Invente 2025 - Chrono Shift",
  description: "Invente 2025: Imagine. Create. Inspire. - SSN College of Engineering Tech Festival",
  icons: {
    icon: '/favicon.png',       // main icon
    shortcut: '/favicon.png',   // shortcut for older browsers
    apple: '/favicon.png',      // optional Apple touch icon
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`
    ${geistSans.variable}
    ${geistMono.variable}
    ${dmSans.variable}
    ${instrumentSerif.variable}
    ${playfairDisplay.variable}
    ${poppins.variable}
    ${orbitron.variable}
    ${michroma.variable}
    ${exo2.variable}
    ${spaceGrotesk.variable}
    ${rubikGlitch.variable}
    ${parisienne.variable} /* âœ… Added */
    antialiased bg-black bg-app-grid text-white selection:bg-purple-500/30 selection:text-white
  `}
      >

        <Navbar />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
