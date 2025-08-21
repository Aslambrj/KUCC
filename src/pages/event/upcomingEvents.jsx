import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  return (
    <div className="container-fluid my-0 bg-gradient-to-r from-blue-900 via-white-500 to-blue-100 p-5 rounded-lg shadow-lg">
      <h1 className="text-center mb-4 text-xl font-bold text-white-800 tracking-wide md:text-3xl lg:text-4xl">
        UPCOMING EVENTS
      </h1>

      <div className="row align-items-stretch">
        {/* Left Part (Banner Image) */}
        <div className="col-lg-7 mb-4 d-flex flex-column">
          <Link to="/events" className="text-decoration-none">
            <img
              src="src/assets/images/nextgen.jpg"
              alt="Event Banner"
              className="img-fluid w-100 rounded shadow-sm mb-3"
            />
          </Link>
        </div>

        {/* Right Part (Local Video) */}
        <div className="col-lg-5 mb-4 d-flex">
          <div className="ratio ratio-16x9 mb-3 rounded shadow-sm w-100 h-100">
            <video
              src="video/NextGen.mp4"
              autoPlay
              muted
              loop
              controls
              className="rounded w-100 h-100 object-cover"
            >
              Your browser does not support the video tag.
            </video>
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
          Facebook_Link
        </a>
        <a
          href="#"
          className="btn btn-secondary text-sm md:text-base lg:text-lg"
        >
          Details
        </a>
        <a
          href="#"
          className="btn btn-success text-sm md:text-base lg:text-lg"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default UpcomingEvents;
