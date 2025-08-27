import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden min-h-[600px]">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Section with Logo and University Info */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-12 sm:mb-16">
          {/* Left side - Invente '24 Logo */}
          <div className="flex items-center mb-8 lg:mb-0">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Invente Logo */}
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
          
          {/* Right side - University Logos */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
            <div className="flex items-center space-x-4 sm:space-x-6 order-1 sm:order-2">
              <div className="w-full h-16 sm:w-20 sm:h-20 lg:w-40 lg:h-24">
                <a href="https://www.snu.edu.in/" target="_blank" rel="noopener noreferrer" aria-label="Visit Shiv Nadar University Website">
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
          {/* PARTICIPATE */}
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
          
          {/* KNOW MORE */}
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
          
          {/* GET IN TOUCH */}
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
            {/* Copyright */}
            <div className="text-xs sm:text-sm text-gray-400 font-exo2 order-2 md:order-1">
              ©2025 SSN College of Engineering & Shiv Nadar University, Chennai.
            </div>
            
            {/* Credits */}
            <div className="text-xs sm:text-sm text-white font-exo2 order-1 md:order-2">
              Designed and Developed by SSN & SNUC Students
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}