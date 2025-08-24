"use client";

import Image from "next/image";
import Link from "next/link";

// ✅ Custom utility for outlined text
const outlinedText = "drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]";

export default function BentoGrid({ onClose }: { onClose?: () => void }) {
  return (
    <section className=" min-h-screen flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-6xl">
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-3 
            auto-rows-[180px] 
            md:auto-rows-[220px] 
            lg:auto-rows-[200px] 
            gap-4 
            bg-[#2D2D2D] 
            p-4 
            rounded-3xl
          "
        >
          {/* Top Left */}
          <Link
            href="/about"
            onClick={onClose}
            className="relative rounded-2xl overflow-hidden shadow-lg group col-span-1 row-span-1"
          >
            <Image src="/bento/farming.png" alt="Farming" fill className="object-cover" />
            <div
              className={`absolute bottom-4 left-4 md:bottom-6 md:left-6 
                text-white font-dm-sans font-bold text-lg md:text-xl tracking-wide 
                opacity-90 transition-all duration-500 ${outlinedText} 
                group-hover:left-1/2 group-hover:top-1/2 
                group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 
                group-hover:text-center group-hover:opacity-100`}
            >
              ABOUT
            </div>
          </Link>

          {/* Top Middle */}
          <Link
            href="/"
            onClick={onClose}
            className="relative rounded-2xl overflow-hidden shadow-lg group col-span-1 row-span-1"
          >
            <Image src="/bento/astronomy.png" alt="Astronomy" fill className="object-cover" />
            <div className={`absolute bottom-4 left-4 md:bottom-6 md:left-6 
              text-white font-dm-sans font-bold text-lg md:text-xl tracking-wide 
              opacity-90 transition-all duration-500 ${outlinedText} 
              group-hover:left-1/2 group-hover:top-1/2 
              group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 
              group-hover:text-center group-hover:opacity-100`}
            >
              EVENTS
            </div>
          </Link>

          {/* Top Right (Tall) */}
          <Link
            href="/hackathons"
            onClick={onClose}
            className="relative rounded-2xl overflow-hidden shadow-lg group col-span-1 row-span-1 md:row-span-2"
          >
            <Image src="/bento/evolution.png" alt="Evolution" fill className="object-cover" />
            <div className={`absolute bottom-4 left-4 md:bottom-6 md:left-6 
              text-white font-dm-sans font-bold text-lg md:text-xl tracking-wide 
              opacity-90 transition-all duration-500 ${outlinedText} 
              group-hover:left-1/2 group-hover:top-1/2 
              group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 
              group-hover:text-center group-hover:opacity-100`}
            >
              HACKATHONS / WORKSHOPS
            </div>
          </Link>

          {/* Middle Left (Tall) */}
          <Link
            href="/schedule"
            onClick={onClose}
            className="relative rounded-2xl overflow-hidden shadow-lg group col-span-1 row-span-1 md:row-span-2"
          >
            <Image src="/bento/industry.png" alt="Industrial Revolution" fill className="object-cover" />
            <div className={`absolute bottom-4 left-4 md:bottom-6 md:left-6 
              text-white font-dm-sans font-bold text-lg md:text-xl tracking-wide 
              opacity-90 transition-all duration-500 ${outlinedText} 
              group-hover:left-1/2 group-hover:top-1/2 
              group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 
              group-hover:text-center group-hover:opacity-100`}
            >
              SCHEDULE
            </div>
          </Link>

          {/* Middle */}
          <Link
            href="/sponsors"
            onClick={onClose}
            className="relative rounded-2xl overflow-hidden shadow-lg group col-span-1 row-span-1"
          >
            <Image src="/bento/moon.png" alt="Moon Landing" fill className="object-cover" />
            <div className={`absolute bottom-4 left-4 md:bottom-6 md:left-6 
              text-white font-dm-sans font-bold text-lg md:text-xl tracking-wide 
              opacity-90 transition-all duration-500 ${outlinedText} 
              group-hover:left-1/2 group-hover:top-1/2 
              group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 
              group-hover:text-center group-hover:opacity-100`}
            >
              SPONSORS
            </div>
          </Link>

          {/* Bottom Middle */}
          <Link
            href="/hospitality"
            onClick={onClose}
            className="relative rounded-2xl overflow-hidden shadow-lg group col-span-1 row-span-1"
          >
            <Image src="/bento/nuclear.png" alt="Nuclear Explosion" fill className="object-cover" />
            <div className={`absolute bottom-4 left-4 md:bottom-6 md:left-6 
              text-white font-dm-sans font-bold text-lg md:text-xl tracking-wide 
              opacity-90 transition-all duration-500 ${outlinedText} 
              group-hover:left-1/2 group-hover:top-1/2 
              group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 
              group-hover:text-center group-hover:opacity-100`}
            >
              HOSPITALITY
            </div>
          </Link>

          {/* Bottom Right */}
          <Link
            href="/gallery"
            onClick={onClose}
            className="relative rounded-2xl overflow-hidden shadow-lg group col-span-1 row-span-1"
          >
            <Image src="/bento/map.png" alt="Historical Map" fill className="object-cover" />
            <div className={`absolute bottom-4 left-4 md:bottom-6 md:left-6 
              text-white font-dm-sans font-bold text-lg md:text-xl tracking-wide 
              opacity-90 transition-all duration-500 ${outlinedText} 
              group-hover:left-1/2 group-hover:top-1/2 
              group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 
              group-hover:text-center group-hover:opacity-100`}
            >
              GALLERY
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
