// app/components/ScheduleCarousel.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

const scheduleData = [
    {
        day: 1,
        dateSvg: '/schedule/schedule_27.svg',
        events: [
            {
                title: 'Inauguration',
                icon: '/schedule/monkey.svg',
                location: 'Main Audi',
                time: '09:00 - 10:30',
            },
            {
                title: 'Cyber Workshop',
                icon: '/schedule/archer.svg',
                location: 'Main Audi',
                time: '09:00 - 10:30',
            },
            {
                title: 'Cyber Workshop',
                icon: '/schedule/man.svg',
                location: 'Main Audi',
                time: '09:00 - 10:30',
            },
        ],
    },
    {
        day: 2,
        dateSvg: '/schedule/schedule_28.svg',
        events: [
            {
                title: 'Inauguration',
                icon: '/schedule/monkey.svg',
                location: 'Main Audi',
                time: '09:00 - 10:30',
            },
            {
                title: 'Cyber Workshop',
                icon: '/schedule/archer.svg',
                location: 'Main Audi',
                time: '09:00 - 10:30',
            },
            {
                title: 'Cyber Workshop',
                icon: '/schedule/man.svg',
                location: 'Main Audi',
                time: '09:00 - 10:30',
            },
        ],
    },
];

const ScheduleCarousel = () => {
    const [currentDayIndex, setCurrentDayIndex] = useState(0);

    const goToNext = () => {
        setCurrentDayIndex((prevIndex) => (prevIndex + 1) % scheduleData.length);
    };

    const goToPrev = () => {
        setCurrentDayIndex((prevIndex) => (prevIndex - 1 + scheduleData.length) % scheduleData.length);
    };

    const currentDayData = scheduleData[currentDayIndex];

    return (
        <div
            className="relative min-h-screen w-full flex items-center justify-center px-10 py-20 text-[#2c2c2c]"
            style={{
                backgroundImage: "url('/background.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* --- Overlay for better readability --- */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>

            {/* Decorative Pocket Watches */}
            <div className="absolute top-[-40px] left-[60px] hidden lg:block z-10">
                <Image
                    src="/schedule/schedule_clock.svg"
                    alt="Pocket Watch"
                    width={420}
                    height={420}
                    className="relative top-6 left-4"
                />
            </div>

            {/* --- Content --- */}
            <div className="relative z-20 w-full max-w-7xl">
                {/* Day Title + Arrows */}
                <div className="flex items-center justify-center gap-10 mb-20">
                    <button
                        onClick={goToPrev}
                        className="p-2 rounded-full hover:bg-black/10 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>
                    <h1 className="font-instrument-serif text-7xl md:text-8xl text-black drop-shadow-md">
                        Day {currentDayData.day}
                    </h1>
                    <button
                        onClick={goToNext}
                        className="p-2 rounded-full hover:bg-black/10 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                                className="flex-shrink-0 w-full flex justify-center"
                            >
                                {/* Main Content Row (centered) */}
                                <div className="flex flex-row items-start justify-center gap-32 max-w-5xl">

                                    {/* Event List */}
                                    <div className="flex flex-col gap-14 w-2/3">
                                        {dayData.events.map((event, index) => (
                                            <div key={index} className="flex items-start gap-6">
                                                <Image
                                                    src={event.icon}
                                                    alt={`${event.title} icon`}
                                                    width={50}
                                                    height={50}
                                                />
                                                <div className="flex flex-col">
                                                    <h3 className="text-5xl font-bold font-instrument-serif text-black">
                                                        {event.title}
                                                    </h3>
                                                    <div className="flex text-xl items-center gap-3 text-black/90 font-playfair-display mt-2">
                                                        <Image src="/schedule/map.svg" alt="Location" width={24} height={24} />
                                                        <span>{event.location}</span>
                                                    </div>
                                                    <div className="flex text-xl items-center gap-3 text-black/90 font-playfair-display">
                                                        <Image src="/schedule/time.svg" alt="Time" width={24} height={24} />
                                                        <span>{event.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Date Block */}
                                    <div className="flex justify-center w-1/3 translate-y-1/2  border">
                                        <Image
                                            src={dayData.dateSvg}
                                            alt={`Date ${dayData.day}`}
                                            width={480}
                                            height={480}
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
