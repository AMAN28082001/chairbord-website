import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import useTrackUserSource from "../../hooks/useTrackUserSource";

// Hook to detect screen width
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

const ContactForm = () => {
  const visitData = useTrackUserSource();
  const isMobile = useIsMobile();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submission = {
      ...formData,
      tracking: visitData,
    };

    console.log("Form submitted:", submission);

    // Optional: reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      heading: "Head Office",
      text: "ChairBord Pvt Ltd, 13 Sapna Tower, Near Marudhar Mart, Kalwar Road, Govindpura, Jaipur, Rajasthan-302012",
    },
    {
      heading: "Company Email",
      text: "connect@chairbord.com",
    },
    {
      heading: "Contact Us",
      text: "+91-9269666646",
    },
  ];

  const socialMediaLinks = [
    {
      icon: <FaFacebook style={{ color: "#3b5998", fontSize: "24px" }} />,
      link: "https://www.facebook.com/TheChairbord",
      label: "Facebook",
    },
    {
      icon: <FaXTwitter style={{ color: "#1da1f2", fontSize: "24px" }} />,
      link: "https://x.com/TheChairbord",
      label: "Twitter",
    },
    {
      icon: <FaInstagram style={{ color: "#e4405f", fontSize: "24px" }} />,
      link: "https://www.instagram.com/chairbord.official/",
      label: "Instagram",
    },
    {
      icon: <FaLinkedin style={{ color: "#0077b5", fontSize: "24px" }} />,
      link: "https://www.linkedin.com/company/chairbord",
      label: "LinkedIn",
    },
    {
      icon: <FaThreads style={{ color: "#ff0000", fontSize: "24px" }} />,
      link: "https://www.threads.com/@chairbord.official",
      label: "Threads",
    },
    {
      icon: <FaYoutube style={{ color: "#ff0000", fontSize: "24px" }} />,
      link: "https://www.youtube.com/@chairbord.official",
      label: "YouTube",
    },
  ];

  const flexContainerStyle = {
    ...styles.flexContainer,
    flexDirection: isMobile ? "column" : "row",
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Get IN Touch</h2>
      <p style={styles.subHeading}>
        Want to get in touch? We'd love to hear from you. Here's how you can reach us...
      </p>

      <div style={styles.card}>
        <div style={flexContainerStyle}>
          <div style={styles.leftColumn}>
            {contactInfo.map((info, index) => (
              <div key={index} style={styles.infoSection}>
                <h3 style={styles.infoHeading}>{info.heading}</h3>
                <p style={styles.infoText}>{info.text}</p>
              </div>
            ))}

            <div style={styles.socialMediaSection}>
              <h3 style={styles.infoHeading}>Connect With Us</h3>
              <div style={styles.socialIcons}>
                {socialMediaLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    style={styles.socialIcon}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form style={styles.rightColumn} onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.inputField}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.inputField}
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              style={styles.inputField}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              style={{ ...styles.inputField, ...styles.textarea }}
              required
            />
            <button type="submit" style={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "20px 20px",
    fontFamily: "'Arial', sans-serif",
    color: "#333",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  subHeading: {
    fontSize: "18px",
    textAlign: "center",
    marginBottom: "40px",
    color: "#666",
  },
  card: {
    padding: "40px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "20px",
    backgroundColor: "#fff",
  },
  flexContainer: {
    display: "flex",
    gap: "40px",
    justifyContent: "space-between",
  },
  leftColumn: {
    flex: "1",
    minWidth: "280px",
  },
  rightColumn: {
    flex: "1",
    minWidth: "280px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  infoSection: {
    marginBottom: "20px",
  },
  infoHeading: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  infoText: {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#555",
  },
  socialMediaSection: {
    marginTop: "30px",
  },
  socialIcons: {
    display: "flex",
    gap: "15px",
    marginTop: "10px",
    flexWrap: "wrap",
  },
  socialIcon: {
    display: "inline-block",
    transition: "transform 0.3s ease",
  },
  inputField: {
    padding: "12px 15px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  textarea: {
    minHeight: "120px",
    resize: "vertical",
  },
  submitButton: {
    padding: "12px 20px",
    fontSize: "16px",
    backgroundColor: "#333",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
};

export default ContactForm;
