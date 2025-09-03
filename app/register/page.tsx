'use client';

import { useState, useEffect, Fragment, useMemo } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { getEvents, Event } from '@/lib/api';

// --- Type Definitions ---
interface TechPass {
  id: number;
  slot1: string;
  slot2: string;
  slot3: string;
  slot4: string;
}

interface HackinfinityMember {
  name: string;
  email: string;
  contact: string;
  gender: 'Male' | 'Female' | 'Prefer not to say' | '';
  department: string;
  year: '1st' | '2nd' | '3rd' | '4th' | 'Other' | '';
}

interface HackinfinityFormState {
  teamName: string;
  institution: string;
  track: 'Hardware' | 'Software' | '';
  problemStatement: string;
  teamLeadIndex: number;
  members: HackinfinityMember[];
}

// --- Main Page Component ---
export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState('Tech Passes');
  
  const [techEvents, setTechEvents] = useState<Event[]>([]);
  const [groupedEvents, setGroupedEvents] = useState<Record<string, Event[]>>({});
  const [techPasses, setTechPasses] = useState<TechPass[]>([
    { id: Date.now(), slot1: '', slot2: '', slot3: '', slot4: '' },
  ]);
  const [isTechPassModalOpen, setIsTechPassModalOpen] = useState(false);

  const initialMemberState: HackinfinityMember = { name: '', email: '', contact: '', gender: '', department: '', year: '' };
  const [hackinfinityForm, setHackinfinityForm] = useState<HackinfinityFormState>({
    teamName: '',
    institution: '',
    track: '',
    problemStatement: '',
    teamLeadIndex: 0,
    members: [initialMemberState, initialMemberState, initialMemberState],
  });
  const [isHackinfinityModalOpen, setIsHackinfinityModalOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [successfulPaymentId, setSuccessfulPaymentId] = useState<string | null>(null);

  const PASS_PRICE = 300;
  const HACKINFINITY_PRICE_PER_HEAD = 300;

  useEffect(() => {
    const checkRazorpaySuccess = () => {
      const queryParams = new URLSearchParams(window.location.search);
      const paymentId = queryParams.get('razorpay_payment_id');
      if (paymentId) {
        console.log("Razorpay Payment Successful! Payment ID:", paymentId);
        setSuccessfulPaymentId(paymentId);
        setIsThankYouModalOpen(true);
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    };
    checkRazorpaySuccess();
    
    const fetchAndProcessEvents = async () => {
      try {
        setIsLoading(true);
        const allEvents = await getEvents();
        const filteredTechEvents = allEvents.filter(e => e.attributes.class === 'technical');
        setTechEvents(filteredTechEvents);

        const grouped = filteredTechEvents.reduce((acc, event) => {
          const dept = event.attributes.department || 'Other';
          if (!acc[dept]) acc[dept] = [];
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

  const handleConfirmAndBuy = () => {
    const razorpayBaseUrl = 'https://rzp.io/l/ssn-snuc-sponsorship';
    const callbackUrl = window.location.href.split('?')[0]; 
    const redirectUrl = `${razorpayBaseUrl}?callback_url=${encodeURIComponent(callbackUrl)}`;
    window.location.href = redirectUrl;
  };

  const tabs = ["Tech Passes", "Non-tech Events", "Hackinfinity"];

  return (
    <div className="min-h-screen bg-black bg-fixed" style={{ backgroundImage: "url(/register/bg.jpg)", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="min-h-screen bg-black/80 backdrop-blur-sm">
        <main className="container mx-auto px-4 py-16 md:py-24 text-white">
          <div className="flex flex-col md:flex-row gap-8">
            {/* --- Tab Navigation (Sidebar on Desktop) --- */}
            <aside className="w-full md:w-1/4">
              {/* ✅ UPDATED: Changed to flex-col for all screen sizes */}
              <div className="flex flex-col justify-start gap-2">
                {tabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`
                      w-full               
                      p-4               
                      text-left
                      text-sm sm:text-base
                      font-orbitron uppercase tracking-wider transition-colors duration-300 
                      ${activeTab === tab ? 'bg-purple-600/80 text-white' : 'bg-gray-900/50 text-purple-300 hover:bg-gray-800/70'}
                    `}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </aside>

            {/* --- Tab Content Area --- */}
            <div className="w-full md:w-3/4">
              <h1 className="text-4xl md:text-6xl font-bold text-purple-400 text-center mb-16 mt-10 sm:mt-0 font-michroma drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
                GET YOUR PASSES
              </h1>
              {/* <p className="text-center text-white/80 mb-12 font-orbitron max-w-2xl mx-auto">
                Choose your desired pass type. Tech passes grant access to workshops, while Hackinfinity is our flagship hackathon.
              </p> */}

              {activeTab === 'Tech Passes' && <TechPassesContent {...{ techPasses, setTechPasses, groupedEvents, techEvents, isLoading, setIsTechPassModalOpen }} />}
              {activeTab === 'Non-tech Events' && <NonTechContent />}
              {activeTab === 'Hackinfinity' && <HackinfinityForm {...{ hackinfinityForm, setHackinfinityForm, setIsHackinfinityModalOpen, HACKINFINITY_PRICE_PER_HEAD }} />}
            </div>
          </div>
        </main>
      </div>
      
      {/* --- Modals --- */}
      {isTechPassModalOpen && <TechPassSummaryModal {...{ techPasses, techEvents, PASS_PRICE, setIsModalOpen: setIsTechPassModalOpen, handleConfirmAndBuy }} />}
      {isHackinfinityModalOpen && <HackinfinitySummaryModal {...{ formState: hackinfinityForm, HACKINFINITY_PRICE_PER_HEAD, setIsModalOpen: setIsHackinfinityModalOpen, handleConfirmAndBuy }} />}
      {isThankYouModalOpen && <ThankYouModal {...{ successfulPaymentId, setIsThankYouModalOpen }} />}
    </div>
  );
}


// ============================================================================
// --- Sub-Components for Tab Content & Modals ---
// ============================================================================

const TechPassesContent = ({ techPasses, setTechPasses, groupedEvents, techEvents, isLoading, setIsTechPassModalOpen }: any) => {
  const handleAddPass = () => setTechPasses([...techPasses, { id: Date.now(), slot1: '', slot2: '', slot3: '', slot4: '' }]);
  const handleRemovePass = (id: number) => techPasses.length > 1 && setTechPasses(techPasses.filter((p: any) => p.id !== id));
  const handleEventChange = (passId: number, slot: string, eventId: string) => {
    setTechPasses(techPasses.map((p: any) => p.id === passId ? { ...p, [slot]: eventId } : p));
  };
  const getEventNameById = (id: string) => {
    if (!id) return "-- Empty Slot --";
    const event = techEvents.find((e: any) => e.id.toString() === id);
    return event ? event.attributes.name : "Unknown Event";
  };
  
  const renderEventDropdown = (pass: TechPass, slot: keyof Omit<TechPass, 'id'>) => {
    const selectedIds = new Set(Object.values(pass).filter(v => typeof v === 'string' && v !== ''));
    selectedIds.delete(pass[slot]);

    return (
      <Listbox value={pass[slot]} onChange={(e) => handleEventChange(pass.id, slot, e)}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default bg-gray-900 border border-purple-500/50 text-white p-3 text-left focus:ring-2 focus:ring-purple-500 focus:outline-none font-exo2">
            <span className="block truncate">{getEventNameById(pass[slot])}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"><ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /></span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto bg-gray-900/95 backdrop-blur-md py-1 text-base shadow-lg ring-1 ring-purple-500 ring-opacity-50 focus:outline-none sm:text-sm">
              <Listbox.Option key="empty-slot" value="" className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 font-exo2 ${active ? 'bg-purple-600/50 text-white' : 'text-gray-400'}`}>
                {({ selected }) => (<><span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>-- Clear Selection --</span>{selected ? <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-400"><CheckIcon className="h-5 w-5" aria-hidden="true" /></span> : null}</>)}
              </Listbox.Option>
              {Object.entries(groupedEvents).map(([department, eventsInDept]) => (
                <div key={department}>
                  <div className="px-4 py-1.5 text-xs font-bold text-purple-400 uppercase tracking-wider font-michroma">{department}</div>
                  {(eventsInDept as Event[]).map((event) => {
                    const eventIdStr = event.id.toString();
                    const isDisabled = selectedIds.has(eventIdStr);
                    return (
                      <Listbox.Option key={eventIdStr} disabled={isDisabled} value={eventIdStr} className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 font-exo2 ${isDisabled ? 'text-gray-600 cursor-not-allowed' : active ? 'bg-purple-600/50 text-white' : 'text-gray-300'}`}>
                        {({ selected }) => (<><span className={`block truncate ${selected ? 'font-medium text-white' : 'font-normal'}`}>{event.attributes.name}</span>{selected && <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-400"><CheckIcon className="h-5 w-5" aria-hidden="true" /></span>}</>)}
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
    <section>
      <h2 className="text-3xl font-bold text-white mb-2 font-orbitron">Tech Passes</h2>
      <p className="text-white/70 mb-8">Each Tech Pass costs ₹300, whether you fill one slot or all four.</p>
      {isLoading ? <div className="text-center text-purple-400">Loading Events...</div> : (
        <div className="space-y-8">
          {techPasses.map((pass: TechPass, index: number) => (
            <div key={pass.id} className="bg-gray-900/50 border border-purple-500/30 p-6 relative">
              <h3 className="text-xl font-bold mb-4 font-orbitron text-purple-300">Tech Pass #{index + 1}</h3>
              {techPasses.length > 1 && <button onClick={() => handleRemovePass(pass.id)} className="absolute top-4 right-4 text-red-500 hover:text-red-400 font-bold">&#x2715;</button>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{renderEventDropdown(pass, 'slot1')}{renderEventDropdown(pass, 'slot2')}{renderEventDropdown(pass, 'slot3')}{renderEventDropdown(pass, 'slot4')}</div>
            </div>
          ))}
          <button onClick={handleAddPass} className="w-full uppercase bg-gray-800 text-purple-300 px-8 py-3 font-bold shadow-lg hover:bg-gray-700 transition font-orbitron border border-purple-500/50">+ Add Another Tech Pass</button>
        </div>
      )}
      <div className="text-center mt-12"><button onClick={() => setIsTechPassModalOpen(true)} disabled={isLoading} className="relative overflow-hidden uppercase italic bg-purple-600 text-white px-12 py-4 font-bold text-lg shadow-lg transition-all duration-300 ease-in-out font-orbitron group disabled:bg-gray-600">Review Your Order</button></div>
    </section>
  );
};

const NonTechContent = () => (
  <section>
    <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">Non-Tech Events</h2>
    <div className="bg-gray-900/50 border border-purple-500/30 p-6 text-center"><p className="text-white/80 text-lg font-orbitron">All non-technical events are available for <strong>on-the-spot registration</strong> only.</p></div>
  </section>
);

const HackinfinityForm = ({ hackinfinityForm, setHackinfinityForm, setIsHackinfinityModalOpen, HACKINFINITY_PRICE_PER_HEAD }: any) => {
  const { teamName, institution, track, problemStatement, teamLeadIndex, members } = hackinfinityForm;
  
  const isFormValid = useMemo(() => {
    if (!teamName.trim() || !institution.trim() || !track) {
      return false;
    }
    if (track === 'Software' && !problemStatement.trim()) {
      return false;
    }
    
    const mandatoryMembers = members.slice(0, 3);
    if (mandatoryMembers.length < 3) return false;
    for (const member of mandatoryMembers) {
      if (!member.name.trim() || !member.email.trim() || !member.contact.trim() || !member.gender || !member.department.trim() || !member.year) {
        return false;
      }
    }
    
    if (members.length === 4) {
      const optionalMember = members[3];
      if (!optionalMember.name.trim() || !optionalMember.email.trim() || !optionalMember.contact.trim() || !optionalMember.gender || !optionalMember.department.trim() || !optionalMember.year) {
        return false;
      }
    }
    return true;
  }, [hackinfinityForm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setHackinfinityForm({ ...hackinfinityForm, [name]: value });
  };
  
  const handleMemberChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedMembers = [...members];
    updatedMembers[index] = { ...updatedMembers[index], [name]: value };
    setHackinfinityForm({ ...hackinfinityForm, members: updatedMembers });
  };
  
  const handleAddMember = () => {
    if (members.length < 4) {
      const newMember: HackinfinityMember = { name: '', email: '', contact: '', gender: '', department: '', year: '' };
      setHackinfinityForm({ ...hackinfinityForm, members: [...members, newMember] });
    }
  };

  const handleRemoveMember = (index: number) => {
    if (members.length > 3) {
      const updatedMembers = [...members];
      updatedMembers.splice(index, 1);
      setHackinfinityForm({ ...hackinfinityForm, members: updatedMembers });
    }
  };

  const totalPrice = members.length * HACKINFINITY_PRICE_PER_HEAD;
  const inputClass = "w-full bg-gray-900 border border-purple-500/50 text-white p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none font-exo2";

  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-2 font-orbitron">Hackinfinity Registration</h2>
      <p className="text-white/70 mb-8">Register your team for our flagship hackathon. Price is ₹300 per member.</p>
      <div className="space-y-8 bg-gray-900/50 border border-purple-500/30 p-6">
        <div className="grid md:grid-cols-2 gap-6">
            <div><label className="font-orbitron text-purple-300">Team Name</label><input type="text" name="teamName" value={teamName} onChange={handleInputChange} className={inputClass} /></div>
            <div><label className="font-orbitron text-purple-300">Institution Name</label><input type="text" name="institution" value={institution} onChange={handleInputChange} className={inputClass} /></div>
        </div>
        <div>
          <label className="font-orbitron text-purple-300">Track</label>
          <div className="flex gap-4 mt-2">{['Hardware', 'Software'].map(t => <button key={t} onClick={() => setHackinfinityForm({ ...hackinfinityForm, track: t })} className={`flex-1 p-3 font-orbitron ${track === t ? 'bg-purple-600 text-white' : 'bg-gray-800 text-purple-300 hover:bg-gray-700'}`}>{t}</button>)}</div>
        </div>
        {track === 'Software' && <div><label className="font-orbitron text-purple-300">Problem Statement Description</label><textarea name="problemStatement" value={problemStatement} onChange={handleInputChange} className={inputClass} rows={4} placeholder="Describe your project idea in a paragraph..."></textarea></div>}
        
        <div className="my-6 h-px bg-purple-500/30"></div>
        
        <h3 className="text-xl font-bold font-orbitron text-purple-300">Team Members ({members.length})</h3>
        <div className="space-y-6">
          {members.map((member: HackinfinityMember, index: number) => (
            <div key={index} className={`bg-gray-800/50 p-4 border transition-all duration-300 relative ${teamLeadIndex === index ? 'border-purple-500' : 'border-purple-500/20'}`}>
              {teamLeadIndex === index && <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-2 py-1 font-orbitron">LEAD</div>}
              <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-lg text-white font-exo2">Member #{index + 1}</h4>
                  {index >= 3 && <button onClick={() => handleRemoveMember(index)} className="text-red-500 hover:text-red-400 font-bold">&#x2715;</button>}
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="Name" value={member.name} onChange={(e) => handleMemberChange(index, e)} className={inputClass} />
                  <input type="email" name="email" placeholder="Email" value={member.email} onChange={(e) => handleMemberChange(index, e)} className={inputClass} />
                  <input type="tel" name="contact" placeholder="Contact Number" value={member.contact} onChange={(e) => handleMemberChange(index, e)} className={inputClass} />
                  <select name="gender" value={member.gender} onChange={(e) => handleMemberChange(index, e)} className={inputClass}><option value="">Select Gender...</option><option>Male</option><option>Female</option><option>Prefer not to say</option></select>
                  <input type="text" name="department" placeholder="Department (e.g., CSE)" value={member.department} onChange={(e) => handleMemberChange(index, e)} className={inputClass} />
                  <select name="year" value={member.year} onChange={(e) => handleMemberChange(index, e)} className={inputClass}><option value="">Year of Study...</option><option>1st</option><option>2nd</option><option>3rd</option><option>4th</option><option>Other</option></select>
              </div>
              {index < 3 && <div className="mt-4"><button onClick={() => setHackinfinityForm({ ...hackinfinityForm, teamLeadIndex: index })} className={`px-4 py-2 text-sm font-orbitron transition-colors duration-300 ${teamLeadIndex === index ? 'bg-purple-600 text-white cursor-default' : 'bg-gray-700 text-purple-300 hover:bg-gray-600'}`}>{teamLeadIndex === index ? '✓ Team Lead' : 'Make Lead'}</button></div>}
            </div>
          ))}
        </div>
        {members.length < 4 && <button onClick={handleAddMember} className="w-full uppercase bg-gray-800 text-purple-300 px-8 py-3 font-bold shadow-lg hover:bg-gray-700 transition font-orbitron border border-purple-500/50">+ Add Optional Member</button>}
      </div>
      <div className="mt-8 flex justify-between items-center bg-gray-900/50 p-4 border border-purple-500/30">
        <span className="text-2xl font-bold font-orbitron text-white">Total:</span><span className="text-2xl font-bold font-exo2 text-purple-300">₹{totalPrice}</span>
      </div>
      <div className="text-center mt-8"><button onClick={() => setIsHackinfinityModalOpen(true)} disabled={!isFormValid} className="relative overflow-hidden uppercase italic bg-purple-600 text-white px-12 py-4 font-bold text-lg shadow-lg transition-all duration-300 ease-in-out font-orbitron group disabled:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50">Review Your Registration</button></div>
    </section>
  );
};

const TechPassSummaryModal = ({ techPasses, techEvents, PASS_PRICE, setIsModalOpen, handleConfirmAndBuy }: any) => {
  const getEventDetailsById = (id: string) => techEvents.find((e: any) => e.id.toString() === id)?.attributes;
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-purple-500 max-w-2xl w-full p-8 relative">
        <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-white hover:text-purple-400 font-bold text-2xl">&times;</button>
        <h2 className="text-3xl font-bold text-purple-400 mb-6 font-michroma">Order Summary</h2>
        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
          {techPasses.map((pass: TechPass, index: number) => {
            const events = [pass.slot1, pass.slot2, pass.slot3, pass.slot4].map(getEventDetailsById).filter(Boolean);
            return (
              <div key={pass.id} className="border border-purple-500/20 p-4">
                <h3 className="font-bold font-orbitron text-lg text-white mb-3">Tech Pass #{index + 1}</h3>
                {events.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{events.map((e: any) => <div key={e.name} className="bg-gray-800/50 p-3"><p className="font-semibold text-white font-exo2">{e.name}</p><p className="text-xs text-purple-400 uppercase font-orbitron">{e.department}</p></div>)}</div> : <p className="text-gray-400 font-exo2 text-sm">-- This pass has no events selected --</p>}
              </div>
            );
          })}
        </div>
        <div className="mt-8 pt-4 border-t-2 border-purple-500/50 flex justify-between items-center">
          <span className="text-2xl font-bold font-orbitron text-white">Total:</span><span className="text-2xl font-bold font-exo2 text-purple-300">₹{techPasses.length * PASS_PRICE}</span>
        </div>
        <div className="mt-8 text-center"><button onClick={handleConfirmAndBuy} className="uppercase bg-purple-600 text-white px-10 py-3 font-bold text-md shadow-lg hover:bg-purple-700 transition font-orbitron">Confirm & Buy</button></div>
      </div>
    </div>
  );
};

const HackinfinitySummaryModal = ({ formState, HACKINFINITY_PRICE_PER_HEAD, setIsModalOpen, handleConfirmAndBuy }: any) => {
  const { teamName, institution, track, problemStatement, teamLeadIndex, members } = formState;
  const totalPrice = members.length * HACKINFINITY_PRICE_PER_HEAD;
  
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-purple-500 max-w-2xl w-full p-8 relative">
        <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-white hover:text-purple-400 font-bold text-2xl">&times;</button>
        <h2 className="text-3xl font-bold text-purple-400 mb-6 font-michroma">Hackinfinity Summary</h2>
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 font-exo2">
          <div><strong className="text-purple-300 font-orbitron">Team Name:</strong> {teamName}</div>
          <div><strong className="text-purple-300 font-orbitron">Institution:</strong> {institution}</div>
          <div><strong className="text-purple-300 font-orbitron">Track:</strong> {track}</div>
          {track === 'Software' && <div><strong className="text-purple-300 font-orbitron">Problem Statement:</strong> {problemStatement}</div>}
          <div className="my-4 h-px bg-purple-500/30"></div>
          <h3 className="font-bold font-orbitron text-lg text-white mb-3">Team Members</h3>
          {members.map((member: HackinfinityMember, index: number) => <div key={index} className="bg-gray-800/50 p-3 mb-2"><p className="font-semibold text-white">{member.name} {teamLeadIndex === index && <span className="text-xs text-purple-400">(Lead)</span>}</p><p className="text-sm text-gray-400">{member.email} | {member.contact}</p></div>)}
        </div>
        <div className="mt-8 pt-4 border-t-2 border-purple-500/50 flex justify-between items-center">
          <span className="text-2xl font-bold font-orbitron text-white">Total:</span><span className="text-2xl font-bold font-exo2 text-purple-300">₹{totalPrice}</span>
        </div>
        <div className="mt-8 text-center"><button onClick={handleConfirmAndBuy} className="uppercase bg-purple-600 text-white px-10 py-3 font-bold text-md shadow-lg hover:bg-purple-700 transition font-orbitron">Confirm & Buy</button></div>
      </div>
    </div>
  );
};

const ThankYouModal = ({ successfulPaymentId, setIsThankYouModalOpen }: any) => (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
    <div className="bg-gray-900 border border-purple-500 max-w-lg w-full p-8 relative text-center">
      <button onClick={() => setIsThankYouModalOpen(false)} className="absolute top-4 right-4 text-white hover:text-purple-400 font-bold text-2xl">&times;</button>
      <h2 className="text-3xl font-bold text-purple-400 mb-4 font-michroma">Thank You!</h2>
      <p className="text-white/80 mb-6 font-exo2">Your payment was successful and your passes are confirmed.</p>
      {successfulPaymentId && <div className="bg-gray-800 p-3 text-left break-all"><p className="text-sm text-gray-400">Your Payment ID:</p><p className="font-mono text-xs text-purple-300">{successfulPaymentId}</p></div>}
      <div className="mt-8"><button onClick={() => setIsThankYouModalOpen(false)} className="uppercase bg-purple-600 text-white px-8 py-2 font-bold text-md shadow-lg hover:bg-purple-700 transition font-orbitron">Close</button></div>
    </div>
  </div>
);