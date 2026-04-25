import React, { useEffect, useState } from "react";

const genSubmission = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const deadline = new Date("April 27, 2026 23:59:59").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ expired: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const events = [
    {
      title: "Content Writing",
      image: "/assets/submission/writing.jpeg",
      link: "https://forms.gle/seN5LcNqDmJKSTch8",
      desc: "Turn ideas into powerful words. Express, influence, and inspire."
    },
    {
      title: "Slide Making",
      image: "/assets/submission/slide.jpeg",
      link: "https://forms.gle/DeRirY9nQTdyYDgaA",
      desc: "Design presentations that speak louder than words."
    },
    {
      title: "Ad Making",
      image: "/assets/submission/ads.jpeg",
      link: "https://forms.gle/s2BZ2FnwTaDgryYVA",
      desc: "Create ads that grab attention and leave impact."
    }
  ];

  return (
    <div className={`min-h-screen p-6 transition-all duration-500 ${darkMode ? "bg-black text-white" : "bg-blue-100 text-black"}`}>

      {/* Toggle */}
      {/* <button
        onClick={() => setDarkMode(!darkMode)}
        className="mb-6 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-600"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Enter Loop Mode"}
      </button> */}

      {/* HEADER */}
      <div className="text-center mb-10 max-w-3xl mx-auto space-y-4">
        
        <h1 className="text-4xl font-bold">
          𝗡𝗲𝘅𝘁𝗚𝗲𝗻 𝟯.𝟬 | 𝗧𝗼𝗽𝗶𝗰𝘀 𝗥𝗲𝘃𝗲𝗮𝗹𝗲𝗱 & 𝗦𝘂𝗯𝗺𝗶𝘀𝘀𝗶𝗼𝗻 𝗪𝗶𝗻𝗱𝗼𝘄 𝗢𝗽𝗲𝗻
        </h1>

        <p>
          The wait is over. NextGen 3.0 officially unveils its competition segments and topics, inviting participants to step forward with creativity, critical thinking, and innovation.
        </p>

        <p>
          From content writing to presentation and ad making, each segment is designed to challenge your perspective and showcase your potential.
        </p>

        {/* Countdown */}
        <div className="text-xl font-semibold mt-4">
          {timeLeft.expired ? (
            <span className="text-red-500">Submission Closed</span>
          ) : (
            <span>
              ⏳ {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
            </span>
          )}
        </div>

        <p className="font-semibold">
          📌 Submission Deadline: 27 April, 11:59 PM
        </p>

      </div>

      {/* EVENT CARDS */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className={`rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition ${darkMode ? "bg-gray-900" : "bg-white"}`}
          >
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />

            <div className="p-5 text-center space-y-4">
              <h2 className="text-xl font-bold">{event.title}</h2>
              <p className="text-sm">{event.desc}</p>

              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:scale-110 transition"
              >
                🚀 Submit Entry
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* RULES + SUBMISSION */}
      <div className="max-w-3xl mx-auto mt-12 text-center space-y-4">
        <p>
  Participants are requested to carefully review and follow all rules and regulations mentioned in the respective registration forms before submission. Failure to comply with the guidelines may result in disqualification.
</p>
       
      </div>

      {/* FOOTER */}
      <div className="text-center mt-12 space-y-2">
        <p className="text-lg font-semibold">
          Step in. Create impact.
        </p>
        <p className="text-xl font-bold text-red-500">
          Be part of something transformative.
        </p>
      </div>

    </div>
  );
};

export default genSubmission;