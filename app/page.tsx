import { getEvents, getSponsors, getSchedule, getSettings } from '@/lib/api';
import Image from 'next/image';
import Footer from '@/components/events/Footer';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const [events, sponsors, schedule, settings] = await Promise.allSettled([
    getEvents(),
    getSponsors(),
    getSchedule(),
    getSettings(),
  ]);

  const eventsData = events.status === 'fulfilled' ? events.value : [];
  const sponsorsData = sponsors.status === 'fulfilled' ? sponsors.value : [];
  const scheduleData = schedule.status === 'fulfilled' ? schedule.value : null;
  const settingsData = settings.status === 'fulfilled' ? settings.value : null;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen hero-bg" style={{ backgroundImage: 'url(/hero.png)', backgroundPosition: '40% 80%', backgroundSize: 'cover', backgroundAttachment: 'scroll' }}>
        {/* Top Navigation */}
        <div className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6">
          <div className="flex justify-between items-center relative">
            {/* Menu Icon */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#A0522D] rounded-full flex items-center justify-center shadow-lg menu-button z-20">
              <div className="space-x-1 flex">
                <span className="block w-1 h-1 bg-white rounded-full"></span>
                <span className="block w-1 h-1 bg-white rounded-full"></span>
                <span className="block w-1 h-1 bg-white rounded-full"></span>
              </div>
            </div>
            
            {/* Center Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 sm:top-6 text-center">
              <Image 
                src="/invente.png" 
                alt="Invente 24" 
                width={300} 
                height={100} 
                className="w-auto h-16 sm:h-20 md:h-24 mx-auto" 
                unoptimized 
              />
            </div>
            
            {/* SSN Logo - Top right */}
            <Image 
              src="/ssn.png" 
              alt="SSN" 
              width={60} 
              height={60} 
              className="h-8 w-auto sm:h-10 md:h-12" 
              unoptimized 
            />
          </div>
        </div>

        {/* Hero Content */}
        {/* Title */}
        <div className="absolute top-[15%] sm:top-[18%] left-[50%] transform -translate-x-1/2 w-full px-4">
          <Image 
            src="/title.png" 
            alt="chrono shift" 
            width={400} 
            height={160} 
            className="w-auto h-16 sm:h-20 md:h-24 lg:h-32 xl:h-40 mx-auto" 
            unoptimized 
          />
        </div>
        
        {/* Mobile Buttons - Below Title */}
        <div className="block sm:hidden absolute top-[30%] left-[50%] transform -translate-x-1/2 w-full px-4">
          <div className="flex justify-center">
            <button className="bg-black text-white px-6 py-3 font-dm-sans font-bold text-sm uppercase shadow-lg hover:bg-gray-900 transition-colors">
              GET PASSES
            </button>
          </div>
        </div>
        
        {/* Desktop Date Block */}
        <div className="hidden absolute bottom-[8%] md:bottom-[5%] sm:bottom-[12%] left-[3%] sm:left-[10%] bg-black text-white px-4 sm:px-6 py-2 sm:py-3 font-dm-sans font-bold text-sm sm:text-base md:text-lg shadow-lg inline-block">
          SEPT 27 - 28
        </div>
        
        {/* Description Text */}
        <div className="absolute top-[65%] sm:top-[50%] md:top-[55%] lg:top-[65%] right-[4%] sm:left-[10%] md:left-[20%] lg:left-[40%] md:bottom-[5%]sm:right-auto text-black text-right sm:text-left font-century-gothic leading-relaxed text-xs sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <p className="mb-1 sm:mb-2">Looking for fun? You've come to the</p>
          <p className="mb-1 sm:mb-2 ml-4 sm:ml-8 md:ml-12 lg:ml-16">right place! Since 2016, Invente has</p>
          <p className="mb-1 sm:mb-2 ml-8 sm:ml-12 md:ml-16 lg:ml-24">been our flagship tech fest,</p>
          <p className="mb-1 sm:mb-2 ml-12 sm:ml-16 md:ml-20 lg:ml-32">catered to challenge the</p>
          <p className="mb-1 sm:mb-2 ml-16 sm:ml-20 md:ml-24 lg:ml-42">spirits and intellects of</p>
          <p className="mb-1 sm:mb-2 ml-20 sm:ml-24 md:ml-28 lg:ml-48">students nationwide.</p>
        </div>
        
        {/* Desktop Get Passes Button */}
        <button className="hidden sm:block absolute bottom-[15%] md:bottom-[5%] sm:bottom-[12%] right-[5%] sm:right-[10%] bg-black text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 font-dm-sans font-bold text-xs sm:text-sm md:text-base uppercase shadow-lg hover:bg-gray-900 transition-colors">
          GET PASSES
        </button>
      </section>

      {/* Bento Grid Section */}
      <section className="bg-[#DEE8CE] min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-7xl">
          <div className="bg-[#15021A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
            {/* Mobile/Tablet Linear Layout */}
            <div className="block lg:hidden space-y-4">
              {/* All Events */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-white/10 h-48 sm:h-56">
                <Image src="/all_events.png" alt="All Events" fill className="object-cover" unoptimized />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white font-dm-sans font-bold text-xl sm:text-2xl tracking-wide">
                  All events
                </div>
              </div>
              
              {/* Hackathons & Workshops */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-white/10 h-48 sm:h-56">
                <Image src="/hacks_workshops.png" alt="Hackathons & Workshops" fill className="object-cover" unoptimized />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white font-dm-sans font-bold text-xl sm:text-2xl tracking-wide">
                  Hackathons & Workshops
                </div>
              </div>
              
              {/* Schedule */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-white/10 h-48 sm:h-56">
                <Image src="/schedule.png" alt="Schedule" fill className="object-cover" unoptimized />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white font-dm-sans font-bold text-xl sm:text-2xl tracking-wide">
                  Schedule
                </div>
              </div>
              
              {/* Sponsors */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-white/10 h-48 sm:h-56">
                <Image src="/sponsors.png" alt="Sponsors" fill className="object-cover" unoptimized />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white font-dm-sans font-bold text-xl sm:text-2xl tracking-wide">
                  Sponsors
                </div>
              </div>
              
              {/* Gallery */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-white/10 h-48 sm:h-56">
                <Image src="/gallery.png" alt="Gallery" fill className="object-cover" unoptimized />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white font-dm-sans font-bold text-xl sm:text-2xl tracking-wide">
                  Gallery
                </div>
              </div>
              
              {/* Hospitality */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-white/10 h-48 sm:h-56">
                <Image src="/Hospitality.png" alt="Hospitality" fill className="object-cover" unoptimized />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white font-dm-sans font-bold text-xl sm:text-2xl tracking-wide">
                  Hospitality
                </div>
              </div>
            </div>

            {/* Desktop Bento Grid Layout (unchanged for 1440px) */}
            <div className="hidden lg:grid grid-cols-6 grid-rows-2 gap-4 h-[600px]">
              {/* All Events - Large (Top-Left) */}
              <div className="col-span-3 row-span-1 relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <Image src="/all_events.png" alt="All Events" fill className="object-cover" unoptimized />
                <div className="absolute bottom-6 left-6 text-white font-dm-sans font-bold text-2xl tracking-wide">
                  All events
                </div>
              </div>
              
              {/* Hackathons & Workshops - Large (Top-Right) */}
              <div className="col-span-3 row-span-1 relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <Image src="/hacks_workshops.png" alt="Hackathons & Workshops" fill className="object-cover" unoptimized />
                <div className="absolute bottom-6 left-6 text-white font-dm-sans font-bold text-2xl tracking-wide">
                  Hackathons & Workshops
                </div>
              </div>
              
              {/* Schedule - Medium (Bottom-Left) */}
              <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <Image src="/schedule.png" alt="Schedule" fill className="object-cover" unoptimized />
                <div className="absolute bottom-6 left-6 text-white font-dm-sans font-bold text-2xl tracking-wide">
                  Schedule
                </div>
              </div>
              
              {/* Sponsors - Small (Bottom-Middle-Left) */}
              <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <Image src="/sponsors.png" alt="Sponsors" fill className="object-cover" unoptimized />
                <div className="absolute bottom-6 left-6 text-white font-dm-sans font-bold text-lg tracking-wide">
                  Sponsors
                </div>
              </div>
              
              {/* Gallery - Small (Bottom-Middle-Right) */}
              <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <Image src="/gallery.png" alt="Gallery" fill className="object-cover" unoptimized />
                <div className="absolute bottom-6 left-6 text-white font-dm-sans font-bold text-lg tracking-wide">
                  Gallery
                </div>
              </div>
              
              {/* Hospitality - Medium (Bottom-Right) */}
              <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <Image src="/Hospitality.png" alt="Hospitality" fill className="object-cover" unoptimized />
                <div className="absolute bottom-6 left-6 text-white font-dm-sans font-bold text-2xl tracking-wide">
                  Hospitality
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}