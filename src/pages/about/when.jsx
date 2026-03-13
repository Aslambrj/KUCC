import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const When = () => {
  // Controls + inView hook to retrigger on every enter
  const controls = useAnimation();
  const rootRef = useRef(null);
  const inView = useInView(rootRef, { amount: 0.3 }); // ~30% visible

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      // reset when it leaves so it can play again next time
      controls.start("hidden");
    }
  }, [inView, controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  const cards = [
    {
      title: "Founding Story",
      text:
        "The club started with a vision to connect academic knowledge with real-world skills. It was founded by a group of passionate students aiming to create opportunities for growth and development within the university community.",
    },

    {
      title: "Key Milestones",
      list: [
        "First career fair organized in 2024.",
        "Collaborations with leading companies for internships.",
        "Awarded Best Student Initiative in 2024.",
        "Reached a milestone of 1,000 members in 2024.",
      ],
    },
    {
      title: "Collaborations & Growth",
      text:
        "The club has partnered with top organizations and professionals to provide workshops, networking opportunities, and job resources. These collaborations have expanded the club's reach and impact.",
    },
    {
      title: "Achievements",
      text:
        "From hosting annual career expos to securing scholarships and job placements for members, the club continues to achieve remarkable milestones that inspire the next generation.",
    },
  ];

  return (
    <motion.div
      ref={rootRef}
      className="bg-gradient-to-br from-blue-200 via-white to-blue-200 p-10 rounded-lg shadow-lg my-5"
      variants={container}
      initial="hidden"
      animate={controls}
    >
      <motion.h2
        className="text-3xl font-bold text-center text-blue-700 mb-6 md:text-4xl lg:text-5xl"
        variants={item}
      >
        When Did the Journey Begin?
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 leading-relaxed mb-6 md:text-xl md:leading-loose"
        variants={item}
      >
        The{" "}
        <span className="font-semibold text-blue-800">
          Khulna University Career Club
        </span>{" "}
        was founded in <span className="font-bold">2018</span> with vision to
        foster career development among students. Since its inception, the club
        has grown into a vibrant community of learners, achievers, and mentors.
      </motion.p>

      {/* apply container here so the cards get staggered reliably */}
      <motion.div className="grid gap-6 md:grid-cols-2" variants={container}>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="p-5 bg-white rounded-lg shadow-md transition-shadow duration-500 cursor-pointer"
            variants={item}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 25px rgba(0,0,0,0.2)",
            }}
          >
            <h3 className="text-xl font-bold text-blue-700 mb-3">
              {card.title}
            </h3>
            {card.list ? (
              <ul className="list-disc pl-5 text-gray-700">
                {card.list.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">{card.text}</p>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="mt-8 text-center" variants={item}>
        <p className="text-lg text-gray-700 mb-4">
          Our journey is a testament to the power of determination and
          collaboration. Join us as we continue to shape the future of Khulna
          University's brightest minds!
        </p>
        <a
          href="#"
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
        >
          Explore Our History
        </a>
      </motion.div>
    </motion.div>
  );
};

export default When;
