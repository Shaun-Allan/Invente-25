'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// --- TEAM DATA ---
// IMPORTANT: Replace '#' with the actual LinkedIn profile URLs.
const ssnTeam = [
  { name: 'Shaun Allan H', linkedin: 'https://www.linkedin.com/in/shaun-allan-h/' },
  { name: 'Saipranav M', linkedin: 'https://www.linkedin.com/in/saipranav-m/' },
  { name: 'Irfan Akthar', linkedin: 'https://www.linkedin.com/in/irfan-akthar-a11k/' },
  { name: 'Anjali Mani', linkedin: 'https://www.linkedin.com/in/anjali-mani-694416305/' },
  { name: 'Rahul VS', linkedin: 'https://www.linkedin.com/in/rahul-v-s/' },
  { name: 'Ramcharan S', linkedin: 'https://www.linkedin.com/in/ramcharan-s-30506628a/' },
  { name: 'Abdiel Magdi', linkedin: 'https://www.linkedin.com/in/abdiel-magdi-a35331256/' },
  { name: 'Yukesh', linkedin: '#' },
];

const snucTeam = [
  { name: 'Joshua Bharathi', linkedin: 'https://www.linkedin.com/in/joshuabharathi/' },
  { name: 'Priyadharshini Sridhar', linkedin: 'https://www.linkedin.com/in/priyadharshini-sridhar/' },
  { name: 'Venkat', linkedin: 'https://www.linkedin.com/in/venkataraman-tsk-490564302/' },
  { name: 'Vishal', linkedin: 'https://www.linkedin.com/in/vismbs/' },
  { name: 'Aditya B', linkedin: 'https://www.linkedin.com/in/b-aditya20/' },
];


export default function Footer() {
  const [isTeamViewVisible, setIsTeamViewVisible] = useState(false);

  // Component for the default footer view
  const DefaultFooter = () => (
    <>
      {/* Header Section with Logo and University Info */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-12 sm:mb-16">
        <div className="flex items-center mb-8 lg:mb-0">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full h-20 sm:w-24 sm:h-24 lg:w-50 lg:h-28">
              <Link href="/" aria-label="Go to Homepage">
                <Image 
                  src="/logos/invente.png" 
                  alt="Invente Logo" 
                  width={112} 
                  height={112} 
                  className="w-full h-full object-contain" 
                  unoptimized 
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
          <div className="flex items-center space-x-4 sm:space-x-6 order-1 sm:order-2">
            <div className="w-full h-16 sm:w-20 sm:h-20 lg:w-40 lg:h-24">
              <a href="https://www.snuchennai.edu.in/" target="_blank" rel="noopener noreferrer" aria-label="Visit Shiv Nadar University Website">
                <Image 
                  src="/logos/snu.svg" 
                  alt="SNU Logo" 
                  width={96} 
                  height={96} 
                  className="w-full h-full object-contain" 
                  unoptimized 
                />
              </a>
            </div>
            <div className="w-full h-16 sm:w-24 sm:h-20 lg:w-40 lg:h-24">
              <a href="https://www.ssn.edu.in/" target="_blank" rel="noopener noreferrer" aria-label="Visit SSN College of Engineering Website">
                <Image 
                  src="/logos/ssn.svg" 
                  alt="SSN Logo" 
                  width={112} 
                  height={96} 
                  className="w-full h-full object-contain" 
                  unoptimized 
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Links */}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start space-y-8 sm:space-y-0 sm:space-x-12 md:space-x-16 lg:space-x-24 mb-12 sm:mb-16">
        <div className="text-center sm:text-left">
          <h3 className="font-michroma font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-[#C859FF] tracking-wider">
            PARTICIPATE
          </h3>
          <ul className="space-y-2 sm:space-y-3 font-exo2 text-sm sm:text-base text-white">
            <li><Link href="/#events" className="hover:text-[#C859FF] transition-colors">EVENTS</Link></li>
            <li><Link href="/hackathons" className="hover:text-[#C859FF] transition-colors">HACKATHONS</Link></li>
            <li><Link href="/hackathons" className="hover:text-[#C859FF] transition-colors">WORKSHOPS</Link></li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="font-michroma font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-[#C859FF] tracking-wider">
            KNOW MORE
          </h3>
          <ul className="space-y-2 sm:space-y-3 font-exo2 text-sm sm:text-base text-white">
            <li><Link href="/schedule" className="hover:text-[#C859FF] transition-colors">SCHEDULE</Link></li>
            <li><Link href="/sponsors" className="hover:text-[#C859FF] transition-colors">SPONSORS</Link></li>
            <li><Link href="/gallery" className="hover:text-[#C859FF] transition-colors">GALLERY</Link></li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="font-michroma font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-[#C859FF] tracking-wider">
            GET IN TOUCH
          </h3>
          <ul className="space-y-2 sm:space-y-3 font-exo2 text-sm sm:text-base text-white">
            <li><Link href="/hospitality" className="hover:text-[#C859FF] transition-colors">HOSPITALITY</Link></li>
          </ul>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="border-t border-gray-600/50 pt-6 sm:pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          <div className="text-xs sm:text-sm text-gray-400 font-exo2 order-2 md:order-1">
            ©2025 SSN College of Engineering & Shiv Nadar University, Chennai.
          </div>
          <button 
            onClick={() => setIsTeamViewVisible(true)}
            className="text-xs sm:text-sm text-white font-exo2 order-1 md:order-2 underline font-bold hover:text-[#C859FF] transition-colors duration-300"
            aria-label="Meet the team"
          >
            Designed and Developed by SSN & SNUC Students
          </button>
        </div>
      </div>
    </>
  );

  // Component for the team view
  const TeamView = () => (
    <div className="w-full text-center py-8">
      <button 
        onClick={() => setIsTeamViewVisible(false)}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-white transition-colors text-4xl leading-none z-20"
        aria-label="Close team view"
      >
        &times;
      </button>

      <h2 className="font-michroma text-3xl sm:text-4xl font-bold text-[#C859FF] tracking-wider mb-12">
        MEET THE TEAM
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {/* SSN Team */}
        <div className="space-y-6">
          <h3 className="font-michroma text-2xl font-bold text-white border-b-2 border-[#C859FF]/50 pb-2">
            SSN
          </h3>
          <ul className="space-y-3 font-exo2 text-lg text-gray-200">
            {ssnTeam.map(member => (
              <li key={member.name}>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#C859FF] transition-colors">
                  {member.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* SNUC Team */}
        <div className="space-y-6">
          <h3 className="font-michroma text-2xl font-bold text-white border-b-2 border-[#C859FF]/50 pb-2">
            SNUC
          </h3>
          <ul className="space-y-3 font-exo2 text-lg text-gray-200">
            {snucTeam.map(member => (
              <li key={member.name}>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#C859FF] transition-colors">
                  {member.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <footer className="bg-black text-white relative overflow-hidden min-h-[600px] flex items-center border-t border-purple-500/50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/footer_bg.jpg" 
          alt="Footer Background" 
          fill
          className="object-contain opacity-50"
          unoptimized 
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        {isTeamViewVisible ? <TeamView /> : <DefaultFooter />}
      </div>
    </footer>
  );
}