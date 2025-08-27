"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import BentoGrid from "./BentoGrid";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // New state to track scroll position past 500px
  const [scrolledPast500, setScrolledPast500] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if user has scrolled more than 10px
      setScrolled(window.scrollY > 10);
      // Set new state to true if user has scrolled more than 500px
      setScrolledPast500(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHome = pathname === "/";
  const isTransparent = scrolled || isHome;

  // Logic to determine if the mobile logo should be visible
  // It's visible if:
  // 1. We are NOT on the home page OR
  // 2. We ARE on the home page AND have scrolled past 500px
  const showMobileLogo = !isHome || (isHome && scrolledPast500);

  const navbarStyle = isTransparent
    ? "bg-black/50 backdrop-blur-md"
    : "bg-[#0D001A] shadow-md";

  const paddingStyle = isTransparent ? "py-1 sm:py-2" : "py-0 sm:py-3";

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 flex items-center justify-between transition-all duration-300 ${navbarStyle} ${paddingStyle}`}
      >
        {/* Left - Menu + Invente Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition"
          >
            <Menu size={28} className="text-white" />
          </button>
          <Link href="/">
            <Image
              src="/logos/invente.png"
              alt="Invente Logo"
              width={122}
              height={40}
              className="h-auto w-auto ml-0 sm:ml-4 hidden sm:block"
            />
          </Link>
        </div>

        {/* Mobile Invente Logo - Visibility now conditional */}
        <Link href="/">
          <Image
            src="/logos/invente.png"
            alt="Invente Logo"
            width={122}
            height={40}
            className={`h-auto w-auto sm:hidden transition-opacity duration-300 ${
              showMobileLogo ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>

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
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-20">
          <BentoGrid onClose={() => setMenuOpen(false)} />
        </div>
      </div>
    </>
  );
}