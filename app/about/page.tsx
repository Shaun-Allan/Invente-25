import Image from 'next/image';
import { PresidentCard } from '@/components/about/PresidentCard';

// Data for the presidents - easier to manage this way
const presidents = [
    { department: 'Department of Biomedical Engineering', imageSrc: '/about/snu_img1.svg', name: 'Sooryaprakash B', instagram: '@your_insta_1', phone: "+91 86104 14291" },
    { department: 'Department of Chemical Engineering', imageSrc: '/about/snu_img1.svg', name: 'Sooryaprakash B', instagram: '@your_insta_3', phone: "+91 86104 14291" },
    { department: 'Department of Civil Engineering', imageSrc: '/about/snu_img2.svg', name: 'Rajashri LM', instagram: '@your_insta_6', phone: "+91 86104 14291" },
    { department: 'Department of Computer Science Engineering', imageSrc: '/about/snu_img2.svg', name: 'Rajashri LM', instagram: '@your_insta_4', phone: "+91 86104 14291" },
    { department: 'Department of Electronics and Communiction Engineering', imageSrc: '/about/snu_img1.svg', name: 'Sooryaprakash B', instagram: '@your_insta_5', phone: "+91 86104 14291" },
    { department: 'Department of Electrical and Electronics Engineering', imageSrc: '/about/snu_img2.svg', name: 'Rajashri LM', instagram: '@your_insta_2', phone: "+91 86104 14291" },

    { department: 'Department of Information Technology', imageSrc: '/about/snu_img1.svg', name: 'Sooryaprakash B', instagram: '@your_insta_3', phone: "+91 86104 14291" },
    { department: 'Department of Mechanical Engineering', imageSrc: '/about/snu_img1.svg', name: 'Sooryaprakash B', instagram: '@your_insta_3', phone: "+91 86104 14291" },
    { department: 'Department of CSE, SNUC', imageSrc: '/about/snu_img1.svg', name: 'Sooryaprakash B', instagram: '@your_insta_3', phone: "+91 86104 14291" },
    { department: 'Department of Commerce and Economics, SNUC', imageSrc: '/about/snu_img1.svg', name: 'Sooryaprakash B', instagram: '@your_insta_3', phone: "+91 86104 14291" },



];


export default function AboutPage() {
    return (
        <div className="min-h-screen bg-fixed bg-repeat bg-[url('/about/bg.svg')] font-serif text-[#4a2e1a]">

            <main className="container mx-auto px-4 pb-12 max-w-5xl">
                {/* Main Title Banner */}
                <header className="mb-16">
                    <div className="bg-[url('/about/title_banner.svg')] bg-no-repeat bg-center bg-contain h-32 flex items-center justify-center">
                        {/* <h1 className="text-4xl font-bold text-white tracking-widest uppercase -mt-2">
              About
            </h1> */}
                    </div>
                </header>

                {/* SSN Institution Section */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold font-playfair-display text-black text-center mb-6">SSN INSTITUTION</h2>
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                        <Image src="/about/ssn_fountin.svg" alt="SSN Institution Fountain" width={300} height={200} className=" shadow-lg" />
                        <p className="text-lg font-poppins text-black leading-relaxed">
                            SSN Institutions, founded by Dr. Shiv Nadar, Chairman of HCL Technologies, stands out as a premier center of higher learning with a mission of pursuing excellence in education and research. The institutions, with their diverse and dynamic community of students, offer a distinctive combination of some of the finest graduate, undergraduate, and research programs, accomplished faculty, world-class facilities, and a residential campus set on a sprawling 250 acres of sylvan surroundings.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse items-center gap-6">
                        <Image src="/about/ssn_ct.svg" alt="SSN Central Tower" width={300} height={200} className=" shadow-lg" />
                        <p className="text-lg font-poppins text-black leading-relaxed">
                            SSN Institutions provide a variety of stimulating environments for intellectual development, free-thinking, and personal growth, challenging its students with dynamic learning opportunities and equipping them with the skills, insights, attitudes and practical experiences that are necessary to take up responsibilities in the society.
                            <span className="block mt-4 p-4 bg-[#4B3832] bg-opacity-80 text-white">
                                Students of SSN get a unique opportunity to rub shoulders with a diverse and talented peer group and have access to a big and distinguished alumni network that is spread all over the world. More than anything else, SSN is an experience that will help shape the rest of your life. Welcome to an exciting journey of discovery, learning, and growth.
                            </span>
                        </p>
                    </div>
                </section>

                {/* SNU Chennai Section */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold font-playfair-display text-black text-center mb-6">SNU CHENNAI</h2>
                    <p className="text-lg font-poppins text-black leading-relaxed text-center mb-6">
                        Shiv Nadar University Chennai is a research-focused university with a student-centric approach to teaching and learning. The University is committed to creating a research and innovation ecosystem for both its faculty members and its students. It offers a wide range of academic programs at the undergraduate, postgraduate and doctoral levels. The University's rich undergraduate programs in engineering and commerce are intertwined with a strong foundation in the core sciences, humanities and social sciences, making our graduates well-rounded to face the challenges of the modern world.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Image
                            src="/about/snu_img1.svg"
                            alt="SNU Chennai Campus View 1"
                            width={500}
                            height={300}
                            className="shadow-lg w-full h-72 object-cover"
                        />

                        <Image
                            src="/about/snu_img2.svg"
                            alt="SNU Chennai Campus View 2"
                            width={500}
                            height={300}
                            className="shadow-lg w-full h-72 object-cover"
                        />

                    </div>
                </section>

                {/* INVENTE Section */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold font-playfair-display text-black text-center mb-6">INVENTE</h2>
                    <p className="text-lg font-poppins text-black leading-relaxed text-center mb-6">
                        INVENTE, the flagship technical symposium of SSN College of Engineering, is a platform for students to showcase their technical prowess, consisting of a vast array of technical and non-technical competitions. Dreamt of by students and for the students, Invente serves as a launchpad for young, innovative minds to conquer the world of technology through their futuristic ideas. With over 50+ events spanning various disciplines, Invente attracts thousands of participants from across the state, eager to compete among the best engineering talents. And amongst the tense skillset displays of our participants are our fun-filled non-technical events for when they want to wind down. With events of all kinds that would pique anyone's interests, Invente'23 promises you a memorable experience.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Image
                            src="/about/invente1.svg"
                            alt="Invente Event 1"
                            width={500}
                            height={300}
                            className="shadow-lg w-full h-72 object-cover"
                        />

                        <Image
                            src="/about/invente2.svg"
                            alt="Invente Event 2"
                            width={500}
                            height={300}
                            className="shadow-lg w-full h-72 object-cover"
                        />

                    </div>
                </section>

                {/* Department Presidents Section */}
                <section>
                    <h2 className="text-4xl font-bold font-playfair-display text-black text-center mb-8">DEPARTMENT PRESIDENTS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {presidents.map((president) => (
                            <PresidentCard
                                key={president.name + president.department} // A more unique key
                                department={president.department}
                                imageSrc={president.imageSrc}
                                name={president.name}
                                instagram={president.instagram}
                                phone={president.phone}
                            />
                        ))}
                    </div>
                </section>

            </main>
        </div>
    );
}