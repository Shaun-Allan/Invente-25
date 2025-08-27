import React from "react";
import Image from "next/image";

export default function StayTunedPage() {
  return (
    <div
      className="relative min-h-screen w-full flex flex-col bg-cover bg-center text-white"
      style={{ backgroundImage: 'url("/sponsors/bg.png")' }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/90"></div>

      {/* Header section for the title */}
      <header className="relative z-10 flex justify-center pt-20 sm:pt-24">
        <Image
          src="/sponsors/title.svg"
          alt="Our Sponsors"
          width={1000} // Adjusted to a more manageable size
          height={100} // Adjusted for aspect ratio
          className="drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] w-[400px] sm:w-[800px] md:w-[1000px] h-auto"
        />
      </header>

      {/* Main Content - Centered in the remaining space */}
      <main className="relative z-10 flex flex-grow flex-col items-center justify-center text-center p-4 -mt-20">
        {/* "Stay Tuned" Message */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-wide leading-tight drop-shadow-[0_0_20px_rgba(200,50,255,0.8)] font-michroma">
          Stay Tuned!
        </h1>

        {/* Sub-text */}
        <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-2xl font-exo2">
          Exciting updates are on the way. Check back soon for more information!
        </p>
      </main>
    </div>
  );
}