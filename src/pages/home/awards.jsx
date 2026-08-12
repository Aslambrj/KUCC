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
      title: "Best University Club Award",
      year: "2025",
      description:
        "Achieved the prestigious Best Club Award for the second consecutive year, reflecting KUCC’s sustained excellence, innovation, and dedication to empowering student's career journeys.",
      icon: "🏆",
    },
    {
      title: "Best University Club Award",
      year: "2024",
      description:
        "Awarded as the Best University Club for exceptional leadership, impactful club initiatives, and consistent contribution to student development across the university.",
      icon: "🏆",
    },
  ];

  return (
    <>
      <style>{`
        .awards {
          position: relative;
          padding: 90px 10%;
          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(40, 120, 200, 0.08),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(30, 90, 168, 0.06),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #f8fbff 0%,
              #f1f7fd 50%,
              #edf5fc 100%
            );
          color: #243447;
          overflow: hidden;
        }

        /* SUBTLE DECORATIVE BACKGROUND */
        .awards::before {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: rgba(40, 120, 200, 0.05);
          top: -180px;
          right: -100px;
          pointer-events: none;
        }

        .awards::after {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(30, 90, 168, 0.04);
          bottom: -150px;
          left: -100px;
          pointer-events: none;
        }

        .section-title {
          position: relative;
          z-index: 1;
          text-align: center;
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 60px;
          color: #174A7E;
          letter-spacing: -0.5px;
        }

        .section-title::after {
          content: "";
          display: block;
          width: 60px;
          height: 4px;
          margin: 14px auto 0;
          border-radius: 10px;
          background: #2878C8;
        }

        .sub-title {
          position: relative;
          z-index: 1;
          text-align: center;
          font-size: 29px;
          margin: 85px 0 40px;
          color: #174A7E;
          font-weight: 750;
        }

        .awards-container,
        .award-images,
        .achievement-images {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(300px, 1fr)
          );
          gap: 30px;
        }

        /* AWARD CARDS */
        .award-card {
          background: #ffffff;
          padding: 32px;
          border-radius: 18px;
          border: 1px solid #dce7f2;
          box-shadow:
            0 8px 25px rgba(30, 74, 126, 0.07),
            0 2px 6px rgba(30, 74, 126, 0.04);
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
          animation: fadeUp 0.8s ease forwards;
        }

        .award-card:hover {
          transform: translateY(-8px);
          border-color: #b8d3ea;
          box-shadow:
            0 18px 40px rgba(30, 90, 168, 0.13),
            0 5px 12px rgba(30, 90, 168, 0.06);
        }

        .award-icon {
          font-size: 42px;
          margin-bottom: 14px;
        }

        .award-card h3 {
          color: #1f4264;
          font-size: 21px;
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .award-year {
          display: inline-block;
          color: #2878C8;
          font-weight: 700;
          font-size: 15px;
          margin-bottom: 15px;
        }

        .award-card p {
          color: #5b6b7c;
          line-height: 1.75;
          margin: 0;
        }

        /* IMAGE CARDS */
        .image-card {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          background: #ffffff;
          box-shadow:
            0 12px 30px rgba(30, 74, 126, 0.12);
          border: 1px solid #dce7f2;
          min-height: 300px;
        }

        .image-card img {
          width: 100%;
          height: 100%;
          min-height: 300px;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .image-card:hover img {
          transform: scale(1.06);
        }

        .image-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 35px 20px 18px;
          background: linear-gradient(
            to top,
            rgba(10, 35, 60, 0.85),
            rgba(10, 35, 60, 0.35),
            transparent
          );
          color: #ffffff;
          font-weight: 700;
          font-size: 16px;
        }

        /* ACHIEVEMENT BOX */
        .achievement-box {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 50px auto;
          background: #ffffff;
          padding: 38px 42px;
          border-radius: 18px;
          border: 1px solid #dce7f2;
          box-shadow:
            0 10px 30px rgba(30, 74, 126, 0.08);
          line-height: 1.8;
        }

        .achievement-box p {
          color: #526477;
          margin-bottom: 20px;
        }

        .achievement-box p:last-child {
          margin-bottom: 0;
        }

        /* COUNTER */
        .counter {
          font-size: 44px;
          font-weight: 850;
          color: #1E5AA8;
          text-align: center;
          margin-bottom: 22px;
        }

        .highlight {
          color: #1E5AA8;
          font-weight: 700;
        }

        /* ANIMATION */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .awards {
            padding: 70px 6%;
          }

          .section-title {
            font-size: 30px;
          }

          .sub-title {
            font-size: 25px;
            margin-top: 65px;
          }

          .achievement-box {
            padding: 28px 24px;
          }

          .counter {
            font-size: 38px;
          }
        }

        @media (max-width: 640px) {
          .section-title {
            font-size: 27px;
          }

          .sub-title {
            font-size: 22px;
          }

          .awards-container,
          .award-images,
          .achievement-images {
            grid-template-columns: 1fr;
          }

          .award-card {
            padding: 26px;
          }

          .image-card,
          .image-card img {
            min-height: 260px;
          }
        }
      `}</style>

      <section className="awards" id="awards">
        <h2 className="section-title">
          Awards & Achievements
        </h2>

        {/* AWARDS TEXT */}
        <div className="awards-container">
          {awardsData.map((award, index) => (
            <div className="award-card" key={index}>
              <div className="award-icon">{award.icon}</div>

              <h3>{award.title}</h3>

              <span className="award-year">
                {award.year}
              </span>

              <p>{award.description}</p>
            </div>
          ))}
        </div>

        {/* AWARD IMAGES */}
        <div
          className="award-images"
          style={{ marginTop: "50px" }}
        >
          <div className="image-card">
            <img
              src="/assets/awards/award-2025.jpg"
              alt="KUCC Award 2025"
            />

            <div className="image-overlay">
              Best Club Award – 2025
            </div>
          </div>

          <div className="image-card">
            <img
              src="/assets/awards/award-2024.jpg"
              alt="KUCC Award 2024"
            />

            <div className="image-overlay">
              Best Club Award – 2024
            </div>
          </div>
        </div>

        {/* NATIONAL RECOGNITION */}
        <h3 className="sub-title">
          National Recognition
        </h3>

        {/* ACHIEVEMENT IMAGES */}
        <div className="achievement-images">
          <div className="image-card">
            <img
              src="/assets/awards/sew2.jpg"
              alt="SEW National Award"
            />

            <div className="image-overlay">
              SEW National Initiative – Dhaka
            </div>
          </div>

          <div className="image-card">
            <img
              src="/assets/awards/sew1.jpg"
              alt="Storytelling Award"
            />

            <div className="image-overlay">
              National Storytelling Segment
            </div>
          </div>
        </div>

        {/* ACHIEVEMENT DESCRIPTION */}
        <div className="achievement-box">
          <div className="counter">
            <Counter end={1} />
            st Runner-up
          </div>

          <p>
            Khulna University Club achieved{" "}
            <span className="highlight">
              1st Runner-up
            </span>{" "}
            in the Video Segment of the{" "}
            <span className="highlight">
              Social & Emotional Well-Being (SEW)
            </span>{" "}
            National Initiative, jointly led by UGC Bangladesh
            and UNESCO Dhaka. The award was received by{" "}
            <span className="highlight">
              Ahmed Al Faysal
            </span>
            , President of KUCC, on{" "}
            <span className="highlight">
              15 December 2025
            </span>{" "}
            at{" "}
            <span className="highlight">
              Le Méridien, Dhaka
            </span>
            .
          </p>

          <p>
            In the Individual Storytelling Segment,{" "}
            <span className="highlight">
              Md Rifat Bhuiyan
            </span>{" "}
            secured{" "}
            <span className="highlight">
              1st Runner-up
            </span>
            , while{" "}
            <span className="highlight">
              Hamim Ahammed
            </span>{" "}
            achieved{" "}
            <span className="highlight">
              8th Position
            </span>
            , showcasing KUCC’s national-level excellence.
          </p>
        </div>
      </section>
    </>
  );
};

export default Awards;