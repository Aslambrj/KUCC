// CollabAnnouncement.jsx
import React from "react";

const CollabAnnouncement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-red-500 to-green-500 flex flex-col items-center justify-center px-4 py-10 text-white">
      {/* Top Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2 tracking-wide drop-shadow-lg">
        KUCC × Shomvob
      </h2>

      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 drop-shadow-lg">
        𝐑𝐄𝐀𝐃𝐘 𝐓𝐎 𝐒𝐊𝐈𝐋𝐋 𝐔𝐏 𝐅𝐎𝐑 𝐓𝐇𝐄 𝐅𝐔𝐓𝐔𝐑𝐄?
      </h1>

      {/* Poster Card */}
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden w-full md:w-2/5 mb-8 transform transition duration-300 hover:scale-105">
        <img
          src="/assets/shomvob/poster.jpg"
          alt="KUCC × Shomvob Collaboration Poster"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-white leading-relaxed space-y-4 text-justify shadow-lg">
        <p>
          Your journey to becoming career-ready starts now with{" "}
          <strong>Khulna University Career Club × Shomvob Bangladesh</strong>,
          under the <strong>UNICEF-supported Passport to Earning (P2E)</strong>{" "}
          program.
        </p>

        <p>
          This initiative empowers KU students with free, globally recognized
          online courses designed to sharpen soft skills, enhance employability,
          and unlock international opportunities.
        </p>

        <h2 className="text-xl font-semibold mt-6 underline underline-offset-4">
          Why You Should Join:
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>💡 100% free courses curated by UNICEF and Shomvob</li>
          <li>🎓 Earn UNICEF-certified digital credentials upon completion</li>
          <li>🗣️ Build essential career and communication skills</li>
          <li>🌐 Connect with a nationwide network of ambitious learners</li>
          <li>
            💼 Internship opportunities available for 4th-year students upon
            completing the courses
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 underline underline-offset-4">
          How to Enroll:
        </h2>
        <p>
          Fill out the registration form below. Check your email for your course
          link and data submission form. And begin learning to grow
          professionally.
        </p>

        {/* Registration Button */}
        <div className="text-center mt-6">
          <a
            href="https://forms.gle/JQP1H8ipHSGnHD3N7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
          >
            Registration Form
          </a>
        </div>

        <p className="text-center text-lg font-semibold mt-8">
          Learn. Earn. Lead. 🌟
        </p>
        <p className="text-center">
          Start your professional journey today with{" "}
          <strong>KUCC × Shomvob</strong>.
        </p>
      </div>
    </div>
  );
};

export default CollabAnnouncement;
