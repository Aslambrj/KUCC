import Calendar from "../../pages/event/calender";
import Cover from "../../pages/event/Cover";
import Nextgen from "./Nextgen"; // Make sure the component is correctly imported
import PublicSpeaking from "../../pages/event/PublicSpeaking"; // Make sure the component is correctly imported
import MindTheHackForm from "../mind/MindTheHackForm";


const Events = () => {
  return (
    <>
      {/* Cover Section */}
      {/* <section className="bg-white shadow-lg rounded-2xl p-2 mb-6">
        <Cover />
      </section> */}

{/* mind the hack form */}
      <section className="bg-white shadow-lg rounded-2xl p-2">
               <MindTheHackForm />
            </section>

      {/* Public Speaking Pros */}
      {/* <section className="bg-white shadow-lg rounded-2xl p-2 mb-6">
        <PublicSpeaking/>
      </section> */}


      {/* Recent Events Section */}
      {/* <section className="bg-white shadow-lg rounded-2xl p-2 mb-6">
        <Nextgen />
      </section> */}

      {/* Calendar / Events Timeline Section */}
      <section className="bg-white shadow-lg rounded-2xl p-2 mb-6">
        <Calendar />
      </section>

      
      

      
    </>
  );
};




export default Events;
