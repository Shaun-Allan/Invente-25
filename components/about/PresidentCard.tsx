"use client";
import Image from 'next/image';
import Link from 'next/link';

type PresidentCardProps = {
  department: string;
  imageSrc: string;
  name: string;
  instagram: string;
  phone: string;
};

export const PresidentCard = ({ department, imageSrc, name, instagram, phone }: PresidentCardProps) => {
  const cleanedPhone = (phone || '').replace(/\s+/g, '');
  const igHandle = (instagram || '').replace(/^@/, '');
  return (
    <div className="bg-[url('/about/dept_card.jpg')] bg-cover bg-center bg-no-repeat p-3 flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group relative overflow-hidden h-auto border-2 border-purple-400/40">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="flex flex-col items-center relative z-10 w-full justify-between py-2">
        {/* Department */}
        <h3 className="font-bold text-xl md:text-2xl font-orbitron text-white px-4 leading-snug group-hover:text-purple-100 transition-colors duration-300 text-center">
          {department}
        </h3>

        {/* Image + Name + Phone */}
        <div className="flex flex-col items-center gap-3 mt-2">
          <Image
            src={imageSrc}
            alt={`Photo of ${name}`}
            width={120}   // increased from 90
            height={120}  // increased from 90
            className="rounded-full border-4 border-purple-400/60 object-cover w-28 h-28 group-hover:border-purple-300 transition-colors duration-300"
          />

          <p className="font-semibold text-2xl font-poppins text-white group-hover:text-purple-100 transition-colors duration-300 text-center break-words max-w-[260px]">
            {name}
          </p>
          {cleanedPhone ? (
            <a href={`tel:${cleanedPhone}`} className="text-base font-poppins text-purple-200 group-hover:text-purple-100 transition-colors duration-300 underline-offset-4 hover:underline">
              {phone}
            </a>
          ) : (
            <span className="text-base font-poppins text-purple-300/70">—</span>
          )}
        </div>

        {/* Instagram */}
        {igHandle ? (
          <Link href={`https://instagram.com/${igHandle}`} target="_blank" rel="noopener noreferrer" className="text-base font-poppins text-purple-200 group-hover:text-purple-100 transition-colors duration-300 mt-2 text-center break-words max-w-[220px] underline-offset-4 hover:underline">
            Instagram: @{igHandle}
          </Link>
        ) : (
          <span className="text-base font-poppins text-purple-300/70 mt-2 text-center break-words max-w-[220px]">Instagram: —</span>
        )}
      </div>
    </div>
  );
};
