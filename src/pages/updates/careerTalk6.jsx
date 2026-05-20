import React from "react";

const CareerTalkSeries6 = () => {
  const registerLink =
    "https://forms.gle/BobQ7myxn1fCWLQs8";

  return (
     <div className="min-h-screen bg-blue-100 flex flex-col items-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Cover Photo */}
        <div className="w-full bg-blue-100 flex items-center justify-center">
          <img
            src="/assets/careerTalk/career6.jpg"
            alt="Career Talk Series Episode 6"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <h1 className="text-3xl font-bold text-center">
            CAREER TALK SERIES – EPISODE 6
          </h1>

          <p>
  <span className="font-bold text-xl text-blue-800">
    🌍 Dreaming of pursuing higher studies abroad?
  </span>

  <br /><br />

  <span className="font-bold text-xl text-blue-800">
    ✈️ Not sure where to start your global education journey?
  </span>

  <br /><br />
            Khulna University Career Club proudly presents{" "}
            <b>Career Talk Series – Episode 6</b>, an insightful session designed
            to guide students through international higher education
            opportunities, scholarship preparation, career planning, and more.
          </p>

          <p>
            This session will help participants understand the complete roadmap
            for studying abroad, including postgraduate and PhD opportunities,
            scholarship guidance, documentation preparation, and long-term
            career planning.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              🎯 Session Title
            </h2>
            <p>
              <b>Beyond Borders: Your Global Education Roadmap </b>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              🎤 Speaker
            </h2>
            <p>
              <b>Mashfi Rahman</b>
              <br />
              CEO, Ready to Study
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              🌍 What the Session Will Cover
            </h2>

            <ul className="list-disc pl-6 space-y-1">
              <li>Higher study opportunities abroad</li>
              <li>Postgraduate and PhD program options</li>
              <li>Scholarship and admission guidance</li>
              <li>Application and documentation preparation</li>
              <li>Academic profile development</li>
              <li>Permanent Residency (PR) pathways</li>
              <li>Career planning for global education</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              🌐 Countries & Opportunities
            </h2>

            <p>
              Whether you are planning to study in Australia, New Zealand,
              Malaysia, or exploring postgraduate and PhD opportunities, this
              session will help you make informed decisions for your academic
              and professional future.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              📅 Event Details
            </h2>

            <ul className="list-disc pl-6 space-y-1">
              <li>
                <b>Date:</b> 23 May 2026
              </li>
              <li>
                <b>Time:</b> 9:00 PM – 10:30 PM
              </li>
              <li>
                <b>Platform:</b> Google Meet
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              ⚠️ Important Note
            </h2>

            <p>
              Only registered participants will be able to attend the session.
              The Google Meet link will be shared with registered participants
              before the event.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              📌 Why You Should Join
            </h2>

            <ul className="list-disc pl-6 space-y-1">
              <li>Learn directly from an experienced expert</li>
              <li>Get practical scholarship guidance</li>
              <li>Understand admission requirements</li>
              <li>Explore global education opportunities</li>
              <li>Build a roadmap for your future career</li>
            </ul>
          </div>

          {/* Register Button */}
          <div className="flex justify-center pt-8 w-full">
            <a
              href={registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-96 text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:from-blue-600 hover:to-blue-800 transition transform hover:scale-105"
            >
              🚀 Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerTalkSeries6;