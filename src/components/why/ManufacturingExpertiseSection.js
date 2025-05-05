import React from "react";

const ManufacturingExpertiseSection = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.textContainer}>
          <h3 style={styles.subtitle}>CUTTING-EDGE</h3>
          <h2 style={styles.title}>MANUFACTURING EXPERTISE</h2>
          <p style={styles.description}>
            Equipped with cutting-edge technology and operated by skilled craftsmen, our
            manufacturing facilities are at the forefront of innovation. We employ advanced
            techniques and precision assembly to consistently craft solar panels of unparalleled
            quality.
          </p>
        </div>
        <div style={styles.imageContainer}>
          <img
            src="https://res.cloudinary.com/du0cxgoic/image/upload/v1745911370/cld-sample-2.jpg" // Replace with actual image path
            alt="Manufacturing process"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "60px 20px",
    backgroundColor: "#ffffff",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "40px",
  },
  textContainer: {
    flex: "1 1 500px",
  },
  subtitle: {
    color: "#f4b622",
    fontSize: "26px",
    fontWeight: "500",
    marginBottom: "10px",
  },
  title: {
    color: "#015e6d",
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  description: {
    color: "#333",
    fontSize: "16px",
    lineHeight: "1.8",
  },
  imageContainer: {
    flex: "1 1 500px",
  },
  image: {
    width: "100%",
    borderRadius: "60px 4px 60px 4px",
    objectFit: "cover",
  },
};

export default ManufacturingExpertiseSection;
