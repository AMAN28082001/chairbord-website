import React, { useEffect, useState } from 'react';

const cultureData = [
  {
    id: 1,
    heading: "Corporate Culture that Shapes our Footprint",
    text: `As a leading manufacturer of PV module and smart energy solution provider, 
      Rayzon delivers world class solar PV products, applications, and services 
      to promote global sustainable development. Through constant`,
    strong: " Research — Development & Innovation",
    afterStrong: `, we continue to impulse the solar industry forward by creating equilibrium 
      between PV power and popularizing renewable energy.`,
  },
];

const CorporateCulture = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const styles = getStyles(isMobile);

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <div style={styles.content}>
          {cultureData.map(item => (
            <React.Fragment key={item.id}>
              <h2 style={styles.heading}>{item.heading}</h2>
              <p style={styles.text}>
                {item.text}
                <strong style={styles.strongText}>{item.strong}</strong>
                {item.afterStrong}
              </p>
            </React.Fragment>
          ))}
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
