import React from "react";

const Awards = () => {
  const awardsData = [
    {
      title: "Best University Career Club Award",
      year: "2023",
      description:
        "Recognized for outstanding contribution to student career development.",
      icon: "🏆"
    },
    {
      title: "Winner – Hult Prize On Campus",
      year: "2022",
      description:
        "KUCC team won the on-campus round of the Hult Prize competition.",
      icon: "🥇"
    },
    {
      title: "Successful Event Organizer",
      year: "2021",
      description:
        "Successfully organized large-scale career and skill development programs.",
      icon: "🎯"
    }
  ];

  return (
    <>
      <style>{`
        .awards {
          padding: 90px 10%;
          background: linear-gradient(135deg, #0f172a, #020617);
          color: #e5e7eb;
        }

        .section-title {
          text-align: center;
          font-size: 34px;
          margin-bottom: 60px;
          color: #38bdf8;
          letter-spacing: 1px;
        }

        .awards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .award-card {
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(10px);
          padding: 30px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s ease;
          animation: fadeUp 0.8s ease forwards;
        }

        .award-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(56, 189, 248, 0.25);
        }

        .award-icon {
          font-size: 42px;
          margin-bottom: 15px;
        }

        .award-card h3 {
          color: #f8fafc;
          margin-bottom: 8px;
          font-size: 20px;
        }

        .award-year {
          font-size: 14px;
          color: #38bdf8;
          font-weight: 600;
        }

        .award-card p {
          margin-top: 12px;
          color: #cbd5f5;
          line-height: 1.6;
          font-size: 15px;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .section-title {
            font-size: 26px;
          }
        }
      `}</style>

      <section className="awards" id="awards">
        <h2 className="section-title">Awards & Achievements</h2>

        <div className="awards-container">
          {awardsData.map((award, index) => (
            <div className="award-card" key={index}>
              <div className="award-icon">{award.icon}</div>
              <h3>{award.title}</h3>
              <span className="award-year">{award.year}</span>
              <p>{award.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Awards;
