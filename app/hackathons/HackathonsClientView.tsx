"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Hackathon, Workshop, TextSection, HackathonSponsor } from "@/lib/api"; // Import new types
import { marked } from "marked";
import DOMPurify from "dompurify";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://ssnsnucinvente.com";

// Helper component to safely render Rich Text (Markdown) from Strapi
const MarkdownRenderer = ({ content }: { content: any }) => {
    if (!content) return null;
    const contentString = typeof content === 'string' ? content : JSON.stringify(content);
    const sanitizedHtml = DOMPurify.sanitize(marked.parse(contentString) as string);
    return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} className="prose prose-invert prose-p:text-justify prose-p:text-lg prose-li:text-lg text-left" />;
};

// ============================================================================
// MODAL FOR WORKSHOPS (Unchanged)
// ============================================================================
const WorkshopModal = ({ workshop, onClose, registrationUrl }: { workshop: Workshop; onClose: () => void; registrationUrl?: string | null }) => (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
        <div className="relative w-11/12 max-w-7xl h-full max-h-[80vh] bg-black/60 backdrop-blur-lg border-2 border-purple-500/80 shadow-2xl shadow-purple-500/20 text-white overflow-hidden flex flex-col mt-20 sm:mt-20">
            <button className="absolute right-4 top-4 text-white text-3xl hover:text-purple-400 cursor-pointer z-20" onClick={onClose}>✕</button>
            <div className="p-8 overflow-y-auto custom-scrollbar font-exo2">
                <div className="mt-16 mb-12">
                    <h1 className="text-5xl sm:text-6xl font-rubik-glitch text-purple-500 text-center mb-6 tracking-wide break-words drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] uppercase">{workshop.attributes.title}</h1>
                </div>
                <ul className="flex flex-wrap justify-center gap-4 sm:gap-7 list-none mb-8 bg-purple-900/20 border border-purple-500/30 text-white text-sm sm:text-base p-3 font-michroma">
                    <li className="text-center">{workshop.attributes.registrationFee ? `₹${workshop.attributes.registrationFee}` : 'Free'}<br />Reg. Fee</li>
                    {workshop.attributes.prizes?.map(p => <li key={p.id} className="text-center">{p.value}<br />{p.label}</li>)}
                    {workshop.attributes.meta?.map(m => <li key={m.id} className="text-center">{m.value}<br />{m.label}</li>)}
                </ul>
                {registrationUrl && (
                    <div className="my-8 flex justify-center">
                        {/* <a
                        href={registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"

                      > */}
                        <button

                            className="relative overflow-hidden uppercase italic bg-purple-600 text-white px-5 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 font-bold text-sm sm:text-sm md:text-sm shadow-lg transition-colors duration-300 ease-in-out font-orbitron group"
                        >
                            {/* Background slide effect */}
                            <div
                                className={`absolute inset-0 bg-white -translate-x-full transition-transform duration-300  group-hover:translate-x-0`}
                            ></div>

                            {/* "Get Passes" text */}
                            <span
                                className={`relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-[200%]`}
                            >
                                Register
                            </span>

                            {/* "Coming Soon" text */}
                            <span
                                className={`absolute inset-0 flex items-center justify-center text-black font-bold -translate-x-full transition-transform duration-300 z-20  group-hover:translate-x-0`}
                            >
                                Coming Soon
                            </span>
                        </button>
                        {/* </a> */}
                    </div>
                )}
                <MarkdownRenderer content={workshop.attributes.description} />
                {workshop.attributes.generalInstructions && Array.isArray(workshop.attributes.generalInstructions) && (
                    <div className="mt-8">
                        <p className="text-left text-lg sm:text-xl font-bold font-michroma mb-4">{workshop.attributes.generalInstructionsTitle}</p>
                        <ul className="list-disc list-inside text-left text-base sm:text-lg space-y-2 pl-4">
                            {(workshop.attributes.generalInstructions as string[]).map((instruction, index) => (<li key={index}>{instruction}</li>))}
                        </ul>
                    </div>
                )}
                {workshop.attributes.sections?.map((section) => (
                    <div key={section.id} className="my-8 bg-purple-900/20 p-6 border border-purple-500/30">
                        <h3 className="font-bold text-xl sm:text-2xl mb-4 text-center font-michroma">{section.title}</h3>
                        {section.__component === 'section.text-section' && (<MarkdownRenderer content={(section as TextSection).content} />)}
                        {section.__component === 'section.schedule-section' && section.days?.map(day => (
                            <div key={day.id} className="mb-4">
                                {day.scheduleList && Array.isArray(day.scheduleList) && (
                                    <div className="mt-8">
                                        <p className="text-left text-lg sm:text-xl font-bold font-michroma mb-4">{day.dayTitle}</p>
                                        <ul className="list-disc list-inside text-left text-base sm:text-lg space-y-2 pl-4">
                                            {(day.scheduleList as string[]).map((item, index) => (<li key={index}>{item}</li>))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
                <h3 className="text-center text-2xl sm:text-3xl font-bold mb-6 mt-10 font-michroma">Coordinators</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {workshop.attributes.coordinators?.map(c => (
                        <div key={c.name} className="bg-black/80 text-white px-8 py-4 text-center shadow-lg border border-purple-500/50">
                            <p className="font-semibold text-lg">{c.name}</p>
                            <p className="text-gray-300">{c.contact}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);


// ============================================================================
// MODAL FOR HACKATHONS (Meta Data Section Added)
// ============================================================================
const HackathonModal = ({ hackathon, onClose, registrationUrl }: { hackathon: Hackathon; onClose: () => void; registrationUrl?: string | null }) => {
    const [activeTrackIndex, setActiveTrackIndex] = useState(0);
    const activeTrack = hackathon.attributes.tracks[activeTrackIndex];

    const sponsorTierOrder = [
        "Title Sponsor",
        "Competent Sponsor",
        "Prize Pool Sponsor"
    ];

    const sponsorsByTier = hackathon.attributes.sponsors?.reduce((acc, sponsor) => {
        const tier = sponsor.tier || "Sponsor";
        if (!acc[tier]) {
            acc[tier] = [];
        }
        acc[tier].push(sponsor);
        return acc;
    }, {} as Record<string, HackathonSponsor[]>);

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
            <div className="relative w-19/20 sm:w-11/12 max-w-7xl h-full max-h-[80vh] bg-black/60 backdrop-blur-lg border-2 border-purple-500/80 shadow-2xl shadow-purple-500/20 text-white overflow-hidden flex flex-col mt-20 sm:mt-20">
                <button className="absolute right-4 top-4 text-white text-3xl hover:text-purple-400 cursor-pointer z-20" onClick={onClose}>✕</button>
                <div className="p-8 overflow-y-auto custom-scrollbar font-exo2">
                    <div className="mt-16 mb-12">
                        <h1 className="text-5xl sm:text-6xl font-rubik-glitch text-purple-500 text-center mb-6 tracking-wide break-words drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] uppercase">{hackathon.attributes.name}</h1>
                    </div>

                    <div className="space-y-12 mb-10">
                        {sponsorTierOrder.map(tier => (
                            sponsorsByTier?.[tier] && (
                                <div key={tier}>
                                    <h4 className="text-center text-xl sm:text-2xl font-bold mb-6 text-purple-300 font-michroma uppercase tracking-widest">{tier}</h4>
                                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
                                        {sponsorsByTier[tier].map(sponsor => (
                                            <div key={sponsor.id} className="text-center">
                                                <Image
                                                    src={`${STRAPI_URL}${sponsor.logo.data?.attributes.url}`}
                                                    alt={sponsor.name}
                                                    width={200}
                                                    height={200}
                                                    className={`object-contain w-auto transition-transform duration-300 hover:scale-105 ${tier === "Title Sponsor" ? "h-32" : "h-20"
                                                        }`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        ))}
                    </div>

                    <ul className="flex flex-wrap justify-center gap-4 sm:gap-7 list-none my-12 bg-purple-900/20 border border-purple-500/30 text-white text-sm sm:text-base p-3 font-michroma">
                        <li className="text-center">
                            {hackathon.attributes.registrationFee ? `₹${hackathon.attributes.registrationFee}` : 'Free'}
                            <br />
                            Reg. Fee
                        </li>
                        {hackathon.attributes.meta?.map(m => (
                            <li key={m.id} className="text-center">
                                {m.value}
                                <br />
                                {m.label}
                            </li>
                        ))}
                    </ul>

                    {registrationUrl && (
                        <div className="my-8 flex justify-center">
                            <button
                                className="relative overflow-hidden uppercase italic bg-purple-600 text-white px-5 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 font-bold text-sm sm:text-sm md:text-sm shadow-lg transition-colors duration-300 ease-in-out font-orbitron group"
                            >
                                <div className={`absolute inset-0 bg-white -translate-x-full transition-transform duration-300  group-hover:translate-x-0`}></div>
                                <span className={`relative z-10 inline-block transition-transform duration-300  group-hover:translate-x-[200%]`}>Register</span>
                                <span className={`absolute inset-0 flex items-center justify-center text-black font-bold -translate-x-full transition-transform duration-300 z-20  group-hover:translate-x-0`}>Coming Soon</span>
                            </button>
                        </div>
                    )}

                    <div className="my-8 bg-purple-900/20 p-6 border border-purple-500/30">
                        <MarkdownRenderer content={hackathon.attributes.description} />
                        {hackathon.attributes.generalInstructions && Array.isArray(hackathon.attributes.generalInstructions) && (
                            <div className="mt-8">
                                <p className="text-left text-lg sm:text-xl font-bold font-michroma mb-4">{hackathon.attributes.generalInstructionsTitle}</p>
                                <ul className="list-disc list-inside text-left text-base sm:text-lg space-y-2 pl-4">
                                    {(hackathon.attributes.generalInstructions as string[]).map((instruction, index) => (<li key={index}>{instruction}</li>))}
                                </ul>
                            </div>
                        )}

                        {/* --- NEW Schedule Section --- */}
                        {hackathon.attributes.schedule && Array.isArray(hackathon.attributes.schedule) && (
                            <div className="mt-8">
                                <p className="text-left text-lg sm:text-xl font-bold font-michroma mb-4">Schedule</p>
                                <ul className="list-disc list-inside text-left text-base sm:text-lg space-y-2 pl-4">
                                    {(hackathon.attributes.schedule as string[]).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {/* --- END Schedule Section --- */}
                    </div>

                    <h3 className="text-center text-2xl sm:text-3xl font-bold mb-6 mt-10 font-michroma">Coordinators</h3>
                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        {hackathon.attributes.coordinators?.map(c => (
                            <div key={c.name} className="bg-black/80 text-white px-8 py-4 text-center shadow-lg border border-purple-500/50">
                                <p className="font-semibold text-lg">{c.name}</p>
                                <p className="text-gray-300">{c.contact}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-center text-2xl sm:text-3xl font-bold mb-6 mt-12 font-michroma">Tracks</h3>
                    <div className="flex flex-wrap justify-center border-b-2 border-purple-500/50 mb-4">
                        {hackathon.attributes.tracks.map((track, index) => (
                            <button key={track.id} onClick={() => setActiveTrackIndex(index)}
                                className={`px-6 py-3 font-michroma text-sm sm:text-base transition-colors duration-300 uppercase ${activeTrackIndex === index ? 'bg-purple-600 text-white' : 'bg-transparent text-purple-300 hover:bg-purple-900/50'}`}>
                                {track.name}
                            </button>
                        ))}
                    </div>

                    <div className="bg-purple-900/20 p-6 border border-purple-500/30">
                        <MarkdownRenderer content={activeTrack.description} />
                        <ul className="flex flex-wrap justify-center gap-4 sm:gap-7 list-none my-8 bg-purple-900/20 border border-purple-500/30 text-white text-sm sm:text-base p-3 font-michroma">
                            {activeTrack.prizes?.map(p => <li key={p.id} className="text-center">{p.value}<br />{p.label}</li>)}
                        </ul>
                        {activeTrack.sections?.map(section => (
                            <div key={section.id} className="my-8">
                                <h4 className="font-bold text-xl sm:text-2xl mb-4 text-center font-michroma">{section.title}</h4>
                                <MarkdownRenderer content={section.content} />
                            </div>
                        ))}
                        {activeTrack.detailsPdf.data && (
                            <div className="text-center mt-8">
                                <a href={`${STRAPI_URL}${activeTrack.detailsPdf.data.attributes.url}`} target="_blank" rel="noopener noreferrer"
                                    className="inline-block uppercase italic bg-purple-600 text-white px-8 py-3 font-bold text-md shadow-lg transition-all duration-300 hover:bg-purple-700 hover:scale-105 hover:shadow-purple-500/50 font-orbitron">
                                    Download Problem Statement
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


// ============================================================================
// MAIN CLIENT VIEW COMPONENT (Unchanged)
// ============================================================================
const HackathonsClientView = ({ hackathons, workshops, registrationUrl }: { hackathons: Hackathon[], workshops: Workshop[], registrationUrl?: string | null }) => {
    const [selectedEvent, setSelectedEvent] = useState<Hackathon | Workshop | null>(null);

    useEffect(() => {
        if (selectedEvent) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedEvent]);

    return (
        <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-cover bg-center p-8 text-white" style={{ backgroundImage: "url('/hackathons/bg.png')" }}>
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <Image src="/hackathons/clock.jpg" layout="fill" objectFit="cover" alt="Clock background" className="opacity-20" />
            </div>
            <div className="absolute inset-0 z-5 bg-black/50"></div>
            <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">
                <div className="mt-16 mb-12">
                    <Image src="/hackathons/Hackathons.png" width={600} height={100} alt="Hackathons Title" className="h-auto w-full max-w-[400px] sm:max-w-[400px]" />
                </div>
                <div className="flex w-full flex-col gap-8 md:flex-row">
                    {hackathons.map((hackathon) => (
                        <div key={hackathon.id} className="group flex flex-1 cursor-pointer items-center justify-center border-2 border-purple-500 bg-black/60 p-8 backdrop-blur-sm transition-all duration-300 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-500/40 sm:p-8" onClick={() => setSelectedEvent(hackathon)}>
                            <h1 className="text-5xl sm:text-5xl font-rubik-glitch text-purple-500 text-center tracking-wide break-words drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] uppercase">{hackathon.attributes.name}</h1>
                        </div>
                    ))}
                </div>
                <div className="my-16">
                    <Image src="/hackathons/WORKSHOPS.png" width={600} height={100} alt="Workshops Title" className="h-auto w-full max-w-[400px] sm:max-w-[400px]" />
                </div>
                {workshops.length > 0 ? (
                    <div className="flex w-full flex-col gap-8 md:flex-row">
                        {workshops.map((workshop) => (
                            <div key={workshop.id} className="group flex flex-1 cursor-pointer items-center justify-center border-2 border-purple-500 bg-black/60 p-8 backdrop-blur-sm transition-all duration-300 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-500/40 sm:p-12" onClick={() => setSelectedEvent(workshop)}>
                                <h1 className="text-5xl sm:text-6xl font-rubik-glitch text-purple-500 text-center mb-6 tracking-wide break-words drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] uppercase">{workshop.attributes.title}</h1>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="border border-purple-500 bg-black/60 px-12 py-4 backdrop-blur-sm">
                        <p className="text-xl font-semibold tracking-widest sm:text-2xl font-michroma text-center">Coming Soon..</p>
                    </div>
                )}

                {/* Conditional Modal Rendering */}
                {selectedEvent && 'tracks' in selectedEvent.attributes && (
                    <HackathonModal hackathon={selectedEvent as Hackathon} onClose={() => setSelectedEvent(null)} registrationUrl={registrationUrl} />
                )}
                {selectedEvent && !('tracks' in selectedEvent.attributes) && (
                    <WorkshopModal workshop={selectedEvent as Workshop} onClose={() => setSelectedEvent(null)} registrationUrl={registrationUrl} />
                )}
            </div>
        </main> 
    );
};

export default HackathonsClientView;