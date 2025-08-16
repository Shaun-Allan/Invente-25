import { getEvents, getSponsors, getSchedule, getSettings } from '@/lib/api';
import Image from 'next/image';

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
      {/* Hero Section*/}
      <section className="relative h-screen hero-bg" style={{ backgroundImage: 'url(/hero.png)', backgroundPosition: '40% 80%', backgroundSize: 'cover', backgroundAttachment: 'scroll' }}>
        {/* Top Navigation */}
        <div className="absolute top-0 left-0 right-0 z-10 p-6">
          <div className="flex justify-between items-center">
            {/* Menu Icon*/}
            <div className="w-12 h-12 bg-[#A0522D] rounded-full flex items-center justify-center shadow-lg menu-button">
              <div className="space-x-1 flex">
                <span className="block w-1 h-1 bg-white rounded-full"></span>
                <span className="block w-1 h-1 bg-white rounded-full"></span>
                <span className="block w-1 h-1 bg-white rounded-full"></span>
              </div>
            </div>
            
            {/* Center Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-6 text-center">
              <Image src="/invente.png" alt="Invente 24" width={300} height={100} className="w-auto h-24 mx-auto" unoptimized />
              
            </div>
            
            {/* SSN Logo - Top right*/}
            <Image src="/ssn.png" alt="SSN" width={60} height={60} className="h-12 w-auto" unoptimized />
          </div>
        </div>

        {/* Hero Content*/}
        {/* Title*/}
        <div className="absolute top-[18%] left-[50%] transform -translate-x-1/2">
          <Image src="/title.png" alt="chrono shift" width={400} height={160} className="w-auto h-24 md:h-32 lg:h-40" unoptimized />
        </div>
        
        {/* Date Block - Black rectangle, no rounded corners, positioned on arms - moved left and up */}
        <div className="absolute top-[45%] left-[25%] bg-black text-white px-6 py-3 font-dm-sans font-bold text-lg shadow-lg inline-block">
          SEPT 27 - 28
        </div>
        
        {/* Description Text - Black text, progressively indented, positioned right */}
        <div className="absolute top-[65%] left-[40%] text-black text-left font-century-gothic leading-relaxed text-lg">
          <p className="mb-2">Looking for fun? You've come to the</p>
          <p className="mb-2 ml-16">right place! Since 2016, Invente has</p>
          <p className="mb-2 ml-24">been our flagship tech fest,</p>
          <p className="mb-2 ml-32">catered to challenge the</p>
          <p className="mb-2 ml-42">spirits and intellects of</p>
          <p className="mb-2 ml-48">students nationwide.</p>
        </div>
        
        {/* Get Passes Button - Black, no rounded corners, positioned more down */}
        <button className="absolute top-[90%] left-[70%] bg-black text-white px-8 py-3 font-dm-sans font-bold uppercase shadow-lg hover:bg-gray-900 transition-colors">
          GET PASSES
        </button>
      </section>

            {/* Bento Grid Section*/}
      <section className="bg-[#DEE8CE] min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-7xl">
          <div className="bg-[#15021A] rounded-3xl p-8">
            <div className="grid grid-cols-6 grid-rows-2 gap-4 h-[600px]">
              {/* All Events - Large (Top-Left) - Vintage Office Setup */}
              <div className="col-span-3 row-span-1 relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <Image src="/all_events.png" alt="All Events" fill className="object-cover" unoptimized />
                <div className="absolute bottom-6 left-6 text-white font-dm-sans font-bold text-2xl tracking-wide">
                  All events
                </div>
              </div>
               
              {/* Hackathons & Workshops - Large (Top-Right) - Modern Office Space */}
              <div className="col-span-3 row-span-1 relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <Image src="/hacks_workshops.png" alt="Hackathons & Workshops" fill className="object-cover" unoptimized />
                <div className="absolute bottom-6 left-6 text-white font-dm-sans font-bold text-2xl tracking-wide">
                  Hackathons & Workshops
                </div>
              </div>
               
              {/* Schedule - Medium (Bottom-Left) - Clock Collection */}
              <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <Image src="/schedule.png" alt="Schedule" fill className="object-cover" unoptimized />
                <div className="absolute bottom-6 left-6 text-white font-dm-sans font-bold text-2xl tracking-wide">
                  Schedule
                </div>
              </div>
               
              {/* Sponsors - Small (Bottom-Middle-Left) - Coin Jar */}
              <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <Image src="/sponsors.png" alt="Sponsors" fill className="object-cover" unoptimized />
                <div className="absolute bottom-6 left-6 text-white font-dm-sans font-bold text-lg tracking-wide">
                  Sponsors
                </div>
              </div>
               
              {/* Gallery - Small (Bottom-Middle-Right) - Framed Paintings */}
              <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <Image src="/gallery.png" alt="Gallery" fill className="object-cover" unoptimized />
                <div className="absolute bottom-6 left-6 text-white font-dm-sans font-bold text-lg tracking-wide">
                  Gallery
                </div>
              </div>
               
              {/* Hospitality - Medium (Bottom-Right) - Apples */}
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

      {/* Footer */}
      <footer className="bg-black text-white relative ">
        <div className="max-w-7xl mx-auto p-12 flex justify-between items-start">
          {/* Navigation Links - Left Section */}
          <div className="flex space-x-20">
            {/* PARTICIPATE */}
            <div>
              <h3 className="font-dm-sans font-bold text-xl mb-6 text-white">PARTICIPATE</h3>
              <ul className="space-y-3 font-century-gothic text-base text-white">
                <li>Events</li>
                <li>Hackathons</li>
                <li>Workshops</li>
              </ul>
            </div>
            
            {/* KNOW MORE */}
            <div>
              <h3 className="font-dm-sans font-bold text-xl mb-6 text-white">KNOW MORE</h3>
              <ul className="space-y-3 font-century-gothic text-base text-white">
                <li>Schedule</li>
                <li>Sponsors</li>
                <li>Gallery</li>
              </ul>
            </div>
            
            {/* GET IN TOUCH */}
            <div>
              <h3 className="font-dm-sans font-bold text-xl mb-6 text-white">GET IN TOUCH</h3>
              <ul className="space-y-3 font-century-gothic text-base text-white">
                <li>Hospitality</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Computer Asset */}
        <div className="absolute right-0 bottom-0 h-56">
          <Image src="/computer.png" alt="Vintage Computer" width={600} height={400} className="h-56 w-auto" unoptimized />
        </div>
        
        {/* Bottom Left Credit */}
        <div className="max-w-7xl mx-auto px-12 pb-8">
          <div className="text-sm font-century-gothic text-white opacity-80">
            Designed and Developed by students of SSN and SNUC
          </div>
        </div>
      </footer>
    </div>
  );
}