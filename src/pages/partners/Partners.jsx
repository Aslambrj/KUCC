// src/pages/partners/Partners.jsx
import React from "react";

const Partners = () => {
  // General partners (exclude media + photography from here)
  const partnersData = [
    {
      logo: "/assets/partners/speednet.png",
      name: "SpeedNet Khulna",
      tagline: "Broadband Partner of NEXTgen",
      description:
        "SpeedNet Khulna is a leading internet service provider in Khulna, offering high-speed fiber broadband for both homes and businesses. Established in 2015, it is known for reliable service and wide coverage in the region.",
    },
    {
      logo: "/assets/partners/primebank.jpg",
      name: "Prime Bank PLC",
      tagline: "Empowering Youth – Engaging & Inspiring Youth in Banking",
      description:
        "Prime Bank PLC is one of Bangladesh’s leading private commercial banks, founded in 1995. It offers retail, corporate, SME, and digital banking services across the country.",
    },
    {
      logo: "/assets/partners/livemcq.jpg",
      name: "Live MCQ",
      tagline: "Sponsor of Mastering BCS 1.0",
      description:
        "Live MCQ™ is Bangladesh’s first and largest virtual exam preparation platform, offering real-time, live model tests for government exams such as BCS, bank, NTRCA, PSC, and more—with over 1.2 million users.",
    },
    {
      logo: "/assets/partners/mentors.jpg",
      name: "Mentors Khulna",
      tagline: "Sponsor of Public Speaking Pros 2.0",
      description:
        "Mentors Khulna is a leading education consultancy and training center, specializing in IELTS, spoken English, and higher study guidance.",
    },
    {
      logo: "/assets/partners/westford.jpg",
      name: "Westford Immigration Services",
      tagline: "Powered KUCC Education Expo 1.0",
      description:
        "Westford Immigration Services, founded in 2021 in Dhaka, specializes in Canadian immigration pathways including Express Entry, PNPs, study permits, work permits, business migration, and family sponsorship.",
    },
    {
      logo: "/assets/partners/globaledu.png",
      name: "Global Education Expert",
      tagline: "Counseling Partner",
      description:
        "Global Education Expert provides professional counseling for undergraduate and postgraduate programs, along with scholarship and study abroad guidance.",
    },
    {
      logo: "/assets/partners/growthaholics.png",
      name: "Growthaholics",
      tagline: "Title Sponsor of BoiPokar Sondhane 2.0",
      description:
        "Growthaholics is a corporate training and consultancy house founded in 2009. It focuses on business communication, emotional intelligence, leadership, and management.",
    },
    {
      logo: "/assets/partners/bohubrihi.png",
      name: "Bohubrihi",
      tagline: "E-learning Partner of BoiPokar Sondhane 2.0",
      description:
        "Bohubrihi is Bangladesh’s leading e-learning platform offering online courses, professional training, and corporate eLearning services.",
    },
    {
      logo: "/assets/partners/computer_city.png",
      name: "Computer City",
      tagline: "Technology & Hardware Partner",
      description:
        "Computer City supplies laptops, components, and accessories with reliable after-sales support—powering our lab setups and event logistics.",
    },

  ];

  // Media partners (separate row). You asked for KU Insiders.
  const mediaPartners = [
    {
      logo: "/assets/partners/ku_insiders.jpg", // add this file
      name: "KU Insiders",
      tagline: "Media Partner",
      description:
        "KU Insiders is the campus-focused media platform that highlights student stories, events, and achievements across Khulna University.",
    },
    {
      logo: "/assets/partners/tbtku.jpg", // Add this file
      name: "TBTKU",
      tagline: "Media Partner",
      description:
        "TBTKU provides insight into various student-run activities, events, and the daily life at Khulna University.",
    },
  ];

  // Photography partners (exactly two frames in one row).
  // If you only have one logo, the second frame becomes a tasteful placeholder.
 // Photography partners (exactly two frames in one row).
const photographyPartners = [
  {
    logo: "/assets/partners/photo_flick.png",
    name: "Photoflick",
    tagline: "Photography Partner",
    description:
      "Capturing our events so the memories last—Photoflick is the official photography partner for KUCC.",
  },
  {
    logo: "/assets/partners/pixtory.jpg", // ⬅️ add this file
    name: "Pixtory",
    tagline: "Photography Partner",
    description:
      "Creative event & brand photography with fast edits and shareable cloud galleries.",
  },
];

  // gradient palettes
  const cardGradients = [
    "from-pink-200 via-rose-200 to-orange-200",
    "from-indigo-200 via-blue-200 to-cyan-200",
    "from-emerald-200 via-green-200 to-lime-200",
    "from-amber-200 via-yellow-200 to-orange-200",
    "from-violet-200 via-purple-200 to-fuchsia-200",
    "from-sky-200 via-cyan-200 to-emerald-200",
  ];
  const mediaCardGradients = [
    "from-slate-200 via-slate-300 to-slate-200",
    "from-blue-200 via-sky-200 to-cyan-200",
    "from-purple-200 via-fuchsia-200 to-pink-200",
    "from-teal-200 via-emerald-200 to-green-200",
  ];
  const photoCardGradients = [
    "from-amber-200 via-rose-200 to-pink-200",
    "from-rose-200 via-orange-200 to-amber-200",
  ];

  return (
    <div className="bg-gradient-to-tr from-[#55b2b2] to-[#0c80b2] py-20 px-5 md:px-20">
      {/* Heading */}
      <section className="flex flex-col items-center justify-center mb-16">
        <h1 className="text-xl sm:text-2xl md:text-5xl font-semibold text-white text-center animate-fadeIn">
          Our Partners & Sponsors
        </h1>
        <p className="text-white/90 mt-3 text-center max-w-3xl">
          Huge thanks to the brands who support our programs and student growth.
        </p>
      </section>

      {/* General Partners Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
        {partnersData.map((p, i) => (
          <div
            key={p.name}
            className={`bg-gradient-to-br ${cardGradients[i % cardGradients.length]} rounded-2xl shadow-xl p-6 md:p-8 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
          >
            <div className="w-32 h-32 md:w-36 md:h-36 flex items-center justify-center rounded-2xl mb-5 bg-white/50 border border-white/60 backdrop-blur-sm">
              <img src={p.logo} alt={p.name} className="max-h-24 object-contain" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center">{p.name}</h2>
            <p className="text-sm md:text-base text-gray-700 italic text-center mt-1">{p.tagline}</p>
            <p className="text-sm md:text-base text-gray-800 text-center mt-3">{p.description}</p>
          </div>
        ))}
      </section>

      {/* Media Partners Row (separate container + distinct bg) */}
      <section className="mt-16 rounded-3xl p-6 md:p-10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
          Media Partners
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {mediaPartners.map((m, i) => (
            <div
              key={m.name}
              className={`bg-gradient-to-br ${mediaCardGradients[i % mediaCardGradients.length]} rounded-2xl shadow-lg p-6 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="w-28 h-28 flex items-center justify-center rounded-2xl mb-4 bg-white/60 border border-white/70 backdrop-blur-sm">
                <img src={m.logo} alt={m.name} className="max-h-20 object-contain" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 text-center">{m.name}</h3>
              <p className="text-xs text-slate-700 italic text-center mt-1">{m.tagline}</p>
              <p className="text-xs text-slate-800 text-center mt-2">{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photography Partners Row (exactly two frames, different bg + gradients) */}
      <section className="mt-12 rounded-3xl p-6 md:p-10 bg-gradient-to-r from-amber-50 via-rose-50 to-pink-50">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">
          Photography Partners
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {photographyPartners.map((ph, i) => (
            <div
              key={ph.name}
              className={`bg-gradient-to-br ${photoCardGradients[i % photoCardGradients.length]} rounded-2xl shadow-lg p-6 flex flex-col items-center transition-all duration-300 hover:shadow-xl`}
            >
              <div className="w-32 h-32 flex items-center justify-center rounded-2xl mb-4 bg-white/60 border border-white/70 backdrop-blur-sm">
                <img src={ph.logo} alt={ph.name} className="max-h-24 object-contain" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center">{ph.name}</h3>
              <p className="text-sm text-gray-700 italic text-center mt-1">{ph.tagline}</p>
              <p className="text-sm text-gray-800 text-center mt-2">{ph.description}</p>
            </div>
          ))}

          {/* If only one partner, render a tasteful second frame */}
          {photographyPartners.length === 1 && (
            <div className="bg-gradient-to-br from-pink-200 via-rose-200 to-amber-200 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center opacity-90">
              <div className="w-32 h-32 flex items-center justify-center rounded-2xl mb-3 bg-white/60 border border-white/70">
                <span className="text-gray-700 font-semibold">Your Logo</span>
              </div>
              <p className="text-sm text-gray-800 text-center">
                Become a photography partner for our upcoming events.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Partners;
