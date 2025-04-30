import React from 'react';

const CorporateCulture = () => {
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

const styles = {
  container: {
    width: '100%',
    backgroundColor: '#f8f9fa', // Grey background color
  },
  innerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px', // Added side padding for mobile
  },
  content: {
    width: '100%',
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '30px',
    lineHeight: '1.3',
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto',
  },
  strongText: {
    fontWeight: '600',
    color: '#2c3e50',
  },
};

export default CorporateCulture;