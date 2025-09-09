"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PresidentCard } from '@/components/about/PresidentCard';
import React from 'react';

type President = any; // Using any to avoid tight coupling to lib types here

const container = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function AboutClient({ presidents, strapiUrl }: { presidents: President[]; strapiUrl: string }) {
  return (
    <div className="relative min-h-screen font-serif text-white bg-black">
      <div className="absolute inset-0 bg-[url('/about/bg.jpg')] bg-cover bg-center bg-fixed opacity-10"></div>

      <main className="container mx-auto px-4 pb-12 max-w-5xl z-10 relative text-white">
        <header className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-6xl font-bold text-white tracking-widest uppercase pt-16 font-michroma drop-shadow-[0_0_5px_#a855f7] drop-shadow-[0_0_10px_#a855f7] drop-shadow-[0_0_20px_#a855f7]"
          >
            About
          </motion.h1>
        </header>

        {/* SSN Institution Section */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mb-16">
          <motion.h2 variants={item} className="text-4xl font-bold font-playfair-display text-purple-400 mb-6 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
            SSN INSTITUTION
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            <motion.p variants={item} className="text-lg text-white font-exo2 leading-relaxed">
              SSN Institutions, founded by Dr. Shiv Nadar, Chairman of HCL Technologies, stands out as a premier center of higher learning with a mission of pursuing excellence in education and research. The institutions, with their diverse and dynamic community of students, offer a distinctive combination of some of the finest graduate, undergraduate, and research programs, accomplished faculty, world-class facilities, and a residential campus set on a sprawling 250 acres of sylvan surroundings.
            </motion.p>
            <motion.div variants={item}>
              <Image src="/about/ssn_fountin.svg" alt="SSN Institution Fountain" width={560} height={420} className="shadow-lg w-[560px] max-w-full h-auto" />
            </motion.div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
            <motion.p variants={item} className="text-lg text-white font-exo2 leading-relaxed">
              SSN Institutions provide a variety of stimulating environments for intellectual development, free-thinking, and personal growth, challenging its students with dynamic learning opportunities and equipping them with the skills, insights, attitudes and practical experiences that are necessary to take up responsibilities in the society.
              <span className="block mt-4 p-4 bg-purple-950/50 text-white">
                Students of SSN get a unique opportunity to rub shoulders with a diverse and talented peer group and have access to a big and distinguished alumni network that is spread all over the world. More than anything else, SSN is an experience that will help shape the rest of your life. Welcome to an exciting journey of discovery, learning, and growth.
              </span>
            </motion.p>
            <motion.div variants={item}>
              <Image src="/about/ssn_ct.svg" alt="SSN Central Tower (Clock)" width={560} height={560} className="w-[520px] md:w-[560px] max-w-full h-auto object-contain shadow-lg" />
            </motion.div>
          </div>
        </motion.section>

        {/* SNU Chennai Section */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="mb-16">
          <motion.h2 variants={item} className="text-5xl font-bold font-playfair-display text-purple-400 text-center mb-6 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
            SNU CHENNAI
          </motion.h2>
          <motion.p variants={item} className="text-lg text-white font-exo2 leading-relaxed text-center mb-6">
            Shiv Nadar University Chennai is a research-focused university with a student-centric approach to teaching and learning. The University is committed to creating a research and innovation ecosystem for both its faculty members and its students. It offers a wide range of academic programs at the undergraduate, postgraduate and doctoral levels. The University's rich undergraduate programs in engineering and commerce are intertwined with a strong foundation in the core sciences, humanities and social sciences, making our graduates well-rounded to face the challenges of the modern world.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={item}>
              <Image src="/about/snu_img1.svg" alt="SNU Chennai Campus View 1" width={500} height={300} className="shadow-lg w-full h-72 object-cover" />
            </motion.div>
            <motion.div variants={item}>
              <Image src="/about/snu_img2.svg" alt="SNU Chennai Campus View 2" width={500} height={300} className="shadow-lg w-full h-72 object-cover" />
            </motion.div>
          </div>
        </motion.section>

        {/* INVENTE Section */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="mb-16">
          <motion.h2 variants={item} className="text-5xl font-bold font-playfair-display text-purple-400 text-center mb-6 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
            INVENTE
          </motion.h2>
          <motion.p variants={item} className="text-lg text-white font-exo2 leading-relaxed text-center mb-6">
            INVENTE, the flagship technical symposium of SSN College of Engineering, is a platform for students to showcase their technical prowess, consisting of a vast array of technical and non-technical competitions. Dreamt of by students and for the students, Invente serves as a launchpad for young, innovative minds to conquer the world of technology through their futuristic ideas. With over 50+ events spanning various disciplines, Invente attracts thousands of participants from across the state, eager to compete among the best engineering talents. And amongst the tense skillset displays of our participants are our fun-filled non-technical events for when they want to wind down. With events of all kinds that would pique anyone's interests, Invente'25 promises you a memorable experience.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={item}>
              <Image src="/about/invente1.jpg" alt="Invente Event 1" width={500} height={300} className="shadow-lg w-full h-72 object-cover" />
            </motion.div>
            <motion.div variants={item}>
              <Image src="/about/invente2.png" alt="Invente Event 2" width={500} height={300} className="shadow-lg w-full h-72 object-cover" />
            </motion.div>
          </div>
        </motion.section>

        {/* Department Presidents Section */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
          <div className="w-full h-px bg-purple-400/30 mt-16 mb-12"></div>
          <motion.h2 variants={item} className="text-5xl font-bold font-playfair-display text-purple-400 text-center mb-8 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
            DEPARTMENT PRESIDENTS
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {presidents.map((president: any) => {
              const rawUrl: string | undefined = president?.attributes?.photo?.data?.attributes?.url;
              const fullUrl = rawUrl
                ? (rawUrl.startsWith('http') ? rawUrl : `${strapiUrl}${rawUrl}`)
                : 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
              return (
                <motion.div key={president.id} variants={item}>
                  <PresidentCard
                    department={president.attributes.department}
                    imageSrc={fullUrl}
                    name={president.attributes.name}
                    instagram={president.attributes.instagramHandle!}
                    phone={president.attributes.phone!}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
