import React from "react";

const QualitySection = () => {
  const qualityData = [
    {
      title: "100%",
      subtitle: "Visual & EL Testing",
    },
    {
      title: "Tuv Ims",
      subtitle: "Certified",
    },
    {
      title: "Stringent",
      subtitle: "Hast Testing",
    },
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.content}>
        <h1 style={styles.heading}>
          Where Excellence In Solar Panels Illuminates Your World.
        </h1>

        <p style={styles.description}>
          At Rayzon, our passion for excellence illuminates every aspect of our
          solar panel manufacturing process. From the selection of premium
          materials to the final product that fuels homes and businesses with
          clean energy, quality is our guiding light. Here's how we ensure
          top-tier quality at every turn.
        </p>

        <h2 style={styles.qualityTitle}>Quality</h2>

        <div style={styles.cardGrid}>
          {qualityData.map((item, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.cardTitle}>{item.title}</div>
              <div style={styles.cardSubtitle}>{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: "#d9dbda", // light gray background
    padding: "60px 20px",
  },
  content: {
    maxWidth: "1200px",
    margin: "0 auto",
    color: "#1a202c",
    fontFamily: "'Segoe UI', sans-serif",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#0f5d6d",
    marginBottom: "16px",
    lineHeight: "1.4",
  },
  description: {
    fontSize: "16px",
    color: "#4a5568",
    maxWidth: "800px",
    lineHeight: "1.8",
    marginBottom: "40px",
  },
  qualityTitle: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#111",
    marginBottom: "24px",
  },
  cardGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
  },
  card: {
    flex: "1",
    minWidth: "220px",
    padding: "30px",
    borderRadius: "3px 3px 50px 3px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.09)",
    backgroundColor: "#ffffff",
    textAlign: "center",
    transition: "transform 0.3s ease",
  },
  cardTitle: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#111",
  },
  cardSubtitle: {
    fontSize: "14px",
    color: "#555",
  },
};

export default QualitySection;
