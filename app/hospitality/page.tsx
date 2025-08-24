// components/Hospitality.tsx

"use client";

import React, { useState } from "react";

// Define the types for our tabs
type TabId = "instructions" | "howToReach" | "accommodations" | "contacts";

const tabs: { id: TabId; label: string }[] = [
    { id: "instructions", label: "INSTRUCTIONS" },
    { id: "howToReach", label: "HOW TO REACH" },
    { id: "accommodations", label: "ACCOMMODATIONS" },
    { id: "contacts", label: "CONTACT US" },
];

const Hospitality = () => {
    const [activeTab, setActiveTab] = useState<TabId>("instructions");

    const ContactCard = ({ name, number }: { name: string; number: string }) => (
        <div className="bg-[#422018] text-white text-center rounded-full px-8 py-4 text-lg font-poppins">
            <p className="font-semibold">{name}</p>
            <p>{number}</p>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case "instructions":
                return (
                    <div className="space-y-4 text-md break-words">
                        <div>
                            <h3 className="font-bold text-[#422018] uppercase">Registration:</h3>
                            <p>
                                Registration for accommodation will be done on the spot in our
                                campus
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#422018] uppercase">On Arrival:</h3>
                            <ul className="list-disc pl-5">
                                <li>Bring your college ID card.</li>
                                <li>Show the mail copy of your response ready during check-in.</li>
                                <li>Report at the respective hostel (boys/girls) front office.</li>
                                <li>
                                    Hospitality volunteers will be present on-site for assistance.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#422018] uppercase">
                                Instructions For Participants:
                            </h3>
                            <ul className="list-disc pl-5">
                                <li>
                                    Participants must bring their own bedsheets, pillows and other
                                    necessary items.
                                </li>
                                <li>
                                    Participants must take responsibility for the safety of their
                                    belongings. The institution bears no responsibility for any loss
                                    or damage.
                                </li>
                                <li>
                                    Participants should arrive on the campus before 8:30 p.m. on the
                                    day of arrival.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#422018] uppercase">Note:</h3>
                            <p>
                                Accommodation will be provided on a first-come-first-served basis.
                            </p>
                            <p>
                                For single-participant registrations, roommates will be assigned by
                                the hospitality committee based on availability.
                            </p>
                        </div>
                    </div>
                );
            case "howToReach":
                return (
                    <div className="space-y-4 text-md break-words">
                        <div>
                            <h3 className="font-bold text-[#422018]">SSN CAMPUS</h3>
                            <p>
                                Kalavakkam (Near Thiruporur) on Rajiv Gandhi Salai (Old Mahabalipuram
                                Road)
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#422018]">
                                FROM CHENNI CENTRAL (44km):
                            </h3>
                            <p>Hire an auto/taxi.</p>
                            <p>Board 221 bus directly from Central to SSN. </p>
                            <p>
                                Take the metro from Central to Airport. (Refer below for directions
                                from Airport)
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#422018]">FROM EGMORE STATION (40 km)</h3>
                            <p>Hire an auto/taxi.</p>
                            <p>
                                Catch the 40603/40605 train from Egmore Station to Tambaram and 515
                                from Tambaram to SSN.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#422018]">FROM CMBT (43km):</h3>
                            <p>Board direct bus 570X from CMBT to SSN.</p>
                            <p>
                                Take the metro from CMBT to Airport. (Refer below for directions from
                                Airport)
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#422018]">FROM AIRPORT (38km):</h3>
                            <p>Board direct bus 570X from CMBT to SSN.</p>
                            <p>
                                Walk to the Tirusulam bus stop (700 m) and board bus
                                40601/40603/40605/40751/70C from Tirusulam to Tambaram and 515 from
                                Tambaram to SSN.
                            </p>
                        </div>
                    </div>
                );
            case "accommodations":
                return (
                    <div className="text-md break-words">
                        <ul className="list-disc space-y-3 pl-5 text-[#4a2e1a]">
                            <li>
                                <span className="font-bold">Prohibited Activities:</span> Smoking,
                                drinking, and the use of illegal substances are strictly prohibited.
                                The college will take appropriate action if any participant is found
                                in possession of these items.
                            </li>
                            <li>
                                <span className="font-bold">Respect for Property:</span> Any damage to
                                college facilities or property provided to participants will result
                                in serious consequences. The caution deposit will not be refunded if
                                damage is caused.
                            </li>
                            <li>
                                <span className="font-bold">Check-in Procedures:</span> Participants
                                must keep their check-in receipts and ID cards safe. Room keys will
                                be provided and must be safeguarded.
                            </li>
                            <li>
                                <span className="font-bold">Key Distribution:</span> Participants will
                                receive room keys during check-in. Keys must be returned upon
                                check-out, else deductions will be made from the caution deposit.
                            </li>
                            <li>
                                <span className="font-bold">Valuables Responsibility:</span> The
                                college does not assume responsibility for any loss or damage to
                                personal property or valuables stored in the accommodation.
                            </li>
                            <li>
                                <span className="font-bold">Settlement of Accounts:</span> Guests must
                                settle all outstanding bills upon check-out. Refund of the caution
                                deposit is subject to room condition and return of keys.
                            </li>
                            <li>
                                <span className="font-bold">Curfew for Participants:</span>{" "}
                                Participants are expected to strictly adhere to curfew timings:{" "}
                                <span className="italic">06:00 AM – 08:30 PM</span>.
                            </li>
                            <li>
                                <span className="font-bold">Dispute Resolution:</span> In the event of
                                any disputes, the decision of the organizers will be final and
                                binding.
                            </li>
                        </ul>
                    </div>
                );
            case "contacts":
                return (
                    <div className="space-y-3 flex flex-col items-center break-words">
                        <div className="bg-[#422018] text-white text-center rounded-md px-6 py-3 w-full max-w-xs">
                            <p className="font-bold text-lg">Pradeep Kumar P</p>
                            <p className="text-md">9942481020</p>
                            <p className="text-xs opacity-80">(CIVIL)</p>
                        </div>
                        <p className="text-center font-semibold pt-2">
                            For any queries with respect to bus routes:
                        </p>
                        <div className="bg-[#422018] text-white text-center rounded-md px-6 py-3 w-full max-w-xs">
                            <p className="font-bold text-lg">Karthikeyan S</p>
                            <p className="text-md">9384662552</p>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            {/* Main Card */}
            <div className="min-w-screen min-h-screen max-w-5xl bg-[#F5F5DC] bg-[url('/hospitality/bg.svg')] bg-cover bg-center p-6">
                <h1 className="font-playfair-display text-5xl text-[#422018] text-center font-bold mb-8">
                    HOSPITALITY
                </h1>

                {/* Bus Route Contacts Section */}
                <div className="mb-6">
                    <p className="text-center text-[#422018] mb-4 font-medium font-poppins">
                        For any queries with respect to bus routes, please contact:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <ContactCard name="Karthikeyan S" number="9384662552" />
                        <ContactCard name="Pradeep Kumar P" number="9942481020" />
                    </div>
                </div>

                {/* Tabs + Content */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Tab Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-3 w-full lg:w-1/4 h-[100%]">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
  w-full px-4 py-2 text-md sm:text-lg font-bold rounded-full transition-all duration-300 
  border-2 border-[#422018] font-playfair-display break-words text-center
  ${activeTab === tab.id
                                        ? "bg-[#422018] text-white"
                                        : "bg-white text-[#422018] hover:bg-[#422018] hover:text-white"}
`}

                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="p-4 rounded-lg min-h-[200px] font-poppins w-full lg:w-2/3">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hospitality;
