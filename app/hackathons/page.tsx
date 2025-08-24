// app/hackathons/page.tsx
import Link from 'next/link';
import React from 'react';

const HackathonsPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-page-bg bg-cover bg-center p-8 md:p-24">
      <div className="flex w-full max-w-5xl flex-col items-center">
        {/* Hackathons Section */}
        <section className="mb-16 flex w-full flex-col items-center">
          <h1 className="mb-8 font-playfair text-4xl font-bold tracking-[0.2em] text-[#3A2419] md:text-5xl">
            HACKATHONS
          </h1>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            <Link href="#" className="group">
              <div className="flex h-64 items-center justify-center border-4 border-black bg-hackinfinity-bg bg-cover bg-center p-4 text-center text-white transition-transform duration-300 group-hover:scale-105">
                <h2 className="text-3xl font-bold">HACKINFINITY</h2>
              </div>
            </Link>
            <Link href="#" className="group">
              <div className="flex h-64 items-center justify-center border-4 border-black bg-impact-arcade-bg bg-cover bg-center p-4 text-center text-white transition-transform duration-300 group-hover:scale-105">
                <h2 className="text-3xl font-bold">
                  IMPACT ARCADE (GAMEJAM) 24HR HACKATHON
                </h2>
              </div>
            </Link>
          </div>
        </section>

        {/* Workshops Section */}
        <section className="flex w-full flex-col items-center">
          <h1 className="mb-8 font-playfair text-4xl font-bold tracking-[0.2em] text-[#3A2419] md:text-5xl">
            WORKSHOPS
          </h1>
          <div className="flex w-full max-w-lg items-center justify-center bg-[#422018] py-5 px-10 text-center">
            <p className="text-2xl font-semibold tracking-[0.2em] text-white">
              COMING SOON...
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HackathonsPage;