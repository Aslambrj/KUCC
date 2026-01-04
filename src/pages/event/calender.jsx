import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const Calendar = () => {
  const events = [
    // 2025 Events
    {
      date: "03-08-2025",
      eventName: "NextGen",
      eventTime: "9:00 am – 6:00 pm",
      eventVenue: "Journalist Liakat Ali Auditorium",
      description:
        "NextGen is a career development event focusing on new-age skills, networking, and professional growth.",
    },
    {
      date: "27-07-2025",
      eventName: "RIDGE",
      eventTime: "9:00 am – 6:00 pm",
      eventVenue: "Journalist Liakat Ali Auditorium",
      description:
        "RIDGE is a leadership conference bringing together young professionals to learn and grow.",
    },
    {
      date: "07-07-2025",
      eventName: "Career Talk Series",
      eventTime: "10:00 am – 4:00 pm",
      eventVenue: "Online",
      description:
        "An online series of talks from industry leaders, offering valuable insights into career growth.",
    },
    {
      date: "25-05-2025",
      eventName: "Futurnation",
      eventTime: "9:00 am – 5:00 pm",
      eventVenue: "Journalist Liakat Ali Auditorium",
      description:
        "A futuristic career event, exploring emerging fields and the skills needed for the next generation of workers.",
    },
    {
      date: "23-05-2025",
      eventName: "Prime Bank Empowering Youth",
      eventTime: "9:00 am – 6:00 pm",
      eventVenue: "Journalist Liakat Ali Auditorium",
      description:
        "An event focused on empowering youth through financial literacy, career development, and entrepreneurship.",
    },

    // 2024 Events
    {
      date: "09-11-2024",
      eventName: "TEDx Khulna University",
      eventTime: "9:00 am – 8:00 pm",
      eventVenue: "Journalist Liakat Ali Auditorium",
      description:
        "TEDx Khulna University is a platform that brings together brilliant minds to share groundbreaking ideas.",
    },
    {
      date: "06-11-2024",
      eventName: "Mastering BCS 1.0",
      eventTime: "5:00 PM",
      eventVenue: "Journalist Liakat Ali Auditorium",
      description:
        "Mastering BCS 1.0 aims to provide insights and guidance for students aspiring to ace the BCS exam.",
    },
    {
      date: "07-10-2024",
      eventName: "Public Speaking Pros 2.0",
      eventTime: "5:00 PM",
      eventVenue: "Journalist Liakat Ali Auditorium",
      description:
        "Public Speaking Pros 2.0 offers a platform for students to showcase their public speaking skills.",
    },
    {
      date: "22-10-2024",
      eventName: "Higher Education & Exchange Opportunities in the US",
      eventTime: "11:00 am – 12:00 pm",
      eventVenue: "Journalist Liakat Ali Auditorium",
      description:
        "This seminar provides valuable insights into studying in the US, including the application process and visa procedures.",
    },
    {
      date: "08-07-2024",
      eventName: "Roadmap to ICCR (India)",
      eventTime: "9:00 PM",
      eventVenue: "Online",
      description:
        "This session focuses on studying in India through the ICCR scholarship program, covering the application processes.",
    },
    {
      date: "23-06-2024",
      eventName: "LinkedIn Excellency 3.0",
      eventTime: "9:00 PM",
      eventVenue: "Online",
      description:
        "LinkedIn Excellency 3.0 is a session about optimizing LinkedIn profiles for career growth and professional opportunities.",
    },
    {
      date: "14-06-2024",
      eventName: "Higher Education Abroad Episode 01: Roadmap To USA",
      eventTime: "8:30 PM",
      eventVenue: "Online",
      description:
        "Insights into the U.S. education system, application steps, and tips for studying in the USA.",
    },
    {
      date: "23-04-2024",
      eventName: "Design Your Future: Career Opportunity with Design Skill",
      eventTime: "5:20 PM",
      eventVenue: "Journalist Liakat Ali Auditorium",
      description:
        "A session guiding students to explore diverse career paths in design, focusing on creativity and innovation.",
    },
    {
      date: "28-02-2024 – 09-03-2024",
      eventName: "BYLC Career X",
      eventTime: "9:00 am – 5:00 pm",
      eventVenue: "URP Lecture Theatre & Online",
      description:
        "BYLC Career X, in collaboration with Bangladesh Youth Leadership Center, focused on leadership, CV writing, teamwork, and other job skills. Held both offline and online.",
    },
    {
      date: "20-01-2024",
      eventName: "Mind The Hack",
      eventTime: "12:00 PM",
      eventVenue: "Offline",
      description:
        "A social case competition aimed at solving real-world social and environmental issues in Khulna.",
    },
  ];

  const rowVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const cardGradients = [
    "bg-gradient-to-r from-pink-200 via-red-200 to-yellow-200",
    "bg-gradient-to-r from-green-200 via-lime-200 to-teal-200",
    "bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200",
    "bg-gradient-to-r from-orange-200 via-amber-200 to-red-200",
    "bg-gradient-to-r from-cyan-200 via-sky-200 to-blue-200",
  ];

  return (
    <div className="container my-8 px-4 sm:px-8 lg:px-16">
      {/* Full Background Gradient */}
      <section className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 py-20 mb-16 rounded-2xl">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="text-xl sm:text-2xl md:text-5xl font-semibold text-white text-center animate-fadeIn">
            Events Timeline
          </h1>
          <p className="text-white/90 mt-3 text-center max-w-3xl">
            Explore the exciting events organized by KUCC, ranging from career development to leadership and more.
          </p>
        </div>
      </section>

      {/* Events Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
        {events.map((event, index) => (
          <motion.div
            key={index}
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.02, opacity: 0.9 }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`rounded-2xl shadow-xl p-6 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${cardGradients[index % cardGradients.length]}`}
          >
            {/* Event Date with Icon */}
            <div className="text-xl font-bold text-white mb-4 flex items-center">
              <FaCalendarAlt className="mr-2" />
              <span className="text-black">{event.date}</span>
            </div>

            {/* Event Name */}
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-3">{event.eventName}</h2>

            {/* Event Description */}
            <p className="text-sm text-gray-800 text-center mb-4">{event.description}</p>

            {/* Event Time & Venue with Icons */}
            <div className="flex justify-between w-full text-gray-600">
              <span className="text-sm font-semibold flex items-center">
                <FaClock className="mr-2" />
                {event.eventTime}
              </span>
              <span className="text-sm flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                {event.eventVenue}
              </span>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Calendar;
