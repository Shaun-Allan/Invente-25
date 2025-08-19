
// Department categories for filtering events
export const eventCategories = [
  { name: "All Departments", color: "#000000", textColor: "#000000", active: true },
  { name: "Computer Science and Engineering", color: "#1D87B8", textColor: "#1D87B8" },
  { name: "Information Technology", color: "#5E181C", textColor: "#5E181C" },
  { name: "Electronics and Communication", color: "#2F9F72", textColor: "#2F9F72" },
  { name: "Electrical and Electronics", color: "#385EA6", textColor: "#385EA6" },
  { name: "Mechanical Engineering", color: "#55B6CD", textColor: "#55B6CD" },
  { name: "Civil Engineering", color: "#D98F48", textColor: "#D98F48" },
  { name: "Biotechnology", color: "#7861A3", textColor: "#7861A3" },
  { name: "Chemical Engineering", color: "#C04A51", textColor: "#C04A51" },
];

// Event data with expanded information
export const centralEvents = [
  {
    id: 1,
    name: "Code Sprint",
    department: "Computer Science and Engineering",
    organizer: "CSE Department",
    date: "15 March 2025",
    description: "Join us for this amazing event as part of Invente'25. Code Sprint promises to be an unforgettable experience showcasing the best talent and creativity from across campus. This event is organized by the Computer Science and Engineering department and will feature challenging coding problems, innovative solutions, and great prizes.",
    registrationFee: "₹150 per head",
    pocs: [
      "Event Coordinator - 9876543210",
      "Department Head - 8765432109"
    ],
    rules: [
      "Open to all college students. Inter-college participation is allowed.",
      "Participants must register before the deadline.",
      "Teams must have 2-3 members.",
      "All necessary materials will be provided.",
      "Judge's decision will be final."
    ],
    departmentDescription: "The Computer Science and Engineering department at our college is known for its innovative approach to education and research. Our department hosts various technical events throughout the year to showcase student talent and encourage practical learning."
  },
  {
    id: 2,
    name: "Hack The Web",
    department: "Information Technology",
    organizer: "IT Department",
    date: "16 March 2025",
    description: "Join us for this amazing event as part of Invente'25. Hack The Web promises to be an unforgettable experience showcasing the best talent and creativity from across campus. This event is organized by the Information Technology department and will feature challenging web development problems, innovative solutions, and great prizes.",
    registrationFee: "₹150 per head",
    pocs: [
      "Event Coordinator - 9876543210",
      "Department Head - 8765432109"
    ],
    rules: [
      "Open to all college students. Inter-college participation is allowed.",
      "Participants must register before the deadline.",
      "Teams must have 2-3 members.",
      "All necessary materials will be provided.",
      "Judge's decision will be final."
    ],
    departmentDescription: "The Information Technology department at our college is known for its innovative approach to education and research. Our department hosts various technical events throughout the year to showcase student talent and encourage practical learning."
  },
  {
    id: 3,
    name: "Circuit Design",
    department: "Electronics and Communication",
    organizer: "ECE Department",
    date: "17 March 2025",
    description: "Join us for this amazing event as part of Invente'25. Circuit Design promises to be an unforgettable experience showcasing the best talent and creativity from across campus. This event is organized by the Electronics and Communication department and will feature challenging circuit problems, innovative solutions, and great prizes.",
    registrationFee: "₹150 per head",
    pocs: [
      "Event Coordinator - 9876543210",
      "Department Head - 8765432109"
    ],
    rules: [
      "Open to all college students. Inter-college participation is allowed.",
      "Participants must register before the deadline.",
      "Teams must have 2-3 members.",
      "All necessary materials will be provided.",
      "Judge's decision will be final."
    ],
    departmentDescription: "The Electronics and Communication department at our college is known for its innovative approach to education and research. Our department hosts various technical events throughout the year to showcase student talent and encourage practical learning."
  },
  {
    id: 4,
    name: "Power Systems",
    department: "Electrical and Electronics",
    organizer: "EEE Department",
    date: "18 March 2025",
    description: "Join us for this amazing event as part of Invente'25. Power Systems promises to be an unforgettable experience showcasing the best talent and creativity from across campus. This event is organized by the Electrical and Electronics department and will feature challenging electrical problems, innovative solutions, and great prizes.",
    registrationFee: "₹150 per head",
    pocs: [
      "Event Coordinator - 9876543210",
      "Department Head - 8765432109"
    ],
    rules: [
      "Open to all college students. Inter-college participation is allowed.",
      "Participants must register before the deadline.",
      "Teams must have 2-3 members.",
      "All necessary materials will be provided.",
      "Judge's decision will be final."
    ],
    departmentDescription: "The Electrical and Electronics department at our college is known for its innovative approach to education and research. Our department hosts various technical events throughout the year to showcase student talent and encourage practical learning."
  },
  {
    id: 5,
    name: "CAD Challenge",
    department: "Mechanical Engineering",
    organizer: "Mech Department",
    date: "19 March 2025",
    description: "Join us for this amazing event as part of Invente'25. CAD Challenge promises to be an unforgettable experience showcasing the best talent and creativity from across campus. This event is organized by the Mechanical Engineering department and will feature challenging design problems, innovative solutions, and great prizes.",
    registrationFee: "₹150 per head",
    pocs: [
      "Event Coordinator - 9876543210",
      "Department Head - 8765432109"
    ],
    rules: [
      "Open to all college students. Inter-college participation is allowed.",
      "Participants must register before the deadline.",
      "Teams must have 2-3 members.",
      "All necessary materials will be provided.",
      "Judge's decision will be final."
    ],
    departmentDescription: "The Mechanical Engineering department at our college is known for its innovative approach to education and research. Our department hosts various technical events throughout the year to showcase student talent and encourage practical learning."
  },
  {
    id: 6,
    name: "Bridge Building",
    department: "Civil Engineering",
    organizer: "Civil Department",
    date: "20 March 2025",
    description: "Join us for this amazing event as part of Invente'25. Bridge Building promises to be an unforgettable experience showcasing the best talent and creativity from across campus. This event is organized by the Civil Engineering department and will feature challenging structural problems, innovative solutions, and great prizes.",
    registrationFee: "₹150 per head",
    pocs: [
      "Event Coordinator - 9876543210",
      "Department Head - 8765432109"
    ],
    rules: [
      "Open to all college students. Inter-college participation is allowed.",
      "Participants must register before the deadline.",
      "Teams must have 2-3 members.",
      "All necessary materials will be provided.",
      "Judge's decision will be final."
    ],
    departmentDescription: "The Civil Engineering department at our college is known for its innovative approach to education and research. Our department hosts various technical events throughout the year to showcase student talent and encourage practical learning."
  },
  {
    id: 7,
    name: "BioTech Expo",
    department: "Biotechnology",
    organizer: "Biotech Department",
    date: "21 March 2025",
    description: "Join us for this amazing event as part of Invente'25. BioTech Expo promises to be an unforgettable experience showcasing the best talent and creativity from across campus. This event is organized by the Biotechnology department and will feature challenging biological problems, innovative solutions, and great prizes.",
    registrationFee: "₹150 per head",
    pocs: [
      "Event Coordinator - 9876543210",
      "Department Head - 8765432109"
    ],
    rules: [
      "Open to all college students. Inter-college participation is allowed.",
      "Participants must register before the deadline.",
      "Teams must have 2-3 members.",
      "All necessary materials will be provided.",
      "Judge's decision will be final."
    ],
    departmentDescription: "The Biotechnology department at our college is known for its innovative approach to education and research. Our department hosts various technical events throughout the year to showcase student talent and encourage practical learning."
  },
  {
    id: 8,
    name: "ChemProcess",
    department: "Chemical Engineering",
    organizer: "Chemical Department",
    date: "22 March 2025",
    description: "Join us for this amazing event as part of Invente'25. ChemProcess promises to be an unforgettable experience showcasing the best talent and creativity from across campus. This event is organized by the Chemical Engineering department and will feature challenging chemical process problems, innovative solutions, and great prizes.",
    registrationFee: "₹150 per head",
    pocs: [
      "Event Coordinator - 9876543210",
      "Department Head - 8765432109"
    ],
    rules: [
      "Open to all college students. Inter-college participation is allowed.",
      "Participants must register before the deadline.",
      "Teams must have 2-3 members.",
      "All necessary materials will be provided.",
      "Judge's decision will be final."
    ],
    departmentDescription: "The Chemical Engineering department at our college is known for its innovative approach to education and research. Our department hosts various technical events throughout the year to showcase student talent and encourage practical learning."
  }
];
