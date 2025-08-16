import React from "react";

export default function SponsorsPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/bg.png")' }}
    >
      <div className="flex flex-col items-center text-white px-4 py-8"> 
        <div className="flex mb-8 mr-auto gap-[40px]"> 
        <img
  src="/circle.png"
  alt=""
  className="relative"
  style={{
    width: 'clamp(40px, 8vw, 80px)',
    height: 'clamp(40px, 8vw, 80px)',
    top: 'clamp(15px, 3vw, 30px)',
    left: 'clamp(13px, 3vw, 26px)'
  }}
/>

<img
  src="/dots.png"
  alt=""
  className="absolute"
  style={{
    width: 'clamp(25px, 5vw, 49px)',
    height: 'clamp(25px, 5vw, 49px)',
    top: 'clamp(22px, 4vw, 45px)',
    left: 'clamp(21px, 4vw, 42px)'
  }}
/>

        <h1
  className="font-[RubikGlitch] text-[#B83000] tracking-[-0.04em] leading-[100%]"
  style={{ fontSize: 'clamp(30px, 5vw, 65.67px)' }}
>
  Our Sponsors
</h1>

          </div>


        <div className="flex flex-col items-center mb-10">
          <img src="/title.png" alt="Title Sponsor" className="w-40 sm:w-56 md:w-64 mb-4" />
          <img src="/temenos.png" alt="" className="w-28 sm:w-36 md:w-40 mx-auto" />
        </div>

  
  
        <div className="mb-12 text-center">
          <h2 className="text-8xl sm:text-3xl md:text-xl font-[RubikGlitch] text-[#D3633B] mb-4">Co-Sponsors</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <img src="/indium.png" alt="" className="w-24 sm:w-28 md:w-32" />
            <img src="/jana.png" alt="" className="w-24 sm:w-28 md:w-32" />
          </div>
        </div>

      
      <div className="mb-12 w-full px-4">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-[RubikGlitch] text-[#D3633B] mb-6 text-center">
    Department Sponsors
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
    <img src="/tnpl.png" alt="" className="w-[clamp(60px,30vw,600px)] h-auto" />
    <img src="/indium.png" alt="" className="w-[clamp(60px,30vw,600px)] h-auto" />
    <img src="/jana.png" alt="" className="w-[clamp(60px,30vw,600px)] h-auto" />
    <img src="/tnpl.png" alt="" className="w-[clamp(60px,30vw,600px)] h-auto" />
    <img src="/indium.png" alt="" className="w-[clamp(60px,30vw,600px)] h-auto" />
    <img src="/jana.png" alt="" className="w-[clamp(60px,30vw,600px)] h-auto" />
    <img src="/tnpl.png" alt="" className="w-[clamp(60px,30vw,600px)] h-auto" />
    <img src="/indium.png" alt="" className="w-[clamp(60px,30vw,600px)] h-auto" />
  </div>
</div>





        
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[RubikGlitch] text-[#D3633B] mb-4">
            Workshop & Hackathon Sponsors
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <img src="/indium.png" alt="" className="w-24 sm:w-28 md:w-32" />
            <img src="/jana.png" alt="" className="w-24 sm:w-28 md:w-32" />
          </div>
        </div>

        {/* Fintech Partner */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[RubikGlitch] text-[#D3633B] mb-4">Fintech Partner</h2>
          <img src="/temenos.png" alt="" className="w-24 sm:w-28 md:w-32 mx-auto" />
        </div>

        {/* Placeholder */}
        <div className="mt-8 bg-[#A03B3B] w-full py-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-[RubikGlitch] text-[#D3633B] text-center">
            Placeholder
          </h2>
        </div>
      </div>
    </div>
  );
}
