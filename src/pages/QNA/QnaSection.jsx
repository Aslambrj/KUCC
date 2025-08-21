import AccordionSection from "@/components/AccordionSection";

const faqData = [
  {
    question: "What is the Khulna University Career Club (KUCC)?",
    answer:
      "KUCC is a student-led organization dedicated to enhancing the career readiness and professional skills of Khulna University students through workshops, seminars, competitions, and networking events across various fields.",
  },
  {
    question: "Who can join KUCC?",
    answer:
      "All Khulna University students from any department are welcome to join KUCC. The club encourages diversity and inclusivity across academic disciplines.",
  },
  {
    question: "What are the main segments of KUCC?",
    answer:
      "KUCC has four key segments:\n- Language Segment: Focuses on communication and language skills.\n- Governor Segment: Leadership and community engagement.\n- IT Segment: Technology and software development.\n- Scholar Segment: Academic excellence and research support.",
  },
  {
    question: "How can I become a member of KUCC?",
    answer:
      "You can join KUCC by filling out the membership form available during club events or on the official KUCC website/social media channels.",
  },
  {
    question: "What types of activities does KUCC organize?",
    answer:
      "KUCC hosts a variety of events including career talks, coding competitions, public speaking workshops, leadership training, webinars, and scholarship guidance sessions.",
  },
  {
    question: "Does KUCC provide internship or job placement assistance?",
    answer:
      "While KUCC itself does not directly provide placements, it regularly collaborates with companies, alumni, and industry professionals to share internship and job opportunities with members.",
  },
  {
    question: "How can I stay updated on KUCC events and news?",
    answer:
      "Follow KUCC’s official social media pages, join their mailing list, or regularly check the KUCC website for announcements and event schedules.",
  },
  {
    question: "Is there any membership fee for joining KUCC?",
    answer:
      "KUCC membership is generally free, but some special events or workshops might have nominal fees, which will be communicated beforehand.",
  },
];

const QnaSection = () => {
  return (
    <div className="bg-gradient-to-tr from-[#55b2b2] to-[#0c80b2] w-full min-h-screen py-20 px-5 md:px-20">
      {/* Heading Section */}
      <section className="flex flex-col items-center justify-center mb-16">
        <h1
          className="text-xl sm:text-2xl md:text-5xl font-semibold text-white text-center animate-fadeIn"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
        >
          Find answers to common questions about our club&apos;s features and accessibility.
        </h1>
      </section>

      {/* Accordion Section */}
      <section className="flex flex-col justify-center items-center w-full md:w-2/3 mx-auto animate-fadeIn">
        <div className="text-center mb-6">
          <h1
            className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-950"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
          >
            General Questions:
          </h1>
          <span>
            <hr className="mt-1 w-30 h-1 bg-gray-950 rounded-sm shadow-sm mx-auto" />
          </span>
        </div>
        {/* Pass faqData to AccordionSection */}
        <AccordionSection
          items={faqData}
          smooth={true} // optional prop to trigger smooth animation
          className="transition-all duration-500 ease-in-out"
        />
      </section>
    </div>
  );
};

export default QnaSection;
