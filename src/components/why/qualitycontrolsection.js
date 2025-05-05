import React from "react";

const QualityControlSection = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            src="https://res.cloudinary.com/du0cxgoic/image/upload/v1745911370/cld-sample-2.jpg" // Replace with actual path or import
            alt="Solar panel manufacturing"
            style={styles.image}
          />
        </div>
        <div style={styles.textContainer}>
          <h3 style={styles.subtitle}>ADVANCED QUALITY</h3>
          <h2 style={styles.title}>CONTROL</h2>
          <p style={styles.description}>
            Rayzon Solar utilizes state-of-the-art technology and stringent testing protocols to
            ensure exceptional quality control. This meticulous approach guarantees high
            performance, reliability, and efficiency across all our solar products. With Rayzon
            Solar, you receive top-tier energy solutions designed for durability, delivering clean
            and sustainable power to meet your needs.
          </p>
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
    gap: "40px",
    flexWrap: "wrap", // ensures responsiveness
  },
  imageContainer: {
    flex: "1 1 500px",
  },
  image: {
    width: "100%",
    borderRadius: "60px 4px 60px 4px",
    objectFit: "cover",
  },
  textContainer: {
    flex: "1 1 500px",
  },
  subtitle: {
    color: "#f4b622",
    fontSize: "26px",
    fontWeight: "500",
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
};

export default QualityControlSection;
