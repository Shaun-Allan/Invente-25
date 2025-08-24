"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock data for the schedule
const scheduleData = [
    {
        day: 1,
        dateSvg: "/schedule/schedule_27.svg",
        events: [
            {
                title: "TBA",
                icon: "/schedule/monkey.svg",
                location: "-",
                time: "-",
            },
            {
                title: "TBA",
                icon: "/schedule/archer.svg",
                location: "-",
                time: "-",
            },
            {
                title: "TBA",
                icon: "/schedule/man.svg",
                location: "-",
                time: "-",
            },
        ],
    },
    {
        day: 2,
        dateSvg: "/schedule/schedule_28.svg",
        events: [
            {
                title: "TBA",
                icon: "/schedule/monkey.svg",
                location: "-",
                time: "-",
            },
            {
                title: "TBA",
                icon: "/schedule/archer.svg",
                location: "-",
                time: "-",
            },
            {
                title: "TBA",
                icon: "/schedule/man.svg",
                location: "-",
                time: "-",
            },
        ],
    },
];

const ScheduleCarousel = () => {
    const [currentDayIndex, setCurrentDayIndex] = useState(0);
    const [direction, setDirection] = useState("next");

    // Function to navigate to the next day
    const goToNext = () => {
        if (currentDayIndex < scheduleData.length - 1) {
            setDirection("next");
            setCurrentDayIndex((prevIndex) => prevIndex + 1);
        }
    };

    // Function to navigate to the previous day
    const goToPrev = () => {
        if (currentDayIndex > 0) {
            setDirection("prev");
            setCurrentDayIndex((prevIndex) => prevIndex - 1);
        }
    };

    const currentDayData = scheduleData[currentDayIndex];

    return (
        <div
            className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-10 py-20 text-[#2c2c2c]"
            style={{
                backgroundImage: "url('/background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>

            {/* --- Decorative Pocket Watch (Hidden on mobile) --- */}
            <AnimatePresence mode="wait" custom={direction}>
                {currentDayIndex === 0 && (
                    <motion.div
                        key={`pocket-watch-${currentDayIndex}`}
                        className="absolute top-[-40px] left-[60px] hidden lg:block z-10"
                        custom={direction}
                        variants={{
                            enter: (dir) => ({ y: dir === "next" ? 1000 : -1000, opacity: 0 }),
                            center: { y: 0, opacity: 1 },
                            exit: (dir) => ({ y: dir === "next" ? -1000 : 1000, opacity: 0 }),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <img
                            src="/schedule/schedule_clock.svg"
                            alt="Pocket Watch"
                            width="420"
                            height="420"
                            className="relative top-6 left-4"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- Content --- */}
            <div className="relative z-20 w-full max-w-7xl">
                {/* Day Title + Arrows */}
                <div className="flex items-center justify-center gap-4 sm:gap-10 mb-12 md:mb-20">
                    <button
                        onClick={goToPrev}
                        disabled={currentDayIndex === 0}
                        className={`p-2 rounded-full transition-colors ${
                            currentDayIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-black/10"
                        }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>
                    <h1 className="font-instrument-serif text-6xl md:text-8xl text-black drop-shadow-md text-center">
                        Day {currentDayData.day}
                    </h1>
                    <button
                        onClick={goToNext}
                        disabled={currentDayIndex === scheduleData.length - 1}
                        className={`p-2 rounded-full transition-colors ${
                            currentDayIndex === scheduleData.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-black/10"
                        }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                </div>

                {/* --- Carousel --- */}
                <div className="overflow-hidden relative">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentDayIndex * 100}%)` }}
                    >
                        {scheduleData.map((dayData) => (
                            <div
                                key={dayData.day}
                                className="flex-shrink-0 w-full flex justify-center px-2"
                            >
                                {/* Main Content Wrapper (responsive layout) */}
                                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-32 max-w-5xl">
                                    {/* Event List */}
                                    <div className="flex flex-col gap-10 md:gap-14 w-full lg:w-2/3">
                                        {dayData.events.map((event, index) => (
                                            <div key={index} className="flex items-start gap-4 sm:gap-6">
                                                <img
                                                    src={event.icon}
                                                    alt={`${event.title} icon`}
                                                    width="50"
                                                    height="50"
                                                    className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                                                />
                                                <div className="flex flex-col">
                                                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-instrument-serif text-black">
                                                        {event.title}
                                                    </h3>
                                                    <div className="flex text-base sm:text-lg md:text-xl items-center gap-3 text-black/90 font-playfair-display mt-2">
                                                        <img
                                                            src="/schedule/map.svg"
                                                            alt="Location"
                                                            width="24"
                                                            height="24"
                                                        />
                                                        <span>{event.location}</span>
                                                    </div>
                                                    <div className="flex text-base sm:text-lg md:text-xl items-center gap-3 text-black/90 font-playfair-display">
                                                        <img
                                                            src="/schedule/time.svg"
                                                            alt="Time"
                                                            width="24"
                                                            height="24"
                                                        />
                                                        <span>{event.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Date Block (Hidden on mobile) */}
                                    <div
                                        className={`hidden lg:flex justify-center w-1/3 transition-transform duration-500 ${
                                            dayData.day === 2 ? "scale-220 translate-y-32" : "translate-y-1/4"
                                        }`}
                                    >
                                        <img
                                            src={dayData.dateSvg}
                                            alt={`Date ${dayData.day}`}
                                            width="480"
                                            height="480"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleCarousel;
