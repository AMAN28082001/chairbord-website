import React, { useEffect, useState } from 'react';

const leaders = [
  {
    name: 'CHIRAG NAKRANI - Visionary Leader',
    title: 'Founder & Managing Director',
    image: 'https://png.pngtree.com/png-vector/20240205/ourmid/pngtree-cartoon-business-man-png-image_11622855.png',
    alt: 'Chirag Nakrani - Founder & Managing Director',
    paragraphs: [
      `He is a dynamic and visionary leader who has played a pivotal role in the success and growth of Rayzon Solar. With over eight years of extensive experience in various facets of the solar industry—including tactical planning, sales, international business development, and marketing—Mr. Chirag Nakrani has demonstrated a profound understanding of the market and an ability to drive the company's progress.`,
      `Under his leadership, Rayzon Solar has emerged as a highly regarded solar manufacturer on an international scale. By effectively leading the sales and operations teams, he has positioned the company as a dominant force in the solar market. His expertise and strategic vision have been instrumental in expanding the company's reach and achieving remarkable milestones.`,
      `Mr. Nakrani's innovative thinking and unwavering commitment to the company's mission have set Rayzon Solar apart from its competitors. His dedication to sustainability and clean energy has not only solidified the company's reputation for excellence and dependability but has also contributed to the advancement of the renewable energy sector as a whole.`,
    ],
  },
  // Add more leader objects here as needed
];

const LeadershipProfile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = getStyles(isMobile);

  return (
    <div style={styles.container}>
      {leaders.map((leader, idx) => (
        <div style={styles.profileContainer} key={idx}>
          <div style={styles.imageContainer}>
            <img 
              src={leader.image} 
              alt={leader.alt} 
              style={styles.profileImage}
            />
          </div>
          <div style={styles.contentContainer}>
            <h1 style={styles.name}>{leader.name}</h1>
            <h2 style={styles.title}>{leader.title}</h2>
            <div style={styles.description}>
              {leader.paragraphs.map((text, i) => (
                <p style={styles.paragraph} key={i}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const getStyles = (isMobile) => ({
  container: {
    width: '100%',
    padding: isMobile ? '60px 15px' : '80px 20px',
    backgroundColor: '#ffffff',
    overflowX: 'hidden',
    boxSizing: 'border-box',
  },
  profileContainer: {
    maxWidth: '1200px',
    margin: '0 auto 60px auto',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'flex-start',
    gap: isMobile ? '40px' : '60px',
    boxSizing: 'border-box',
  },
  imageContainer: {
    flex: isMobile ? '1' : '0 0 40%',
    maxWidth: isMobile ? '100%' : '40%',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    boxSizing: 'border-box',
  },
  profileImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    maxWidth: '100%',
  },
  contentContainer: {
    flex: '1',
    maxWidth: isMobile ? '100%' : '60%',
    boxSizing: 'border-box',
  },
  name: {
    fontSize: 'clamp(24px, 3vw, 32px)',
    fontWeight: 'bold',
    color: '#2c3e50',
    margin: '0 0 10px 0',
    lineHeight: '1.3',
    overflowWrap: 'break-word',
  },
  title: {
    fontSize: 'clamp(18px, 2vw, 24px)',
    fontWeight: '600',
    color: '#555',
    margin: '0 0 30px 0',
    overflowWrap: 'break-word',
  },
  description: {
    marginBottom: '30px',
  },
  paragraph: {
    fontSize: 'clamp(14px, 1.5vw, 16px)',
    lineHeight: '1.8',
    color: '#333',
    margin: '0 0 20px 0',
    overflowWrap: 'break-word',
  },
});

export default LeadershipProfile;
