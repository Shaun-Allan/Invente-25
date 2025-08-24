"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import BentoGrid from "./BentoGrid";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Transparent only on home page
  const isHome = pathname === "/";
  const navbarStyle = isHome
    ? "bg-black/50 backdrop-blur-md"
    : "bg-[#1E0F0A] shadow-md";

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 py-0 sm:py-3 flex items-center justify-between transition-colors duration-300 ${navbarStyle}`}
      >
        {/* Left - Menu + Invente Logo */}
        <div className="flex items-center gap-4">
          {/* Menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition"
          >
            <Menu size={28} className="text-white" />
          </button>

          {/* Invente Logo */}
          <Link href="/">
            <Image
              src="/logos/invente.png"
              alt="Invente Logo"
              width={122}
              height={40}
              className="h-auto w-auto ml-0 sm:ml-4"
            />
          </Link>
        </div>

        {/* Right - SNU & SSN Logos (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/">
            <Image
              src="/logos/snu.svg"
              alt="SNU Logo"
              width={100}
              height={40}
              className="h-[60px] w-auto"
            />
          </Link>
          <Link href="/">
            <Image
              src="/logos/ssn.svg"
              alt="SSN Logo"
              width={100}
              height={40}
              className="h-[60px] w-auto"
            />
          </Link>
        </div>
      </nav>

      {/* Fade-in Bento Grid Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-md z-40 transition-opacity duration-500 ease-in-out ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-20">
          <BentoGrid onClose={() => setMenuOpen(false)} />
        </div>
      </div>
    </>
  );
}
