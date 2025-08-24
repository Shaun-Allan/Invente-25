import React from "react";

export default function SponsorsPage() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/bg.png")' }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center text-white px-4 py-8">
        <div
          className="flex items-center mb-9 mx-auto justify-center"
          style={{ gap: "clamp(10px, 4vw, 40px)" }}
        >
          <h1 className="font-playfair-display text-[#B83000] tracking-[-0.04em] leading-[100%] font-bold text-6xl">
            OUR SPONSORS ❤️
          </h1>
        </div>

        <div className="flex flex-col items-center mb-10">
          <img
            src="/title.png"
            alt="Title Sponsor"
            className="w-40 sm:w-56 md:w-64 mb-4"
          />
          <img
            src="/temenos.png"
            alt=""
            className="w-28 sm:w-36 md:w-40 mx-auto"
          />
        </div>

        <div className="mb-12 text-center">
          <h2
            className="text-5xl sm:text-2xl md:text-xl font-playfair-display text-[#D3633B] mb-4"
            style={{ fontSize: "clamp(30px, 5vw, 40px)" }}
          >
            Co-Sponsors
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <img src="/indium.png" alt="" className="w-30 sm:w-40 md:w-60" />
            <img src="/jana.png" alt="" className="w-24 sm:w-40 md:w-60" />
          </div>
        </div>

        <div className="mb-12 w-full px-4">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-playfair-display text-[#D3633B] mb-6 text-center"
            style={{ fontSize: "clamp(30px, 5vw, 40px)" }}
          >
            Department Sponsors
          </h2>

          <div className="space-y-5 mt-20">
            {[1, 2, 3].map((row) => (
              <div key={row} className="grid grid-cols-3 gap-6 justify-items-center">
                <img
                  src="/tnpl.png"
                  alt=""
                  className="w-[clamp(60px,20vw,250px)] h-auto"
                />
                <img
                  src="/indium.png"
                  alt=""
                  className="w-[clamp(60px,20vw,250px)] h-auto"
                />
                <img
                  src="/jana.png"
                  alt=""
                  className="w-[clamp(60px,20vw,250px)] h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-playfair-display text-[#D3633B] mb-4"
            style={{ fontSize: "clamp(30px, 5vw, 40px)" }}
          >
            Workshop & Hackathon Sponsors
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <img
              src="/indium.png"
              alt=""
              className="w-[clamp(60px,20vw,250px)] h-auto"
            />
            <img
              src="/jana.png"
              alt=""
              className="w-[clamp(60px,20vw,250px)] h-auto"
            />
          </div>
        </div>

        <div className="mb-12 text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-playfair-display text-[#D3633B] mb-4"
            style={{ fontSize: "clamp(30px, 5vw, 40px)" }}
          >
            Fintech Partner
          </h2>
          <img
            src="/temenos.png"
            alt=""
            className="w-[clamp(60px,20vw,250px)] h-auto mx-auto"
          />
        </div>
      </div>

      {/* Footer */}
     
    </div>
  );
}
