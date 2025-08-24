// /data/hospitalityData.ts

export interface Section {
  label: string;
  content: string[];
}

export interface Contact {
  name: string;
  phone: string;
  department?: string;
}

export interface HospitalityCardData {
  id: number;
  busContacts: Contact[];
  sections: Section[];
  mainContacts?: Contact[];
}

export const hospitalityData: HospitalityCardData[] = [
  {
    id: 1,
    busContacts: [
      { name: "Karthikeyan.S", phone: "9384802552" },
      { name: "Karthikeyan.S", phone: "9384802552" },
    ],
    sections: [
      {
        label: "INSTRUCTIONS",
        content: ["Registration for accommodation will be done on the spot in our campus.", "On Arrival:"],
      },
      {
        label: "ACCOMMODATIONS",
        content: [
          "Bring your College ID card.",
          "Show the e-mail copy of your response mail during check-in.",
          "Report at the respective event head's desk/front office.",
          "Hospitality volunteers will be present on-site for assistance.",
        ],
      },
      {
        label: "CONTACTS",
        content: [
          "Instructions for Participants:",
          "Participants must bring their own bedsheets, pillows and other necessary items.",
          "Participants must take responsibility for the entirety of their belongings. The team takes no cause or responsibility for any loss or damage.",
          "Participants should be back on the campus before 10:00 p.m. on the day of arrival.",
          "Note:",
          "Accommodation will be provided on a first-come-first-serve basis.",
          "For single-participant registrations, roommates will be assigned by the hospitality committee based on availability.",
        ],
      },
    ],
  },
  {
    id: 2,
    busContacts: [
      { name: "Karthikeyan.S", phone: "9384802552" },
      { name: "Karthikeyan.S", phone: "9384802552" },
    ],
    sections: [
      {
        label: "INSTRUCTIONS",
        content: ["ON CAMPUS:", "CEG/Alagappa chettiar/ near Anna University on Sardar Patel Rd, Kotturpuram, Chennai"],
      },
      {
        label: "HOW TO REACH",
        content: [
          "FROM CHENNAI CENTRAL (Approx 14 km):",
          "Avail an auto or bus.",
          "Board 23C directly from Central to ESI.",
          "Take the metro from Central to Airport. Avail a taxi for directions from Airport.",
          "FROM EGMORE STATION (Approx 12km):",
          "Walk, Bus, Auto, taxi.",
          "Catch the 41D/2G/21 from Egmore station to Tambaram and 51H from Tambaram to ESI.",
          "FROM KOYAMBEDU (CMBT):",
          "Board direct bus 570 from CMBT to ESI.",
          "Take the metro from CMBT to Airport. (below for directions from Airport)",
          "FROM AIRPORT (Approx 12km):",
          "Board direct bus 570 from CMBT to ESI.",
          "Walk to the Thirusulam bus stop (110m) and board bus 40A/60E/L22/40N/G18/18M/T151 to Chrompet from Tambaram and 51H from Tambaram to ESI.",
        ],
      },
      { label: "ACCOMMODATIONS", content: [] },
      { label: "CONTACTS", content: [] },
    ],
  },
  {
    id: 3,
    busContacts: [
      { name: "Karthikeyan.S", phone: "9384802552" },
      { name: "Karthikeyan.S", phone: "9384802552" },
    ],
    sections: [
      {
        label: "INSTRUCTIONS",
        content: [
          "Prohibited Activities: Drinking, smoking and the use of illegal substances are strictly prohibited. The college will take appropriate action if any participant is found to be in possession of these items.",
        ],
      },
      {
        label: "HOW TO REACH",
        content: [
          "Request For Property: Any damage to college facilities or property provided to participants will result in serious consequences. Participants must remunerate for this; the caution deposit will not be refunded if there's cover damage to the property.",
        ],
      },
      {
        label: "ACCOMMODATIONS",
        content: [
          "Check-in Procedure: Participants must keep their check-in receipts and ID cards safe throughout their stay. Upon check-in, they will be provided with room keys, which they should keep safe and during their stay.",
          "Key Distribution: Participants will receive their room keys during the check-in process. These must be returned upon check-out. Failure to return the keys will result in a deduction from the caution deposit.",
          "Valuables Responsibility: The college does not assume responsibility for any loss or damage to personal property or valuables chosen on the accommodation.",
          "Settlement of Accounts: Upon check-out, guests are requested to settle any outstanding bills for services rendered. The return of the caution deposit will be contingent upon the condition of the room and the return of the keys.",
          "Curfew for Participants: Participants are expected to strictly adhere to the curfew timings: 09:00 p.m. - 06:00 a.m.",
          "Dispute Resolution: In the event of any disputes, the decision of the event organizers will be final and binding.",
        ],
      },
      { label: "CONTACTS", content: [] },
    ],
  },
  {
    id: 4,
    busContacts: [
      { name: "Karthikeyan.S", phone: "9384802552" },
      { name: "Karthikeyan.S", phone: "9384802552" },
    ],
    sections: [
      { label: "INSTRUCTIONS", content: [] },
      { label: "HOW TO REACH", content: [] },
      { label: "ACCOMMODATIONS", content: [] },
      { label: "CONTACTS", content: [] },
    ],
    mainContacts: [
      { name: "Pradeep Kumar P", phone: "9941919970", department: "CIVIL" },
      { name: "Pradeep Kumar P", phone: "9941919970", department: "CIVIL" },
    ],
  },
];