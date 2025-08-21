import { motion } from "framer-motion";

const Why = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-blue-200 via-white to-blue-200 p-10 rounded-lg shadow-lg my-5"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: false }} // retriggers every scroll into view
    >
      <motion.h2
        className="text-3xl font-bold text-center text-blue-700 mb-6 md:text-4xl lg:text-5xl"
        variants={item}
      >
        Why Join the Career Club?
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 leading-relaxed md:text-xl md:leading-loose"
        variants={item}
      >
        Being part of the{" "}
        <span className="font-semibold text-blue-800">
          Khulna University Career Club
        </span>{" "}
        opens doors to a world of opportunities that can transform your career
        journey. Here are some of the benefits of joining the club:
      </motion.p>

      <motion.ul
        className="list-disc pl-6 mt-4 text-gray-700 space-y-3 md:text-xl md:space-y-4"
        variants={container}
      >
        <motion.li variants={item}>
          <span className="font-semibold text-blue-800">
            Networking Opportunities:
          </span>{" "}
          Connect with industry leaders, professionals, and alumni to build
          meaningful relationships that can guide and support your career.
        </motion.li>
        <motion.li variants={item}>
          <span className="font-semibold text-blue-800">
            Workshops and Seminars:
          </span>{" "}
          Gain practical skills and knowledge through events designed to prepare
          you for the job market.
        </motion.li>
        <motion.li variants={item}>
          <span className="font-semibold text-blue-800">
            Mentorship Programs:
          </span>{" "}
          Receive guidance and insights from experienced mentors who are
          committed to helping you succeed.
        </motion.li>
        <motion.li variants={item}>
          <span className="font-semibold text-blue-800">
            Access to Job Resources:
          </span>{" "}
          Stay updated with the latest job openings, internships, and career
          fairs exclusively available to club members.
        </motion.li>
      </motion.ul>

      <motion.div
        className="mt-6 p-5 bg-white rounded-lg shadow-inner"
        variants={item}
      >
        <h3 className="text-xl font-semibold text-blue-700 mb-3">
          Real Stories, Real Impact
        </h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          Joining the Career Club was a turning point in my life. Through their
          mentorship and workshops, I secured an internship at a leading tech
          company and gained invaluable confidence in my abilities.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Becoming a member of the Career Club marked a transformative moment in
          my life. The mentorship I received, combined with the insightful
          workshops, paved the way for me to secure an internship at a leading
          tech company. This experience not only enhanced my skills but also
          instilled a profound sense of confidence in my abilities.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Why;
