import React, { useEffect, useState } from 'react';

const CorporateCulture = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    updateMedia(); // Initial check
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const styles = getStyles(isMobile);

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <div style={styles.content}>
          <h2 style={styles.heading}>Corporate Culture that Shapes our Footprint</h2>
          <p style={styles.text}>
            As a leading manufacturer of PV module and smart energy solution provider, 
            Rayzon delivers world class solar PV products, applications, and services 
            to promote global sustainable development. Through constant 
            <strong style={styles.strongText}> Research — Development & Innovation</strong>, we continue to 
            impulse the solar industry forward by creating equilibrium between PV power 
            and popularizing renewable energy.
          </p>
        </div>
      </div>
    </div>
  );
};

const getStyles = (isMobile) => ({
  container: {
    width: '100%',
    backgroundColor: '#f8f9fa',
  },
  innerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: isMobile ? '40px 20px' : '80px 40px',
  },
  content: {
    width: '100%',
    textAlign: 'center',
  },
  heading: {
    fontSize: isMobile ? '24px' : '32px',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: isMobile ? '20px' : '30px',
    lineHeight: '1.3',
  },
  text: {
    fontSize: isMobile ? '16px' : '18px',
    lineHeight: '1.6',
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto',
    padding: isMobile ? '0 10px' : '0',
  },
  strongText: {
    fontWeight: '600',
    color: '#2c3e50',
  },
});

export default CorporateCulture;
