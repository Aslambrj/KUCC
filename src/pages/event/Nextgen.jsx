import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react"; 
import { Link } from "react-router-dom";


const RecentEvents = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container-fluid my-0 bg-gradient-to-r from-blue-100 via-white-500 to-blue-500 p-5 rounded-lg shadow-lg">
      {/* <h1 className="text-center mb-4 text-xl font-bold text-white-800 tracking-wide md:text-3xl lg:text-4xl">
        RECENT EVENTS
      </h1> */}

      {/* --- NextGen Event (Latest) --- */}
      <h2 className="text-center mb-3 text-lg md:text-2xl font-semibold">NextGen Onboarding 2025</h2>
      <div className="row align-items-stretch mb-5">
        {/* Left Part (Banner Image) */}
        <div className="col-lg-7 mb-4 d-flex flex-column">
          <Link to="/events" className="text-decoration-none">
            <img
              src="/assets/images/nextgen.jpg"
              alt="NextGen Event Banner"
              className="img-fluid w-100 rounded shadow-sm mb-3"
            />
          </Link>
        </div>

        {/* Right Part (Local Video) */}
        <div className="col-lg-5 mb-4 d-flex">
          <div className="ratio ratio-16x9 mb-3 rounded shadow-sm w-100">
            <video
              src="video/NextGen.mp4"
              autoPlay
              muted
              loop
              controls
              className="w-100 h-100 object-fit-cover rounded"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
        <div className="d-flex justify-content-center mt-3 flex-wrap gap-2 mb-4">
          {/* Facebook Button */}
          <a
            href="https://www.facebook.com/kuccofficial"
            className="btn btn-primary text-sm md:text-base lg:text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>

          {/* Details Button */}
          <button
            onClick={toggleDetails}
            className="btn btn-secondary text-sm md:text-base lg:text-lg"
          >
            Details
          </button>

          {/* Event Gallery Button */}
          <Link
            to="/lastEventGallary"
            className="btn btn-success text-sm md:text-base lg:text-lg"
          >
            Event Gallery
          </Link>
        </div>


      {/* Event Details Modal */}
      {showDetails && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-bold text-lg mb-2">Event Details</h3>
          <p><strong>Hello 25 Batch!</strong></p>
          <p>
            The NextGen Onboarding 2025 is a signature initiative of the Khulna University Career Club, exclusively designed to welcome and empower the 25 Batch into the KUCC community.
            This event goes beyond a traditional orientation — it is a transformative journey that introduces new members to leadership, teamwork, and professional growth. Registered members will engage in exciting interactive competitions such as:
          </p>
          <ul>
            <li>✍️ Content Writing Competition</li>
            <li>💡 Presentation Slide Competition</li>
            <li>🧠 Live Quiz Competition</li>
          </ul>
          <p>
            These activities are designed to nurture creativity, critical thinking, and communication skills.
          </p>
          <p>
            <strong>📅 Event Details:</strong>
            <br />
            Date: 27th August 2025
            <br />
            Time: 05:00 PM
            <br />
            Venue: Journalist Liakat Ali Auditorium
          </p>
          <p>
            🎯 Whether you aspire to lead a corporate boardroom, launch a startup, or thrive in academics and professional life — KUCC’s NextGen is your first bold step toward excellence.
          </p>
        </div>
      )}

      <hr className="my-5" />

    </div>
  );
};

export default RecentEvents;
