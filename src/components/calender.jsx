import React from "react";
import { motion } from "framer-motion";

const Calendar = () => {
  const events = [
    { date: "03-08-2025", eventName: "NextGen", eventPlace: "Journalist Liaquat Ali Auditorium" },
    { date: "27-07-2025", eventName: "RIDGE", eventPlace: "Journalist Liaquat Ali Auditorium" },
    { date: "07-07-2025", eventName: "Career Talk Series", eventPlace: "Online" },
    { date: "25-05-2025", eventName: "Futurnation", eventPlace: "Journalist Liaquat Ali Auditorium" },
    { date: "23-05-2025", eventName: "Prime Bank Empowering Youth", eventPlace: "Journalist Liaquat Ali Auditorium" },
  ];

  const rowVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const rowGradients = [
    "bg-gradient-to-r from-pink-200 via-red-200 to-yellow-200",
    "bg-gradient-to-r from-green-200 via-lime-200 to-teal-200",
    "bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200",
    "bg-gradient-to-r from-orange-200 via-amber-200 to-red-200",
    "bg-gradient-to-r from-cyan-200 via-sky-200 to-blue-200",
  ];

  return (
    <div className="container my-8 px-4 sm:px-8 lg:px-16">
      {/* Make table horizontally scrollable on small screens */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-xl overflow-hidden shadow-xl min-w-[600px]">
          <thead>
            <tr className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white text-lg">
              <th className="py-3 px-5 text-left whitespace-nowrap">📅 Date</th>
              <th className="py-3 px-5 text-left whitespace-nowrap">🎯 Event Name</th>
              <th className="py-3 px-5 text-left whitespace-nowrap">📍 Event Place</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <motion.tr
                key={index}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ scale: 1.02, opacity: 0.9 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`border-b cursor-pointer ${rowGradients[index % rowGradients.length]}`}
              >
                <td className="py-3 px-5 font-medium text-gray-700 whitespace-nowrap">{event.date}</td>
                <td className="py-3 px-5 text-gray-800 whitespace-nowrap">{event.eventName}</td>
                <td className="py-3 px-5 text-gray-600 whitespace-nowrap">{event.eventPlace}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
