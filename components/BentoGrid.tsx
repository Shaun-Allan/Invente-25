"use client";

import Image from "next/image";
import Link from "next/link";

// This is a great utility class for text visibility!
const outlinedText =
  "drop-shadow-[0_0_6px_rgba(255,255,255,0.9)] drop-shadow-[0_0_12px_rgba(155,0,255,0.8)]";

export default function BentoGrid({ onClose }: { onClose?: () => void }) {
  return (
    <section className="relative min-h-screen flex items-start md:items-center justify-center p-4 md:p-6 overflow-y-auto">

      {/* Background */}
      <Image
        src="/bento/bg.jpg"
        alt="Background"
        fill
        priority
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/80 -z-10" />

      {/* Grid Container */}
      <div className="w-full max-w-7xl mx-auto">
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-10
            auto-rows-[30vw]
            sm:auto-rows-[30vw]
            md:auto-rows-[18vw]
            lg:auto-rows-[240px]
            gap-4
          "
        >
          {/* All Events */}
          <Link
            href="/#events"
            onClick={onClose}
            className="relative col-span-2 md:col-span-5 overflow-hidden shadow-lg group border-2 border-transparent hover:border-white"
          >
            <Image
              src="/bento/events.png"
              alt="All Events"
              fill
              className="object-cover"
            />
            <div
              className={`absolute bottom-4 left-4 
                text-white font-orbitron font-bold text-lg lg:text-xl tracking-wide 
                ${outlinedText}`}
            >
              ALL EVENTS
            </div>
          </Link>

          {/* About */}
          <Link
            href="/about"
            onClick={onClose}
            className="relative col-span-1 md:col-span-3 overflow-hidden shadow-lg group border-2 border-transparent hover:border-white"
          >
            <Image
              src="/bento/about.png"
              alt="About"
              fill
              className="object-cover"
            />
            <div
              className={`absolute bottom-4 left-4 
                text-white font-orbitron font-bold text-lg lg:text-xl tracking-wide 
                ${outlinedText}`}
            >
              ABOUT
            </div>
          </Link>

          {/* Gallery */}
          <Link
            href="/gallery"
            onClick={onClose}
            className="relative col-span-1 md:col-span-2 overflow-hidden shadow-lg group border-2 border-transparent hover:border-white"
          >
            <Image
              src="/bento/gallery.png"
              alt="Gallery"
              fill
              className="object-cover object-[50%_18%] md:object-top"
            />
            <div
              className={`absolute bottom-4 left-4 
                text-white font-orbitron font-bold text-lg lg:text-xl tracking-wide 
                ${outlinedText}`}
            >
              GALLERY
            </div>
          </Link>

          {/* Hackathons & Workshops */}
          <Link
            href="/hackathons"
            onClick={onClose}
            className="relative col-span-2 overflow-hidden shadow-lg group border-2 border-transparent hover:border-white"
          >
            <Image
              src="/bento/hackathons.png"
              alt="Hackathons & Workshops"
              fill
              className="object-cover object-[0%_30%] md:object-center"
            />
            <div
              className={`absolute bottom-4 left-4 
                text-white font-orbitron font-bold text-base lg:text-lg tracking-wide 
                ${outlinedText}`}
            >
              HACKATHONS & WORKSHOPS
            </div>
          </Link>

          {/* Schedule */}
          <Link
            href="/schedule"
            onClick={onClose}
            className="relative col-span-1 md:col-span-2 overflow-hidden shadow-lg group border-2 border-transparent hover:border-white"
          >
            {/* Note: Your filename is 'shcedule.png', which seems to be a typo. */}
            <Image
              src="/bento/shcedule.png"
              alt="Schedule"
              fill
              className="object-cover"
            />
            <div
              className={`absolute bottom-4 left-4 
                text-white font-orbitron font-bold text-lg lg:text-xl tracking-wide 
                ${outlinedText}`}
            >
              SCHEDULE
            </div>
          </Link>

          {/* Hospitality */}
          <Link
            href="/hospitality"
            onClick={onClose}
            className="relative col-span-1 md:col-span-4 overflow-hidden shadow-lg group border-2 border-transparent hover:border-white"
          >
            <Image
              src="/bento/hospitality.png"
              alt="Hospitality"
              fill
              className="object-cover"
            />
            <div
              className={`absolute bottom-4 left-4 
                text-white font-orbitron font-bold text-lg lg:text-xl tracking-wide 
                ${outlinedText}`}
            >
              HOSPITALITY
            </div>
          </Link>

          {/* Sponsors */}
          <Link
            href="/sponsors"
            onClick={onClose}
            className="relative col-span-2 overflow-hidden shadow-lg group border-2 border-transparent hover:border-white"
          >
            <Image
              src="/bento/sponsors.png"
              alt="Sponsors"
              fill
              className="object-cover"
            />
            <div
              className={`absolute bottom-4 left-4 
                text-white font-orbitron font-bold text-lg lg:text-xl tracking-wide 
                ${outlinedText}`}
            >
              SPONSORS
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}