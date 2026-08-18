import React from "react";

const USGreenCardPathways = () => {
  const registerLink =
    "https://docs.google.com/forms/d/e/1FAIpQLScE3Mx3uRaqv9CiKNDseSwczfjiTe3r4O4628qvD2yftjPuGQ/viewform?usp=sharing&ouid=107926717468018894378";

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Cover Photo */}
        <div className="w-full bg-blue-100 flex items-center justify-center">
          <img
            src="/assets/usGreenCard/usGreenCard.jpeg"
            alt="Explore U.S. Green Card Pathways"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">

          {/* Title */}
          <h1 className="text-3xl font-bold text-center">
            EXPLORE U.S. GREEN CARD PATHWAYS
          </h1>

          <p className="text-center text-lg font-semibold text-blue-800">
            For University Graduates & Academic Professionals
          </p>

          {/* Organized By */}
          <div className="text-center">
            <p>
              <b>Organized by:</b> Khulna University Career Club
            </p>

            <p>
              <b>In collaboration with:</b> Raju Law
            </p>
          </div>

          {/* Introduction */}
          <p>
            Khulna University Career Club, in collaboration with{" "}
            <b>Raju Law</b>, is pleased to present an informative seminar
            designed to help students, researchers, academics, and professionals
            explore <b>U.S. career opportunities</b> and employment-based
            immigration pathways, including potential routes toward obtaining a{" "}
            <b>U.S. Green Card</b>.
          </p>

          <p>
            The session will provide practical insights into key
            employment-based immigration categories, including{" "}
            <b>EB-1</b>, <b>EB-2 NIW</b>, and <b>EB-3</b>, along with
            eligibility requirements, documentation, application procedures,
            and career-based immigration options.
          </p>

          {/* Why Should You Attend */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              🎯 Why Should You Attend?
            </h2>

            <ul className="list-disc pl-6 space-y-1">
              <li>
                Explore U.S. Green Card pathways for graduates, researchers,
                and professionals
              </li>

              <li>
                Understand employment-based immigration options such as{" "}
                <b>EB-1, EB-2 NIW, and EB-3</b>
              </li>

              <li>
                Learn about eligibility criteria, documentation, and
                application procedures
              </li>

              <li>
                Gain practical insights through real-world cases and legal
                perspectives
              </li>

              <li>
                Interact with U.S.-licensed immigration attorneys through an{" "}
                <b>Interactive Q&A Session</b>
              </li>

              <li>
                Explore potential U.S. career and research opportunities
              </li>
            </ul>
          </div>

          {/* Key Immigration Pathways */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              🇺🇸 Key Immigration Pathways
            </h2>

            <ul className="list-disc pl-6 space-y-1">
              <li>
                <b>EB-1:</b> Employment-based immigration pathway for
                individuals with extraordinary ability and outstanding
                achievements.
              </li>

              <li>
                <b>EB-2 NIW:</b> National Interest Waiver pathway for eligible
                professionals whose work may benefit the United States.
              </li>

              <li>
                <b>EB-3:</b> Employment-based immigration pathway for eligible
                skilled workers, professionals, and other workers.
              </li>
            </ul>
          </div>

          {/* What You Will Learn */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              📚 What You Will Learn
            </h2>

            <ul className="list-disc pl-6 space-y-1">
              <li>Eligibility requirements for different visa categories</li>
              <li>Required documentation and supporting evidence</li>
              <li>Employment-based immigration procedures</li>
              <li>Career and research opportunities in the United States</li>
              <li>Legal perspectives and real-world immigration cases</li>
              <li>Practical guidance from U.S.-licensed attorneys</li>
            </ul>
          </div>

          {/* Event Details */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              📅 Event Details
            </h2>

            <ul className="list-disc pl-6 space-y-1">
              <li>
                <b>Date:</b> 23 August 2026
              </li>

              <li>
                <b>Time:</b> 4:30 PM
              </li>

              <li>
                <b>Venue:</b> URP Lecture Theatre, Khulna University
              </li>
            </ul>
          </div>

          {/* Registration */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              📝 Registration
            </h2>

            <p>
              Register now to secure your spot and gain practical knowledge and
              informed perspectives on U.S. career pathways,
              employment-based immigration, and Green Card opportunities.
            </p>
          </div>

          

          {/* Register Button */}
          <div className="flex justify-center pt-6 w-full">
            <a
              href={registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-96 text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:from-blue-600 hover:to-blue-800 transition transform hover:scale-105"
            >
              🚀 Register Now
            </a>
          </div>
{/* Closing */}
          <p className="text-center font-medium text-gray-700 pt-2">
            Join us for an informative session designed to help you explore
            potential career opportunities, research pathways, and
            employment-based immigration options in the United States.
          </p>
        </div>
      </div>
    </div>
  );
};

export default USGreenCardPathways;