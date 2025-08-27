"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const scheduleData = [
  {
    day: 1,
    titleSvg: "/schedule/day1title.svg",
    events: [
      { title: "Inauguration", time: "TBA" },
      { title: "Event 1", time: "TBA" },
      { title: "Event 2", time: "TBA" },
      { title: "Event 3", time: "TBA" },
    ],
  },
  {
    day: 2,
    titleSvg: "/schedule/day2title.svg",
    events: [
      { title: "Event 4", time: "TBA" },
      { title: "Event 5", time: "TBA" },
      { title: "Event 6", time: "TBA" },
      { title: "Event 7", time: "TBA" },
    ],
  },
];

const ScheduleCarousel = () => {
  const [currentDay, setCurrentDay] = useState(0);

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
            {/* Title */}
            <div className="flex items-center justify-start gap-6 mb-16">
              <Image
                src={scheduleData[currentDay].titleSvg}
                alt={`Day ${scheduleData[currentDay].day}`}
                width={260}
                height={120}
                className="w-auto h-24 sm:h-32"
              />
            </div>

            {/* Events Timeline */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-24 md:gap-x-10 text-white">
              {/* Vertical divider line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-purple-400/50 transform -translate-x-1/2"></div>

              {scheduleData[currentDay].events.map((event, i) => {
                const isLeft = i % 2 === 0;

                return (
                  <div
                    key={i}
                    style={{ gridRow: i + 1 }}
                    className={`relative flex flex-col ${
                      isLeft
                        ? "md:col-start-1 md:items-end text-right md:pr-10"
                        : "md:col-start-2 md:items-start text-left md:pl-10"
                    }`}
                  >
                    {/* Circle on the timeline */}
                    <div
                      className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full z-10"
                      style={isLeft ? { right: "-28px" } : { left: "-28px" }}
                    ></div>

                    {/* Event Details */}
                    <h3 className="text-2xl md:text-3xl font-bold tracking-wide drop-shadow-[0_0_6px_rgba(180,0,255,0.8)] uppercase font-michroma">
                      {event.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-200 mt-1 font-exo2">
                      {event.time}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-center gap-6 mt-20">
          <button
            onClick={() => setCurrentDay((prev) => Math.max(prev - 1, 0))}
            disabled={currentDay === 0}
            className={`px-4 py-2 text-white border rounded-lg transition ${
              currentDay === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-purple-600/30 border-purple-400"
            }`}
          >
            Prev
          </button>
          <button
            onClick={() =>
              setCurrentDay((prev) =>
                Math.min(prev + 1, scheduleData.length - 1)
              )
            }
            disabled={currentDay === scheduleData.length - 1}
            className={`px-4 py-2 text-white border rounded-lg transition ${
              currentDay === scheduleData.length - 1
                ? "opacity-40 cursor-not-allowed"
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

export default ScheduleCarousel;
