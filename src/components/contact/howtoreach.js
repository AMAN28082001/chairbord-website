import React from "react";

const LocationInfo = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.mainHeading}>How To Reach</h1>
      
      <div style={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.58428583792!2d75.7141285!3d26.948390500000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db34437f3b57d%3A0xbbe7f554286804!2sChairBord%20Head%20Office!5e0!3m2!1sen!2sin!4v1746090985767!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={styles.mapIframe}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        />
      </div>

      
    </div>
  );
};


// Styles
const styles = {
  container: {
    maxWidth: "1360px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    color: "#333",
    backgroundColor: "#fff",
    borderRadius: "20px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",

  },
  mainHeading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#222",
  },
  mapContainer: {
    width: "100%",
    marginBottom: "20px",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  mapIframe: {
    border: "0",
    display: "block",
  },
};

export default LocationInfo;