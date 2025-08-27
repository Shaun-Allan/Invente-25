'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, notFound } from 'next/navigation';
import { eventsData, Event } from '@/data/eventsData';
import React from 'react';

// A fallback component to show while the page loads
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="w-16 h-16 border-4 border-dashed animate-spin border-purple-400"></div>
    </div>
  );
}

// Your existing Dropdown component (no changes needed)
interface DropdownProps {
  title: string;
  events: Event[];
  isOpen: boolean;
  onToggle: () => void;
  onSelectEvent: (event: Event) => void;
  selectedEventName: string | null | undefined;
}
const Dropdown: React.FC<DropdownProps> = ({ title, events, isOpen, onToggle, onSelectEvent, selectedEventName }) => {
  return (
    <div className="mb-4">
      <button
        onClick={onToggle}
        className="w-full bg-purple-800/80 text-white p-4 text-left text-xl md:text-2xl font-michroma flex justify-between items-center transition-colors hover:bg-purple-700"
      >
        {title}
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="bg-black/80 py-2">
          {events.map((event) => (
            <button
              key={event.name}
              onClick={() => onSelectEvent(event)}
              className={`block w-full text-left px-6 py-3 text-lg md:text-xl font-orbitron transition-colors ${selectedEventName === event.name ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-purple-900/50 hover:text-white'
                }`}
            >
              {event.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};


function DepartmentEventsPageContent() {
  const searchParams = useSearchParams();
  const dept = searchParams.get('dept');

  if (!dept || !eventsData[dept]) {
    notFound();
  }

  const departmentData = eventsData[dept];

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [openDropdown, setOpenDropdown] = useState<'technical' | 'nonTechnical' | null>('technical');

  const getBackgroundImage = (deptSlug: string): string => {
    switch (deptSlug) {
      case 'cse': return `url('/events/inside/CSE.png')`;
      case 'snuc': return `url('/events/inside/SNUC.png')`;
      case 'it': return `url('/events/inside/IT.png')`;
      case 'ece': return `url('/events/inside/ECE.png')`;
      case 'eee': return `url('/events/inside/EEE.png')`;
      case 'bme': return `url('/events/inside/BME.png')`;
      case 'chem': return `url('/events/inside/CHEM.png')`;
      case 'civil': return `url('/events/inside/CIVIL.png')`;
      case 'mech': return `url('/events/inside/MECH.png')`;
      default: return `url('/hero.png')`;
    }
  };

  useEffect(() => {
    if (!selectedEvent) {
      if (departmentData.technical.length > 0) {
        setSelectedEvent(departmentData.technical[0]);
      } else if (departmentData.nonTechnical.length > 0) {
        setSelectedEvent(departmentData.nonTechnical[0]);
        setOpenDropdown('nonTechnical');
      }
    }
  }, [departmentData, selectedEvent]);

  const handleToggleDropdown = (type: 'technical' | 'nonTechnical') => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  const departmentName = dept.toUpperCase();

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed"
      style={{ backgroundImage: getBackgroundImage(dept) }}
    >
      {/* MODIFICATION REMOVED: The `backdrop-blur-sm` class was removed from this line. */}
      <div className="min-h-screen w-full bg-black/55">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">

            <aside className="w-full md:w-1/3 lg:w-1/4 md:sticky md:top-8 self-start">
              <h1 className="text-center md:text-start text-4xl sm:text-5xl md:text-6xl block font-playfair-display text-purple-400 mb-6 border-b-2 border-purple-500/30 pb-2">
                {departmentName} DEPARTMENT
              </h1>
              <Dropdown
                title="Technical"
                events={departmentData.technical}
                isOpen={openDropdown === 'technical'}
                onToggle={() => handleToggleDropdown('technical')}
                onSelectEvent={setSelectedEvent}
                selectedEventName={selectedEvent?.name}
              />
              <Dropdown
                title="Non-Technical"
                events={departmentData.nonTechnical}
                isOpen={openDropdown === 'nonTechnical'}
                onToggle={() => handleToggleDropdown('nonTechnical')}
                onSelectEvent={setSelectedEvent}
                selectedEventName={selectedEvent?.name}
              />
            </aside>

            <main className="w-full md:w-2/3 lg:w-3/4">
              {selectedEvent ? (
                <div className="p-4 sm:p-6 md:p-10 text-white font-sans">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-rubik-glitch text-purple-400 text-center mb-6 tracking-wide break-words drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
                    {selectedEvent.name.toUpperCase()}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-center my-6 text-base sm:text-lg md:text-xl font-michroma bg-black/30  p-4">
                    <p>
                      <strong className="text-purple-300">Domain:</strong> {selectedEvent.domain}
                    </p>
                    <p>
                      <strong className="text-purple-300">Team Size:</strong> {selectedEvent.teamSize}
                    </p>
                  </div>

                  {selectedEvent.catchphrase && <p className="text-center text-2xl sm:text-3xl lg:text-4xl italic text-gray-300 my-8 font-parisienne drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] [text-shadow:0_0_5px_#a855f7,0_0_10px_#a855f7,0_0_20px_#a855f7,0_0_40px_#a855f7]">
                    "{selectedEvent.catchphrase}"
                  </p>}

                  <div className="my-8">
                    <h3 className="text-center text-xl md:text-2xl font-michroma text-purple-300 mb-6">Event Heads</h3>
                    <div className="flex justify-center gap-4 flex-wrap">
                      {selectedEvent.heads.map(head => (
                        <div
                          key={head.name}
                          className="px-6 py-3 sm:px-8 md:px-12 md:py-4 text-white shadow-lg hover:scale-105 transform transition-all duration-300 w-full sm:w-auto min-w-40 text-center "
                          style={{
                            background: 'linear-gradient(to bottom right, rgba(76, 29, 149, 0.4), rgba(120, 74, 226, 0.4))'
                          }}
                        >
                          <p className="font-bold text-lg md:text-xl font-michroma">{head.name}</p>
                          <p className="text-sm md:text-base text-gray-300 mt-1 font-michroma">{head.contact}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="border-purple-500/30 my-8" />

                  <div className="my-8 p-5 md:p-8 bg-black/30 ">
                    <p className="text-gray-200 leading-relaxed text-base md:text-lg font-exo2">
                      {selectedEvent.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-michroma text-purple-300 mb-6">Rounds :</h3>
                    <div className="space-y-8">
                      {selectedEvent.rounds.map((round, index) => (
                        <div key={index} className="p-5 md:p-6 border border-purple-700  bg-black/20">
                          <h4 className="text-xl md:text-2xl font-bold text-purple-400 mb-3 font-michroma">{round.name}</h4>
                          <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg font-exo2">{round.details}</p>
                          <h5 className="font-bold text-base md:text-lg mb-2 text-purple-200 font-exo2">Rules & Regulations:</h5>
                          <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm md:text-base font-exo2">
                            {round.rules.map((rule, i) => <li key={i}>{rule}</li>)}
                          </ul>
                          {round.tieBreaker && (
                            <div className="mt-4">
                              <h5 className="font-bold text-base md:text-lg text-purple-200 font-exo2">Tie Breaker:</h5>
                              <p className="text-gray-400 text-sm md:text-base font-exo2">{round.tieBreaker}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-base sm:text-lg italic text-purple-300 my-8 font-michroma">
                      Expect the unexpected. Let the chaos and fun begin!
                    </p>
                  </div>

                </div>
              ) : (
                <div className="flex items-center justify-center h-96">
                  <p className="text-2xl text-gray-400 font-michroma">Select an event to see the details.</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <DepartmentEventsPageContent />
    </Suspense>
  );
}