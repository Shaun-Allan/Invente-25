// app/hackathons/page.tsx
"use client";
import { div } from "framer-motion/client";
import { url } from "inspector";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const HackathonsPage = () => {
  const [showHackinfinity, setShowHackinfinity] = useState(false);
  const [showImpact, setShowImpact] = useState(false);
  return (
    <main
      className="flex min-h-screen flex-col items-center bg-page-bg bg-cover bg-center p-8 md:p-24"
      style={{ backgroundImage: "url('/hackathons/bg.jpeg')" }}
    >
      <div className="flex w-full max-w-5xl flex-col items-center">
        <section className="mb-16 flex w-full flex-col items-center">
          <h1 className="mb-8 font-playfair text-4xl font-bold tracking-[0.2em] text-[#3A2419] md:text-5xl">
            HACKATHONS
          </h1>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            <div
              onClick={() => setShowHackinfinity(true)}
              className="group cursor-pointer"
            >
              <div
                className="relative flex h-64 items-center justify-center border-4 border-black bg-hackinfinity-bg bg-cover bg-center p-4 text-center text-white transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: "url('/hackathons/div1.jpeg')" }}
              >
                <div className="absolute inset-0 bg-black/70 z-0"></div>
                <h2 className="text-3xl font-bold z-10">HACKINFINITY</h2>
              </div>
            </div>
            <div
              onClick={() => setShowImpact(true)}
              className="group cursor-pointer"
            >
              <div
                className=" relative flex h-64 items-center justify-center border-4 border-black bg-impact-arcade-bg bg-cover bg-center p-4 text-center text-white transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: "url('/hackathons/div2.jpeg')" }}
              >
                <div className="absolute inset-0 bg-black/70 z-0"></div>
                <h2 className="text-3xl font-bold z-10">
                  IMPACT ARCADE (GAMEJAM) 24HR HACKATHON
                </h2>
              </div>
            </div>
          </div>
        </section>

        {showHackinfinity && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <div
              className="p-10 border-2 border-black rounded-xl w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto relative "
              style={{ backgroundImage: "url('/hackathons/bg.jpeg')" }}
            >
              <button
                onClick={() => setShowHackinfinity(false)}
                className="absolute top-2 right-2 text-black "
              >
                ✕
              </button>
              <h2 className="font-bold text-4xl mb-9 text-[#3a1f1f] text-center">
                HACKINFINITY
              </h2>
              <ul className="flex justify-center space-x-10 mb-1.5 list-none text-center font-bold text-[19px]">
                <li>
                  ₹12000<br></br>Winner
                </li>
                <li>
                  ₹8000<br></br>Runner
                </li>
                <li>
                  ₹5000<br></br>2nd Runner
                </li>
                <li>
                  TBD<br></br>Date
                </li>
                <li>
                  TBD<br></br>Location
                </li>
              </ul>
              <p>
                The flagship event of the Invente, emerges as a celebration of
                ingenuity, collaboration, and relentless passion for
                problem-solving. Problem statements are chosen in the fields of
                Healthcare, Renewable Energy, Fintech, Sustainability, Smart
                cities, supply chain and logistics, Agritech, Education and
                Tourism. It's not just another hackathon, it is a whirlwind of
                imagination and coding prowess that unfolds over the course of
                24 hours where aspiring developers, designers, and creators
                converge to transform their ideas into reality.
              </p>
              <p>General instructions:</p>
              <ul className="list-decimal">
                <li>
                  {" "}
                  All the team members must have proper internet connection.
                </li>
                <li>
                  Participants are required to have their own components and
                  software in order to implement their solution (including
                  extension boxes).
                </li>
                <li>Each team will be allocated separate mentors.</li>
                <li>Mentorship for technical skills will be provided.</li>
                <li>
                  Participants are supposed to build their product/solution
                  during the Hackathon.
                </li>
                <li>
                  Participants are allowed to use existing libraries or
                  components, however only the work done during the 24 hrs will
                  be considered for evaluation.
                </li>
                <li>
                  Solutions/products can be a mix of hardware and software
                  technologies, but can be purely software or hardware based as
                  well.
                </li>
                <li>
                  Participants will be informed of the order in which reviews
                  will happen and must attend their meetings at the specified
                  times.
                </li>
                <li>
                  Solutions/products will be judged based on Innovation, Impact,
                  Feasibility and Marketability.
                </li>
                <li>
                  Organizers will be available for any further help/queries.
                </li>
              </ul>
              <div
                className="w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('/hackathons/paperbg1.png')" }}
              >
                <div className="p-6 max-w-xl text-center">
                  <h2 className="text-3xl font-bold mb-4">
                    Domains for Problem Statement
                  </h2>
                  <ul className="list-decimal list-inside space-y-1 font-medium text-black text-left text-2xl">
                    <li>Healthcare technologies.</li>
                    <li>Fintech.</li>
                    <li>Renewable energy and sustainability.</li>
                    <li>Smart cities and infrastructure.</li>
                    <li>Education technology.</li>
                    <li>Agritech.</li>
                    <li>Supply chain and logistics.</li>
                    <li>Student innovation (open idea)</li>
                  </ul>
                </div>
              </div>
              <div
                className="w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('/hackathons/paperbg1.png')" }}
              >
                <div className="p-8 max-w-xl w-full text-left text-black">
                  <h2 className="text-4xl font-bold mb-3 text-center">
                    Schedule
                  </h2>

                  <h3 className="font-bold mt-4 text-2xl mb-1">Day 1:</h3>
                  <ul className="list-none list-inside space-y-1 text-1xl">
                    <li>10.30 AM – Introduction.</li>
                    <li>11.00 AM – Hackathon begins.</li>
                    <li>03.00 PM – First Review.</li>
                    <li>09.00 PM – Second Review.</li>
                  </ul>

                  <h3 className="font-bold mt-6 text-2xl mb-1">Day 2:</h3>
                  <ul className="list-none list-inside space-y-1">
                    <li>08.00 AM – Third Review.</li>
                    <li>11.00 AM – Hackathon ends.</li>
                    <li>12.00 PM – Final Presentation.</li>
                    <li>03.30 PM – Valedictory.</li>
                  </ul>
                </div>
              </div>

              <div
                className="w-full max-w-4xl mx-auto bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-12 py-16"
                style={{ backgroundImage: "url('/hackathons/paperbg2.png')" }}
              >
                <div className="w-[100%] md:w-[80%] text-center">
                  <h2 className="text-3xl font-bold mb-3">First Review</h2>
                  <ol className="list-decimal list-inside space-y-2 text-left text-lg">
                    <li>
                      Teams are expected to explain their problem statement,
                      background study done and the workflow of their solution.
                    </li>
                    <li>
                      Teams will be judged on the novelty of their problem
                      statement and the clarity in their approach moving
                      forward.
                    </li>
                    <li>Advice on how to proceed further will be provided.</li>
                  </ol>
                </div>
              </div>
              <div
                className="w-full max-w-4xl mx-auto bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-12 py-16"
                style={{ backgroundImage: "url('/hackathons/paperbg2.png')" }}
              >
                <div className="w-[100%] md:w-[80%] text-center">
                  <h2 className="text-3xl font-bold mb-5">Second Review</h2>
                  <ol className="list-decimal list-inside space-y-4 text-left text-lg">
                    <li>
                      This review is a checkpoint to track the team’s progress.
                    </li>
                    <li>
                      The reviewers will give their input and their thoughts on
                      the team’s solution and changes if there any are
                      warranted.
                    </li>
                  </ol>
                </div>
              </div>
              <div
                className="w-full max-w-4xl mx-auto bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-12 py-16"
                style={{ backgroundImage: "url('/hackathons/paperbg2.png')" }}
              >
                <div className="w-[100%] md:w-[80%] text-center">
                  <h2 className="text-3xl font-bold mb-5">Third Review</h2>
                  <ol className="list-decimal list-inside space-y-4 text-left text-lg">
                    <li>
                      Teams are expected to implement the changes given in the
                      previous review by the reviewers.
                    </li>
                    <li>
                      In this round, the teams are reviewed based on their
                      progress in accordance with their proposed workflow and
                      closeness to completion of the project.
                    </li>
                  </ol>
                </div>
              </div>
              <div
                className="w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('/hackathons/paperbg1.png')" }}
              >
                <div className="p-8 max-w-xl w-full text-left text-black">
                  <h2 className="text-4xl font-bold mb-9 text-center">
                    Final presentation
                  </h2>
                  <ul className="list-decimal list-inside space-y-1 text-1xl">
                    <li>
                      In this round, teams will be evaluated based on
                      presentation skills, ability to explain their idea in a
                      lucid manner and the degree of innovation in their
                      solution.
                    </li>
                    <li>
                      Teams which address the marketability of their product
                      will be awarded additional points. The hackathon will
                      follow a leaderboard system. The final score will be the
                      cumulative points gained by the team over the three
                      reviews and final presentation. The team with the highest
                      score will be announced the winner of the hackathon.
                      Decisions taken by the review panel will be final in all
                      regards.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full text-center">
                <h2 className="text-2xl font-bold mb-6">Coordinators</h2>

                <div className="flex flex-wrap justify-center gap-8">
                  <div className="bg-[#3a1f1f] text-white px-6 py-4 rounded-2xl shadow-lg w-60">
                    <h3 className="text-lg font-semibold">Sanjay B</h3>
                    <p className="text-sm">+91 73058 34440</p>
                  </div>

                  <div className="bg-[#3a1f1f] text-white px-6 py-4 rounded-2xl shadow-lg w-60">
                    <h3 className="text-lg font-semibold">Sanjay B</h3>
                    <p className="text-sm">+91 73058 34440</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showImpact && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <div
              className="p-10 border-2 border-black rounded-xl w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto relative "
              style={{ backgroundImage: "url('/hackathons/bg.jpeg')" }}
            >
              <button
                onClick={() => setShowImpact(false)}
                className="absolute top-2 right-2 text-black "
              >
                ✕
              </button>
              <h2 className="font-bold text-4xl mb-9 text-[#3a1f1f] text-center">
                Impact Arcade(Game jam) 24Hr Hackathon
              </h2>
              <ul className="flex justify-center space-x-10 mb-5 list-none text-center font-bold text-[19px]">
                <li>
                  ₹8000<br></br>Winner
                </li>
                <li>
                  ₹4000<br></br>Runner
                </li>
                <li>
                  None<br></br>2nd Runner
                </li>
                <li>
                  TBD<br></br>Date
                </li>
                <li>
                  TBD<br></br>Location
                </li>
              </ul>
              <p className="mb-5 text-[17px]">
                Game Jam is an intense 24-hour game development competition
                where teams are tasked with creating engaging and thoughtful
                games based on the theme that will be announced on the day of
                the competition. This theme will be related to the United
                Nations Sustainable Development Goals (SDGs), ensuring the games
                focus on relevant global issues.
              </p>
              <div
                className="w-full max-w-2xl mx-auto bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-12 py-16 mb-6"
                style={{ backgroundImage: "url('/hackathons/paperbg3.png')" }}
              >
                <div className="w-[100%] md:w-[80%] text-center">
                  <h2 className="text-3xl font-bold mb-5">Team Composition</h2>

                  <ol className="list-decimal list-inside space-y-4 text-left text-lg">
                    <li>
                      Each team can consist of a maximum of 2 players.
                      Individual participants are also allowed to compete solo.
                    </li>
                  </ol>
                </div>
              </div>
              <div
                className="w-full max-w-2xl mx-auto bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-12 py-16 mb-6"
                style={{ backgroundImage: "url('/hackathons/paperbg3.png')" }}
              >
                <div className="w-[100%] md:w-[80%] text-center">
                  <h2 className="text-3xl font-bold mb-5">time Limit</h2>

                  <ol className="list-decimal list-inside space-y-4 text-left text-lg">
                    <li>
                      The competition runs for 24 hours, starting from the
                      official theme announcement.
                    </li>
                  </ol>
                </div>
              </div>
              <div
                className="w-full max-w-2xl mx-auto bg-no-repeat bg-cover bg-center flex flex-col mb-6 items-center justify-center px-12 py-16"
                style={{ backgroundImage: "url('/hackathons/paperbg3.png')" }}
              >
                <div className="w-[100%] md:w-[80%] text-center">
                  <h2 className="text-3xl font-bold mb-5">Judging Criteria</h2>

                  <ol className="list-decimal list-inside space-y-4 text-left text-lg">
                    <li>
                      Games will be judged based on creativity, gameplay,
                      adherence to the theme, and technical execution.
                    </li>
                  </ol>
                </div>
              </div>
              <div
                className="w-full max-w-2xl mx-auto bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-12 py-16"
                style={{ backgroundImage: "url('/hackathons/paperbg3.png')" }}
              >
                <div className="w-[100%] md:w-[80%] text-center">
                  <h2 className="text-3xl font-bold mb-5">Mentor Feedback</h2>

                  <ol className="list-decimal list-inside space-y-4 text-left text-lg">
                    <li>
                      Teams can earn additional points by incorporating feedback
                      from mentors after the first 12 hours of the competition.
                    </li>
                  </ol>
                </div>
              </div>
              <div
                className="w-full max-w-2xl mx-auto bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-12 py-16"
                style={{ backgroundImage: "url('/hackathons/paperbg3.png')" }}
              >
                <div className="w-[100%] md:w-[80%] text-center">
                  <h2 className="text-3xl font-bold mb-5">Original Work</h2>

                  <ol className="list-decimal list-inside space-y-4 text-left text-lg">
                    <li>
                      All content, including code, art, and audio, must be
                      created during the Game Jam. Pre-existing assets are not
                      allowed, except for fonts and publicly available
                      libraries/frameworks.
                    </li>
                  </ol>
                </div>
              </div>
              <div
                className="w-full max-w-2xl mx-auto bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-12 py-16"
                style={{ backgroundImage: "url('/hackathons/paperbg3.png')" }}
              >
                <div className="w-[100%] md:w-[80%] text-center">
                  <h2 className="text-3xl font-bold mb-5">Use of Tools</h2>

                  <ol className="list-decimal list-inside space-y-4 text-left text-lg">
                    <li>
                      Participants are free to use any game development tools,
                      engines, or frameworks of their choice, as long as they
                      adhere to the competition’s theme and time constraints.
                    </li>
                  </ol>
                </div>
              </div>
              <div
                className="w-full max-w-2xl mx-auto bg-no-repeat bg-cover bg-center mb-6 flex flex-col items-center justify-center px-12 py-16"
                style={{ backgroundImage: "url('/hackathons/paperbg3.png')" }}
              >
                <div className="w-[100%] md:w-[80%] text-center">
                  <h2 className="text-3xl font-bold mb-5">Theme Adherence</h2>

                  <ol className="list-decimal list-inside space-y-4 text-left text-lg">
                    <li>
                      Games must clearly reflect the given theme, related to the
                      United Nations SDGs. Creativity in interpreting and
                      integrating the theme is encouraged.
                    </li>
                  </ol>
                </div>
              </div>
              <div
                className="w-full max-w-2xl mx-auto bg-no-repeat bg-cover bg-center mb-6 flex flex-col items-center justify-center px-12 py-16"
                style={{ backgroundImage: "url('/hackathons/paperbg3.png')" }}
              >
                <div className="w-[100%] md:w-[80%] text-center">
                  <h2 className="text-3xl font-bold mb-5">Submission</h2>

                  <ol className="list-decimal list-inside space-y-4 text-left text-lg">
                    <li>
                      Games must be submitted before the 24-hour deadline. Late
                      submissions will not be accepted.
                    </li>
                  </ol>
                </div>
              </div>
              <div
                className="w-full max-w-2xl mx-auto bg-no-repeat bg-cover bg-center mb-6 flex flex-col items-center justify-center px-12 py-16"
                style={{ backgroundImage: "url('/hackathons/paperbg3.png')" }}
              >
                <div className="w-[100%] md:w-[80%] text-center">
                  <h2 className="text-3xl font-bold mb-5">Platforms</h2>

                  <ol className="list-decimal list-inside space-y-4 text-left text-lg">
                    <li>
                      The game must be playable on at least one of the following
                      platforms: Windows, macOS, Linux, or a web browser.
                    </li>
                  </ol>
                </div>
              </div>
              <div
                className="w-full max-w-2xl mx-auto bg-no-repeat bg-cover bg-center mb-6 flex flex-col items-center justify-center px-12 py-16"
                style={{ backgroundImage: "url('/hackathons/paperbg3.png')" }}
              >
                <div className="w-[100%] md:w-[80%] text-center">
                  <h2 className="text-3xl font-bold mb-5">Code Submission</h2>

                  <ol className="list-decimal list-inside space-y-4 text-left text-lg">
                    <li>
                      The full source code must be submitted alongside the game,
                      with clear instructions on how to run the game.
                    </li>
                  </ol>
                </div>
              </div>
              <div className="w-full text-center">
                <h2 className="text-2xl font-bold mb-6">Coordinators</h2>

                <div className="flex flex-wrap justify-center gap-8">
                  <div className="bg-[#3a1f1f] text-white px-6 py-4 rounded-2xl shadow-lg w-60">
                    <h3 className="text-lg font-semibold">Karunya Harikrishnan</h3>
                    <p className="text-sm">+91 73058 34440</p>
                  </div>

                  <div className="bg-[#3a1f1f] text-white px-6 py-4 rounded-2xl shadow-lg w-60">
                    <h3 className="text-lg font-semibold">Saanjith Reddy</h3>
                    <p className="text-sm">+91 73058 34440</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Workshops Section */}
        <section className="flex w-full flex-col items-center">
          <h1 className="mb-8 font-playfair text-4xl font-bold tracking-[0.2em] text-[#3A2419] md:text-5xl">
            WORKSHOPS
          </h1>
          <div className="flex w-full max-w-lg items-center justify-center bg-[#422018] py-5 px-10 text-center">
            <p className="text-2xl font-semibold tracking-[0.2em] text-white">
              COMING SOON...
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HackathonsPage;
