// app/hackathons/page.tsx
"use client";
import Image from "next/image";
import React, { useState } from "react";

const HackathonsPage = () => {
  const [showHackinfinity, setShowHackinfinity] = useState(false);
  const [showImpact, setShowImpact] = useState(false);

  return (
    <main
      className="relative flex min-h-screen flex-col items-center overflow-hidden bg-cover bg-center p-8 text-white"
      style={{ backgroundImage: "url('/hackathons/bg.png')" }}
    >
      {/* Background clock overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src="/hackathons/clock.jpg"
          layout="fill"
          objectFit="cover"
          alt="Clock background"
          className="opacity-20"
        />
      </div>

      {/* NEW: Black overlay for reducing background opacity */}
      <div className="absolute inset-0 z-5 bg-black/50"></div>

      {/* Main content wrapper */}
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">
        {/* Hackathons Title Image */}
        <div className="mt-16 mb-12">
          <Image
            src="/hackathons/Hackathons.png"
            width={600}
            height={100}
            alt="Hackathons Title"
            className="h-auto w-full max-w-[400px] sm:max-w-[500px]"
          />
        </div>

        {/* Flex container for the two separate boxes */}
        <div className="flex w-full flex-col gap-8 md:flex-row">
          {/* Box 1: HACKINFINITY */}
          <div
            className="flex flex-1 items-center justify-center border-2 border-purple-500 bg-black/60 p-8 backdrop-blur-sm sm:p-12 cursor-pointer"
            onClick={() => setShowHackinfinity(true)}
          >
            <Image
              src="/hackathons/HACKINFINITY.png"
              width={400}
              height={100}
              alt="Hackinfinity"
              className="h-auto w-full max-w-[350px]"
            />
          </div>

          {/* Box 2: IMPACT ARCADE */}
          <div
            className="flex flex-1 items-center justify-center border-2 border-purple-500 bg-black/60 p-8 backdrop-blur-sm sm:p-12 cursor-pointer"
            onClick={() => setShowImpact(true)}
          >
            <Image
              src="/hackathons/IMPACT ARCADE (GAMEJAM) 24HR HACKATHON.png"
              width={400}
              height={150}
              alt="Impact Arcade (Gamejam) 24HR Hackathon"
              className="h-auto w-full max-w-[350px]"
            />
          </div>
        </div>

        {/* Workshops Title Image */}
        <div className="my-16">
          <Image
            src="/hackathons/WORKSHOPS.png"
            width={600}
            height={100}
            alt="Workshops Title"
            className="h-auto w-full max-w-[400px] sm:max-w-[500px]"
          />
        </div>

       
        <div className="border border-purple-500 bg-black/60 px-12 py-4 backdrop-blur-sm">
          <p className="text-xl font-semibold tracking-widest sm:text-2xl font-michroma text-center">
            Coming Soon..
          </p>
        </div>

        {showHackinfinity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
            <div
              className="relative w-11/12 max-w-3xl rounded-xl bg-violet p-8 text-center border border-black-500 
             max-h-[80vh] overflow-y-auto mt-26"
            >
              <button
                className="absolute right-4 top-4 text-white text-2xl hover:text-purple-400 cursor-pointer"
                onClick={() => setShowHackinfinity(false)}
              >
                ✕
              </button>
              <Image
              src="/hackathons/HACKINFINITY.png"
              width={400}
              height={100}
              alt="Hackinfinity"
              className="h-auto w-full max-w-[350px]"
            />
              <ul className="flex flex-wrap justify-center gap-7 list-none mt-9 bg-[#382361b3] rounded-2xl text-white text-[15px] p-3 font-michroma">
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
              <p className="text-justify mt-10 text-[17px]">
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
              <p className="text-left mt-10 text-[18px] font-bold">General Instructions: </p>
              <ul className="list-decimal text-left text-[17px]">
                <li>
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
              <div className="mt-10 rounded-xl bg-[#552da558] p-10 border border-black-500 ">
                <h3 className="text-white-400 font-bold text-xl mb-4 text-center font-michroma">
                  Domains for Problem Statement
                </h3>
                <ol className="list-decimal text-left space-y-2 text-[17px]">
                  <li>Healthcare technologies.</li>
                  <li>Fintech.</li>
                  <li>Renewable energy and sustainability.</li>
                  <li>Smart cities and infrastructure.</li>
                  <li>Education technology.</li>
                  <li>Agritech.</li>
                  <li>Supply chain and logistics.</li>
                  <li>Student innovation (open idea).</li>
                </ol>
              </div>
              <div className="mt-10 rounded-xl bg-[#552da558] p-10 border border-black-500 shadow-lg">
                <h3 className="text-white-400 font-bold text-xl mb-4 text-center font-michroma">
                  Schedule
                </h3>
                <p className="text-left text-[20px] font-bold">Day 1:</p>
                <ol className="list-none text-left space-y-2 text-[17px]">
                  <li>10.30 AM – Introduction.</li>
                  <li>11.00 AM – Hackathon begins.</li>
                  <li>03.00 PM – First Review.</li>
                  <li>9.00 PM – Second Review.</li>
                </ol>
                 <p  className="mt-4 text-left text-[20px] font-bold">Day 2:</p>
                <ol className="list-none text-left space-y-2 text-[17px]">
                 
                  <li>08.00 AM – Third Review.</li>
                  <li>11.00 AM – Hackathon ends.</li>
                  <li>12.00 PM – Final Presentation.</li>
                  <li>03.30 PM – Valedictory.</li>
                </ol>
              </div>
              <div className="mt-10 rounded-xl bg-[#552da558] p-10 border border-black-500 shadow-lg ">
                <h3 className="text-white-400 font-bold text-xl mb-4 text-center font-michroma">
                  First review 1
                </h3>
                <ol className="list-decimal text-left space-y-2 text-[17px]">
                  <li>
                    Teams are expected to explain their problem statement,
                    background study done and the workflow of their solution.
                  </li>
                  <li>
                    Teams will be judged on the novelty of their problem
                    statement and the clarity in their approach moving forward.
                  </li>
                  <li>Advice on how to proceed further will be provided.</li>
                </ol>
              </div>
              <div className="mt-10 rounded-xl bg-[#552da558] p-10 border border-black-500 shadow-lg">
                <h3 className="text-white-400 font-bold text-xl mb-4 text-center font-michroma">
                  Second Review
                </h3>
                <ol className="list-decimal text-left space-y-2 text-[17px]">
                  <li>
                    This review is a checkpoint to track the team’s progress.
                  </li>
                  <li>
                    The reviewers will give their input and their thoughts on
                    the team’s solution and changes if there any are warranted.
                  </li>
                </ol>
              </div>
              <div className="mt-10 rounded-xl bg-[#552da558] p-10 border border-black-500 shadow-lg">
                <h3 className="text-white-400 font-bold text-xl mb-4 text-center font-michroma">
                  Third review
                </h3>
                <ol className="list-decimal text-left space-y-2 text-[17px]">
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
              <div className="mt-10 rounded-xl bg-[#552da558] p-10 border border-black-500 shadow-lg">
                <h3 className="text-white-400 font-bold text-xl mb-4 text-center font-michroma">
                  Final Presentation
                </h3>
                <ol className="list-decimal text-left space-y-2 text-[17px]">
                  <li>
                    In this round, teams will be evaluated based on presentation
                    skills, ability to explain their idea in a lucid manner and
                    the degree of innovation in their solution.
                  </li>
                  <li>
                    Teams which address the marketability of their product will
                    be awarded additional points. The hackathon will follow a
                    leaderboard system. The final score will be the cumulative
                    points gained by the team over the three reviews and final
                    presentation. The team with the highest score will be
                    announced the winner of the hackathon. Decisions taken by
                    the review panel will be final in all regards.
                  </li>
                </ol>
              </div>
              <h3 className="text-center text-2xl font-bold mb-6 mt-7 font-michroma">
                Coordinators
              </h3>

              <div className="flex flex-wrap justify-center gap-6">
                <div className="bg-black text-white rounded-xl px-8 py-4 text-center shadow-lg">
                  <p className="font-semibold">Sanjay B</p>
                  <p className="text-gray-300">+91 73058 34440</p>
                </div>

                <div className="bg-black text-white rounded-xl px-8 py-4 text-center shadow-lg">
                  <p className="font-semibold">Nadhim</p>
                  <p className="text-gray-300">+91 73054 21618</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {showImpact && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
    <div
      className="relative w-11/12 max-w-3xl rounded-xl bg-violet p-8 text-center border border-black-500 
     max-h-[80vh] overflow-y-auto mt-26"
    >
      <button
        className="absolute right-4 top-4 text-white text-2xl hover:text-purple-400 cursor-pointer"
        onClick={() => setShowImpact(false)}
      >
        ✕
      </button>
      <Image
              src="/hackathons/IMPACT ARCADE (GAMEJAM) 24HR HACKATHON.png"
              width={400}
              height={150}
              alt="Impact Arcade (Gamejam) 24HR Hackathon"
              className="h-auto w-full max-w-[350px]"
            />

     
      <ul className="flex flex-wrap justify-center gap-7 list-none mt-9 bg-[#382361b3] rounded-2xl text-white text-[15px] p-3 font-michroma">
        <li>₹8000<br />Winner</li>
        <li>₹4000<br />Runner</li>
        <li>None<br />2nd Runner</li>
        <li>TBD<br />Date</li>
        <li>TBD<br />Location</li>
      </ul>

    
      <p className="text-justify mt-10 font-[17px]">
        Game Jam is an intense 24-hour game development competition
        where teams are tasked with creating engaging and thoughtful
        games based on the theme that will be announced on the day of
        the competition. This theme will be related to the United
        Nations Sustainable Development Goals (SDGs), ensuring the games
        focus on relevant global issues.
      </p>

    
      <div className="mt-10 rounded-xl bg-[#552da558] p-10 border border-black-500 shadow-lg">
        <h3 className="text-white-400 font-bold text-xl mb-4 text-center font-michroma">
          Team Composition
        </h3>
        <ol className="list-none text-left space-y-2 text-[17px]">
          <li>
            Each team can consist of a maximum of 2 players. Individual
            participants are also allowed to compete solo.
          </li>
        </ol>
      </div>
              <div className="mt-10 rounded-xl bg-[#552da558] p-10 border border-black-500 shadow-lg">
                <h3 className="text-white-400 font-bold text-xl mb-4 text-center font-michroma">
                  Time Limit
                </h3>
                <ol className="list-none text-left space-y-2 text-[17px]">
                  <li>
                    The competition runs for 24 hours, starting from the
                    official theme announcement.
                  </li>
                </ol>
              </div>
              <div className="mt-10 rounded-xl bg-[#552da558] p-10 border border-black-500 shadow-lg">
                <h3 className="text-white-400 font-bold text-xl mb-4 text-center font-michroma">
                  Judging Criteria
                </h3>
                <ol className="list-none text-left space-y-2 text-[17px]">
                  <li>
                    Games will be judged based on creativity, gameplay,
                    adherence to the theme, and technical execution.
                  </li>
                </ol>
              </div>
              <div className="mt-10 rounded-xl bg-[#552da558] p-10 border border-black-500 shadow-lg">
                <h3 className="text-white-400 font-bold text-xl mb-4 text-center font-michroma">
                  Mentor Feedback
                </h3>
                <ol className="list-none text-left space-y-2 text-[17px]">
                  <li>
                    Teams can earn additional points by incorporating feedback
                    from mentors after the first 12 hours of the competition.
                  </li>
                </ol>
              </div>
              <div className="mt-10 rounded-xl bg-[#552da558] p-10 border border-black-500 shadow-lg">
                <h3 className="text-white-400 font-bold text-xl mb-4 text-center font-michroma">
                  Original Work
                </h3>
                <ol className="list-none text-left space-y-2 text-[17px]">
                  <li>
                    All content, including code, art, and audio, must be created
                    during the Game Jam. Pre-existing assets are not allowed,
                    except for fonts and publicly available
                    libraries/frameworks.
                  </li>
                </ol>
              </div>
              <div className="mt-10 rounded-xl bg-[#552da558] p-10 border border-black-500 shadow-lg">
                <h3 className="text-white-400 font-bold text-xl mb-4 text-center font-michroma">
                  Use of Tools
                </h3>
                <ol className="list-none text-left space-y-2 text-[17px]">
                  <li>
                    Participants are free to use any game development tools,
                    engines, or frameworks of their choice, as long as they
                    adhere to the competition’s theme and time constraints.
                  </li>
                </ol>
              </div>
              <div className="mt-10 rounded-xl bg-[#552da558] p-10 border border-black-500 shadow-lg">
                <h3 className="text-white-400 font-bold text-xl mb-4 text-center font-michroma">
                  Theme Adherence
                </h3>
                <ol className="list-none text-left space-y-2 text-[17px]">
                  <li>
                    Games must clearly reflect the given theme, related to the
                    United Nations SDGs. Creativity in interpreting and
                    integrating the theme is encouraged.
                  </li>
                </ol>
              </div>
              <div className="mt-10 rounded-xl bg-[#552da558] p-10 border border-black-500 shadow-lg">
                <h3 className="text-white-400 font-bold text-xl mb-4 text-center font-michroma">
                  Submission
                </h3>
                <ol className="list-none text-left space-y-2 text-[17px]">
                  <li>
                    Games must be submitted before the 24-hour deadline. Late
                    submissions will not be accepted.
                  </li>
                </ol>
              </div>
              
      <div className="mt-10 rounded-xl bg-[#552da558] p-10 border border-black-500 shadow-lg">
        <h3 className="text-white-400 font-bold text-xl mb-4 text-center font-michroma">
          Platforms
        </h3>
        <ol className="list-none text-left space-y-2 text-[17px]">
          <li>
            The game must be playable on at least one of the following
            platforms: Windows, macOS, Linux, or a web browser.
          </li>
        </ol>
      </div>

    
      <div className="mt-10 rounded-xl bg-[#552da558] p-10 border border-black-500 shadow-lg">
        <h3 className="text-white-400 font-bold text-xl mb-4 text-center font-michroma">
          Code Submission
        </h3>
        <ol className="list-none text-left space-y-2 text-[17px]">
          <li>
            The full source code must be submitted alongside the game,
            with clear instructions on how to run the game.
          </li>
        </ol>
      </div>

     
      <h3 className="text-center text-2xl font-bold mb-6 mt-10 font-michroma">
        Coordinators
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-black text-white rounded-xl px-8 py-4 text-center shadow-lg">
          <p className="font-semibold">Sanjay B</p>
          <p className="text-gray-300">+91 73058 34440</p>
        </div>
        <div className="bg-black text-white rounded-xl px-8 py-4 text-center shadow-lg">
          <p className="font-semibold">Nadhim</p>
          <p className="text-gray-300">+91 73054 21618</p>
        </div>
      </div>
    </div> 
  </div>
)}
      </div>
    </main>
  );
};

export default HackathonsPage;
