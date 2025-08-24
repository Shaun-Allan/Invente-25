import Image from 'next/image';


export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen hero-bg" style={{ backgroundImage: 'url(/hero.png)', backgroundPosition: '40% 80%', backgroundSize: 'cover', backgroundAttachment: 'scroll' }}>
        {/* Top Navigation */}

        {/* Hero Content */}
        {/* Title */}
        {/* Title */}
        <div className="absolute top-[40%] sm:top-[32%] left-[50%] transform -translate-x-1/2">
          <Image
            src="/title.png"
            alt="Chrono Shift Title"
            width={800}
            height={500}
            className="w-[450px] sm:w-[600px] md:w-[750px] h-auto drop-shadow-[0_0_12px_rgba(0,0,0,0.85)]"
          />
        </div>

        {/* Invente Logo - below title */}
        <div className="absolute top-[18%] sm:top-[15%] left-[50%] transform -translate-x-1/2">

  <Image
    src="/logos/invente.png"
    alt="Invente Logo"
    width={280}
    height={280}
    className="w-[200px] sm:w-[240px] md:w-[280px] h-auto drop-shadow-[0_0_20px_rgba(255,165,0,0.8)]"
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
        <div className="hidden absolute bottom-[8%] md:bottom-[5%] sm:bottom-[12%] left-[3%] sm:left-[10%] 
  bg-black text-white px-6 sm:px-8 py-3 sm:py-4 
  font-dm-sans font-bold italic 
  text-base sm:text-lg md:text-xl 
  shadow-lg inline-block">
          SEPT 27 - 28
        </div>


        {/* Description Text */}
        <div className="absolute top-[65%] sm:top-[50%] md:top-[55%] lg:top-[65%] right-[4%] sm:left-[10%] md:left-[20%] lg:left-[40%] md:bottom-[5%]sm:right-auto text-black text-right sm:text-left font-poppins leading-relaxed text-xs sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <p className="mb-1 sm:mb-2">Looking for fun? You've come to the</p>
          <p className="mb-1 sm:mb-2 ml-4 sm:ml-8 md:ml-12 lg:ml-16">right place! Since 2016, Invente has</p>
          <p className="mb-1 sm:mb-2 ml-8 sm:ml-12 md:ml-16 lg:ml-24">been our flagship tech fest,</p>
          <p className="mb-1 sm:mb-2 ml-12 sm:ml-16 md:ml-20 lg:ml-32">catered to challenge the</p>
          <p className="mb-1 sm:mb-2 ml-16 sm:ml-20 md:ml-24 lg:ml-42">spirits and intellects of</p>
          <p className="mb-1 sm:mb-2 ml-20 sm:ml-24 md:ml-28 lg:ml-48">students nationwide.</p>
        </div>

        {/* Desktop Get Passes Button */}
        <button className="hidden sm:block absolute bottom-[15%] md:bottom-[5%] sm:bottom-[12%] right-[5%] sm:right-[10%] 
  bg-black text-white 
  px-6 sm:px-8 md:px-10 
  py-3 sm:py-4 
  font-dm-sans italic font-bold 
  text-sm sm:text-base md:text-lg 
  uppercase shadow-lg hover:bg-gray-900 transition-colors">
          GET PASSES
        </button>
      </section>


    </div>
  );
}