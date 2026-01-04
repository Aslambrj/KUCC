
import GeneralMeeting from "./generalMeeting.jsx";
import Winner from "../event/Winner.jsx";
import Collaboration from "./Collaboration.jsx";


const Update = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 bg-clip-text text-transparent 
               bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 
               drop-shadow-lg animate-pulse">
             Club Updates
            </h1>


      {/* Collaboration*/}
      <section className="bg-white shadow-lg rounded-2xl p-2">
        <Collaboration/>
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
