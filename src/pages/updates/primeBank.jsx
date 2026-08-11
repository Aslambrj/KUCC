import React from "react";

const EmpoweringYouthSeason2 = () => {
  const registerLink =
    "https://forms.gle/4v3z5jbJX5JJ9aHc7";

  const primeYouthLink =
    "https://customer-daos.primebank.com.bd/";

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Cover Photo */}
        <div className="w-full bg-blue-100 flex items-center justify-center">
          <img
            src="/assets/empoweringYouth/empoweringYouth2.jpeg"
            alt="Empowering Youth Season 2.0"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">

          {/* Title */}
          <h1 className="text-3xl font-bold text-center">
            EMPOWERING YOUTH SEASON 2.0
          </h1>

          <p className="text-center text-lg font-semibold text-blue-800">
           Engaging and Inspiring Youth in Banking
          </p>

          {/* Introduction */}
          <p>
            Khulna University Career Club is pleased to welcome you to{" "}
            <b>Empowering Youth Season 2.0</b>, an engaging initiative by{" "}
            <b>PrimeAcademia of Prime Bank</b> designed to connect young minds with the evolving
            world of banking, career development, and financial opportunities.
          </p>

          <p>
            The session will feature meaningful discussions, practical insights,
            <b> Mock Interview</b>, and <b>Interactive Q&A</b>, creating an
            opportunity for students to learn, engage, and prepare for their
            future careers.
          </p>

          {/* What Participants Will Receive */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              🎁 What Participants Will Receive
            </h2>

            <ul className="list-disc pl-6 space-y-1">
              <li>Certificate of Participation</li>
              <li>Food & Refreshments</li>
              <li>Mock Interview</li>
              <li>Interactive Q&A</li>
            </ul>
          </div>

          {/* Event Details */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              📅 Event Details
            </h2>

            <ul className="list-disc pl-6 space-y-1">
              <li>
                <b>Date:</b> 16 August 2026
              </li>
              <li>
                <b>Time:</b> 4:00 PM
              </li>
              <li>
                <b>Venue:</b> Journalist Liakat Ali Auditorium, Khulna
                University
              </li>
            </ul>
          </div>

          {/* Registration Process */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              📝 Registration Process
            </h2>

            <p>
              Register now to secure your spot and become a part of this
              engaging session.
            </p>

            <p className="mt-2">
              <b>Registration Deadline:</b> 14 August 2026, 11:59 PM
            </p>
          </div>

          {/* Prime Youth Account */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              🏦 Prime Youth Account
            </h2>

            <p>
              Participants will also have the opportunity to open a{" "}
              <b>Prime Youth Account</b>, a student savings account by Prime
              Bank offering student-friendly banking and study-abroad services.
            </p>
          </div>

          {/* Key Benefits */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              ⭐ Key Benefits
            </h2>

            <ul className="list-disc pl-6 space-y-1">
              <li>Free Dual-Currency Debit Card</li>
              <li>Free Internet Banking & SMS Alerts</li>
              <li>Free Cheque Book</li>
              <li>No Maintenance Fee</li>
              <li>Insurance Coverage</li>
            </ul>
          </div>

          {/* Required Documents */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              📄 Required Documents
            </h2>

            <ul className="list-disc pl-6 space-y-1">
              <li>Student ID</li>
              <li>Applicant & Nominee NID</li>
              <li>Nominee Passport-Size Photo</li>
              <li>Address Proof</li>
            </ul>
          </div>

          {/* Prime Youth Account Button */}
          <div className="flex justify-center pt-2 w-full">
            <a
              href={primeYouthLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-96 text-center bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:from-green-600 hover:to-green-800 transition transform hover:scale-105"
            >
              🏦 Open Prime Youth Account
            </a>
          </div>

          {/* Closing */}
          <p className="text-center font-medium text-gray-700 pt-2">
            Join us for an afternoon of learning, engagement, and opportunities
            designed to empower the next generation.
          </p>

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

        </div>
      </div>
    </div>
  );
};

export default EmpoweringYouthSeason2;