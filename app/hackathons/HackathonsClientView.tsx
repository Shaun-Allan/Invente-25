"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HackathonWorkshop } from "@/lib/api"; // Import the type from your API file
import { marked } from "marked";
import DOMPurify from "dompurify";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://192.168.1.10:1338";

// Helper component to safely render Rich Text (Markdown) from Strapi
const MarkdownRenderer = ({ content }: { content: string }) => {
    if (!content) return null;
    const sanitizedHtml = DOMPurify.sanitize(marked.parse(content) as string);
    return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} className="prose prose-invert prose-p:text-justify prose-p:text-lg prose-li:text-lg text-left" />;
};

// Reusable Modal Component (Updated to use Strapi data)
const HackathonModal = ({ event, onClose, registrationUrl }: { event: HackathonWorkshop; onClose: () => void; registrationUrl?: string | null }) => (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
        <div className="relative  w-11/12 max-w-7xl h-full max-h-[80vh] bg-black/60 backdrop-blur-lg border-2 border-purple-500/80 shadow-2xl shadow-purple-500/20 text-white overflow-hidden flex flex-col mt-20 sm:mt-20">
            <button
                className="absolute right-4 top-4 text-white text-3xl hover:text-purple-400 cursor-pointer z-20"
                onClick={onClose}
            >
                ✕
            </button>
            <div className="p-8 overflow-y-auto custom-scrollbar font-exo2">
                <div className="mt-16 mb-12">
                    <h1 className="text-5xl sm:text-6xl font-rubik-glitch text-purple-500 text-center mb-6 tracking-wide break-words drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] uppercase">
                        {event.attributes.title}
                    </h1>
                </div>
                <ul className="flex flex-wrap justify-center gap-4 sm:gap-7 list-none mb-8 bg-purple-900/20 border border-purple-500/30 text-white text-sm sm:text-base p-3 font-michroma">
                    {/* ✨ REGISTRATION FEE ADDED HERE */}
                    <li className="text-center">
                        {event.attributes.registrationFee
                            ? `₹${event.attributes.registrationFee}`
                            : 'Free'}
                        <br />Reg. Fee
                    </li>
                    {event.attributes.prizes?.map(p => <li key={p.id} className="text-center">{p.value}<br />{p.label}</li>)}
                    {event.attributes.meta?.map(m => <li key={m.id} className="text-center">{m.value}<br />{m.label}</li>)}
                </ul>

                <MarkdownRenderer content={event.attributes.description} />

                {event.attributes.generalInstructions && Array.isArray(event.attributes.generalInstructions) && (
                    <div className="mt-8">
                        <p className="text-left text-lg sm:text-xl font-bold font-michroma mb-4">{event.attributes.generalInstructionsTitle}</p>
                        <ul className="list-disc list-inside text-left text-base sm:text-lg space-y-2 pl-4">
                            {(event.attributes.generalInstructions as string[]).map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {event.attributes.sections?.map((section) => (
                    <div key={section.title} className="my-8 bg-purple-900/20 p-6 border border-purple-500/30">
                        <h3 className="font-bold text-xl sm:text-2xl mb-4 text-center font-michroma">{section.title}</h3>
                        {section.__component === 'section.text-section' && (
                            <MarkdownRenderer content={section.content} />
                        )}
                        {section.__component === 'section.schedule-section' && section.days?.map(day => {
                            console.log(day.scheduleList)
                            return (
                                <div key={day.id} className="mb-4">
                                    {day.scheduleList && Array.isArray(day.scheduleList) && (
                                        <div className="mt-8">
                                            <p className="text-left text-lg sm:text-xl font-bold font-michroma mb-4">{day.dayTitle}</p>
                                            <ul className="list-disc list-inside text-left text-base sm:text-lg space-y-2 pl-4">
                                                {(day.scheduleList as string[]).map((instruction, index) => (
                                                    <li key={index}>{instruction}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                </div>
                            )
                        })}
                    </div>
                ))}

                {/* ✨ REGISTER BUTTON ADDED HERE */}
                {registrationUrl && (
                    <div className="my-10 flex justify-center">
                        {/* <a
                            href={registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="uppercase italic bg-purple-600 text-white px-10 py-4 font-bold text-lg shadow-lg transition-all duration-300 hover:bg-purple-700 hover:scale-105 hover:shadow-purple-500/50 font-orbitron"
                        > */}
                        <button
                            className="relative overflow-hidden uppercase italic bg-purple-600 text-white px-5 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 font-bold text-sm sm:text-base md:text-lg shadow-lg transition-colors duration-300 ease-in-out font-orbitron group"
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
                                className={`absolute inset-0 flex items-center justify-center text-black font-bold -translate-x-full transition-transform duration-300 z-20 translate-x-0' : group-hover:translate-x-0`}
                            >
                                Coming Soon
                            </span>
                        </button>
                        {/* </a> */}
                    </div>
                )}

                <h3 className="text-center text-2xl sm:text-3xl font-bold mb-6 mt-10 font-michroma">Coordinators</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {event.attributes.coordinators?.map(c => (
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

const HackathonsClientView = ({ hackathons, workshops, registrationUrl }: { hackathons: HackathonWorkshop[], workshops: HackathonWorkshop[], registrationUrl?: string | null }) => {
    const [selectedEvent, setSelectedEvent] = useState<HackathonWorkshop | null>(null);

    // ✨ 2. ADD useEffect TO CONTROL BODY SCROLL
    useEffect(() => {
        // If an event is selected (modal is open), disable body scrolling.
        if (selectedEvent) {
            document.body.style.overflow = 'hidden';
        }

        // This is a cleanup function that runs when the modal closes.
        // It re-enables scrolling.
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedEvent]); // This effect runs whenever the `selectedEvent` state changes.

    return (
        <main
            className="relative flex min-h-screen flex-col items-center overflow-hidden bg-cover bg-center p-8 text-white"
            style={{ backgroundImage: "url('/hackathons/bg.png')" }}
        >
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <Image
                    src="/hackathons/clock.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="Clock background"
                    className="opacity-20"
                />
            </div>
            <div className="absolute inset-0 z-5 bg-black/50"></div>
            <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">
                <div className="mt-16 mb-12">
                    <Image
                        src="/hackathons/Hackathons.png"
                        width={600}
                        height={100}
                        alt="Hackathons Title"
                        className="h-auto w-full max-w-[400px] sm:max-w-[400px]"
                    />
                </div>

                <div className="flex w-full flex-col gap-8 md:flex-row">
                    {hackathons.map((hackathon) => (
                        <div
                            key={hackathon.id}
                            className="group flex flex-1 cursor-pointer items-center justify-center border-2 border-purple-500 bg-black/60 p-8 backdrop-blur-sm transition-all duration-300 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-500/40 sm:p-8"
                            onClick={() => setSelectedEvent(hackathon)}
                        >

                            <h1 className="text-5xl sm:text-5xl font-rubik-glitch text-purple-500 text-center tracking-wide break-words drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] uppercase">
                                {hackathon.attributes.title}
                            </h1>

                        </div>
                    ))}
                </div>

                <div className="my-16">
                    <Image
                        src="/hackathons/WORKSHOPS.png"
                        width={600}
                        height={100}
                        alt="Workshops Title"
                        className="h-auto w-full max-w-[400px] sm:max-w-[400px]"
                    />
                </div>

                {workshops.length > 0 ? (
                    <div className="flex w-full flex-col gap-8 md:flex-row">
                        {workshops.map((workshop) => (
                            <div
                                key={workshop.id}
                                className="group flex flex-1 cursor-pointer items-center justify-center border-2 border-purple-500 bg-black/60 p-8 backdrop-blur-sm transition-all duration-300 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-500/40 sm:p-12"
                                onClick={() => setSelectedEvent(workshop)}
                            >
                                <div className="mt-16 mb-12">
                                    <h1 className="text-5xl sm:text-6xl font-rubik-glitch text-purple-500 text-center mb-6 tracking-wide break-words drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] uppercase">
                                        {workshop.attributes.title}
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="border border-purple-500 bg-black/60 px-12 py-4 backdrop-blur-sm">
                        <p className="text-xl font-semibold tracking-widest sm:text-2xl font-michroma text-center">
                            Coming Soon..
                        </p>
                    </div>
                )}

                {selectedEvent && <HackathonModal event={selectedEvent} onClose={() => setSelectedEvent(null)} registrationUrl={registrationUrl} />}
            </div>
        </main>
    );
};

export default HackathonsClientView;

