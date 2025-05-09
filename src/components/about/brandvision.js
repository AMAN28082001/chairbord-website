import React, { useEffect, useState } from 'react';

const visionData = [
  {
    id: 1,
    brandLabel: "BRAND",
    title: "VISION & STRATEGY",
    vision: "To make our future more vibrant and sustainable by using green energy to save the earth.",
    strategy:
      "We are also committed to maintain our leadership position in the manufacture of solar products, delivering higher efficiency to the global photovoltaic industry.",
    goal: "To achieve 8 GW production capacity by 2025 to serve green energy demand internationally.",
    videoUrl:
      "https://res.cloudinary.com/du0cxgoic/video/upload/v1745914494/WEBSITE_OPEN_VIDEO_kgnuiz.webm",
  },
];

const BrandVision = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = getStyles(isMobile);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {visionData.map((item) => (
          <React.Fragment key={item.id}>
            <div style={styles.textSection}>
              <div style={styles.header}>
                <span style={styles.brandText}>{item.brandLabel}</span>
                <h2 style={styles.title}>{item.title}</h2>
              </div>

              <div style={styles.strategyContent}>
                <p style={styles.visionText}>{item.vision}</p>
                <p style={styles.strategyText}>{item.strategy}</p>
                <p style={styles.goalText}>{item.goal}</p>
              </div>
            </div>

            <div style={styles.videoSection}>
              <video autoPlay loop muted playsInline style={styles.video}>
                <source src={item.videoUrl} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const getStyles = (isMobile) => ({
  container: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: isMobile ? '40px 0' : '80px 0',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    gap: isMobile ? '40px' : '60px',
  },
  textSection: {
    flex: 1,
    width: '100%',
  },
  videoSection: {
    flex: 1,
    width: '100%',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  header: {
    marginBottom: '30px',
  },
  brandText: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#2c3e50',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '10px',
  },
  title: {
    fontSize: isMobile ? '28px' : '32px',
    fontWeight: 'bold',
    color: '#2c3e50',
    margin: '0',
    lineHeight: '1.3',
  },
  strategyContent: {
    maxWidth: isMobile ? '100%' : '600px',
  },
  visionText: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#333',
    marginBottom: '20px',
    fontStyle: 'italic',
  },
  strategyText: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#333',
    marginBottom: '20px',
  },
  goalText: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#333',
    fontWeight: '600',
    marginBottom: '0',
  },
  video: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
});

export default BrandVision;
