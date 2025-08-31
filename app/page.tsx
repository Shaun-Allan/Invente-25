'use client'; // <-- ADD THIS LINE

import { useState } from 'react'; // <-- ADD THIS LINE
import Image from "next/image";
import Link from "next/link";
import FuzzyText from "@/components/FuzzyText";

export const dynamic = "force-dynamic";
// export const revalidate = 0;

// Data for the event grid - makes it easy to manage
const events = [
  { name: "CSE (SSN)", imageSrc: "/events/CSE.png", href: "/events?dept=cse" },
  { name: "CSE (SNUC)", imageSrc: "/events/SNUC.png", href: "/events?dept=snuc-cse" },
  { name: "IT", imageSrc: "/events/IT.png", href: "/events?dept=it" },
  { name: "ECE", imageSrc: "/events/ECE.png", href: "/events?dept=ece" },
  { name: "EEE", imageSrc: "/events/EEE.png", href: "/events?dept=eee" },
  { name: "BME", imageSrc: "/events/BME.png", href: "/events?dept=bme" },
  { name: "CHEM", imageSrc: "/events/CHEM.png", href: "/events?dept=chem" },
  { name: "CIVIL", imageSrc: "/events/CIVIL.png", href: "/events?dept=civil" },
  { name: "MECH", imageSrc: "/events/MECH.png", href: "/events?dept=mech" },
  { name: "Commerce & Economics", imageSrc: "/events/COM.png", href: "/events?dept=com" },
];

// Data for contacts
const contacts = [
  { name: "Vishnu A", phone: "+91 70100 38924" },
  { name: "Hareeshwara", phone: "+91 83001 66914" },
  { name: "Hairedh Raju", phone: "+91 97907 21403" },
];


