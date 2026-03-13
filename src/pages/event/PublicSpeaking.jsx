import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container-fluid my-0 bg-gradient-to-r from-blue-900 via-white-500 to-blue-100 p-5 rounded-lg shadow-lg">
  <h1 className="text-center mb-4 text-xl font-bold text-white-800 tracking-wide md:text-3xl lg:text-4xl">
   RECENT EVENTS
  </h1>

  <h2 className="text-center mb-4 text-lg md:text-2xl font-semibold text-white">
    Public Speaking Pros 3.0
  </h2>

  {/* Responsive Poster Row */}
  <div className="row mb-4">
    <div className="col-12 d-flex justify-content-center">
      {/* <Link to="/event-registration" className="text-decoration-none"> */}
        <img
          src="/assets/upcoming/publicPros.png"
          alt="Public Speaking Pros 3.0 Banner"
          className="rounded shadow-lg img-fluid"
          style={{
            width: "100%",
            maxWidth: "1000px", // keeps it large but not too big
            height: "auto",
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      {/* </Link> */}
    </div>
  </div>



      {/* What & Motto Row */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="p-4 rounded shadow-sm bg-gradient-to-r from-blue-100 via-white to-blue-200">
            <h3 className="font-bold text-lg mb-3">What is Public Speaking Pros 3.0?</h3>
            <p>
              Public Speaking Pros 3.0 is the flagship public speaking competition of
              Khulna University Career Club, designed to foster leadership, communication,
              and presentation skills among students. This prestigious event provides an
              outstanding platform for participants to enhance their oratory excellence in
              both Bengali and English formats, while engaging a dynamic university audience.
            </p>
            <p>
              Motto: <strong>“Be loud, be proud”</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Event Overview Row */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="p-4 rounded shadow-sm w-100 bg-gradient-to-r from-blue-200 via-blue-100 to-white">
            <h4 className="font-semibold text-md mb-2">Event Overview</h4>
            <ul>
              <li><strong>Event Name:</strong> Public Speaking Pros 3.0</li>
              {/* <li><strong>Date:</strong> 24 September 2025</li> */}
              <li><strong>Format:</strong> Bengali & English (two segments)</li>
              <li><strong>Rounds:</strong> Preliminary & Final</li>
              <li><strong>Participants:</strong> Open to all KU students</li>
              <li><strong>Prizes:</strong> Top 3 winners from each segment</li>
              <li><strong>Venue:</strong> Journalist Liakat Ali Auditorium, KU</li>
            </ul>

            {/* <div className="alert alert-warning d-flex align-items-center mt-3" role="alert">
              <span className="me-2">📢</span>
              <span>Registration for Public Speaking Pros 3.0 will open shortly. Keep an eye on our website for updates!</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="d-flex justify-content-center mt-3 flex-wrap gap-2">
        <a
          href="https://www.facebook.com/kuccofficial"
          className="btn btn-primary text-sm md:text-base lg:text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>

        <button
          onClick={toggleDetails}
          className="btn btn-secondary text-sm md:text-base lg:text-lg"
        >
          Details
        </button>

        <Link
          // to="/event-registration"
          className="btn btn-success text-sm md:text-base lg:text-lg"
        >
          Gallary
        </Link>
      </div>

      {/* Extra Details Section */}
      {showDetails && (
        <div className="mt-4 p-4 rounded-lg shadow-sm bg-gradient-to-r from-blue-100 via-white to-blue-200">
          <h3 className="font-bold text-lg mb-3">What is Public Speaking Pros 3.0?</h3>
          <p>
            Public Speaking Pros 3.0 is the flagship public speaking competition of
            Khulna University Career Club, designed to foster leadership, communication,
            and presentation skills among students. This prestigious event provides an
            outstanding platform for participants to enhance their oratory excellence in
            both Bengali and English formats, while engaging a dynamic university audience.
          </p>
          <p>
            Motto: <strong>“Be loud, be proud”</strong>
          </p>

          <h4 className="font-semibold text-md mt-4 mb-2">Event Overview</h4>
          <ul>
            <li><strong>Event Name:</strong> Public Speaking Pros 3.0</li>
            <li><strong>Date:</strong> 24 September 2025</li>
            <li><strong>Format:</strong> Bengali & English (two segments)</li>
            <li><strong>Rounds:</strong> Preliminary & Final</li>
            <li><strong>Participants:</strong> Open to all KU students</li>
            <li><strong>Prizes:</strong> Top 3 winners from each segment</li>
            <li><strong>Venue:</strong> Journalist Liakat Ali Auditorium, KU</li>
          </ul>

          <div className="alert alert-warning d-flex align-items-center mt-3" role="alert">
            <span className="me-2">📢</span>
            <span>Registration for Public Speaking Pros 3.0 will open shortly. Keep an eye on our website for updates!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
