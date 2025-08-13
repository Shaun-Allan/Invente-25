import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#1a1510] text-[#e0dcd7] py-8 md:py-10 lg:py-12 w-full">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold uppercase tracking-wider">Participate</h3>
            <Link href="#" className="text-sm hover:underline">
              Events
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Hackathons
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Workshops
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold uppercase tracking-wider">Know More</h3>
            <Link href="#" className="text-sm hover:underline">
              Schedule
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Sponsors
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Gallery
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold uppercase tracking-wider">Get In Touch</h3>
            <Link href="#" className="text-sm hover:underline">
              Hospitality
            </Link>
          </div>
          <div className="col-span-2 md:col-span-3 mt-6 text-xs text-muted-foreground">
            Designed and Developed by the
            <br />
            Students of SSN and SNUC
            <br />
            © Invente 2025
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/computer.png"
            width={300}
            height={225}
            alt="Invente 25"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </footer>
  )
}