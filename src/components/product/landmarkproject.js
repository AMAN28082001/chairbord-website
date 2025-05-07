import React, { useState, useEffect } from 'react';

const projects = [
  {
    title: '10.8 MW ROOFTOP SOLAR POWER SYSTEM – ANERT, KERALA',
    features: [
      'Savings for Families & the Kerala Government',
      'Unique roofs – unique designs',
      '10.8 MW distributed rooftop systems of 1–5 kW',
      'Robust Systems customized for High Wind Speeds'
    ],
    image: 'https://res.cloudinary.com/du0cxgoic/image/upload/v1745911362/samples/landscapes/landscape-panorama.jpg',
    linkText: 'KNOW MORE ›'
  },
  {
    title: '5.25 KW SOLAR SYSTEM – SUVIDHA HOUSING SOCIETY, BENGALURU, INDIA',
    features: [
      'Annual Energy Yield: 14,400 Units*',
      '32 systems commissioned',
      'CO₂ offset in 25 years: 252 Tonnes*',
      'Solar Panels installed on RCC roofs without drilling any holes'
    ],
    image: 'https://res.cloudinary.com/du0cxgoic/image/upload/v1745911362/samples/landscapes/landscape-panorama.jpg',
    linkText: 'KNOW MORE ›'
  }
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
};

const LandmarkProjects = () => {
  const isMobile = useIsMobile();

  return (
    <section style={{ ...styles.wrapper }}>
      <div style={{
        ...styles.container,
        padding: isMobile ? '20px 16px' : '40px 24px',
        textAlign: isMobile ? 'center' : 'left'
      }}>
        <h3 style={{ ...styles.subTitle, fontSize: isMobile ? 12 : 14 }}>LANDMARK PROJECTS</h3>
        <h2 style={{ ...styles.title, fontSize: isMobile ? 20 : 26 }}>SOLAR POWER FOR HOMES IN INDIA</h2>
      </div>

      <div style={styles.container}>
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={{
              ...styles.project,
              height: isMobile ? 220 : 280,
              backgroundImage: `url(${project.image})`
            }}
          >
            <div style={{ ...styles.overlay, padding: isMobile ? 15 : 25, textAlign: isMobile ? 'center' : 'left' }}>
              <h3 style={{ ...styles.projectTitle, fontSize: isMobile ? 14 : 16 }}>{project.title}</h3>
              <ul style={{ ...styles.featureList, fontSize: isMobile ? 12 : 13 }}>
                {project.features.map((item, i) => (
                  <li key={i} style={styles.listItem}>– {item}</li>
                ))}
              </ul>
              <span style={{ ...styles.link, fontSize: isMobile ? 11 : 12 }}>{project.linkText}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#fff'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  subTitle: {
    color: '#555',
    fontWeight: 500,
    marginBottom: 8,
    letterSpacing: '0.05em'
  },
  title: {
    color: '#002b5c',
    fontWeight: 700,
    margin: 0,
    marginBottom: 10
  },
  project: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '20px',
    position: 'relative',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    color: '#fff',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  projectTitle: {
    fontWeight: 700,
    marginBottom: 10,
    color: '#f9c623'
  },
  featureList: {
    listStyle: 'none',
    paddingLeft: 0,
    margin: 0,
    lineHeight: 1.5
  },
  listItem: {
    marginBottom: 4
  },
  link: {
    marginTop: 10,
    color: '#f9c623',
    fontWeight: 600,
    cursor: 'pointer'
  }
};

export default LandmarkProjects;
