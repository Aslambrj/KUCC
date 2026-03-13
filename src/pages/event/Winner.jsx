// Winner.jsx
import React from "react";

// ✅ Sample data (image filenames only — all from the same path)
const winnersData = {
  english: [
    { title: "Champion", img: "/assets/ProsWinner/Echampion.jpg" },
    { title: "1st Runner Up", img: "/assets/ProsWinner/Erunner1.jpg" },
    { title: "2nd Runner Up", img: "/assets/ProsWinner/Erunner2.jpg" },
  ],
  bangla: [
    { title: "Champion", img: "/assets/ProsWinner/Bchampion.jpg" },
    { title: "1st Runner Up", img: "/assets/ProsWinner/Brunner1.jpg" },
    { title: "2nd Runner Up", img: "/assets/ProsWinner/Brunner2.jpg" },
  ],
};

// ✅ Individual winner card
const WinnerCard = ({ title, img }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: "16px",
      padding: "25px",
      textAlign: "center",
      width: "350px",
      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
      transition: "transform 0.3s ease-in-out",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    <img
      src={img}
      alt={title}
      style={{
        width: "100%",
        height: "350px",
        objectFit: "cover",
        borderRadius: "12px",
        marginBottom: "16px",
      }}
    />
    <h3
      style={{
        fontSize: "1.6em",
        color: "#333",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      {title}
    </h3>
  </div>
);

// ✅ Main Winner Component
const Winner = () => {
  return (
    <div
      style={{
        background: "linear-gradient(45deg, #1e3c72, #2a5298)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 20px",
        color: "#fff",
      }}
    >
      {/* Main Title */}
      <h2
        style={{
          fontSize: "2.8em",
          fontWeight: "bold",
          color: "#ffdd57",
          marginBottom: "12px",
          textAlign: "center",
        }}
      >
        🏆 Winners Announcement
      </h2>
      <p
        style={{
          fontSize: "1.2em",
          marginBottom: "35px",
          color: "#e5e5e5",
          textAlign: "center",
        }}
      >
        Congratulations to our event champions!
      </p>

      {/* Event Title */}
      <h1 style={{ fontSize: "2.6em", marginBottom: "30px", textAlign: "center" }}>
        Public Speaking Pros 3.0 
      </h1>

      {/* English Segment */}
      <h2 style={{ fontSize: "2em", marginBottom: "25px" }}>English Segment</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
          marginBottom: "60px",
        }}
      >
        {winnersData.english.map((w, idx) => (
          <WinnerCard key={idx} title={w.title} img={w.img} />
        ))}
      </div>

      {/* Bangla Segment */}
      <h2 style={{ fontSize: "2em", marginBottom: "25px" }}>বাংলা সেগমেন্ট</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {winnersData.bangla.map((w, idx) => (
          <WinnerCard key={idx} title={w.title} img={w.img} />
        ))}
      </div>
    </div>
  );
};

export default Winner;
