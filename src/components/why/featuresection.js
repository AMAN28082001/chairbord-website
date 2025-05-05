import React from "react";

const sectionData = [
  {
    id: 1,
    title: "CONTROL",
    subtitle: "ADVANCED QUALITY",
    description:
      "Rayzon Solar utilizes state-of-the-art technology and stringent testing protocols to ensure exceptional quality control. This meticulous approach guarantees high performance, reliability, and efficiency across all our solar products. With Rayzon Solar, you receive top-tier energy solutions designed for durability, delivering clean and sustainable power to meet your needs.",
    imageUrl:
      "https://res.cloudinary.com/du0cxgoic/image/upload/v1745911370/cld-sample-2.jpg",
  },
  {
    id: 2,
    title: "MANUFACTURING EXPERTISE",
    subtitle: "CUTTING-EDGE",
    description:
      "Equipped with cutting-edge technology and operated by skilled craftsmen, our manufacturing facilities are at the forefront of innovation. We employ advanced techniques and precision assembly to consistently craft solar panels of unparalleled quality.",
    imageUrl:
      "https://res.cloudinary.com/du0cxgoic/image/upload/v1745911370/cld-sample-2.jpg",
  },
  {
    id: 3,
    title: "SERVICE",
    subtitle: "CUSTOMER-CENTRIC",
    description:
      "Equipped with cutting-edge technology and operated by skilled craftsmen, our manufacturing facilities are at the forefront of innovation. We employ advanced techniques and precision assembly to consistently craft solar panels of unparalleled quality. \n Equipped with cutting-edge technology and operated by skilled craftsmen, our manufacturing facilities are at the forefront of innovation. We employ advanced techniques and precision assembly to consistently craft solar panels of unparalleled quality.",
    imageUrl:
      "https://res.cloudinary.com/du0cxgoic/image/upload/v1745911370/cld-sample-2.jpg",
  },
  {
    id: 4,
    title: "CONTROL",
    subtitle: "ADVANCED QUALITY",
    description:
      "Rayzon Solar utilizes state-of-the-art technology and stringent testing protocols to ensure exceptional quality control. This meticulous approach guarantees high performance, reliability, and efficiency across all our solar products. With Rayzon Solar, you receive top-tier energy solutions designed for durability, delivering clean and sustainable power to meet your needs.",
    imageUrl:
      "https://res.cloudinary.com/du0cxgoic/image/upload/v1745911370/cld-sample-2.jpg",
  },
  
  // Add more sections here as needed
];

const FeatureSections = () => {
  return (
    <div style={styles.wrapper}>
      {sectionData.map((section, index) => {
        const isImageLeft = index % 2 === 0;
        return (
          <div key={section.id} style={styles.section}>
            <div style={{ ...styles.container, flexDirection: isImageLeft ? "row" : "row-reverse" }}>
              <div style={styles.imageContainer}>
                <img
                  src={section.imageUrl}
                  alt={section.title}
                  style={styles.image}
                />
              </div>
              <div style={styles.textContainer}>
                <h3 style={styles.subtitle}>{section.subtitle}</h3>
                <h2 style={styles.title}>{section.title}</h2>
                <p style={styles.description}>{section.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "60px 20px",
    backgroundColor: "#ffffff",
  },
  section: {
    marginBottom: "60px",
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
};

export default FeatureSections;
