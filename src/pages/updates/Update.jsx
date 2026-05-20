
import GeneralMeeting from "./generalMeeting.jsx";
import Winner from "../event/Winner.jsx";
// import Collaboration from "./Collaboration.jsx";
import VisualOdyssey from "./VisualOdysseyWinner.jsx";
import MindTheHack from "./MindTheHackWinner.jsx";
import smef from "./smef.jsx";
import nextgen3 from "./nextgen3.jsx";
import treasureHunt from "./TreasurerHunt.jsx";
import genSubmission from "./genSubmission.jsx";
import CareerTalkSeries6 from "./careerTalk6.jsx";


const Update = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 bg-clip-text text-transparent 
               bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 
               drop-shadow-lg animate-pulse">
             Club Updates
            </h1>

      
      {/* Submission Section */}
      <section className="bg-white shadow-lg rounded-2xl p-2">
        {<CareerTalkSeries6 />}
      </section>



      {/* Submission Section */}
      <section className="bg-white shadow-lg rounded-2xl p-2">
        {genSubmission()}
      </section>
      {/* Treasure Hunt */}
      <section className="bg-white shadow-lg rounded-2xl p-2">
        {treasureHunt()}
      </section>



   {/* NextGen 3.0 Event Section
      <section className="bg-white shadow-lg rounded-2xl p-2">
        {nextgen3()}
      </section> */}




      {/* YESS Event Section */}
      <section className="bg-white shadow-lg rounded-2xl p-2">
        {smef()}
      </section>

      


      {/* Visual Odyssey Winner */}
      <section className="bg-white shadow-lg rounded-2xl p-2">
        <VisualOdyssey />
      </section>


      {/* Mind The Hack Winner */}
      <section className="bg-white shadow-lg rounded-2xl p-2">
        <MindTheHack />
      </section>  

    {/* winner */}
      <section className="bg-white shadow-lg rounded-2xl p-2">
        <Winner/>
      </section>


      {/* General Meeting Section */}
      <section className="bg-white shadow-lg rounded-2xl p-2">
        <GeneralMeeting />
      </section>

      
    </div>
  );
};

export default Update;
