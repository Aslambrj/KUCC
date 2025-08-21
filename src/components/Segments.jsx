import React from "react";
import { motion } from "framer-motion";
import { Code, Users, BookOpen, Languages } from "lucide-react";
import SegmentCard from "../components/SegmentCard";

const segments = [
  {
    title: "IT Segment",
    description:
      "Dive into the world of technology with programming workshops, web development bootcamps, and cutting-edge tech talks. Join us to build the digital future.",
    icon: Code,
    bgGradient: "bg-gradient-to-br from-blue-600 to-cyan-500",
    features: ["Programming Workshops", "Web Development", "Tech Career Guidance", "Industry Networking"],
  },
  {
    title: "Governor Segment",
    description:
      "Develop leadership skills and explore governance opportunities. Prepare for civil service, public administration, and leadership roles in society.",
    icon: Users,
    bgGradient: "bg-gradient-to-br from-green-600 to-emerald-500",
    features: ["Leadership Training", "Public Speaking", "Policy Analysis", "Government Exam Prep"],
  },
  {
    title: "Scholar Segment",
    description:
      "Excellence in academics and research. Join study groups, research projects, and academic competitions to achieve scholarly success.",
    icon: BookOpen,
    bgGradient: "bg-gradient-to-br from-purple-600 to-indigo-500",
    features: ["Research Projects", "Study Groups", "Academic Competitions", "Scholarship Guidance"],
  },
  {
    title: "Language Segment",
    description:
      "Master multiple languages and enhance communication skills. Explore opportunities in translation, interpretation, and international careers.",
    icon: Languages,
    bgGradient: "bg-gradient-to-br from-pink-500 to-rose-400",
    features: ["Language Learning", "Translation Skills", "Cultural Exchange", "International Opportunities"],
  },
];

export default function SegmentsPage() {
  return (
    <div className="min-h-screen">
      {/* Segments Section with 5-color gradient background */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Four <span className="text-yellow-200">Segments</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Choose your path and join a community of like-minded students working towards excellence in their chosen field.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {segments.map((segment, index) => (
              <SegmentCard key={segment.title} {...segment} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
