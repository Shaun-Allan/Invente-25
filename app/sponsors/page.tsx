"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getSponsors, Sponsor, SponsorType } from "@/lib/api";

const SPONSOR_CATEGORIES: { type: SponsorType; title: string }[] = [
  { type: "title", title: "Title Sponsor" },
  { type: "co-sponsor", title: "Co-Sponsors" },
  { type: "department", title: "Department Sponsors" },
  { type: "hackathon", title: "Hackathon Sponsors" },
  { type: "workshop", title: "Workshop Sponsors" },
  { type: "fintech", title: "Fintech Sponsors" },
  { type: "t-shirt", title: "T-Shirt Sponsors" },
];

export default function SponsorsPage() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSponsors() {
      try {
        const sponsorData = await getSponsors();
        setSponsors(sponsorData);
      } catch (err) {
        setError("Failed to load sponsors");
        console.error("Error fetching sponsors:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchSponsors();
  }, []);

  // Helper function to get sponsors by category
  const getSponsorsByCategory = (category: SponsorType) => {
    return sponsors.filter(sponsor => sponsor.attributes.category === category);
  };

  // Show loading state
  if (loading) {
    return (
      <div
        className="relative min-h-screen w-full flex flex-col bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("/sponsors/bg.png")' }}
      >
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="relative z-10 flex flex-grow items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
        </div>
      </div>
    );
  }

  // Show "Stay Tuned" if no sponsors or error
  if (error || sponsors.length === 0) {
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
            width={1000}
            height={100}
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

  // Show sponsors when available
  return (
    <div
      className="relative min-h-screen w-full flex flex-col bg-cover bg-center text-white"
      style={{ backgroundImage: 'url("/sponsors/bg.png")' }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/90"></div>

      {/* Header section for the title */}
      <header className="relative z-10 flex justify-center pt-20 sm:pt-24 mb-16">
        <Image
          src="/sponsors/title.svg"
          alt="Our Sponsors"
          width={1000}
          height={100}
          className="drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] w-[400px] sm:w-[800px] md:w-[1000px] h-auto"
        />
      </header>

      {/* Sponsors Content */}
      <main className="relative z-10 flex-grow px-4 sm:px-8 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto">
          {SPONSOR_CATEGORIES.map((category) => {
            const categorySponsors = getSponsorsByCategory(category.type);
            
            if (categorySponsors.length === 0) return null;

            return (
              <section key={category.type} className="mb-16">
                {/* Category Title */}
                <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-center mb-12 font-michroma drop-shadow-[0_0_15px_rgba(200,50,255,0.6)]">
                  {category.title}
                </h2>

                {/* Sponsors Grid */}
                <div className={`flex flex-wrap gap-8 justify-center items-center`}>
                  {categorySponsors.map((sponsor) => (
                    <div
                      key={sponsor.id}
                      className={`group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 ${
                        category.type === "title" 
                          ? "w-80 h-40" 
                          : category.type === "co-sponsor"
                          ? "w-64 h-32"
                          : "w-48 h-28"
                      }`}
                    >
                      <div className="flex items-center justify-center h-full w-full">
                        {/* Sponsor Logo */}
                        {sponsor.attributes.logo?.data ? (
                          <div className="relative w-full h-full p-4">
                            <Image
                              src={`${'https://ssnsnucinvente.com'}${sponsor.attributes.logo.data.attributes.url}`}
                              alt={sponsor.attributes.logo.data.attributes.alternativeText || sponsor.attributes.name}
                              fill
                              className="object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center w-full h-full">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-2xl">
                                {sponsor.attributes.name.charAt(0).toUpperCase()}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* Thank You Message */}
          <div className="text-center mt-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-michroma drop-shadow-[0_0_15px_rgba(200,50,255,0.6)]">
              Thank You to All Our Sponsors!
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 font-exo2 max-w-3xl mx-auto">
              Your support makes our event possible and helps us create an amazing experience for all participants.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
