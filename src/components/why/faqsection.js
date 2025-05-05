import React, { useState } from "react";

const FAQSection = () => {
  const [activeId, setActiveId] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What is the quality of a good solar panel?",
      answer:
        "The quality of a good solar panel is determined by factors like efficiency, durability, and manufacturer reputation. Rayzon Solar excels in providing premium-quality panels renowned for high efficiency, durability, and advanced technology.",
    },
    {
      id: 2,
      question: "How do solar panels generate electricity?",
      answer:
        "Solar panels generate electricity through photovoltaic cells that absorb sunlight and convert it into electrical energy using the photovoltaic effect. These cells are typically made of semiconductor materials like silicon.",
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
