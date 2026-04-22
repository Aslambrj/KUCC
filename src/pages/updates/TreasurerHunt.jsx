import React, { useEffect, useState } from "react";

const TreasureHunt = () => {
  const registerLink = "https://forms.gle/UjTDroQ1ufa9pyu69";

  const [darkMode, setDarkMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const deadline = new Date("April 24, 2026 23:59:59").getTime();

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

  return (
    <div className={`min-h-screen flex flex-col items-center p-6 transition-all duration-500 ${darkMode ? "bg-black text-white" : "bg-blue-100 text-black"}`}>
      
      {/* Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mb-4 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-600 transition"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Enter Loop Mode"}
      </button>

      <div className={`max-w-4xl w-full rounded-2xl shadow-lg overflow-hidden ${darkMode ? "bg-gray-900" : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"}`}>
        {/* Image */}
        <img
          src="/assets/TreasureHunt/hunt.jpeg"
          alt="Treasure Hunt"
          className="w-full h-auto object-contain"
        />

        <div className="p-6 space-y-6">

          {/* Title */}
          <h1 className="text-3xl font-bold text-center glitch">
            NEXTGEN 3.0 TREASURE HUNT
          </h1>

          <p className="text-center font-semibold text-lg">
            𝗗𝗘𝗥 𝗔𝗡𝗙𝗔𝗡𝗚 𝗜𝗦𝗧 𝗗𝗔𝗦 𝗘𝗡𝗗𝗘
          </p>

          {/* Countdown */}
          <div className="text-center text-xl font-semibold">
            {timeLeft.expired ? (
              <span className="text-red-500">Registration Closed</span>
            ) : (
              <span>
                ⏳ {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
              </span>
            )}
          </div>

          {/* FULL ORIGINAL TEXT PRESERVED */}

          <p>
            Batch 26, welcome to the loop.
          </p>

          <p>
            On 25 April, Khulna University stops being a campus. It becomes a puzzle board where clues don’t just lead forward, they come back for you later.
          </p>

          <p>
            This is <b>NextGen 3.0 Treasure Hunt.</b>
          </p>

          <p>
            Teams of 3 to 5. Cross-discipline allowed. Because no single brain solves this alone.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">Expect this:</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Clues that don’t behave normally</li>
              <li>Answers that unlock new problems</li>
              <li>And moments where you’ll swear you’ve seen this before</li>
            </ul>
          </div>

          <p>
            You are not just searching for a treasure.
            <br />
            <b>You are trying to understand the system.</b>
          </p>

          <p>
            To enter the loop, you must register for <b>NextGen 3.0.</b>
          </p>

          <p>
            And once you’re inside, more games unlock—Content Writing, PowerPoint Presentation, Ad Making Contest. Same campus. Different realities.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">⏰ Deadline</h2>
            <p>
              Registration closes <b>24 April, 11:59 PM.</b>
              <br />
              After that, the door does not reopen the same way.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">📍 Registration Options</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Online registration form</li>
              <li>Cafeteria booth (9:00 AM – 5:00 PM)</li>
              <li>Classroom visits by representatives</li>
            </ul>
          </div>

            <p className="text-center text-lg font-semibold tracking-wide">
      ⚠️ One last thing...
    </p>

    <p className="text-center italic text-xl glitch-text">
      If something feels familiar during the hunt…
    </p>

    <p className="text-center italic text-2xl font-bold text-red-500 animate-pulse">
      It probably already happened.
    </p>

          {/* Tick Tock Animation */}
          <p className="text-center text-lg font-bold animate-pulse">
            Tick. Tock.
          </p>

          {/* Button */}
          <div className="flex justify-center pt-6">
            <a
              href={registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-96 text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-110 transition"
            >
              🧭 Enter the Hunt
            </a>
          </div>

        </div>
      </div>

      {/* Glitch Effect */}
      <style>
        {`
        .glitch {
          position: relative;
        }

        .glitch::before,
        .glitch::after {
          content: "NEXTGEN 3.0 TREASURE HUNT";
          position: absolute;
          left: 0;
          width: 100%;
        }

        .glitch::before {
          color: red;
          animation: glitchTop 1s infinite;
        }

        .glitch::after {
          color: blue;
          animation: glitchBottom 1s infinite;
        }

        @keyframes glitchTop {
          0% { transform: translate(-2px, -2px); }
          100% { transform: translate(2px, 2px); }
        }

        @keyframes glitchBottom {
          0% { transform: translate(2px, 2px); }
          100% { transform: translate(-2px, -2px); }
        }
        `}
      </style>
    </div>
  );
};

export default TreasureHunt;