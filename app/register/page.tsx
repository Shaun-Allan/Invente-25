'use client';

import { useState, useEffect, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { getEvents, Event } from '@/lib/api';

// A unique ID for each pass, essential for React's rendering logic
interface TechPass {
  id: number;
  slot1: string;
  slot2: string;
  slot3: string;
  slot4: string;
}

export default function RegisterPage() {
  const [techEvents, setTechEvents] = useState<Event[]>([]);
  const [groupedEvents, setGroupedEvents] = useState<Record<string, Event[]>>({});
  const [techPasses, setTechPasses] = useState<TechPass[]>([
    { id: Date.now(), slot1: '', slot2: '', slot3: '', slot4: '' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // --- ✅ CHANGE 1: Price updated to 300 ---
  const PASS_PRICE = 300;

  useEffect(() => {
    const fetchAndProcessEvents = async () => {
      try {
        setIsLoading(true);
        const allEvents = await getEvents();
        
        const filteredTechEvents = allEvents.filter(
          (event) => event.attributes.class === 'technical'
        );
        setTechEvents(filteredTechEvents);

        const grouped = filteredTechEvents.reduce((acc, event) => {
          const dept = event.attributes.department || 'Other';
          if (!acc[dept]) {
            acc[dept] = [];
          }
          acc[dept].push(event);
          return acc;
        }, {} as Record<string, Event[]>);
        
        setGroupedEvents(grouped);
      } catch (error) {
        console.error("Failed to load events:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndProcessEvents();
  }, []);

  // --- Handler Functions ---

  const handleAddPass = () => {
    setTechPasses([
      ...techPasses,
      { id: Date.now(), slot1: '', slot2: '', slot3: '', slot4: '' },
    ]);
  };

  const handleRemovePass = (idToRemove: number) => {
    if (techPasses.length > 1) {
      setTechPasses(techPasses.filter((pass) => pass.id !== idToRemove));
    }
  };

  const handleEventChange = (passId: number, slot: keyof Omit<TechPass, 'id'>, eventId: string) => {
    setTechPasses(
      techPasses.map((pass) =>
        pass.id === passId ? { ...pass, [slot]: eventId } : pass
      )
    );
  };
  
  
  // --- ✅ CHANGE 3: New helper functions for better summary & lookups ---
  const getEventNameById = (id: string): string => {
    if (!id) return "-- Empty Slot --";
    const event = techEvents.find((e) => e.id.toString() === id);
    return event ? event.attributes.name : "Unknown Event";
  };

  const getEventDetailsById = (id: string): Event['attributes'] | null => {
    if (!id) return null;
    const event = techEvents.find((e) => e.id.toString() === id);
    return event ? event.attributes : null;
  }
  
  // --- ✅ CHANGE 4: Duplicate event prevention logic added here ---
  const renderEventDropdown = (pass: TechPass, slot: keyof Omit<TechPass, 'id'>) => {
    // Create a set of IDs already used in OTHER slots of THIS pass
    const selectedIdsInThisPass = new Set([pass.slot1, pass.slot2, pass.slot3, pass.slot4]);
    selectedIdsInThisPass.delete(pass[slot]); // Exclude the current slot's value
    selectedIdsInThisPass.delete(''); // Remove empty slots from the set

    return (
      <Listbox value={pass[slot]} onChange={(eventId) => handleEventChange(pass.id, slot, eventId)}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default bg-gray-900 border border-purple-500/50 text-white p-3 text-left focus:ring-2 focus:ring-purple-500 focus:outline-none font-exo2">
            <span className="block truncate">{getEventNameById(pass[slot])}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-gray-900/95 backdrop-blur-md py-1 text-base shadow-lg ring-1 ring-purple-500 ring-opacity-50 focus:outline-none sm:text-sm">
              {Object.entries(groupedEvents).map(([department, eventsInDept]) => (
                <div key={department}>
                  <div className="px-4 py-1.5 text-xs font-bold text-purple-400 uppercase tracking-wider font-michroma">
                    {department}
                  </div>
                  {eventsInDept.map((event) => {
                    const eventIdStr = event.id.toString();
                    const isDisabled = selectedIdsInThisPass.has(eventIdStr);

                    return (
                      <Listbox.Option
                        key={eventIdStr}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 font-exo2 ${
                            isDisabled 
                              ? 'text-gray-600 cursor-not-allowed' 
                              : active ? 'bg-purple-600/50 text-white' : 'text-gray-300'
                          }`
                        }
                        value={eventIdStr}
                        disabled={isDisabled}
                      >
                        {({ selected }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium text-white' : 'font-normal'}`}>
                              {event.attributes.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-400">
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    );
                  })}
                </div>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    );
  };

  return (
    <div 
      className="min-h-screen bg-black bg-fixed"
      style={{ backgroundImage: "url(/register/bg.jpg)", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="min-h-screen bg-black/80 backdrop-blur-sm">
        <main className="container mx-auto px-4 py-16 md:py-24 text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-400 text-center mb-4 font-michroma drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
            GET YOUR PASSES
          </h1>
          <p className="text-center text-white/80 mb-12 font-orbitron max-w-2xl mx-auto">
            Each Tech Pass costs ₹300, whether you fill one slot or all four. Add as many passes as you need.
          </p>

          {/* Tech Passes Section */}
          <section id="tech-passes">
            <h2 className="text-3xl font-bold text-white mb-8 font-orbitron">Tech Passes</h2>
            {isLoading ? (
              <div className="text-center text-purple-400">Loading Events...</div>
            ) : (
              <div className="space-y-8">
                {techPasses.map((pass, index) => (
                  <div key={pass.id} className="bg-gray-900/50 border border-purple-500/30 p-6 relative">
                    <h3 className="text-xl font-bold mb-4 font-orbitron text-purple-300">
                      Tech Pass #{index + 1}
                    </h3>
                    {techPasses.length > 1 && (
                      <button
                        onClick={() => handleRemovePass(pass.id)}
                        className="absolute top-4 right-4 text-red-500 hover:text-red-400 font-bold"
                        aria-label="Remove Pass"
                      >
                        &#x2715;
                      </button>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {renderEventDropdown(pass, 'slot1')}
                      {renderEventDropdown(pass, 'slot2')}
                      {renderEventDropdown(pass, 'slot3')}
                      {renderEventDropdown(pass, 'slot4')}
                    </div>
                  </div>
                ))}
                <button
                  onClick={handleAddPass}
                  className="w-full uppercase bg-gray-800 text-purple-300 px-8 py-3 font-bold shadow-lg hover:bg-gray-700 transition font-orbitron border border-purple-500/50"
                >
                  + Add Another Tech Pass
                </button>
              </div>
            )}
          </section>

          <div className="my-12 h-px bg-purple-500/30"></div>

          {/* Non-Tech Events Section */}
          <section id="non-tech-passes">
            <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">Non-Tech Events</h2>
            <div className="bg-gray-900/50 border border-purple-500/30 p-6 text-center">
              <p className="text-white/80 text-lg font-orbitron">
                All non-technical events are available for <strong>on-the-spot registration</strong> only.
              </p>
            </div>
          </section>

          <div className="my-12 h-px bg-purple-500/30"></div>

          {/* Checkout Button */}
          <div className="text-center mt-12">
            {/* --- ✅ CHANGE 2: Button is no longer disabled for empty carts --- */}
            <button
              onClick={() => setIsModalOpen(true)}
              disabled={isLoading}
              className="relative overflow-hidden uppercase italic bg-purple-600 text-white px-12 py-4 font-bold text-lg shadow-lg transition-all duration-300 ease-in-out font-orbitron group disabled:bg-gray-600 disabled:cursor-not-allowed disabled:text-gray-400"
            >
              Review Your Order
            </button>
          </div>
        </main>
      </div>
      
      {/* --- ✅ CHANGE 3: Beautified Confirmation Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-purple-500 max-w-2xl w-full p-8 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-purple-400 font-bold text-2xl"
              aria-label="Close Modal"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-purple-400 mb-6 font-michroma">Order Summary</h2>
            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
              {techPasses.map((pass, index) => {
                const selectedEventsDetails = [pass.slot1, pass.slot2, pass.slot3, pass.slot4]
                  .map(getEventDetailsById)
                  .filter((event): event is Event['attributes'] => event !== null);

                return (
                  <div key={pass.id} className="border border-purple-500/20 p-4">
                    <h3 className="font-bold font-orbitron text-lg text-white mb-3">
                      Tech Pass #{index + 1}
                    </h3>
                    {selectedEventsDetails.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedEventsDetails.map((event) => (
                          <div key={event.name} className="bg-gray-800/50 p-3">
                            <p className="font-semibold text-white font-exo2">{event.name}</p>
                            <p className="text-xs text-purple-400 uppercase font-orbitron">{event.department}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-400 font-exo2 text-sm">-- This pass has no events selected --</p>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-8 pt-4 border-t-2 border-purple-500/50 flex justify-between items-center">
              <span className="text-2xl font-bold font-orbitron text-white">Total:</span>
              <span className="text-2xl font-bold font-exo2 text-purple-300">
                ₹{techPasses.length * PASS_PRICE}
              </span>
            </div>
            <div className="mt-8 text-center">
              <button className="uppercase bg-purple-600 text-white px-10 py-3 font-bold text-md shadow-lg hover:bg-purple-700 transition font-orbitron">
                Confirm & Buy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}