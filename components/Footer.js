import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white relative">
        <div className="max-w-7xl mx-auto p-6 sm:p-8 md:p-12">
          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row sm:justify-start sm:items-start space-y-8 sm:space-y-0 sm:space-x-4 lg:space-x-8">
            {/* PARTICIPATE */}
            <div className="text-center sm:text-left">
              <h3 className="font-dm-sans font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-white">PARTICIPATE</h3>
              <ul className="space-y-2 sm:space-y-3 font-century-gothic text-sm sm:text-base text-white">
                <li>Events</li>
                <li>Hackathons</li>
                <li>Workshops</li>
              </ul>
            </div>
            
            {/* KNOW MORE */}
            <div className="text-center sm:text-left">
              <h3 className="font-dm-sans font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-white">KNOW MORE</h3>
              <ul className="space-y-2 sm:space-y-3 font-century-gothic text-sm sm:text-base text-white">
                <li>Schedule</li>
                <li>Sponsors</li>
                <li>Gallery</li>
              </ul>
            </div>
            
            {/* GET IN TOUCH */}
            <div className="text-center sm:text-left">
              <h3 className="font-dm-sans font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-white">GET IN TOUCH</h3>
              <ul className="space-y-2 sm:space-y-3 font-century-gothic text-sm sm:text-base text-white">
                <li>Hospitality</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Computer Asset - Hidden on mobile/tablet, shown on desktop */}
        <div className="hidden lg:block absolute right-0 bottom-0 h-32 sm:h-40 md:h-48 lg:h-56 opacity-50 sm:opacity-75 lg:opacity-100">
          <Image 
            src="/computer.png" 
            alt="Vintage Computer" 
            width={600} 
            height={400} 
            className="h-full w-auto" 
            unoptimized 
          />
        </div>
        
        {/* Bottom Left Credit and Computer for Mobile/Tablet */}
        <div className="relative">
          {/* Mobile Layout - Computer below credits, stuck to right edge */}
          <div className="block md:hidden">
            <div className="max-w-7xl mx-auto px-6 pb-6">
              <div className="text-xs font-century-gothic text-white opacity-80 text-center">
                Designed and Developed by students of SSN and SNUC
              </div>
            </div>
            {/* Computer Asset for Mobile - Below credits, stuck to right edge */}
            <div className="flex justify-end pr-0">
              <Image 
                src="/computer.png" 
                alt="Vintage Computer" 
                width={300} 
                height={225} 
                className="max-w-[280px] h-auto" 
                unoptimized 
              />
            </div>
          </div>
          
          {/* Tablet/Desktop Layout - Computer next to credits */}
          <div className="hidden md:block">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pb-6 sm:pb-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div className="text-xs sm:text-sm font-century-gothic text-white opacity-80 text-center sm:text-left">
                  Designed and Developed by students of SSN and SNUC
                </div>
              </div>
            </div>
            {/* Computer Asset for Tablet/Desktop - Next to credits, outside container */}
            <div className="lg:hidden flex justify-end pr-0 absolute bottom-0 right-0">
              <Image 
                src="/computer.png" 
                alt="Vintage Computer" 
                width={250} 
                height={188} 
                className="max-w-[250px] h-auto" 
                unoptimized 
              />
            </div>
          </div>
        </div>
      </footer>
  );
}
