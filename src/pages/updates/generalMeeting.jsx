import React from "react";

const styles = {
  section: {
    margin: "2rem 0",
    padding: "2.5rem",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)", // deep blue gradient
    color: "#f4f6fa", // light text on dark background
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textAlign: "center",
  },
  card: {
    border: "none",
    padding: "2rem",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #ffffffcc, #f8f9ffdd)", // subtle light gradient
    boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
    color: "#222", // dark text inside card
    marginBottom: "1.5rem", // added margin bottom to create space between cards
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    margin: "1rem 0",
    color: "#2a5298",
  },
  date: {
    display: "inline-block",
    margin: "0.5rem 0 1rem",
    padding: "6px 12px",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #ff9966, #ff5e62)", // orange-red gradient
    color: "#fff",
    fontWeight: "bold",
    fontSize: "0.95rem",
  },
  location: {
    display: "inline-block",
    margin: "0.5rem 0 1rem",
    padding: "6px 12px",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #36d1dc, #5b86e5)", // teal → blue gradient
    color: "#fff",
    fontWeight: "bold",
    fontSize: "0.95rem",
  },
  gallery: {
    marginTop: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "1.5rem",
  },
  imgWrapper: {
    borderRadius: "16px",
    padding: "5px",
    background: "linear-gradient(135deg, #ff512f, #dd2476)", // orange → pink gradient
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease",
  },
  img: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "12px",
  },
};

const Latest = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>General Meeting</h2>

      {/* New Meeting */}
      <div style={styles.card}>
        <h3 style={styles.subtitle}>Khulna University Career Club General Meeting</h3>
        <span style={styles.date}>08 September 2025</span>
        <div>
          <p>
            <strong>Time:</strong> 5:00 – 6:00 PM
          </p>
          <span style={styles.location}>📍 DSA, 3rd Floor</span>
        </div>

        <div>
          <p>
            The Khulna University Career Club held its General Meeting today, September 8, 2025, with active participation from its members. The agenda centered on upcoming programs and strategic planning to ensure impactful execution in the coming months.
          </p>
          <p>
            The discussions reflected the commitment and enthusiasm of our members, whose ideas and contributions continue to strengthen KUCC’s initiatives. With this momentum, KUCC remains dedicated to fostering professionalism, leadership, and meaningful opportunities for its community.
          </p>
        </div>

        {/* Picture Cards */}
        <div style={styles.gallery}>
          <h3 style={styles.subtitle}>Event Highlights</h3>
          <div style={styles.grid}>
            <div style={styles.imgWrapper}>
              <img style={styles.img} src="/assets/general/pic6.jpg" alt="Event 1" />
            </div>
            <div style={styles.imgWrapper}>
              <img style={styles.img} src="/assets/general/pic7.jpg" alt="Event 2" />
            </div>
            <div style={styles.imgWrapper}>
              <img style={styles.img} src="/assets/general/pic8.jpg" alt="Event 3" />
            </div>
            <div style={styles.imgWrapper}>
              <img style={styles.img} src="/assets/general/pic9.jpg" alt="Event 4" />
            </div>
            
          </div>
        </div>
      </div>

      {/* Previous Meeting */}
      <div style={styles.card}>
        <h3 style={styles.subtitle}>Batch 25 Welcome & CV Writing Workshop</h3>
        <span style={styles.date}>01 August 2025</span>
        <div>
          <p>
            <strong>Time:</strong> 5:00 – 6:00 PM
          </p>
          <span style={styles.location}>📍 DSA, 3rd Floor</span>
        </div>

        <div>
          <p>
            Khulna University Career Club was proud to host another impactful General Meeting, where we welcomed the vibrant 25th Batch into our community for the very first time after their onboarding event. Their inclusion marks the beginning of a new chapter of ideas, energy, and collaboration within KUCC.
          </p>
          <p>
            The session was led by <strong>Sumaiya Afrin Arthi</strong>, Vice President of KUCC, on the topic <em>Mastering CV Writing</em>. Through her guidance, members explored the essentials of creating professional CVs that reflect not only qualifications but also individuality and career aspirations. The session served as a practical roadmap for students preparing to step into competitive professional arenas.
          </p>
          <p>
            As we continue to expand, KUCC remains dedicated to shaping opportunities, building confidence, and preparing our members for success beyond the university. The journey of Batch 25 with KUCC has just begun, and we are excited for what lies ahead.
          </p>
        </div>

        {/* Picture Cards */}
        <div style={styles.gallery}>
          <h3 style={styles.subtitle}>Event Highlights</h3>
          <div style={styles.grid}>
            <div style={styles.imgWrapper}>
              <img style={styles.img} src="/assets/general/pic1.jpg" alt="Event 1" />
            </div>
            <div style={styles.imgWrapper}>
              <img style={styles.img} src="/assets/general/pic2.jpg" alt="Event 2" />
            </div>
            <div style={styles.imgWrapper}>
              <img style={styles.img} src="/assets/general/pic3.jpg" alt="Event 3" />
            </div>
            <div style={styles.imgWrapper}>
              <img style={styles.img} src="/assets/general/pic4.jpg" alt="Event 4" />
            </div>
            <div style={styles.imgWrapper}>
              <img style={styles.img} src="/assets/general/pic5.jpg" alt="Event 5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};            

export default Latest;
