import React from "react";

// Winners data
const winnersData = [
  { title: "Champion", img: "/assets/MindTheHack/champion.jpg" },
  { title: "Runner Up", img: "/assets/MindTheHack/runner.jpg" },
  { title: "Emerging Team", img: "/assets/MindTheHack/emerging.jpg" },
];

// Winner Card
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

// Main Component
const MindTheHackWinner = () => {
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
      {/* Title */}
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
        Celebrating innovation and creativity!
      </p>

      {/* Event Title */}
      <h1
        style={{
          fontSize: "2.6em",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        Mind the Hack 2.0
      </h1>

      {/* Winner Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {winnersData.map((winner, index) => (
          <WinnerCard key={index} title={winner.title} img={winner.img} />
        ))}
      </div>
    </div>
  );
};

export default MindTheHackWinner;