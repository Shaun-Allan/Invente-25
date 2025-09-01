"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Menu,
  LayoutGrid,
  Info,
  TerminalSquare,
  Clock,
  Home,
  HeartHandshake,
  Image as ImageIcon,
} from "lucide-react";
import BentoGrid from "./BentoGrid";

// Navigation items with icons, derived from your BentoGrid
const navItems = [
  { name: "Events", href: "/#events", icon: LayoutGrid },
  { name: "About", href: "/about", icon: Info },
  { name: "Hackathons", href: "/hackathons", icon: TerminalSquare },
  { name: "Schedule", href: "/schedule", icon: Clock },
  { name: "Hospitality", href: "/hospitality", icon: Home },
  { name: "Sponsors", href: "/sponsors", icon: HeartHandshake },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  // This state is no longer needed for styling but kept for logic if you need it elsewhere
  const [scrolled, setScrolled] = useState(false); 
  const [scrolledPast100, setScrolledPast100] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setScrolledPast100(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  
  // Simplified style logic
  const navbarStyle = isHome ? "bg-black/50 backdrop-blur-md" : "bg-[#0D001A] shadow-md";
  const paddingStyle = "py-2"; // This was the same in all conditions

  // ✅ New logic to determine logo visibility on desktop homepage
  const showDesktopLogos = !isHome || (isHome && scrolledPast100);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarStyle} ${paddingStyle}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          
          {/* Left Side: Mobile Menu Button & Main Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={28} className="text-white" />
            </button>
            {/* ✅ Invente logo now fades in on desktop homepage scroll */}
            <Link 
              href="/" 
              className={`flex-shrink-0 hidden sm:block transition-opacity duration-300 ${showDesktopLogos ? 'opacity-100' : 'lg:opacity-0'}`}
            >
              <Image
                src="/logos/invente.png"
                alt="Invente Logo"
                width={122}
                height={40}
                className="h-auto w-28 sm:w-32"
              />
            </Link>
          </div>
          
          {/* Center: Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center font-orbitron text-sm
                      ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeDesktopTab"
                        className="absolute inset-0 bg-purple-500/20 border border-purple-400/30 rounded-lg -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side: University Logos */}
          {/* ✅ University logos now fade in on desktop homepage scroll */}
          <div 
            className={`flex items-center gap-6 transition-opacity duration-300 ${showDesktopLogos ? 'opacity-100' : 'opacity-0'}`}
          >
            <Link href="https://www.snu.edu.in/" target="_blank" className="hidden sm:block">
              <Image
                src="/logos/snu.svg"
                alt="SNU Logo"
                width={80}
                height={40}
                className="h-[40px] w-auto"
              />
            </Link>
            <Link href="https://www.ssn.edu.in/" target="_blank" className="hidden sm:block">
              <Image
                src="/logos/ssn.svg"
                alt="SSN Logo"
                width={80}
                height={40}
                className="h-[40px] w-auto"
              />
            </Link>
            <Link 
              href="/" 
              className={`flex-shrink-0 transition-opacity duration-300 block sm:hidden ${showDesktopLogos ? 'opacity-100' : 'lg:opacity-0'}`}
            >
              <Image
                src="/logos/invente.png"
                alt="Invente Logo"
                width={122}
                height={40}
                className="h-auto w-28 sm:w-32"
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Bento Grid Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-md z-40 transition-opacity duration-500 ease-in-out lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-24 h-full overflow-y-auto">
          <BentoGrid onClose={() => setMenuOpen(false)} />
        </div>
      </div>
    </>
  );
}