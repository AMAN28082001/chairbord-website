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
        "Solar panels are intricate systems composed of photovoltaic cells that harness sunlight, converting it into usable electricity. Rayzon Solar stands out in this field, utilizing cutting-edge technology and innovative engineering to maximize energy conversion efficiency, ensuring optimal performance and sustainability.",
    },
    {
        id: 3,
        question: "What is the lifespan of solar panels?",
        answer:
          "A testament to their durability and reliability, Rayzon Solar panels boast an impressive lifespan ranging from 25 to 30 years. Rigorous testing and quality control measures ensure that these panels withstand the test of time, providing consistent performance and peace of mind to consumers.",
      },
      {
        id: 4,
        question: "What is the best grade or quality of solar panels?",
        answer:
          "The best grade of solar panels depends on various factors such as efficiency, durability, and manufacturer reputation. Rayzon Solar stands out with premium-grade panels known for their high efficiency, durability, and advanced technology, ensuring optimal performance and long-term reliability.",
      },
      {
        id: 5,
        question: "What is the best quality solar panel?",
        answer:
          "The best quality solar panels, such as those by Rayzon Solar, exhibit superior efficiency, durability, and reliability. Rayzon Solar's panels are renowned for their advanced technology and high performance, setting the industry standard.",
      },
      {
        id: 6,
        question: "What are solar panels made of?",
        answer:
          "Comprising silicon wafers, solar panels are the epitome of modern engineering. Rayzon Solar sets the benchmark by utilizing only the highest-quality silicon materials, meticulously selected to ensure durability, longevity, and unparalleled performance, setting a standard for the industry.",
      },
      {
        id: 7,
        question: "What determines the quality of solar panels?",
        answer:
          "Several factors determine the quality of solar panels, including efficiency, durability, materials used, and manufacturer reputation. Rayzon Solar prioritizes these factors, offering panels known for their reliability, efficiency, and advanced technology.",
      },
      {
        id: 8,
        question: "How do I know if a solar panel is of good quality?",
        answer:
          "You can determine if a solar panel is of good quality by assessing factors like efficiency, durability, manufacturer reputation, and warranty terms. Rayzon Solar's panels stand out with their high efficiency, durability, and renowned manufacturer reputation.",
      },
      {
        id: 9,
        question: "What is the best type of PV panel? ",
        answer:
          "The best type of PV panel depends on various factors such as efficiency, cost, and specific application requirements. Rayzon Solar offers a range of PV panels tailored to different needs, each known for its high efficiency and performance.",
      },
      {
        id: 10,
        question: "Are all solar panels the same quality?",
        answer:
          "Not all solar panels are of the same quality. Factors like efficiency, durability, and manufacturer reputation vary. Rayzon Solar stands out for providing high-quality panels known for their advanced technology, efficiency, and reliability.",
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
