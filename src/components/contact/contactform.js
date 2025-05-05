import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";

const ContactForm = () => {
  // Contact Info
  const contactInfo = [
    {
      heading: "Head Office",
      text: "E=188, Apparel Park, RICCO Industrial Area, Mahal Road, Jagatpura, Jajpur (Rajasthan) – 302022, INDIA",
    },
    {
      heading: "Company Email",
      text: "info@mescoindia.com",
    },
    {
      heading: "Contact Us",
      text: "+91 95494 44484",
    },
  ];

  // Social Media Links and Icons
  const socialMediaLinks = [
    {
      icon: <FaFacebook style={{ color: "#3b5998", fontSize: "24px" }} />,
      link: "https://www.facebook.com/TheChairbord",
      label: "Facebook",
    },
    {
      icon: <FaXTwitter style={{ color: "#1da1f2", fontSize: "24px" }} />,
      link: "https://x.com/i/flow/login?redirect_after_login=%2FTheChairbord",
      label: "Twitter",
    },
    {
      icon: <FaInstagram style={{ color: "#e4405f", fontSize: "24px" }} />,
      link: "https://www.instagram.com/chairbord.official/",
      label: "Instagram",
    },
    {
      icon: <FaLinkedin style={{ color: "#0077b5", fontSize: "24px" }} />,
      link: "https://www.linkedin.com/company/chairbord/posts/?feedView=all",
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

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Get IN Touch</h2>
      <p style={styles.subHeading}>Have a Project in Mind? Contact Us</p>

      <div style={styles.card}>
        <div style={styles.flexContainer}>
          {/* Left Column - Contact Info */}
          <div style={styles.leftColumn}>
            {contactInfo.map((info, index) => (
              <div key={index} style={styles.infoSection}>
                <h3 style={styles.infoHeading}>{info.heading}</h3>
                <p style={styles.infoText}>{info.text}</p>
              </div>
            ))}

            {/* Social Media Icons */}
            <div style={styles.socialMediaSection}>
              <h3 style={styles.infoHeading}>Connect With Us</h3>
              <div style={styles.socialIcons}>
                {socialMediaLinks.map((social, index) => (
                  <a key={index} href={social.link} style={styles.socialIcon} aria-label={social.label}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <form style={styles.rightColumn}>
            <input type="text" placeholder="Full Name" style={styles.inputField} required />
            <input type="email" placeholder="Email" style={styles.inputField} required />
            <input type="tel" placeholder="+91 Enter phone number" style={styles.inputField} required />
            <textarea placeholder="Message" style={{ ...styles.inputField, ...styles.textarea }} required />
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
    padding: "40px 20px",
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
    flexWrap: "wrap",
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
  },
  socialIcon: {
    display: "inline-block",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "scale(1.1)",
    },
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
    ":hover": {
      backgroundColor: "#555",
    },
  },
};

export default ContactForm;
