"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Schedule } from "@/lib/api"; // Import the type definition

// Helper function to format time from HH:mm:ss to a 12-hour format
const formatTime = (timeString: string): string => {
  if (!timeString) return 'TBA';
  const [hours, minutes] = timeString.split(':');
  const date = new Date();
  date.setHours(parseInt(hours, 10));
  date.setMinutes(parseInt(minutes, 10));
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://192.168.1.10:1338";

const ScheduleCarouselClient = ({ schedule }: { schedule: Schedule }) => {
  const [currentDay, setCurrentDay] = useState(0);

  // Create an array from the schedule object for easy indexing
  const days = [schedule.day1, schedule.day2];
  const currentSchedule = days[currentDay];

  const titleImageUrl = currentSchedule.titleImage.data?.attributes.url
    ? STRAPI_URL + currentSchedule.titleImage.data.attributes.url
    : "/schedule/day1title.svg"; // Fallback image

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center px-4 py-10"
      style={{
        backgroundImage: "url('/schedule/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-full max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDay}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full"
          >
            {currentSchedule.scheduleItems.length === 0 ? (
              // 🚨 Fallback Layout
              <div className="relative min-h-[70vh] w-full flex flex-col bg-cover bg-center text-white">

                <div className="flex items-center justify-start gap-6 mb-16">
                  <Image
                    src={titleImageUrl}
                    alt={currentSchedule.titleImage.data?.attributes.alternativeText || `Day ${currentDay + 1}`}
                    width={260}
                    height={120}
                    className="w-auto h-24 sm:h-32"
                    unoptimized
                  />
                </div>

                {/* Main Content */}
                <main className="relative z-10 flex flex-grow flex-col items-center justify-center text-center p-4">
                  <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-wide leading-tight drop-shadow-[0_0_20px_rgba(200,50,255,0.8)] font-michroma">
                    Stay Tuned!
                  </h1>
                  <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-2xl font-exo2">
                    Exciting updates are on the way. Check back soon for more information!
                  </p>
                </main>
              </div>
            ) : (
              // ✅ Normal Schedule Layout
              <>
                {/* Title */}
                <div className="flex items-center justify-start gap-6 mb-16">
                  <Image
                    src={titleImageUrl}
                    alt={currentSchedule.titleImage.data?.attributes.alternativeText || `Day ${currentDay + 1}`}
                    width={260}
                    height={120}
                    className="w-auto h-24 sm:h-32"
                    unoptimized
                  />
                </div>

                {/* Events Timeline */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-24 md:gap-x-10 text-white">
                  {/* Vertical divider line */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-purple-400/50 transform -translate-x-1/2"></div>

                  {currentSchedule.scheduleItems.map((item, i) => {
                    const isLeft = i % 2 === 0;
                    return (
                      <div
                        key={item.id}
                        style={{ gridRow: i + 1 }}
                        className={`relative flex flex-col ${isLeft
                          ? "md:col-start-1 md:items-end text-right md:pr-10"
                          : "md:col-start-2 md:items-start text-left md:pl-10"
                          }`}
                      >
                        {/* Circle */}
                        <div
                          className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full z-10"
                          style={isLeft ? { right: "-28px" } : { left: "-28px" }}
                        ></div>

                        {/* Event Details */}
                        <h3 className="text-2xl md:text-3xl font-bold tracking-wide drop-shadow-[0_0_6px_rgba(180,0,255,0.8)] uppercase font-michroma">
                          {item.name}
                        </h3>
                        <p className="text-lg md:text-xl text-gray-200 mt-2 font-exo2">
                          🕒 {item.time}
                        </p>
                        <p className="text-lg md:text-xl text-gray-200 mt-1 font-exo2">
                          📍 {item.venue}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-center gap-6 mt-20">
          <button
            onClick={() => setCurrentDay((prev) => Math.max(prev - 1, 0))}
            disabled={currentDay === 0}
            className={`px-4 py-2 text-white border rounded-lg transition ${currentDay === 0
              ? "opacity-40 cursor-not-allowed border-gray-500"
              : "hover:bg-purple-600/30 border-purple-400"
              }`}
          >
            Prev
          </button>
          <button
            onClick={() =>
              setCurrentDay((prev) =>
                Math.min(prev + 1, days.length - 1)
              )
            }
            disabled={currentDay === days.length - 1}
            className={`px-4 py-2 text-white border rounded-lg transition ${currentDay === days.length - 1
              ? "opacity-40 cursor-not-allowed border-gray-500"
              : "hover:bg-purple-600/30 border-purple-400"
              }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCarouselClient;