import React, { useState } from "react";

const FAQSection = () => {
  const [activeId, setActiveId] = useState(null);

  const faqData = [
        {
          id: 1,
          question: "What is the quality of a good solar panel?",
          answer:
            "A good solar panel is defined by its efficiency, durability, and performance consistency. Chairbord delivers high-performance panels crafted with advanced engineering and premium materials to ensure long-term energy output and reliability.",
        },
        {
          id: 2,
          question: "How do solar panels generate electricity?",
          answer:
            "Solar panels convert sunlight into electricity through photovoltaic (PV) cells. Chairbord uses next-generation PV technology to maximize light absorption and energy conversion, ensuring higher output and better sustainability for your energy needs.",
        },
        {
          id: 3,
          question: "What is the lifespan of solar panels?",
          answer:
            "Chairbord solar panels are built to last between 25 and 30 years with minimal degradation. Thanks to rigorous quality standards and robust construction, our panels offer dependable performance and peace of mind for decades.",
        },
        {
          id: 4,
          question: "What is the best grade or quality of solar panels?",
          answer:
            "The best-grade solar panels offer high efficiency, long-term reliability, and solid manufacturer backing. Chairbord panels meet these standards with industry-leading technologies, strict testing protocols, and proven field performance.",
        },
        {
          id: 5,
          question: "What is the best quality solar panel?",
          answer:
            "The best quality solar panels combine cutting-edge technology, high efficiency rates, and robust durability. Chairbord panels are among the top-tier in the industry, delivering exceptional energy output and long-lasting performance.",
        },
        {
          id: 6,
          question: "What are solar panels made of?",
          answer:
            "Solar panels are primarily made of silicon cells, glass, and a protective backsheet. Chairbord uses only top-grade monocrystalline silicon and advanced lamination processes to ensure maximum efficiency and structural integrity.",
        },
        {
          id: 7,
          question: "What determines the quality of solar panels?",
          answer:
            "Key quality indicators include energy efficiency, temperature tolerance, build materials, and manufacturer testing standards. Chairbord prioritizes all these factors, producing panels that deliver superior performance across all conditions.",
        },
        {
          id: 8,
          question: "How do I know if a solar panel is of good quality?",
          answer:
            "Check for efficiency ratings, warranties, certifications (like IEC/TÜV), and performance guarantees. Chairbord panels meet global standards and are backed by long-term warranties and consistent customer satisfaction.",
        },
        {
          id: 9,
          question: "What is the best type of PV panel?",
          answer:
            "Monocrystalline PV panels are often considered the best due to their high efficiency and sleek design. Chairbord specializes in advanced monocrystalline panels engineered for both residential and commercial excellence.",
        },
        {
          id: 10,
          question: "Are all solar panels the same quality?",
          answer:
            "No, solar panels vary widely in quality. Chairbord sets itself apart with high-grade materials, precision manufacturing, and comprehensive quality control, ensuring each panel delivers superior performance and longevity.",
        },      
  ];

  const toggleAnswer = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Frequently Asked Questions</h1>
      <p style={styles.intro}>
        Explore answers to common questions about our solar panel quality,
        technology, and performance to make an informed decision.
      </p>

      <div style={styles.faqList}>
        {faqData.map((faq) => (
          <div key={faq.id} style={styles.faqItem}>
            <div style={styles.questionRow} onClick={() => toggleAnswer(faq.id)}>
              <h2 style={styles.question}>{faq.question}</h2>
              <span style={styles.icon}>
                {activeId === faq.id ? "−" : "+"}
              </span>
            </div>
            {activeId === faq.id && (
              <p style={styles.answer}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "60px 20px",
    fontFamily: "Segoe UI, sans-serif",
    color: "#1e1e1e",
  },
  title: {
    fontSize: "36px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "10px",
    color: "#015e6d",
  },
  intro: {
    textAlign: "center",
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "50px",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  faqList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  faqItem: {
    backgroundColor: "#f9f9f9",
    padding: "20px 25px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  questionRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question: {
    fontSize: "20px",
    fontWeight: "600",
    margin: 0,
    color: "#015e6d",
  },
  icon: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#015e6d",
    marginLeft: "20px",
  },
  answer: {
    marginTop: "15px",
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#333",
  },
};

export default FAQSection;
