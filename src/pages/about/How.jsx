import { motion } from "framer-motion";

const How = () => {
  // Parent container for staggered animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // delay between children
      },
    },
  };

  // Each child animation
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-green-200 via-white to-teal-200 p-10 rounded-lg shadow-lg my-5"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }} // 🔥 retrigger every time it enters viewport
    >
      <motion.h2
        className="text-3xl font-bold text-center text-teal-600 mb-6 md:text-4xl lg:text-5xl"
        variants={item}
      >
        How Does the Career Club Work?
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 leading-relaxed mb-6 md:text-xl md:leading-loose"
        variants={item}
      >
        The{" "}
        <span className="font-semibold text-teal-800">
          Khulna University Career Club
        </span>{" "}
        operates as a vibrant platform that empowers students through structured
        activities, programs, and resources tailored to boost their career
        readiness.
      </motion.p>

      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={container}
      >
        {[
          {
            title: "Events & Seminars",
            text: "Regular events and seminars featuring industry leaders, alumni, and career experts. These sessions provide insights into various industries, career paths, and skill-building opportunities.",
          },
          {
            title: "Mentorship Programs",
            text: "Personalized guidance from experienced mentors who help students navigate their career journey, explore new possibilities, and overcome challenges.",
          },
          {
            title: "Skill-Building Workshops",
            text: "Hands-on workshops focusing on resume writing, interview preparation, communication skills, and more to prepare students for the job market.",
          },
          {
            title: "Other Initiatives",
            text: "Career fairs, internship placements, and exclusive access to job portals to connect students with employment opportunities.",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="p-5 bg-white rounded-lg shadow-md transition-shadow duration-500 cursor-pointer"
            variants={item}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 25px rgba(0,0,0,0.2)",
            }}
          >
            <h3 className="text-xl font-bold text-green-700 mb-3">
              {card.title}
            </h3>
            <p className="text-gray-700">{card.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="mt-8 text-center" variants={item}>
        <p className="text-lg text-gray-700 mb-4">
          Join us and take the first step toward a brighter future. Explore the
          resources and programs designed just for you!
        </p>
        <a
          href="#"
          className="px-6 py-3 bg-teal-500 text-white font-bold rounded-lg shadow-md hover:bg-teal-600 transition-colors duration-300"
        >
          Learn More
        </a>
      </motion.div>
    </motion.div>
  );
};

export default How;
