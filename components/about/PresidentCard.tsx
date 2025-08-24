import Image from 'next/image';

type PresidentCardProps = {
  department: string;
  imageSrc: string;
  name: string;
  instagram: string;
  phone: string;
};

export const PresidentCard = ({ department, imageSrc, name, instagram, phone }: PresidentCardProps) => {
  return (
    <div
      className="bg-[url('/about/dept_card.png')] bg-cover bg-center bg-no-repeat p-6 flex flex-col items-center justify-center text-center text-[#4a2e1a] h-80"
    >
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-lg font-playfair-display px-12">{department}</h3>
        <div className='flex gap-4'>
          <Image
            src={imageSrc}
            alt={`Photo of ${name}`}
            width={100}
            height={100}
            className="rounded-full border-4 border-[#c5a78c] my-3 object-cover w-24 h-24"
          />
          <div className='flex flex-col justify-center items-start'>
          <p className="font-semibold text-xl font-playfair-display">{name}</p>
          <p className="text-sm font-poppins">{phone}</p>
          </div>
        </div>
        <p className="text-sm font-poppins">Instagram: {instagram}</p>
      </div>
    </div>
  );
};