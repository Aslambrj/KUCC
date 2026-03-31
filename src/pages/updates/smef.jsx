import "bootstrap/dist/css/bootstrap.min.css";

const SMEF = () => {
  return (
    <div className="container-fluid p-5 rounded-2xl 
    bg-gradient-to-br from-blue-100 via-sky-100 to-blue-200 
    shadow-lg">

      {/* Ongoing Badge */}
      <h2 className="text-center text-xl md:text-2xl font-bold text-red-600 mb-3 animate-pulse">
        🔴 ONGOING EVENT
      </h2>

      {/* Event Title */}
      <h2 className="text-center mb-5 text-lg md:text-2xl font-semibold text-gray-900">
        Youth Entrepreneurship & Startups for Students (YESS)
      </h2>

      {/* Poster */}
      <div className="d-flex justify-content-center mb-3">
        <img
          src="/assets/smef/smef.jpeg"
          alt="YESS Poster"
          className="img-fluid rounded-2xl shadow-xl hover:scale-105 transition duration-300"
        />
      </div>

      {/* Details Card */}
      <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-md border border-blue-200">

        <p className="text-gray-800 mb-3">
          Calling all aspiring entrepreneurs in Khulna!
        </p>

        <p className="text-gray-800 mb-3">
          The <strong>Youth Entrepreneurship & Startups for Students (YESS Program)</strong> 
          is a special initiative organized by SME Foundation in collaboration with 
          Khulna University Career Club.
        </p>

        <p className="text-gray-800 mb-4">
          This day-long program is designed to inspire and prepare university students 
          to step into the world of entrepreneurship.
        </p>

        <p className="font-semibold text-gray-900 mb-2">💡 What you’ll gain:</p>
        <ul className="list-disc pl-5 text-gray-800 mb-4 space-y-1">
          <li>Understand why entrepreneurship matters and how to get started</li>
          <li>Learn from real-life experiences and case studies</li>
          <li>Insights into bank loans and funding timing</li>
          <li>Explore alternative funding opportunities</li>
          <li>Startup fundamentals and funding process</li>
          <li>Hear from funded entrepreneurs</li>
        </ul>

        <p className="text-gray-800 mb-4">
          🔹 3 engaging plenary sessions <br />
          🔹 Demonstration booths from various organizations
        </p>

        <p className="text-gray-800 mb-2">
          <strong>🎓 Eligibility:</strong> Open for all university students in Khulna
        </p>

        <p className="text-gray-800 mb-2">
          <strong>👥 Total Participants:</strong> 300
        </p>

        <p className="text-gray-800 mb-3">
          <strong>📅 Event Details:</strong><br />
          Date: 05 April 2026 (Sunday) <br />
          Venue: Journalist Liakat Ali Auditorium, Khulna University
        </p>

        <p className="text-gray-900 font-medium">
          🎯 Take the first step toward your entrepreneurial journey and explore 
          the world of startups with YESS.
        </p>

      </div>
    </div>
  );
};

export default SMEF;