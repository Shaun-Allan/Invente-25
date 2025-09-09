'use client';

import { useState } from 'react';

// Define the list of images for the gallery carousel
const galleryImages = [
  { src: '/gallery/5.png', pos: "" },
  { src: '/gallery/3.png', pos: "" },
  { src: '/gallery/4.png', pos: "" },
  { src: '/gallery/1.png', pos: "" },
  { src: '/gallery/2.png', pos: "" },
  { src: '/gallery/6.png', pos: "" },
  { src: '/gallery/7.png', pos: "" },
  { src: '/gallery/8.png', pos: "" },
  { src: '/gallery/9.png', pos: "object-[0%_35%]" },
  { src: '/gallery/10.png', pos: "object-[0%_30%]" },
  { src: '/gallery/11.png', pos: "" },
  { src: '/gallery/12.png', pos: "" },
];

// Define the type for the arrow component props
interface ArrowProps {
  onClick: () => void;
}

// SVG component for the left navigation arrow
const LeftArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 z-20 -translate-y-1/2 transform cursor-pointer rounded-l-lg bg-black/30 p-3 text-white transition hover:bg-black/50 focus:outline-none md:-left-12"
    aria-label="Previous Image"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
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
    className="absolute right-0 top-1/2 z-20 -translate-y-1/2 transform cursor-pointer rounded-r-lg bg-black/30 p-3 text-white transition hover:bg-black/50 focus:outline-none md:-right-12"
    aria-label="Next Image"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
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

  // CSS moved to app/globals.css (no DOM access required)

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

  const nextIndex = (currentIndex + 1) % galleryImages.length;

  return (
    <main
      className="relative flex min-h-screen w-full flex-col items-center pt-16 p-4 bg-cover bg-center"
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
      <div className="relative carousel-group w-full max-w-4xl lg:max-w-4xl z-10">
        {/* Gradient Border Effect from ProjectCard */}
        <div className="gradient-border"></div>

        {/* Navigation Arrows */}
        <LeftArrow onClick={goToPrevious} />
        <RightArrow onClick={goToNext} />

        {/* Image Display Area with crossfade + circular next preview */}
        <div className="relative w-full aspect-video overflow-hidden">
          {/* Circular preview of the next image sitting behind */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              key={nextIndex}
              src={galleryImages[nextIndex].src}
              alt="Next preview"
              className={`preview-circle h-[68%] w-[68%] object-cover opacity-75 blur-[1px] ${galleryImages[nextIndex].pos}`}
              loading="lazy"
            />
          </div>

          {galleryImages.map((e, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
              }`}
            >
              <img
                src={e.src}
                alt={`Gallery image ${index + 1}`}
                className={`w-full h-full object-cover ${e.pos}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
