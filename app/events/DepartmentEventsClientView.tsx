'use client';

import { useState } from 'react';
import { Event } from '@/lib/api';

// Your Dropdown component (no changes needed here)
interface DropdownProps {
  title: string;
  events: Event[];
  isOpen: boolean;
  onToggle: () => void;
  onSelectEvent: (event: Event) => void;
  selectedEventName: string | null | undefined;
}
const Dropdown: React.FC<DropdownProps> = ({ title, events, isOpen, onToggle, onSelectEvent, selectedEventName }) => {
  // ... (This component remains the same)
  return (
    <div className="mb-4">
      <button
        onClick={onToggle}
        className="w-full bg-purple-800/80 text-white px-4 py-3 text-left text-xl md:text-lg font-michroma flex justify-between items-center transition-colors hover:bg-purple-700"
      >
        {title}
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="bg-black/80 py-1">
          {events.map((event) => (
            <button
              key={event.id}
              onClick={() => onSelectEvent(event)}
              className={`block w-full text-left px-6 py-2 text-lg md:text-md font-orbitron transition-colors ${selectedEventName === event.attributes.name ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-purple-900/50 hover:text-white'}`}
            >
              {event.attributes.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// The main client component that handles state and interactivity
export default function DepartmentEventsClientView({
  departmentData,
  deptSlug,
  registrationUrl
}: {
  departmentData: { technical: Event[], nonTechnical: Event[] },
  deptSlug: string,
  registrationUrl: string | null | undefined
}) {

  const initialEvent = departmentData.technical[0] ?? departmentData.nonTechnical[0] ?? null;
  const initialDropdown = departmentData.technical.length > 0 ? 'technical' : 'nonTechnical';

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(initialEvent);
  const [openDropdown, setOpenDropdown] = useState<'technical' | 'nonTechnical' | null>(initialDropdown);

  // removed temporary CTA animation state

  const getBackgroundImage = (slug: string): string => {
    switch (slug) {
      case 'cse': return `url('/events/inside/CSE.png')`;
      case 'snuc-cse': return `url('/events/inside/SNUC.png')`;
      case 'it': return `url('/events/inside/IT.png')`;
      case 'ece': return `url('/events/inside/ECE.png')`;
      case 'eee': return `url('/events/inside/EEE.png')`;
      case 'bme': return `url('/events/inside/BME.png')`;
      case 'chem': return `url('/events/inside/CHEM.png')`;
      case 'civil': return `url('/events/inside/CIVIL.png')`;
      case 'mech': return `url('/events/inside/MECH.png')`;
      case 'com': return `url('/events/inside/COM.png')`;
      default: return `url('/hero.png')`;
    }
  };

  const handleToggleDropdown = (type: 'technical' | 'nonTechnical') => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  const departmentName = deptSlug.toUpperCase().replace('-', ' ');

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed"
      style={{ backgroundImage: getBackgroundImage(deptSlug) }}
    >
      <div className="min-h-screen w-full bg-black/55">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            <aside className="w-full md:w-1/4 lg:w-1/5 md:sticky md:top-8 self-start">
              <h1 className="text-center md:text-start text-4xl sm:text-4xl md:text-4xl block font-playfair-display text-purple-400 mb-6 border-b-2 border-purple-500/30 pb-2">
                {departmentName}
              </h1>
              <Dropdown
                title="Technical"
                events={departmentData.technical}
                isOpen={openDropdown === 'technical'}
                onToggle={() => handleToggleDropdown('technical')}
                onSelectEvent={setSelectedEvent}
                selectedEventName={selectedEvent?.attributes.name}
              />
              <Dropdown
                title="Non-Technical"
                events={departmentData.nonTechnical}
                isOpen={openDropdown === 'nonTechnical'}
                onToggle={() => handleToggleDropdown('nonTechnical')}
                onSelectEvent={setSelectedEvent}
                selectedEventName={selectedEvent?.attributes.name}
              />
            </aside>
            <main className="w-full md:w-2/3 lg:w-3/4">
              {selectedEvent ? (
                <div className="p-4 sm:p-6 md:p-10 text-white font-sans">
                  <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-rubik-glitch text-purple-400 text-center mb-6 tracking-wide break-words drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
                    {selectedEvent.attributes.name.toUpperCase()}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-center my-6 text-base sm:text-md md:text-lg font-michroma bg-black/30 p-4 rounded-lg">
                    <p>
                      <strong className="text-purple-300">Domain:</strong> {selectedEvent.attributes.domain}
                    </p>
                    <p>
                      <strong className="text-purple-300">Team Size:</strong> {selectedEvent.attributes.teamSize}
                    </p>
                    <p>
                      <strong className="text-purple-300">Day:</strong> {selectedEvent.attributes.day}
                    </p>
                    <p>
                      <strong className="text-purple-300">Venue:</strong> {selectedEvent.attributes.venue}
                    </p>
                    <p className="sm:col-span-2">
                      <strong className="text-purple-300">Time:</strong> {selectedEvent.attributes.time}
                    </p>
                  </div>
                  {selectedEvent.attributes.catchphrase && <p className="text-center text-2xl sm:text-2 xl lg:text-2xl italic text-gray-300 my-8 font-parisienne drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] [text-shadow:0_0_5px_#a855f7,0_0_10px_#a855f7,0_0_20px_#a855f7,0_0_40px_#a855f7]">
                    "{selectedEvent.attributes.catchphrase}"
                  </p>}
                  {/* ✨ REGISTER BUTTON ADDED HERE */}
                  {registrationUrl && (
                    <div className="my-8 flex justify-center">
                      <a
                        href={registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="uppercase italic bg-animated-gradient glow-on-hover hover:scale-105 text-white px-5 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 font-bold text-sm sm:text-sm md:text-sm shadow-lg transition-all duration-300 ease-in-out font-orbitron border border-white/10 rounded-md"
                      >
                        Register
                      </a>
                    </div>
                  )}


                  <div className="my-8">
                    <h3 className="text-center text-xl md:text-xl font-michroma text-purple-300 mb-6">Event Heads</h3>
                    <div className="flex justify-center gap-4 flex-wrap">
                      {(selectedEvent.attributes.heads || []).map(head => (
                        <div key={head.name} className="px-6 py-3 sm:px-8 md:px-12 md:py-4 text-white shadow-lg hover:scale-105 transform transition-all duration-300 w-full sm:w-auto min-w-40 text-center" style={{ background: 'linear-gradient(to bottom right, rgba(76, 29, 149, 0.4), rgba(120, 74, 226, 0.4))' }}>
                          <p className="font-bold text-lg md:text-sm font-michroma">{head.name}</p>
                          <p className="text-sm md:text-sm text-gray-300 mt-1 font-michroma">{head.contact}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <hr className="border-purple-500/30 my-8" />
                  <div className="my-8 p-5 md:p-8 bg-black/30 ">
                    <p className="text-gray-200 leading-relaxed text-base md:text-base font-exo2">{selectedEvent.attributes.description}</p>
                  </div>

                  {/* ✨ NEW: Prize Pool Section */}
                  {selectedEvent.attributes.prizes && selectedEvent.attributes.prizes.length > 0 && (
                    <>
                      <div className="my-8">
                        <h3 className="text-center text-xl md:text-2xl font-michroma text-purple-300 mb-6">🏆 Prize Pool</h3>
                        <div className="flex justify-center gap-4 flex-wrap">
                          {(selectedEvent.attributes.prizes || []).map(prize => (
                            <div key={prize.title} className="px-6 py-3 sm:px-8 md:px-12 md:py-4 text-white shadow-lg hover:scale-105 transform transition-all duration-300 w-full sm:w-auto min-w-40 text-center" style={{ background: 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.3), rgba(109, 40, 217, 0.5))' }}>
                              <p className="font-bold text-lg md:text-sm font-michroma">{prize.title}</p>
                              <p className="text-lg md:text-sm text-yellow-300 mt-1 font-orbitron">
                                ₹{new Intl.NumberFormat('en-IN').format(prize.amount)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <hr className="border-purple-500/30 my-8" />
                    </>
                  )}

                 
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-michroma text-purple-300 mb-6">Rounds :</h3>
                <div className="space-y-8 mx-auto max-w-3xl">
                  {(selectedEvent.attributes.rounds || []).map((round, index) => (
                    <div
                      key={index}
                      className="
                        p-5 md:p-6
                        rounded-xl
                        border-2 border-purple-500/40
                        bg-gradient-to-br from-purple-900/40 via-black/30 to-purple-800/30
                        shadow-[0_8px_32px_0_rgba(168,85,247,0.37)]
                        backdrop-blur-lg
                        backdrop-saturate-150
                        ring-1 ring-purple-400/30
                        transition-all duration-300
                        hover:scale-105
                        hover:ring-2
                        hover:ring-purple-400
                      "
                      style={{
                        boxShadow: '0 4px 32px 0 rgba(168,85,247,0.37), 0 1.5px 8px 0 rgba(0,0,0,0.25)',
                        border: '1.5px solid rgba(168,85,247,0.25)',
                        background: 'rgba(30, 0, 60, 0.35)',
                      }}
                    >
                      <h4 className="text-xl md:text-xl font-bold text-purple-400 mb-3 font-michroma drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
                        {round.name}
                      </h4>
                      <p className="text-gray-200 leading-relaxed mb-4 text-base md:text-base font-exo2">{round.details}</p>
                      {Array.isArray(round.rules) && round.rules.length > 0 && (
                        <div>
                          <h5 className="font-bold text-base md:text-base mb-2 text-purple-200 font-exo2">Rules & Regulations:</h5>
                          <ul className="list-disc list-inside space-y-1 text-purple-100 text-sm md:text-sm font-exo2">
                            {round.rules.map((rule, i) => <li key={i}>{rule}</li>)}
                          </ul>
                        </div>
                      )}
                      {round.tieBreaker && (
                        <div className="mt-4">
                          <h5 className="font-bold text-base md:text-lg text-purple-200 font-exo2">Tie Breaker:</h5>
                          <p className="text-purple-100 text-sm md:text-base font-exo2">{round.tieBreaker}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-96">
                  <p className="text-2xl text-gray-400 font-michroma">No events found for this department.</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
