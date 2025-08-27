import Image from 'next/image';
import { PresidentCard } from '@/components/about/PresidentCard';

// Data for the presidents
const presidents = [
    { department: 'Department of Biomedical Engineering', imageSrc: '/about/prez/Department of Biomedical Engineering.JPG', name: 'Shravan Kumar S', instagram: '@_shravan_k.04', phone: "+91 98844 76919" },
    // { department: 'Department of Chemical Engineering', imageSrc: '/about/prez/Department of Chemical Engineering.jpg', name: 'Sooryaprakash B', instagram: '@your_insta_3', phone: "+91 98844 76919" },
    { department: 'Department of Civil Engineering', imageSrc: '/about/prez/Department of Civil Engineering.jpg', name: 'Hariharan P', instagram: '@hariharan20_06', phone: "+91 87540 54142" },
    // { department: 'Department of Computer Science Engineering', imageSrc: '/about/prez/Department of Computer Science.jpg', name: 'Chandravel Saravanan', instagram: '@your_insta_4', phone: "+91 86104 14291" },
    // { department: 'Department of Electronics and Communiction Engineering', imageSrc: '/about/prez/Department of Electronics and.jpg', name: 'Sooryaprakash B', instagram: '@your_insta_5', phone: "+91 86104 14291" },
    { department: 'Department of Electrical and Electronics Engineering', imageSrc: '/about/prez/Department of Electrical and Electronics Engineering.jpg', name: 'Sai Mandati', instagram: '@i.a.m.s.a.i', phone: "+91 73056 06002" },
    { department: 'Department of Information Technology', imageSrc: '/about/prez/Department of Information Technology.jpeg', name: 'Kathir Kaman A', instagram: '@kathir_02_', phone: "+91 90720 56666" },
    { department: 'Department of Mechanical Engineering', imageSrc: '/about/prez/Department of Mechanical Engineering.jpeg', name: 'Rahul Ayyappan Harish', instagram: '@rahulharish31', phone: "+91 99401 53838" },
    // { department: 'Department of CSE, SNUC', imageSrc: '/about/prez/Department of CSE,.jpg', name: 'Sooryaprakash B', instagram: '@your_insta_3', phone: "+91 86104 14291" },
    { department: 'Department of Commerce and Economics, SNUC', imageSrc: '/about/prez/Department of Commerce and Economics.jpeg', name: 'Aakash Ananthakrishnan ', instagram: '@aakash_ananthakrishnan', phone: "+91 87545 13854" },
];


export default function AboutPage() {
    return (
        <div className="relative min-h-screen font-serif text-white bg-black">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-[url('/about/bg.jpg')] bg-cover bg-center bg-fixed opacity-10"></div>

            <main className="container mx-auto px-4 pb-12 max-w-5xl z-10 relative text-white">
                {/* Main Title Banner */}
                <header className="mb-16">
                    <h1 className="text-6xl font-bold text-white tracking-widest uppercase pt-16 font-michroma 
                      drop-shadow-[0_0_5px_#a855f7] 
                      drop-shadow-[0_0_10px_#a855f7] 
                      drop-shadow-[0_0_20px_#a855f7]">
                        About
                    </h1>
                </header>

                {/* SSN Institution Section */}
                <section className="mb-16">
                    <h2 className="text-5xl font-bold font-playfair-display text-purple-400 mb-6 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">SSN INSTITUTION</h2>
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                        <p className="text-xl text-white font-exo2 leading-relaxed">
                            SSN Institutions, founded by Dr. Shiv Nadar, Chairman of HCL Technologies, stands out as a premier center of higher learning with a mission of pursuing excellence in education and research. The institutions, with their diverse and dynamic community of students, offer a distinctive combination of some of the finest graduate, undergraduate, and research programs, accomplished faculty, world-class facilities, and a residential campus set on a sprawling 250 acres of sylvan surroundings.
                        </p>
                        <Image src="/about/ssn_fountin.svg" alt="SSN Institution Fountain" width={400} height={300} className=" shadow-lg" />
                    </div>
                    <div className="flex flex-col md:flex-row-reverse items-center gap-6">
                        <p className="text-xl text-white font-exo2 leading-relaxed">
                            SSN Institutions provide a variety of stimulating environments for intellectual development, free-thinking, and personal growth, challenging its students with dynamic learning opportunities and equipping them with the skills, insights, attitudes and practical experiences that are necessary to take up responsibilities in the society.
                            <span className="block mt-4 p-4 bg-purple-950/50 text-white">
                                Students of SSN get a unique opportunity to rub shoulders with a diverse and talented peer group and have access to a big and distinguished alumni network that is spread all over the world. More than anything else, SSN is an experience that will help shape the rest of your life. Welcome to an exciting journey of discovery, learning, and growth.
                            </span>
                        </p>
                        <Image src="/about/ssn_ct.svg" alt="SSN Central Tower" width={400} height={300} className="w-[350px] h-[480px]  object-cover shadow-lg" />
                    </div>
                </section>

                {/* SNU Chennai Section */}
                <section className="mb-16">
                    <h2 className="text-5xl font-bold font-playfair-display text-purple-400 text-center mb-6 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">SNU CHENNAI</h2>
                    <p className="text-xl text-white font-exo2 leading-relaxed text-center mb-6">
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
                    <h2 className="text-5xl font-bold font-playfair-display text-purple-400 text-center mb-6 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">INVENTE</h2>
                    <p className="text-xl text-white font-exo2 leading-relaxed text-center mb-6">
                        INVENTE, the flagship technical symposium of SSN College of Engineering, is a platform for students to showcase their technical prowess, consisting of a vast array of technical and non-technical competitions. Dreamt of by students and for the students, Invente serves as a launchpad for young, innovative minds to conquer the world of technology through their futuristic ideas. With over 50+ events spanning various disciplines, Invente attracts thousands of participants from across the state, eager to compete among the best engineering talents. And amongst the tense skillset displays of our participants are our fun-filled non-technical events for when they want to wind down. With events of all kinds that would pique anyone's interests, Invente'25 promises you a memorable experience.
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
                    {/* --- DIVIDER ADDED HERE --- */}
                    <div className="w-full h-px bg-purple-400/30 mt-16 mb-12"></div>
                    
                    <h2 className="text-5xl font-bold font-playfair-display text-purple-400 text-center mb-8 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">DEPARTMENT PRESIDENTS</h2>
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