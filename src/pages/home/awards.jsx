import React, { useEffect, useState } from "react";

/* COUNTER COMPONENT */
const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}</span>;
};

const Awards = () => {
  const awardsData = [
    {
      title: "Best University Career Club Award",
      year: "2025",
      description:
        "Achieved the prestigious Best Club Award for the second consecutive year, reflecting KUCC’s sustained excellence, innovation, and dedication to empowering students’ career journeys.",
      icon: "🏆",
    },
    {
      title: "Best University Career Club Award",
      year: "2024",
      description:
        "Awarded as the Best University Career Club for exceptional leadership, impactful career initiatives, and consistent contribution to student skill development across the university.",
      icon: "🏆",
    },
  ];

  return (
    <>
      <style>{`
        .awards {
          padding: 90px 10%;
          background: linear-gradient(135deg, #111827, #020617);
          color: #e5e7eb;
        }

        .section-title {
          text-align: center;
          font-size: 34px;
          margin-bottom: 60px;
          color: #38bdf8;
        }

        .sub-title {
          text-align: center;
          font-size: 28px;
          margin: 80px 0 40px;
          color: #38bdf8;
        }

        .awards-container,
        .award-images,
        .achievement-images {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .award-card {
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(10px);
          padding: 30px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: 0.4s;
          animation: fadeUp 0.8s ease forwards;
        }

        .award-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(56, 189, 248, 0.25);
        }

        .award-icon {
          font-size: 42px;
          margin-bottom: 12px;
        }

        .award-year {
          color: #38bdf8;
          font-weight: 600;
          font-size: 15px;
        }

        .image-card {
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 15px 30px rgba(0,0,0,0.4);
        }

        .image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .image-card:hover img {
          transform: scale(1.08);
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 15px;
          background: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
          font-weight: 600;
        }

        .achievement-box {
          max-width: 900px;
          margin: 50px auto;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(10px);
          padding: 35px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          line-height: 1.8;
        }

        .counter {
          font-size: 42px;
          font-weight: 800;
          color: #38bdf8;
          text-align: center;
          margin-bottom: 10px;
        }

        .highlight {
          color: #38bdf8;
          font-weight: 600;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media(max-width:640px){
          .section-title{font-size:26px;}
          .sub-title{font-size:22px;}
        }
      `}</style>

      <section className="awards" id="awards">
        <h2 className="section-title">Awards & Achievements</h2>

        {/* AWARDS TEXT */}
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

        {/* AWARD IMAGES */}
        <div className="award-images" style={{ marginTop: "50px" }}>
          <div className="image-card">
            <img src="/assets/awards/award-2025.jpg" alt="KUCC Award 2025" />
            <div className="image-overlay">Best Club Award – 2025</div>
          </div>
          <div className="image-card">
            <img src="/assets/awards/award-2024.jpg" alt="KUCC Award 2024" />
            <div className="image-overlay">Best Club Award – 2024</div>
          </div>
        </div>

        {/* ACHIEVEMENTS */}
        <h3 className="sub-title">National Recognition</h3>

        {/* ACHIEVEMENT IMAGES (ONLY TWO CARDS) */}
        <div className="achievement-images">
          <div className="image-card">
            <img src="/assets/awards/sew2.jpg" alt="SEW National Award" />
            <div className="image-overlay">SEW National Initiative – Dhaka</div>
          </div>

          <div className="image-card">
            <img src="/assets/awards/sew1.jpg" alt="Storytelling Award" />
            <div className="image-overlay">National Storytelling Segment</div>
          </div>
        </div>

        {/* SINGLE ACHIEVEMENT DESCRIPTION */}
        <div className="achievement-box">
          <div className="counter">
            <Counter end={1} />st Runner-up
          </div>

          <p>
            Khulna University Career Club achieved <span className="highlight">
            1st Runner-up</span> in the Video Segment of the
            <span className="highlight"> Social & Emotional Well-Being (SEW)</span>
            National Initiative, jointly led by UGC Bangladesh and UNESCO Dhaka.
            The award was received by <span className="highlight">
            Ahmed Al Faysal</span>, President of KUCC, on
            <span className="highlight"> 15 December 2025</span> at
            <span className="highlight"> Le Méridien, Dhaka</span>.
          </p>

          <p>
            In the Individual Storytelling Segment,
            <span className="highlight"> Md Rifat Bhuiyan</span> secured
            <span className="highlight"> 1st Runner-up</span>, while
            <span className="highlight"> Hamim Ahammed</span> achieved
            <span className="highlight"> 8th Position</span>, showcasing KUCC’s
            national-level excellence.
          </p>
        </div>
      </section>
    </>
  );
};

export default Awards;
