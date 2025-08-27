'use client'; 

 import { useState } from 'react'; 

 // Define the list of images for the gallery carousel 
 const galleryImages = [ 
   '/gallery/1.png', 
   '/gallery/2.png', 
   '/gallery/3.png', 
   '/gallery/4.png', 
 ]; 

 // Define the type for the arrow component props 
 interface ArrowProps { 
   onClick: () => void; 
 } 

 // SVG component for the left navigation arrow 
 const LeftArrow = ({ onClick }: ArrowProps) => ( 
   <button 
     onClick={onClick} 
     className="absolute left-0 top-1/2 z-20 -translate-y-1/2 transform cursor-pointer rounded-r-lg bg-black/30 p-3 text-white transition hover:bg-black/50 focus:outline-none md:-left-12" 
     aria-label="Previous Image" 
   > 
     <svg 
       xmlns="http://www.w3.org/2000/svg" 
       className="h-8 w-8" 
       fill="none" 
       viewBox="0 0 24" 
       stroke="currentColor" 
     > 
       <path 
         strokeLinecap="round" 
         strokeLinejoin="round" 
         strokeWidth={2} 
         d="M15 19l-7-7 7-7" 
       /> 
     </svg> 
   </button> 
 ); 

 // SVG component for the right navigation arrow 
 const RightArrow = ({ onClick }: ArrowProps) => ( 
   <button 
     onClick={onClick} 
     className="absolute right-0 top-1/2 z-20 -translate-y-1/2 transform cursor-pointer rounded-l-lg bg-black/30 p-3 text-white transition hover:bg-black/50 focus:outline-none md:-right-12" 
     aria-label="Next Image" 
   > 
     <svg 
       xmlns="http://www.w3.org/2000/svg" 
       className="h-8 w-8" 
       fill="none" 
       viewBox="0 0 24" 
       stroke="currentColor" 
     > 
       <path 
         strokeLinecap="round" 
         strokeLinejoin="round" 
         strokeWidth={2} 
         d="M9 5l7 7-7 7" 
       /> 
     </svg> 
   </button> 
 ); 

 export default function GalleryPage() { 
   // State to keep track of the current image index 
   const [currentIndex, setCurrentIndex] = useState(0); 

   // Function to go to the previous image 
   const goToPrevious = () => { 
     const isFirstSlide = currentIndex === 0; 
     const newIndex = isFirstSlide ? galleryImages.length - 1 : currentIndex - 1; 
     setCurrentIndex(newIndex); 
   }; 

   // Function to go to the next image 
   const goToNext = () => { 
     const isLastSlide = currentIndex === galleryImages.length - 1; 
     const newIndex = isLastSlide ? 0 : currentIndex + 1; 
     setCurrentIndex(newIndex); 
   }; 

   return ( 
     <main 
       className="relative flex min-h-screen w-full flex-col items-center pt-16 p-4 bg-cover bg-center" // Changed justify-center to pt-16 and justify-start 
       // Use the background image from your gallery folder 
       style={{ backgroundImage: "url('/gallery/bg.png')" }} 
     > 
       {/* Dark overlay for the background */} 
       <div className="absolute inset-0 bg-black/60 z-0"></div> 

       {/* Page Title as an SVG image */} 
       <img 
         src="/gallery/title.svg" 
         alt="Gallery Title" 
         className="w-full sm:w-1/2 max-w-xs md:max-w-sm lg:max-w-md mb-16 sm:mb-8 z-10" 
       /> 

       {/* Carousel Container */} 
       <div className="relative w-full max-w-4xl lg:max-w-5xl z-10"> 
         {/* Navigation Arrows */} 
         <LeftArrow onClick={goToPrevious} /> 
         <RightArrow onClick={goToNext} /> 

         {/* Image Display Area with sliding animation */} 
         <div className="overflow-hidden"> 
           <div 
             className="flex transition-transform duration-500 ease-in-out" 
             style={{ transform: `translateX(-${currentIndex * 100}%)` }} 
           > 
             {galleryImages.map((src, index) => ( 
               <div key={index} className="relative aspect-video w-full flex-shrink-0"> 
                 <img 
                   src={src} 
                   alt={`Gallery image ${index + 1}`} 
                   className="w-full h-full object-cover" // Changed to object-cover 
                   loading="lazy" 
                 /> 
               </div> 
             ))} 
           </div> 
         </div> 
       </div> 
     </main> 
   ); 
 }