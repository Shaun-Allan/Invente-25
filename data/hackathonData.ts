// app/hackathons/hackathonData.ts

export interface Coordinator {
  name: string;
  phone: string;
}

export interface Section {
  title: string;
  type: 'ordered' | 'unordered' | 'schedule' | 'simple';
  items?: string[];
  days?: { day: string; schedule: string[] }[];
}

export interface Hackathon {
  id: string;
  title: string;
  mainImage: { src: string; width: number; height: number; alt: string };
  prizes: { label: string; value: string }[];
  meta: { label: string; value: string }[];
  description: string;
  generalInstructionsTitle?: string;
  generalInstructions?: string[];
  sections: Section[];
  coordinators: Coordinator[];
}

export const hackathons: Hackathon[] = [
  {
    id: "hackinfinity",
    title: "HACKINFINITY",
    mainImage: { src: "/hackathons/HACKINFINITY.png", width: 400, height: 100, alt: "Hackinfinity" },
    prizes: [
      { label: "Winner", value: "₹12000" },
      { label: "Runner", value: "₹8000" },
      { label: "2nd Runner", value: "₹5000" },
    ],
    meta: [
      { label: "Date", value: "TBD" },
      { label: "Location", value: "TBD" },
    ],
    description: "The flagship event of the Invente, emerges as a celebration of ingenuity, collaboration, and relentless passion for problem-solving. Problem statements are chosen in the fields of Healthcare, Renewable Energy, Fintech, Sustainability, Smart cities, supply chain and logistics, Agritech, Education and Tourism. It's not just another hackathon, it is a whirlwind of imagination and coding prowess that unfolds over the course of 24 hours where aspiring developers, designers, and creators converge to transform their ideas into reality.",
    generalInstructionsTitle: "General Instructions:",
    generalInstructions: [
        "All the team members must have proper internet connection.",
        "Participants are required to have their own components and software in order to implement their solution (including extension boxes).",
        "Each team will be allocated separate mentors.",
        "Mentorship for technical skills will be provided.",
        "Participants are supposed to build their product/solution during the Hackathon.",
        "Participants are allowed to use existing libraries or components, however only the work done during the 24 hrs will be considered for evaluation.",
        "Solutions/products can be a mix of hardware and software technologies, but can be purely software or hardware based as well.",
        "Participants will be informed of the order in which reviews will happen and must attend their meetings at the specified times.",
        "Solutions/products will be judged based on Innovation, Impact, Feasibility and Marketability.",
        "Organizers will be available for any further help/queries.",
    ],
    sections: [
        { title: "Domains for Problem Statement", type: 'ordered', items: ["Healthcare technologies.", "Fintech.", "Renewable energy and sustainability.", "Smart cities and infrastructure.", "Education technology.", "Agritech.", "Supply chain and logistics.", "Student innovation (open idea)."] },
        { title: "Schedule", type: 'schedule', days: [{ day: "Day 1:", schedule: ["10.30 AM – Introduction.", "11.00 AM – Hackathon begins.", "03.00 PM – First Review.", "9.00 PM – Second Review."] }, { day: "Day 2:", schedule: ["08.00 AM – Third Review.", "11.00 AM – Hackathon ends.", "12.00 PM – Final Presentation.", "03.30 PM – Valedictory."] }] },
        { title: "First review", type: 'ordered', items: ["Teams are expected to explain their problem statement, background study done and the workflow of their solution.", "Teams will be judged on the novelty of their problem statement and the clarity in their approach moving forward.", "Advice on how to proceed further will be provided."] },
        { title: "Second Review", type: 'ordered', items: ["This review is a checkpoint to track the team’s progress.", "The reviewers will give their input and their thoughts on the team’s solution and changes if there any are warranted."] },
        { title: "Third review", type: 'ordered', items: ["Teams are expected to implement the changes given in the previous review by the reviewers.", "In this round, the teams are reviewed based on their progress in accordance with their proposed workflow and closeness to completion of the project."] },
        { title: "Final Presentation", type: 'ordered', items: ["In this round, teams will be evaluated based on presentation skills, ability to explain their idea in a lucid manner and the degree of innovation in their solution.", "Teams which address the marketability of their product will be awarded additional points. The hackathon will follow a leaderboard system. The final score will be the cumulative points gained by the team over the three reviews and final presentation. The team with the highest score will be announced the winner of the hackathon. Decisions taken by the review panel will be final in all regards."] },
    ],
    coordinators: [
        { name: "Sanjay B", phone: "+91 73058 34440" },
        { name: "Nadhim", phone: "+91 73054 21618" },
    ],
  },
  {
    id: "impactarcade",
    title: "IMPACT ARCADE (GAMEJAM) 24HR HACKATHON",
    mainImage: { src: "/hackathons/IMPACT ARCADE (GAMEJAM) 24HR HACKATHON.png", width: 400, height: 150, alt: "Impact Arcade (Gamejam) 24HR Hackathon" },
    prizes: [
        { label: "Winner", value: "₹8000" },
        { label: "Runner", value: "₹4000" },
        { label: "2nd Runner", value: "None" },
    ],
    meta: [
        { label: "Date", value: "TBD" },
        { label: "Location", value: "TBD" },
    ],
    description: "Game Jam is an intense 24-hour game development competition where teams are tasked with creating engaging and thoughtful games based on the theme that will be announced on the day of the competition. This theme will be related to the United Nations Sustainable Development Goals (SDGs), ensuring the games focus on relevant global issues.",
    sections: [
        { title: "Team Composition", type: 'simple', items: ["Each team can consist of a maximum of 2 players. Individual participants are also allowed to compete solo."] },
        { title: "Time Limit", type: 'simple', items: ["The competition runs for 24 hours, starting from the official theme announcement."] },
        { title: "Judging Criteria", type: 'simple', items: ["Games will be judged based on creativity, gameplay, adherence to the theme, and technical execution."] },
        { title: "Mentor Feedback", type: 'simple', items: ["Teams can earn additional points by incorporating feedback from mentors after the first 12 hours of the competition."] },
        { title: "Original Work", type: 'simple', items: ["All content, including code, art, and audio, must be created during the Game Jam. Pre-existing assets are not allowed, except for fonts and publicly available libraries/frameworks."] },
        { title: "Use of Tools", type: 'simple', items: ["Participants are free to use any game development tools, engines, or frameworks of their choice, as long as they adhere to the competition’s theme and time constraints."] },
        { title: "Theme Adherence", type: 'simple', items: ["Games must clearly reflect the given theme, related to the United Nations SDGs. Creativity in interpreting and integrating the theme is encouraged."] },
        { title: "Submission", type: 'simple', items: ["Games must be submitted before the 24-hour deadline. Late submissions will not be accepted."] },
        { title: "Platforms", type: 'simple', items: ["The game must be playable on at least one of the following platforms: Windows, macOS, Linux, or a web browser."] },
        { title: "Code Submission", type: 'simple', items: ["The full source code must be submitted alongside the game, with clear instructions on how to run the game."] },
    ],
    coordinators: [
        { name: "Sanjay B", phone: "+91 73058 34440" },
        { name: "Nadhim", phone: "+91 73054 21618" },
    ],
  },
];