// import Latest from "./latest.jsx";

import Segments from "./Segments.jsx";
import DynamicContent from "./DynamicContent.jsx";
import Winner from "../event/Winner.jsx";

const Home = () => {
  // Example today’s event data (you can fetch or pass dynamically later)
  const todayEvent = {
    title: "General Meeting – Batch 25 Welcome & CV Writing Workshop",
    time: "Today, 3:00 PM – 5:00 PM",
    location: "Auditorium Hall",
  };

  return (
    <>
      <DynamicContent />

      {/* winner */}
      <section className="bg-white shadow-lg rounded-2xl p-2">
        <Winner/>
      </section>

    {/* <section className="bg-white shadow-lg rounded-2xl p-2">
        <UpcomingEvents />
      </section> */}

  
      {/* <Latest event={todayEvent} /> */}
      
      {/* <RecentEvents /> */}
      <Segments />
    </>
  );
};

export default Home;
