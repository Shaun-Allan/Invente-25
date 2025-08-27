// Define the structure of an Event for type safety
export interface Event {
  name: string;
  domain: string;
  catchphrase?: string;
  teamSize: string;
  heads: { name: string; contact: string }[];
  description: string;
  rounds: {
    name: string;
    details: string;
    rules: string[];
    tieBreaker?: string;
  }[];
}

export interface DepartmentEvents {
  technical: Event[];
  nonTechnical: Event[];
}

interface EventsData {
  [key: string]: DepartmentEvents;
}

// Dummy data for CSE and IT departments
export const eventsData: EventsData = {
  cse: {
    technical: [
      {
        name: "Codolympics",
        domain: "Competitive Programming",
        catchphrase: "Code, Compete, Conquer. Let the chaos begin!",
        teamSize: "2",
        heads: [
          { name: "Abhinav", contact: "9876543210" },
          { name: "Priya", contact: "8765432109" },
        ],
        description:
          "This is a coding competition based purely on Data Structures and Algorithms. Participants will contest against each other in teams of 2 in a competitive programming contest.",
        rounds: [
          {
            name: "Round 1 - Prelims (Sabotage Round Included)",
            details:
              "The first round is a prelims round where participants take part in a coding competition consisting of 3-5 questions; the questions are of easy-medium-hard levels. Participants are to switch positions with their teammates every 5 minutes. A special sabotage round is included!",
            rules: [
              "Platform: HackerRank or a similar online judge.",
              "Time Limit: 90 minutes.",
              "Scoring: Based on the number of test cases passed. Penalty for wrong submissions.",
              "Switching is mandatory every 5 minutes. Failure to do so results in a penalty.",
              "Top 10 teams with the highest scores advance.",
            ],
            tieBreaker:
              "In case of a tie, the team with the faster submission time for the last correctly solved problem will be ranked higher.",
          },
          {
            name: "Round 2 - Guess the Code",
            details:
              "This round has the teams trying to guess the code from executable files. Teams will be given input and will have to view the output, then code the logic by analyzing input and output, which will be verified manually.",
            rules: [
              "Teams are provided with 3 executable files.",
              "They can give custom inputs and observe the outputs.",
              "The goal is to replicate the logic in C++, Java, or Python.",
              "Time Limit: 60 minutes.",
              "Correctly replicating the logic for each executable grants points.",
            ],
            tieBreaker:
              "The team that successfully replicates the logic for the most files in the shortest amount of time wins.",
          },
        ],
      },
      {
        name: "Codolympics2",
        domain: "Competitive Programming",
        // catchphrase: "Code, Compete, Conquer. Let the chaos begin!",
        teamSize: "2",
        heads: [
          { name: "Abhinav", contact: "9876543210" },
          { name: "Priya", contact: "8765432109" },
        ],
        description:
          "This is a coding competition based purely on Data Structures and Algorithms. Participants will contest against each other in teams of 2 in a competitive programming contest.",
        rounds: [
          {
            name: "Round 1 - Prelims (Sabotage Round Included)",
            details:
              "The first round is a prelims round where participants take part in a coding competition consisting of 3-5 questions; the questions are of easy-medium-hard levels. Participants are to switch positions with their teammates every 5 minutes. A special sabotage round is included!",
            rules: [
              "Platform: HackerRank or a similar online judge.",
              "Time Limit: 90 minutes.",
              "Scoring: Based on the number of test cases passed. Penalty for wrong submissions.",
              "Switching is mandatory every 5 minutes. Failure to do so results in a penalty.",
              "Top 10 teams with the highest scores advance.",
            ],
            tieBreaker:
              "In case of a tie, the team with the faster submission time for the last correctly solved problem will be ranked higher.",
          },
          {
            name: "Round 2 - Guess the Code",
            details:
              "This round has the teams trying to guess the code from executable files. Teams will be given input and will have to view the output, then code the logic by analyzing input and output, which will be verified manually.",
            rules: [
              "Teams are provided with 3 executable files.",
              "They can give custom inputs and observe the outputs.",
              "The goal is to replicate the logic in C++, Java, or Python.",
              "Time Limit: 60 minutes.",
              "Correctly replicating the logic for each executable grants points.",
            ],
            tieBreaker:
              "The team that successfully replicates the logic for the most files in the shortest amount of time wins.",
          },
        ],
      },
      {
        name: "Codolympic3",
        domain: "Competitive Programming",
        catchphrase: "Code, Compete, Conquer. Let the chaos begin!",
        teamSize: "2",
        heads: [
          { name: "Abhinav", contact: "9876543210" },
          { name: "Priya", contact: "8765432109" },
        ],
        description:
          "This is a coding competition based purely on Data Structures and Algorithms. Participants will contest against each other in teams of 2 in a competitive programming contest.",
        rounds: [
          {
            name: "Round 1 - Prelims (Sabotage Round Included)",
            details:
              "The first round is a prelims round where participants take part in a coding competition consisting of 3-5 questions; the questions are of easy-medium-hard levels. Participants are to switch positions with their teammates every 5 minutes. A special sabotage round is included!",
            rules: [
              "Platform: HackerRank or a similar online judge.",
              "Time Limit: 90 minutes.",
              "Scoring: Based on the number of test cases passed. Penalty for wrong submissions.",
              "Switching is mandatory every 5 minutes. Failure to do so results in a penalty.",
              "Top 10 teams with the highest scores advance.",
            ],
            tieBreaker:
              "In case of a tie, the team with the faster submission time for the last correctly solved problem will be ranked higher.",
          },
          {
            name: "Round 2 - Guess the Code",
            details:
              "This round has the teams trying to guess the code from executable files. Teams will be given input and will have to view the output, then code the logic by analyzing input and output, which will be verified manually.",
            rules: [
              "Teams are provided with 3 executable files.",
              "They can give custom inputs and observe the outputs.",
              "The goal is to replicate the logic in C++, Java, or Python.",
              "Time Limit: 60 minutes.",
              "Correctly replicating the logic for each executable grants points.",
            ],
            tieBreaker:
              "The team that successfully replicates the logic for the most files in the shortest amount of time wins.",
          },
        ],
      },
      {
        name: "Codolympics4",
        domain: "Competitive Programming",
        catchphrase: "Code, Compete, Conquer. Let the chaos begin!",
        teamSize: "2",
        heads: [
          { name: "Abhinav", contact: "9876543210" },
          { name: "Priya", contact: "8765432109" },
        ],
        description:
          "This is a coding competition based purely on Data Structures and Algorithms. Participants will contest against each other in teams of 2 in a competitive programming contest.",
        rounds: [
          {
            name: "Round 1 - Prelims (Sabotage Round Included)",
            details:
              "The first round is a prelims round where participants take part in a coding competition consisting of 3-5 questions; the questions are of easy-medium-hard levels. Participants are to switch positions with their teammates every 5 minutes. A special sabotage round is included!",
            rules: [
              "Platform: HackerRank or a similar online judge.",
              "Time Limit: 90 minutes.",
              "Scoring: Based on the number of test cases passed. Penalty for wrong submissions.",
              "Switching is mandatory every 5 minutes. Failure to do so results in a penalty.",
              "Top 10 teams with the highest scores advance.",
            ],
            tieBreaker:
              "In case of a tie, the team with the faster submission time for the last correctly solved problem will be ranked higher.",
          },
          {
            name: "Round 2 - Guess the Code",
            details:
              "This round has the teams trying to guess the code from executable files. Teams will be given input and will have to view the output, then code the logic by analyzing input and output, which will be verified manually.",
            rules: [
              "Teams are provided with 3 executable files.",
              "They can give custom inputs and observe the outputs.",
              "The goal is to replicate the logic in C++, Java, or Python.",
              "Time Limit: 60 minutes.",
              "Correctly replicating the logic for each executable grants points.",
            ],
            tieBreaker:
              "The team that successfully replicates the logic for the most files in the shortest amount of time wins.",
          },
        ],
      },
      // You can add more technical CSE events here
    ],
    nonTechnical: [
      {
        name: "Pixel Perfect",
        domain: "UI/UX Design",
        catchphrase: "Design the future, one pixel at a time.",
        teamSize: "1-2",
        heads: [
          { name: "Rohan", contact: "7654321098" },
          { name: "Sneha", contact: "6543210987" },
        ],
        description:
          "A design-a-thon where participants are challenged to create a compelling user interface for a given problem statement. The focus is on creativity, user experience, and visual appeal.",
        rounds: [
          {
            name: "Round 1 - Wireframe Challenge",
            details:
              "Participants will be given a problem statement and must create a low-fidelity wireframe for a mobile or web application within a strict time limit. This tests their ability to quickly structure information and user flow.",
            rules: [
              "Tool: Figma, Adobe XD, or even pen and paper (to be digitized).",
              "Time Limit: 45 minutes.",
              "Submission: A clear image or PDF of the wireframe.",
              "Judging Criteria: Clarity of user flow, logical layout, and innovative features.",
            ],
          },
          {
            name: "Round 2 - High-Fidelity Mockup",
            details:
              "The top teams will proceed to the final round where they must convert their wireframe into a high-fidelity, visually stunning mockup. They will be required to create a style guide and a key screen.",
            rules: [
              "Tool: Figma or Adobe XD.",
              "Time Limit: 2 hours.",
              "Submission: A link to the Figma/XD prototype.",
              "Judging Criteria: Visual design, color theory, typography, consistency, and overall user experience.",
            ],
            tieBreaker:
              "In case of a tie, the design with the most detailed and well-justified style guide will be ranked higher.",
          },
        ],
      },
    ],
  },
  it: {
    technical: [
      {
        name: "Bug Bounty Blitz",
        domain: "Cybersecurity",
        catchphrase: "Find the bug, claim the glory. Happy hunting!",
        teamSize: "2-3",
        heads: [
          { name: "Karan", contact: "9988776655" },
          { name: "Anjali", contact: "8877665544" },
        ],
        description:
          "A competitive event where teams are given a vulnerable web application. Their mission is to find and exploit as many security flaws as possible within the time limit. Points are awarded based on the severity of the bugs found.",
        rounds: [
          {
            name: "Round 1 - The Hunt",
            details:
              "All teams will be given access to the same web application hosted on a local server. They will have a set amount of time to perform reconnaissance and find vulnerabilities ranging from XSS and SQL Injection to broken authentication.",
            rules: [
              "No DDoS or brute-force attacks on the server infrastructure are allowed.",
              "Teams must document their findings with proof-of-concept screenshots or scripts.",
              "Points are awarded for each unique, validated vulnerability.",
              "Time Limit: 3 hours.",
            ],
            tieBreaker:
              "The team that finds and reports the highest-severity bug first wins the tie.",
          },
        ],
      },
    ],
    nonTechnical: [
      {
        name: "Tech Charades",
        domain: "General Tech Knowledge",
        catchphrase: "Act it out, guess the tech. No talking!",
        teamSize: "3-4",
        heads: [
          { name: "Vikram", contact: "7766554433" },
          { name: "Meera", contact: "6655443322" },
        ],
        description:
          "A fun and frantic non-technical event where teams guess technology-related words, concepts, and company names acted out by their teammates. A test of communication and tech-savviness!",
        rounds: [
          {
            name: "Round 1 - Easy Mode",
            details:
              "Teams will act out and guess common tech terms and company names (e.g., 'Google', 'CPU', 'Bluetooth'). Each team gets 90 seconds to guess as many words as possible.",
            rules: [
              "The actor cannot speak or make any sounds.",
              "The actor cannot draw letters in the air.",
              "A pass is allowed, but the word may reappear.",
              "Scores from this round carry over.",
            ],
          },
          {
            name: "Round 2 - Hard Mode",
            details:
              "The difficulty ramps up with more abstract or complex concepts (e.g., 'Blockchain', 'Machine Learning', 'API'). The rules are the same, but the challenge is greater.",
            rules: [
              "Time limit per team: 120 seconds.",
              "Words in this round are worth double the points.",
              "Top 3 teams with the highest cumulative score win.",
            ],
            tieBreaker:
              "A final, single-word act-off between the tied teams. The team that guesses the word fastest wins.",
          },
        ],
      },
    ],
  },
  "snuc-cse": {
    technical: [
      {
        name: "Bug Bounty Blitz",
        domain: "Cybersecurity",
        catchphrase: "Find the bug, claim the glory. Happy hunting!",
        teamSize: "2-3",
        heads: [
          { name: "Karan", contact: "9988776655" },
          { name: "Anjali", contact: "8877665544" },
        ],
        description:
          "A competitive event where teams are given a vulnerable web application. Their mission is to find and exploit as many security flaws as possible within the time limit. Points are awarded based on the severity of the bugs found.",
        rounds: [
          {
            name: "Round 1 - The Hunt",
            details:
              "All teams will be given access to the same web application hosted on a local server. They will have a set amount of time to perform reconnaissance and find vulnerabilities ranging from XSS and SQL Injection to broken authentication.",
            rules: [
              "No DDoS or brute-force attacks on the server infrastructure are allowed.",
              "Teams must document their findings with proof-of-concept screenshots or scripts.",
              "Points are awarded for each unique, validated vulnerability.",
              "Time Limit: 3 hours.",
            ],
            tieBreaker:
              "The team that finds and reports the highest-severity bug first wins the tie.",
          },
        ],
      },
    ],
    nonTechnical: [
      {
        name: "Tech Charades",
        domain: "General Tech Knowledge",
        catchphrase: "Act it out, guess the tech. No talking!",
        teamSize: "3-4",
        heads: [
          { name: "Vikram", contact: "7766554433" },
          { name: "Meera", contact: "6655443322" },
        ],
        description:
          "A fun and frantic non-technical event where teams guess technology-related words, concepts, and company names acted out by their teammates. A test of communication and tech-savviness!",
        rounds: [
          {
            name: "Round 1 - Easy Mode",
            details:
              "Teams will act out and guess common tech terms and company names (e.g., 'Google', 'CPU', 'Bluetooth'). Each team gets 90 seconds to guess as many words as possible.",
            rules: [
              "The actor cannot speak or make any sounds.",
              "The actor cannot draw letters in the air.",
              "A pass is allowed, but the word may reappear.",
              "Scores from this round carry over.",
            ],
          },
          {
            name: "Round 2 - Hard Mode",
            details:
              "The difficulty ramps up with more abstract or complex concepts (e.g., 'Blockchain', 'Machine Learning', 'API'). The rules are the same, but the challenge is greater.",
            rules: [
              "Time limit per team: 120 seconds.",
              "Words in this round are worth double the points.",
              "Top 3 teams with the highest cumulative score win.",
            ],
            tieBreaker:
              "A final, single-word act-off between the tied teams. The team that guesses the word fastest wins.",
          },
        ],
      },
    ],
  },
  "ece": {
    technical: [
      {
        name: "Bug Bounty Blitz",
        domain: "Cybersecurity",
        catchphrase: "Find the bug, claim the glory. Happy hunting!",
        teamSize: "2-3",
        heads: [
          { name: "Karan", contact: "9988776655" },
          { name: "Anjali", contact: "8877665544" },
        ],
        description:
          "A competitive event where teams are given a vulnerable web application. Their mission is to find and exploit as many security flaws as possible within the time limit. Points are awarded based on the severity of the bugs found.",
        rounds: [
          {
            name: "Round 1 - The Hunt",
            details:
              "All teams will be given access to the same web application hosted on a local server. They will have a set amount of time to perform reconnaissance and find vulnerabilities ranging from XSS and SQL Injection to broken authentication.",
            rules: [
              "No DDoS or brute-force attacks on the server infrastructure are allowed.",
              "Teams must document their findings with proof-of-concept screenshots or scripts.",
              "Points are awarded for each unique, validated vulnerability.",
              "Time Limit: 3 hours.",
            ],
            tieBreaker:
              "The team that finds and reports the highest-severity bug first wins the tie.",
          },
        ],
      },
    ],
    nonTechnical: [
      {
        name: "Tech Charades",
        domain: "General Tech Knowledge",
        catchphrase: "Act it out, guess the tech. No talking!",
        teamSize: "3-4",
        heads: [
          { name: "Vikram", contact: "7766554433" },
          { name: "Meera", contact: "6655443322" },
        ],
        description:
          "A fun and frantic non-technical event where teams guess technology-related words, concepts, and company names acted out by their teammates. A test of communication and tech-savviness!",
        rounds: [
          {
            name: "Round 1 - Easy Mode",
            details:
              "Teams will act out and guess common tech terms and company names (e.g., 'Google', 'CPU', 'Bluetooth'). Each team gets 90 seconds to guess as many words as possible.",
            rules: [
              "The actor cannot speak or make any sounds.",
              "The actor cannot draw letters in the air.",
              "A pass is allowed, but the word may reappear.",
              "Scores from this round carry over.",
            ],
          },
          {
            name: "Round 2 - Hard Mode",
            details:
              "The difficulty ramps up with more abstract or complex concepts (e.g., 'Blockchain', 'Machine Learning', 'API'). The rules are the same, but the challenge is greater.",
            rules: [
              "Time limit per team: 120 seconds.",
              "Words in this round are worth double the points.",
              "Top 3 teams with the highest cumulative score win.",
            ],
            tieBreaker:
              "A final, single-word act-off between the tied teams. The team that guesses the word fastest wins.",
          },
        ],
      },
    ],
  },
  "eee": {
    technical: [
      {
        name: "Bug Bounty Blitz",
        domain: "Cybersecurity",
        catchphrase: "Find the bug, claim the glory. Happy hunting!",
        teamSize: "2-3",
        heads: [
          { name: "Karan", contact: "9988776655" },
          { name: "Anjali", contact: "8877665544" },
        ],
        description:
          "A competitive event where teams are given a vulnerable web application. Their mission is to find and exploit as many security flaws as possible within the time limit. Points are awarded based on the severity of the bugs found.",
        rounds: [
          {
            name: "Round 1 - The Hunt",
            details:
              "All teams will be given access to the same web application hosted on a local server. They will have a set amount of time to perform reconnaissance and find vulnerabilities ranging from XSS and SQL Injection to broken authentication.",
            rules: [
              "No DDoS or brute-force attacks on the server infrastructure are allowed.",
              "Teams must document their findings with proof-of-concept screenshots or scripts.",
              "Points are awarded for each unique, validated vulnerability.",
              "Time Limit: 3 hours.",
            ],
            tieBreaker:
              "The team that finds and reports the highest-severity bug first wins the tie.",
          },
        ],
      },
    ],
    nonTechnical: [
      {
        name: "Tech Charades",
        domain: "General Tech Knowledge",
        catchphrase: "Act it out, guess the tech. No talking!",
        teamSize: "3-4",
        heads: [
          { name: "Vikram", contact: "7766554433" },
          { name: "Meera", contact: "6655443322" },
        ],
        description:
          "A fun and frantic non-technical event where teams guess technology-related words, concepts, and company names acted out by their teammates. A test of communication and tech-savviness!",
        rounds: [
          {
            name: "Round 1 - Easy Mode",
            details:
              "Teams will act out and guess common tech terms and company names (e.g., 'Google', 'CPU', 'Bluetooth'). Each team gets 90 seconds to guess as many words as possible.",
            rules: [
              "The actor cannot speak or make any sounds.",
              "The actor cannot draw letters in the air.",
              "A pass is allowed, but the word may reappear.",
              "Scores from this round carry over.",
            ],
          },
          {
            name: "Round 2 - Hard Mode",
            details:
              "The difficulty ramps up with more abstract or complex concepts (e.g., 'Blockchain', 'Machine Learning', 'API'). The rules are the same, but the challenge is greater.",
            rules: [
              "Time limit per team: 120 seconds.",
              "Words in this round are worth double the points.",
              "Top 3 teams with the highest cumulative score win.",
            ],
            tieBreaker:
              "A final, single-word act-off between the tied teams. The team that guesses the word fastest wins.",
          },
        ],
      },
    ],
  },
  "bme": {
    technical: [
      {
        name: "Bug Bounty Blitz",
        domain: "Cybersecurity",
        catchphrase: "Find the bug, claim the glory. Happy hunting!",
        teamSize: "2-3",
        heads: [
          { name: "Karan", contact: "9988776655" },
          { name: "Anjali", contact: "8877665544" },
        ],
        description:
          "A competitive event where teams are given a vulnerable web application. Their mission is to find and exploit as many security flaws as possible within the time limit. Points are awarded based on the severity of the bugs found.",
        rounds: [
          {
            name: "Round 1 - The Hunt",
            details:
              "All teams will be given access to the same web application hosted on a local server. They will have a set amount of time to perform reconnaissance and find vulnerabilities ranging from XSS and SQL Injection to broken authentication.",
            rules: [
              "No DDoS or brute-force attacks on the server infrastructure are allowed.",
              "Teams must document their findings with proof-of-concept screenshots or scripts.",
              "Points are awarded for each unique, validated vulnerability.",
              "Time Limit: 3 hours.",
            ],
            tieBreaker:
              "The team that finds and reports the highest-severity bug first wins the tie.",
          },
        ],
      },
    ],
    nonTechnical: [
      {
        name: "Tech Charades",
        domain: "General Tech Knowledge",
        catchphrase: "Act it out, guess the tech. No talking!",
        teamSize: "3-4",
        heads: [
          { name: "Vikram", contact: "7766554433" },
          { name: "Meera", contact: "6655443322" },
        ],
        description:
          "A fun and frantic non-technical event where teams guess technology-related words, concepts, and company names acted out by their teammates. A test of communication and tech-savviness!",
        rounds: [
          {
            name: "Round 1 - Easy Mode",
            details:
              "Teams will act out and guess common tech terms and company names (e.g., 'Google', 'CPU', 'Bluetooth'). Each team gets 90 seconds to guess as many words as possible.",
            rules: [
              "The actor cannot speak or make any sounds.",
              "The actor cannot draw letters in the air.",
              "A pass is allowed, but the word may reappear.",
              "Scores from this round carry over.",
            ],
          },
          {
            name: "Round 2 - Hard Mode",
            details:
              "The difficulty ramps up with more abstract or complex concepts (e.g., 'Blockchain', 'Machine Learning', 'API'). The rules are the same, but the challenge is greater.",
            rules: [
              "Time limit per team: 120 seconds.",
              "Words in this round are worth double the points.",
              "Top 3 teams with the highest cumulative score win.",
            ],
            tieBreaker:
              "A final, single-word act-off between the tied teams. The team that guesses the word fastest wins.",
          },
        ],
      },
    ],
  },
  "chem": {
    technical: [
      {
        name: "Bug Bounty Blitz",
        domain: "Cybersecurity",
        catchphrase: "Find the bug, claim the glory. Happy hunting!",
        teamSize: "2-3",
        heads: [
          { name: "Karan", contact: "9988776655" },
          { name: "Anjali", contact: "8877665544" },
        ],
        description:
          "A competitive event where teams are given a vulnerable web application. Their mission is to find and exploit as many security flaws as possible within the time limit. Points are awarded based on the severity of the bugs found.",
        rounds: [
          {
            name: "Round 1 - The Hunt",
            details:
              "All teams will be given access to the same web application hosted on a local server. They will have a set amount of time to perform reconnaissance and find vulnerabilities ranging from XSS and SQL Injection to broken authentication.",
            rules: [
              "No DDoS or brute-force attacks on the server infrastructure are allowed.",
              "Teams must document their findings with proof-of-concept screenshots or scripts.",
              "Points are awarded for each unique, validated vulnerability.",
              "Time Limit: 3 hours.",
            ],
            tieBreaker:
              "The team that finds and reports the highest-severity bug first wins the tie.",
          },
        ],
      },
    ],
    nonTechnical: [
      {
        name: "Tech Charades",
        domain: "General Tech Knowledge",
        catchphrase: "Act it out, guess the tech. No talking!",
        teamSize: "3-4",
        heads: [
          { name: "Vikram", contact: "7766554433" },
          { name: "Meera", contact: "6655443322" },
        ],
        description:
          "A fun and frantic non-technical event where teams guess technology-related words, concepts, and company names acted out by their teammates. A test of communication and tech-savviness!",
        rounds: [
          {
            name: "Round 1 - Easy Mode",
            details:
              "Teams will act out and guess common tech terms and company names (e.g., 'Google', 'CPU', 'Bluetooth'). Each team gets 90 seconds to guess as many words as possible.",
            rules: [
              "The actor cannot speak or make any sounds.",
              "The actor cannot draw letters in the air.",
              "A pass is allowed, but the word may reappear.",
              "Scores from this round carry over.",
            ],
          },
          {
            name: "Round 2 - Hard Mode",
            details:
              "The difficulty ramps up with more abstract or complex concepts (e.g., 'Blockchain', 'Machine Learning', 'API'). The rules are the same, but the challenge is greater.",
            rules: [
              "Time limit per team: 120 seconds.",
              "Words in this round are worth double the points.",
              "Top 3 teams with the highest cumulative score win.",
            ],
            tieBreaker:
              "A final, single-word act-off between the tied teams. The team that guesses the word fastest wins.",
          },
        ],
      },
    ],
  },
  "civil": {
    technical: [
      {
        name: "Bug Bounty Blitz",
        domain: "Cybersecurity",
        catchphrase: "Find the bug, claim the glory. Happy hunting!",
        teamSize: "2-3",
        heads: [
          { name: "Karan", contact: "9988776655" },
          { name: "Anjali", contact: "8877665544" },
        ],
        description:
          "A competitive event where teams are given a vulnerable web application. Their mission is to find and exploit as many security flaws as possible within the time limit. Points are awarded based on the severity of the bugs found.",
        rounds: [
          {
            name: "Round 1 - The Hunt",
            details:
              "All teams will be given access to the same web application hosted on a local server. They will have a set amount of time to perform reconnaissance and find vulnerabilities ranging from XSS and SQL Injection to broken authentication.",
            rules: [
              "No DDoS or brute-force attacks on the server infrastructure are allowed.",
              "Teams must document their findings with proof-of-concept screenshots or scripts.",
              "Points are awarded for each unique, validated vulnerability.",
              "Time Limit: 3 hours.",
            ],
            tieBreaker:
              "The team that finds and reports the highest-severity bug first wins the tie.",
          },
        ],
      },
    ],
    nonTechnical: [
      {
        name: "Tech Charades",
        domain: "General Tech Knowledge",
        catchphrase: "Act it out, guess the tech. No talking!",
        teamSize: "3-4",
        heads: [
          { name: "Vikram", contact: "7766554433" },
          { name: "Meera", contact: "6655443322" },
        ],
        description:
          "A fun and frantic non-technical event where teams guess technology-related words, concepts, and company names acted out by their teammates. A test of communication and tech-savviness!",
        rounds: [
          {
            name: "Round 1 - Easy Mode",
            details:
              "Teams will act out and guess common tech terms and company names (e.g., 'Google', 'CPU', 'Bluetooth'). Each team gets 90 seconds to guess as many words as possible.",
            rules: [
              "The actor cannot speak or make any sounds.",
              "The actor cannot draw letters in the air.",
              "A pass is allowed, but the word may reappear.",
              "Scores from this round carry over.",
            ],
          },
          {
            name: "Round 2 - Hard Mode",
            details:
              "The difficulty ramps up with more abstract or complex concepts (e.g., 'Blockchain', 'Machine Learning', 'API'). The rules are the same, but the challenge is greater.",
            rules: [
              "Time limit per team: 120 seconds.",
              "Words in this round are worth double the points.",
              "Top 3 teams with the highest cumulative score win.",
            ],
            tieBreaker:
              "A final, single-word act-off between the tied teams. The team that guesses the word fastest wins.",
          },
        ],
      },
    ],
  },
  "mech": {
    technical: [
      {
        name: "Bug Bounty Blitz",
        domain: "Cybersecurity",
        catchphrase: "Find the bug, claim the glory. Happy hunting!",
        teamSize: "2-3",
        heads: [
          { name: "Karan", contact: "9988776655" },
          { name: "Anjali", contact: "8877665544" },
        ],
        description:
          "A competitive event where teams are given a vulnerable web application. Their mission is to find and exploit as many security flaws as possible within the time limit. Points are awarded based on the severity of the bugs found.",
        rounds: [
          {
            name: "Round 1 - The Hunt",
            details:
              "All teams will be given access to the same web application hosted on a local server. They will have a set amount of time to perform reconnaissance and find vulnerabilities ranging from XSS and SQL Injection to broken authentication.",
            rules: [
              "No DDoS or brute-force attacks on the server infrastructure are allowed.",
              "Teams must document their findings with proof-of-concept screenshots or scripts.",
              "Points are awarded for each unique, validated vulnerability.",
              "Time Limit: 3 hours.",
            ],
            tieBreaker:
              "The team that finds and reports the highest-severity bug first wins the tie.",
          },
        ],
      },
    ],
    nonTechnical: [
      {
        name: "Tech Charades",
        domain: "General Tech Knowledge",
        catchphrase: "Act it out, guess the tech. No talking!",
        teamSize: "3-4",
        heads: [
          { name: "Vikram", contact: "7766554433" },
          { name: "Meera", contact: "6655443322" },
        ],
        description:
          "A fun and frantic non-technical event where teams guess technology-related words, concepts, and company names acted out by their teammates. A test of communication and tech-savviness!",
        rounds: [
          {
            name: "Round 1 - Easy Mode",
            details:
              "Teams will act out and guess common tech terms and company names (e.g., 'Google', 'CPU', 'Bluetooth'). Each team gets 90 seconds to guess as many words as possible.",
            rules: [
              "The actor cannot speak or make any sounds.",
              "The actor cannot draw letters in the air.",
              "A pass is allowed, but the word may reappear.",
              "Scores from this round carry over.",
            ],
          },
          {
            name: "Round 2 - Hard Mode",
            details:
              "The difficulty ramps up with more abstract or complex concepts (e.g., 'Blockchain', 'Machine Learning', 'API'). The rules are the same, but the challenge is greater.",
            rules: [
              "Time limit per team: 120 seconds.",
              "Words in this round are worth double the points.",
              "Top 3 teams with the highest cumulative score win.",
            ],
            tieBreaker:
              "A final, single-word act-off between the tied teams. The team that guesses the word fastest wins.",
          },
        ],
      },
    ],
  },
};
