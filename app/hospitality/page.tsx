"use client";

import React, { useState } from "react";

type TabId = "instructions" | "howToReach" | "accommodations" | "contacts";

const tabs: { id: TabId; label: string }[] = [
    { id: "instructions", label: "Instructions" },
    { id: "howToReach", label: "How to Reach" },
    { id: "accommodations", label: "Accommodations" },
    { id: "contacts", label: "Contact Us" },
];

const Hospitality = () => {
    const [activeTab, setActiveTab] = useState<TabId>("instructions");

    const renderContent = () => {
        switch (activeTab) {
            case "instructions":
                return (
                    <div className="space-y-6 text-gray-200 break-words font-exo2 sm:text-base leading-relaxed">
                        <div>
                            <h3 className="font-michroma font-bold text-purple-400 uppercase text-lg mb-2">Registration :</h3>
                            <p>
                                Registration for accommodation will be done on the spot in our
                                campus
                            </p>
                        </div>
                        <div>
                            <h3 className="font-michroma font-bold text-purple-400 uppercase text-lg mb-2">On Arrival :</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Bring your college ID card.</li>
                                <li>Have the email copy of your response ready during check-in.</li>
                                <li>Report at the respective hostel (boys/girls) front office.</li>
                                <li>
                                    Hospitality volunteers will be present on-site for assistance
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-michroma font-bold text-purple-400 uppercase text-lg mb-2">
                                Instructions For Participants :
                            </h3>
                            <ul className="list-disc pl-5 space-y-1">
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
                                    Participants should arrive the campus before 8.30 pm on the day of
                                    arrival.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-michroma font-bold text-purple-400 uppercase text-lg mb-2">Note :</h3>
                             <ul className="list-disc pl-5 space-y-1">
                                <li>
                                Accommodation will be provided on a first-come-first-served basis.
                                </li>
                                <li>
                                For single-participant registrations, roommates will be assigned by
                                the hospitality committee based on availability.
                                </li>
                            </ul>
                        </div>
                    </div>
                );
            case "howToReach":
                 return (
                    <div className="space-y-4 text-gray-200 break-words font-exo2 sm:text-base leading-relaxed">
                        <div>
                            <h3 className="font-michroma font-bold text-purple-400 uppercase text-lg mb-2">SSN CAMPUS</h3>
                            <p>
                                Kalavakkam (Near Thiruporur) on Rajiv Gandhi Salai (Old Mahabalipuram
                                Road)
                            </p>
                        </div>
                        <div>
                            <h3 className="font-michroma font-bold text-purple-400 uppercase text-lg mb-2">
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
                            <h3 className="font-michroma font-bold text-purple-400 uppercase text-lg mb-2">FROM EGMORE STATION (40 km)</h3>
                            <p>Hire an auto/taxi.</p>
                            <p>
                                Catch the 40603/40605 train from Egmore Station to Tambaram and 515
                                from Tambaram to SSN.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-michroma font-bold text-purple-400 uppercase text-lg mb-2">FROM CMBT (43km):</h3>
                            <p>Board direct bus 570X from CMBT to SSN.</p>
                            <p>
                                Take the metro from CMBT to Airport. (Refer below for directions from
                                Airport)
                            </p>
                        </div>
                        <div>
                            <h3 className="font-michroma font-bold text-purple-400 uppercase text-lg mb-2">FROM AIRPORT (38km):</h3>
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
                    <div className="text-gray-200 break-words font-exo2 sm:text-base leading-relaxed">
                        <ul className="list-disc space-y-4 pl-5">
                            <li>
                                <span className="font-michroma font-bold text-purple-400 text-lg">Prohibited Activities:</span> Smoking,
                                drinking, and the use of illegal substances are strictly prohibited.
                                The college will take appropriate action if any participant is found
                                in possession of these items.
                            </li>
                            <li>
                                <span className="font-michroma font-bold text-purple-400 text-lg">Respect for Property:</span> Any damage to
                                college facilities or property provided to participants will result
                                in serious consequences. The caution deposit will not be refunded if
                                damage is caused.
                            </li>
                            <li>
                                <span className="font-michroma font-bold text-purple-400 text-lg">Check-in Procedures:</span> Participants
                                must keep their check-in receipts and ID cards safe. Room keys will
                                be provided and must be safeguarded.
                            </li>
                             <li>
                                <span className="font-michroma font-bold text-purple-400 text-lg">Key Distribution:</span> Participants will
                                receive room keys during check-in. Keys must be returned upon
                                check-out, else deductions will be made from the caution deposit.
                            </li>
                            <li>
                                <span className="font-michroma font-bold text-purple-400 text-lg">Valuables Responsibility:</span> The
                                college does not assume responsibility for any loss or damage to
                                personal property or valuables stored in the accommodation.
                            </li>
                            <li>
                                <span className="font-michroma font-bold text-purple-400 text-lg">Settlement of Accounts:</span> Guests must
                                settle all outstanding bills upon check-out. Refund of the caution
                                deposit is subject to room condition and return of akey.
                            </li>
                            <li>
                                <span className="font-michroma font-bold text-purple-400 text-lg">Curfew for Participants:</span>{" "}
                                Participants are expected to strictly adhere to curfew timings:{" "}
                                <span className="italic">06:00 AM – 08:30 PM</span>.
                            </li>
                             <li>
                                <span className="font-michroma font-bold text-purple-400 text-lg">Dispute Resolution:</span> In the event of
                                any disputes, the decision of the organizers will be final and
                                binding.
                            </li>
                        </ul>
                    </div>
                );
            case "contacts":
                 return (
                    <div className="space-y-4 flex flex-col items-center break-words font-exo2 leading-relaxed">
                        <div className="bg-white bg-opacity-10 border border-gray-500 text-white text-center rounded-md px-6 py-3 w-full max-w-xs">
                            <p className="font-bold text-lg">Pradeep Kumar P</p>
                            <p className="text-md">9942481020</p>
                            <p className="text-xs opacity-80">(CIVIL)</p>
                        </div>
                        <p className="text-center font-semibold pt-2">
                            For any queries with respect to bus routes:
                        </p>
                         <div className="bg-white bg-opacity-10 border border-gray-500 text-white text-center rounded-md px-6 py-3 w-full max-w-xs">
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
        <div className="min-h-screen w-full bg-[#0d051c] bg-[url('/hospitality/bg.svg')] bg-cover bg-center py-12 px-4 sm:px-6 md:px-10 lg:px-20 font-poppins text-white overflow-hidden">
            <div className="w-full max-w-5xl mx-auto bg-black bg-opacity-50 border border-gray-700 p-4 sm:p-6 md:p-10 rounded-lg">
                
                <div className="flex justify-center mb-4">
                    <img src="/hospitality/title.svg" alt="Hospitality" className="h-16 sm:h-20 md:h-24" />
                </div>
                <p className="text-center text-blue-400 underline cursor-pointer mb-8 sm:mb-10">Bus Routes</p>

                <div className="mb-8 sm:mb-10">
                    <p className="text-center text-gray-300 mb-4 font-exo2 text-sm sm:text-base">For any queries with respect to bus routes, please contact :</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                        <div className="w-full sm:w-1/3 h-12 bg-gray-200 bg-opacity-20 border border-gray-500 rounded-sm"></div>
                        <div className="w-full sm:w-1/3 h-12 bg-gray-200 bg-opacity-20 border border-gray-500 rounded-sm"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-orbitron font-bold transition-colors duration-300
                                border border-gray-400 uppercase
                                hover:bg-white hover:text-indigo-600 focus:outline-none focus:bg-white focus:text-indigo-600
                                ${activeTab === tab.id ? "bg-white text-indigo-600" : "bg-transparent text-white"}
                            `}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="min-h-[200px]">{renderContent()}</div>
            </div>
        </div>
    );
};

export default Hospitality;
