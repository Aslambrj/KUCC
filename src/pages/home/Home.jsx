// import Latest from "./latest.jsx";

import Segments from "./Segments.jsx";
import DynamicContent from "./DynamicContent.jsx";
import Winner from "../event/Winner.jsx";
import Awards from "./awards.jsx";
// import MindTheHackForm from "../mind/MindTheHackForm";
import VisualOdyssey from "../event/VisualOdyssey.jsx";

import Nextgen3 from "../updates/nextgen3.jsx";
import TreasureHunt from "../updates/TreasurerHunt.jsx";
import GenSubmissions from "../updates/genSubmission.jsx";

import PrimeBank from "../updates/primeBank.jsx";
import UsGreencard from "../updates/UsGreencard.jsx";



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

      {/* Today's Event Section */}
      <section className="bg-white shadow-lg rounded-2xl p-2">
       <UsGreencard/>
      </section>
    
    
    <section className="bg-white shadow-lg rounded-2xl p-2">
       <PrimeBank/>
      </section>

  {/* <section className="bg-white shadow-lg rounded-2xl p-2">
       <CareerTalkSeries6/>
      </section> */}

      {/* <section className="bg-white shadow-lg rounded-2xl p-2">
       <GenSubmissions/>
      </section> */}

     {/* <section className="bg-white shadow-lg rounded-2xl p-2">
       <Nextgen3/>
      </section> */}
    

    {/* winner */}
      <section className="bg-white shadow-lg rounded-2xl p-2">
        <Awards/>
      </section>

   

      {/* winner */}
      {/* <section className="bg-white shadow-lg rounded-2xl p-2">
        <Winner/>
      </section> */}

    {/* <section className="bg-white shadow-lg rounded-2xl p-2">
        <UpcomingEvents />
      </section> */}

  
     
      <Segments />
      

    </>
  );
};

export default Home;
