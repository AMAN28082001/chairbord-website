import React from 'react';

// Data arrays for content and styles
const sectionData = {
  title: 'RAYZON IN THE WORLD',
  subTitle: 'GLOBAL PRESENCE',
  description: `Rayzon Solar has established itself as a dominant force in the solar energy sector, 
  boasting a formidable global presence that spans continents. As a leading solar panel 
  manufacturer, Rayzon Solar's footprint extends across key markets worldwide, from 
  North America to Europe, Asia, and beyond. Through cutting-edge technology and a 
  commitment to sustainability, Rayzon Solar has earned a reputation for delivering 
  high-quality solar solutions tailored to meet the diverse needs of businesses and 
  consumers alike. With an extensive network of distributors and partners, coupled with 
  a dedication to innovation and customer satisfaction, Rayzon Solar continues to 
  illuminate the path towards a brighter, more sustainable future for generations to come.`
};

const buttonData = [
  {
    id: 'discover',
    text: 'DISCOVER MORE',
    style: {
      backgroundColor: '#2a4365',
      color: 'white',
      border: 'none',
      padding: '15px 40px',
      fontSize: '16px',
      fontWeight: '600',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase',
      alignSelf: 'flex-start',
    },
    hoverStyle: {
      backgroundColor: '#1e365d',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    },
  },
];

const imageData = {
  src: 'https://media.istockphoto.com/id/1334079644/vector/simple-vector-world-map-flat-icon.jpg?s=612x612&w=0&k=20&c=KYPLNgyrBY7vJSRuIRrxD7LWDM_Rwya5ZBhFUTXdRXs=',
  alt: 'Global Presence',
};

const styles = {
  globalContainer: {
    padding: '80px 40px',
    backgroundColor: '#f8f9fa',
  },
  globalContent: {
    display: 'flex',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '60px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  leftColumn: {
    flex: 1,
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  rightColumn: {
    flex: 1,
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  titles: {
    padding: '0 20px',
  },
  sectionTitle: {
    fontSize: '42px',
    fontWeight: 'bold',
    color: '#2a4365',
    marginBottom: '15px',
    textTransform: 'uppercase',
    lineHeight: '1.2',
  },
  subTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#4a5568',
    marginBottom: '0',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#4a5568',
    marginBottom: '20px',
  },
  imageContainer: {
    width: '100%',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    transition: 'transform 0.3s ease',
  },
  imageHover: {
    transform: 'scale(1.02)',
  },
  discoverButton: {
    backgroundColor: '#2a4365',
    color: 'white',
    border: 'none',
    padding: '15px 40px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
  },
  discoverButtonHover: {
    backgroundColor: '#1e365d',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
};

const GlobalPresence = () => {
  return (
    <div style={styles.globalContainer}>
      <div style={styles.globalContent}>
        <div style={styles.leftColumn}>
          <div style={styles.titles}>
            <h2 style={styles.sectionTitle}>{sectionData.title}</h2>
            <h3 style={styles.subTitle}>{sectionData.subTitle}</h3>
          </div>
          <p style={styles.description}>{sectionData.description}</p>
          <button
            style={styles.discoverButton}
            onMouseOver={(e) => (e.target.style = { ...styles.discoverButtonHover })}
            onMouseOut={(e) => (e.target.style = { ...styles.discoverButton })}
          >
            {buttonData[0].text}
          </button>
        </div>

        <div style={styles.rightColumn}>
          <div style={styles.imageContainer}>
            <img src={imageData.src} alt={imageData.alt} style={styles.image} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .global-content {
            flex-direction: column;
            gap: 40px;
          }

          .section-title {
            font-size: 32px;
          }

          .sub-title {
            font-size: 20px;
          }

          .description {
            font-size: 16px;
          }

          .discover-button {
            align-self: center;
          }
        }
      `}</style>
    </div>
  );
};

export default GlobalPresence;