export default function Home() {
  const [isPassesClicked, setIsPassesClicked] = useState(false);

  const handlePassesClick = () => {
    setIsPassesClicked(!isPassesClicked);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section
        className="relative h-screen overflow-hidden"
        style={{
          backgroundImage: "url(/hero.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Purple Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Clock SVG (stays on the left) */}
        <div className="absolute top-[8%] md:left-0 w-[400px] sm:w-[600px] md:w-[750px] lg:w-[900px] opacity-80 z-0">
          <Image src="/hero_watch.svg" alt="Clock" width={900} height={900} />
        </div>

        {/* <div className="absolute top-[12%] left-1/2 md:left-[65%] transform -translate-x-1/2 z-10"></div> */}

        {/* CONTAINER FOR ALL RIGHT-SIDE CONTENT */}
        <div className="absolute top-0  left-1/2 xl:left-[65%] transform -translate-x-1/2 z-10 h-full w-full xl:w-1/2">

          {/* 1. Invente Logo Container */}
          <div className="absolute top-[10%] sm:top-[12%] w-full flex flex-col  items-center z-10">

            {/* Container for the logos */}
            <div className='flex items-center gap-4 sm:gap-8 md:gap-16'>
              <Image
                src="/logos/ssn.svg"
                alt="SSN College of Engineering Logo"
                width={100}
                height={50}
                className="w-[60px] h-auto sm:w-[80px] md:w-[90px]"
              />
              <Image
                src="/logos/invente.png"
                alt="Invente Logo"
                width={320}
                height={120}
                className="w-[180px] sm:w-[240px] md:w-[200px] lg:w-[200px] h-auto"
              />
              <Image
                src="/logos/snu.svg"
                alt="Shiv Nadar University Logo"
                width={100}
                height={50}
                className="w-[60px] h-auto sm:w-[80px] md:w-[90px]"
              />
            </div>

            {/* ✨ NEW SUBTITLE TEXT ✨ */}
            <p className="text-white/90 text-sm sm:text-md md:text-md font-semibold tracking-widest uppercase text-center font-orbitron mt-2 sm:mt-0">
              A National Level Technical Symposium
            </p>

          </div>

          {/* 2. ChronoShift Text Container */}
          <div className="absolute top-[32%] sm:top-[35%] w-full flex flex-col items-center text-center px-4">
            <Image
              src="/chronos.png"
              alt="Chrono"
              width={800}
              height={450}
              className="w-[400px] sm:w-[480px] md:w-[500px] lg:w-[550px] h-auto drop-shadow-[0_0_30px_rgba(168,85,247,1)]"
            />
            <FuzzyText
              fontFamily="'Space Grotesk', sans-serif"
              fontWeight="700"
              fontStyle="italic"
              fontSize="clamp(80px, 90px, 100px)"
              baseIntensity={0.5}
              hoverIntensity={0.8}
              enableHover={true}
              // ▼▼▼ EDITED THIS LINE ▼▼▼
              className="leading-none drop-shadow-[0_0_30px_rgba(168,85,247,1)]"
            >
              Shift
            </FuzzyText>


            <p className="text-white max-w-2xl text-sm sm:text-md md:text-md lg:text-md leading-loose font-orbitron mt-8">
              <span className='text-purple-600'>Looking for fun?</span> You've come to the right place! Since 2016,
              <span className='text-purple-600'> INVENTE</span> has been our flagship tech fest, catered to challenge
              the spirits and intellects of students across the nation.
            </p>

            <div className="flex flex-row gap-4 justify-center items-center mt-8">
              <button className="uppercase bg-black/80 text-white px-5 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 font-bold text-sm sm:text-base md:text-md shadow-lg hover:bg-gray-900 transition font-orbitron border border-white">
                Sept 26 - 27
              </button>

              <button
                onClick={handlePassesClick}
                className="relative overflow-hidden uppercase italic bg-purple-600 text-white px-5 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 font-bold text-sm sm:text-base md:text-md shadow-lg transition-colors duration-300 ease-in-out font-orbitron group"
              >
                <div className={`absolute inset-0 bg-white -translate-x-full transition-transform duration-300 ${isPassesClicked ? 'translate-x-0' : 'group-hover:translate-x-0'}`}></div>
                <span className={`relative z-10 inline-block transition-transform duration-300 ${isPassesClicked ? 'translate-x-[200%]' : 'group-hover:translate-x-[200%]'}`}>Get Passes</span>
                <span className={`absolute inset-0 flex items-center justify-center text-black font-bold -translate-x-full transition-transform duration-300 z-20 ${isPassesClicked ? 'translate-x-0' : 'group-hover:translate-x-0'}`}>Coming Soon</span>
              </button>
            </div>
          </div>
        </div>

        <p className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 z-10 text-white/80 font-orbitron text-xs sm:text-xs md:text-xs">
          Hosted by CSE dept of SSN and SNUC
        </p>

      </section>

      {/* --- EVENTS GRID SECTION --- */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-purple-400 text-center sm:text-left mb-12 md:mb-16 lg:mb-24 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] font-michroma" id="events">
            ALL EVENTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {events.map((event) => (
              <Link
                key={event.name}
                href={event.href}
                className="group relative block overflow-hidden border-2 border-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40"
              >
                <Image
                  src={event.imageSrc}
                  alt={event.name}
                  width={600}
                  height={338}
		  unoptimized={true}
                  className="w-full h-auto transition-transform duration-300 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 opacity-100 p-4">
                  <span className="text-white text-4xl md:text-4xl xl:text-4xl tracking-widest drop-shadow-lg font-orbitron text-center">
                    {event.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- REGISTRATION QUERIES SECTION --- */}
      <section className="relative py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-purple-400 mb-12 md:mb-16 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] font-michroma break-words">
            REGISTRATION QUERIES
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl mb-12 font-orbitron">
            For any questions or more information regarding registration, please feel free to contact our heads.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contacts.map((contact) => (
              <div key={contact.name} className="bg-gray-900/50 border border-purple-500/30 p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
                <h3 className="text-xl lg:text-2xl font-bold text-white font-orbitron mb-2">{contact.name}</h3>
                <p className="text-purple-400 text-lg font-mono">{contact.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

