// app/hackathons/page.tsx
"use client";
import Image from "next/image";
import React from "react";

const HackathonsPage = () => {
  return (
    <main
      className="relative flex min-h-screen flex-col items-center overflow-hidden bg-cover bg-center p-8 text-white"
      style={{ backgroundImage: "url('/hackathons/bg.png')" }}
    >
      {/* Background clock overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src="/hackathons/clock.jpg"
          layout="fill"
          objectFit="cover"
          alt="Clock background"
          className="opacity-20"
        />
      </div>

      {/* NEW: Black overlay for reducing background opacity */}
      <div className="absolute inset-0 z-5 bg-black/50"></div>

      {/* Main content wrapper */}
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">
        {/* Hackathons Title Image */}
        <div className="mt-16 mb-12">
          <Image
            src="/hackathons/Hackathons.png"
            width={600}
            height={100}
            alt="Hackathons Title"
            className="h-auto w-full max-w-[400px] sm:max-w-[500px]"
          />
        </div>

        {/* Flex container for the two separate boxes */}
        <div className="flex w-full flex-col gap-8 md:flex-row">
          {/* Box 1: HACKINFINITY */}
          <div className="flex flex-1 items-center justify-center border-2 border-purple-500 bg-black/60 p-8 backdrop-blur-sm sm:p-12">
            <Image
              src="/hackathons/HACKINFINITY.png"
              width={400}
              height={100}
              alt="Hackinfinity"
              className="h-auto w-full max-w-[350px]"
            />
          </div>

          {/* Box 2: IMPACT ARCADE */}
          <div className="flex flex-1 items-center justify-center border-2 border-purple-500 bg-black/60 p-8 backdrop-blur-sm sm:p-12">
            <Image
              src="/hackathons/IMPACT ARCADE (GAMEJAM) 24HR HACKATHON.png"
              width={400}
              height={150}
              alt="Impact Arcade (Gamejam) 24HR Hackathon"
              className="h-auto w-full max-w-[350px]"
            />
          </div>
        </div>

        {/* Workshops Title Image */}
        <div className="my-16">
          <Image
            src="/hackathons/WORKSHOPS.png"
            width={600}
            height={100}
            alt="Workshops Title"
            className="h-auto w-full max-w-[400px] sm:max-w-[500px]"
          />
        </div>

        {/* Coming Soon Box (sharp corners) */}
        <div className="border border-purple-500 bg-black/60 px-12 py-4 backdrop-blur-sm">
          <p className="text-xl font-semibold tracking-widest sm:text-2xl font-michroma text-center">
            Coming Soon..
          </p>
        </div>
      </div>
    </main>
  );
};

export default HackathonsPage;