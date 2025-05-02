import React, { useState } from "react";

const DownloadResources = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const resources = [
    {
      category: "Company Profile",
      items: [
        { name: "Company Profile", type: "PDF", downloadLink: "#" },
        { name: "Financial Report", type: "PDF", downloadLink: "#" },
      ],
    },
    {
      category: "TopCon",
      items: [
        { name: "TopCon Technology", type: "PDF", downloadLink: "#" },
        { name: "Installation Guide", type: "PDF", downloadLink: "#" },
      ],
    },
    {
      category: "Bifacial",
      items: [
        { name: "Bifacial Module Specs", type: "PDF", downloadLink: "#" },
        { name: "Performance Data", type: "XLS", downloadLink: "#" },
      ],
    },
    {
      category: "Warranty",
      items: [
        { name: "Product Warranty", type: "PDF", downloadLink: "#" },
        { name: "Performance Warranty", type: "PDF", downloadLink: "#" },
      ],
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Empowering Your Solar Journey with Easy Downloads
      </h1>
      <p style={styles.subHeading}>
        Download comprehensive resources about Rayzon Solar's products,
        solutions, and warranties.
      </p>

      <div style={styles.resourcesGrid}>
        {resources.map((section, index) => (
          <div key={index} style={styles.resourceCard}>
            <div style={styles.cardHeader} onClick={() => toggleCategory(index)}>
              <h2 style={styles.categoryTitle}>{section.category}</h2>
              <span style={styles.toggleIcon}>
                {expandedCategory === index ? "−" : "+"}
              </span>
            </div>

            {expandedCategory === index && (
              <div style={styles.itemsList}>
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} style={styles.itemCard}>
                    <div style={styles.itemHeader}>
                      <span style={styles.fileType}>{item.type}</span>
                    </div>
                    <h3 style={styles.itemName}>{item.name}</h3>
                    <a href={item.downloadLink} style={styles.downloadButton}>
                      Download
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#2c3e50",
  },
  heading: {
    fontSize: "30px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "15px",
  },
  subHeading: {
    fontSize: "16px",
    color: "#7f8c8d",
    textAlign: "center",
    marginBottom: "40px",
  },
  resourcesGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
  },
  resourceCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    cursor: "pointer",
    backgroundColor: "#f8f9fa",
  },
  categoryTitle: {
    fontSize: "20px",
    fontWeight: "600",
  },
  toggleIcon: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#3674B5",
    userSelect: "none",
  },
  itemsList: {
    padding: "20px",
    borderTop: "1px solid #eee",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  itemCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: "6px",
    padding: "15px",
    borderLeft: "4px solid #A1E3F9",
  },
  itemHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  fileType: {
    backgroundColor: "#3498db",
    color: "#fff",
    fontSize: "12px",
    padding: "3px 8px",
    borderRadius: "3px",
    fontWeight: "bold",
  },
  itemName: {
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "10px",
  },
  downloadButton: {
    backgroundColor: "#D1F8EF",
    color: "#2c3e50",
    padding: "8px 14px",
    borderRadius: "4px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
    alignSelf: "start",
    transition: "background-color 0.2s",
  },
};

export default DownloadResources;
