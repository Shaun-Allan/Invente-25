import Image from 'next/image';


// 2. Define the list of images to be displayed in the gallery
const galleryImages = [
  '/gallery/1.png',
  '/gallery/2.png',
  '/gallery/3.png',
  '/gallery/4.png',
];

export default function GalleryPage() {
  return (
    <main
      className="relative min-h-screen w-full flex flex-col items-center p-8 lg:p-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/gallery/bg.svg')" }}
    >
      {/* Decorative lamps positioned at the top-left corner */}
      {/* UPDATED: Increased the size of the container div for the lamps */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-86 md:h-86 lg:w-150 lg:h-150">
        <Image
          src="/gallery/lamps.svg"
          alt="Hanging Lamps"
          fill={true}
          objectFit="contain"
        />
      </div>

      {/* Page Title */}
      <h1
        className={`font-playfair-display font-bold text-6xl md:text-7xl lg:text-8xl text-black my-10 lg:my-16 z-10`}
      >
        GALLERY
      </h1>

      {/* Image Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 max-w-7xl w-full">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="w-full h-auto p-4 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/gallery/frame.png')" }}
          >
            {/* The actual image from your list */}
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}