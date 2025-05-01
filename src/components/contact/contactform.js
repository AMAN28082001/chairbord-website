import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Get IN Touch</h2>
      <p style={styles.subHeading}>Have a Project in Mind? Contact Us</p>

      <div style={styles.card}>
        <div style={styles.flexContainer}>
          {/* Left Column - Contact Info */}
          <div style={styles.leftColumn}>
            <div style={styles.infoSection}>
              <h3 style={styles.infoHeading}>Head Office</h3>
              <p style={styles.infoText}>
                E=188, Apparel Park, RICCO Industrial Area, Mahal Road, Jagatpura,
                <br />
                Jajpur (Rajasthan) – 302022, INDIA
              </p>
            </div>

            <div style={styles.infoSection}>
              <h3 style={styles.infoHeading}>Company Email</h3>
              <p style={styles.infoText}>info@mescoindia.com</p>
            </div>

            <div style={styles.infoSection}>
              <h3 style={styles.infoHeading}>Contact Us</h3>
              <p style={styles.infoText}>+91 95494 44484</p>
            </div>

            {/* Social Media Icons */}
            <div style={styles.socialMediaSection}>
              <h3 style={styles.infoHeading}>Connect With Us</h3>
              <div style={styles.socialIcons}>
                <a href="#" style={styles.socialIcon} aria-label="Facebook">
                  <FaFacebook style={{ color: "#3b5998", fontSize: "24px" }} />
                </a>
                <a href="#" style={styles.socialIcon} aria-label="Twitter">
                  <FaTwitter style={{ color: "#1da1f2", fontSize: "24px" }} />
                </a>
                <a href="#" style={styles.socialIcon} aria-label="Instagram">
                  <FaInstagram style={{ color: "#e4405f", fontSize: "24px" }} />
                </a>
                <a href="#" style={styles.socialIcon} aria-label="LinkedIn">
                  <FaLinkedin style={{ color: "#0077b5", fontSize: "24px" }} />
                </a>
                <a href="#" style={styles.socialIcon} aria-label="YouTube">
                  <FaYoutube style={{ color: "#ff0000", fontSize: "24px" }} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <form style={styles.rightColumn}>
            <input 
              type="text" 
              placeholder="Full Name" 
              style={styles.inputField} 
              required 
            />
            <input 
              type="email" 
              placeholder="Email" 
              style={styles.inputField} 
              required 
            />
            <input 
              type="tel" 
              placeholder="+91 Enter phone number" 
              style={styles.inputField} 
              required 
            />
            <textarea 
              placeholder="Message" 
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