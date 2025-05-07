import React, { useState } from 'react';

const RemoteMonitoring = () => {
  const [isHovered, setIsHovered] = useState(false);

  const monitoringData = [
    {
      title: "Remote Monitoring",
      description: "Tata Power Solar has devised NOC as a tool to provide value added services to customers.",
      linkText: "Know More"
    }
  ];

  return (
    <div style={styles.container}>
      {monitoringData.map((item, index) => (
        <div key={index} style={styles.card}>
          <h2 style={styles.title}>{item.title}</h2>
          <p style={styles.description}>{item.description}</p>
          <a
            href="#"
            style={{
              ...styles.link,
              backgroundColor: isHovered ? '#0056b3' : '#007bff'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {item.linkText}
          </a>
        </div>
      ))}
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    maxWidth: '500px',
    textAlign: 'center',
    margin: '20px'
  },
  title: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '15px',
    fontWeight: '600'
  },
  description: {
    color: '#666',
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '20px'
  },
  link: {
    display: 'inline-block',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'background-color 0.3s ease'
  }
};

export default RemoteMonitoring;