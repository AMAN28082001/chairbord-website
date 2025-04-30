import React from 'react';

const LeadershipProfile = () => {
  return (
    <div style={styles.container}>
      <div style={styles.profileContainer}>
        {/* Left Side - Profile Image */}
        <div style={styles.imageContainer}>
          <img 
            src="https://png.pngtree.com/png-vector/20240205/ourmid/pngtree-cartoon-business-man-png-image_11622855.png" 
            alt="Chiraq Nakrani - Founder & Managing Director"
            style={styles.profileImage}
          />
        </div>

        {/* Right Side - Content */}
        <div style={styles.contentContainer}>
          <h1 style={styles.name}>CHIRAG NAKRANI - Visionary Leader</h1>
          <h2 style={styles.title}>Founder & Managing Director</h2>
          
          <div style={styles.description}>
            <p style={styles.paragraph}>
              He is a dynamic and visionary leader who has played a pivotal role in the success and growth of Rayzon Solar. With over eight years of extensive experience in various facets of the solar industry, including Tactical Planning, Sales, International Business Development and Marketing, Mr. Chiraq Nakani has demonstrated his profound understanding of the market and his ability to drive the company's progress.
            </p>
            
            <p style={styles.paragraph}>
              Under his leadership, Rayzon Solar has emerged as a highly regarded solar manufacturer on an international scale. By effectively leading the sales and operations teams, he has positioned the company as a dominant force in the solar market. His expertise and strategic vision have been instrumental in expanding the company's reach and achieving remarkable milestones.
            </p>
            
            <p style={styles.paragraph}>
              Mr.Nakani's innovative thinking and unwavering commitment to the company's mission have set Rayzon Solar apart from its competitors. His dedication to sustainability and clean energy has not only solidified the company's reputation for excellence and dependability but has also contributed to the advancement of the renewable energy sector as a whole.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    padding: '80px 20px',
    backgroundColor: '#ffffff',
    overflowX: 'hidden', // Prevents horizontal scrolling
    boxSizing: 'border-box' // Ensures padding is included in width calculations
  },
  profileContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '60px',
    overflowX: 'hidden', // Prevents horizontal scrolling
    boxSizing: 'border-box'
  },
  imageContainer: {
    flex: '0 0 40%',
    maxWidth: '40%', // Explicit width control
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    boxSizing: 'border-box'
  },
  profileImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    maxWidth: '100%' // Ensures image doesn't overflow
  },
  contentContainer: {
    flex: '1',
    maxWidth: '60%', // Explicit width control
    boxSizing: 'border-box'
  },
  name: {
    fontSize: 'clamp(24px, 3vw, 32px)', // Responsive font size
    fontWeight: 'bold',
    color: '#2c3e50',
    margin: '0 0 10px 0',
    lineHeight: '1.3',
    wordWrap: 'break-word' // Prevents text overflow
  },
  title: {
    fontSize: 'clamp(18px, 2vw, 24px)', // Responsive font size
    fontWeight: '600',
    color: '#555',
    margin: '0 0 30px 0',
    wordWrap: 'break-word'
  },
  description: {
    marginBottom: '30px'
  },
  paragraph: {
    fontSize: 'clamp(14px, 1.5vw, 16px)', // Responsive font size
    lineHeight: '1.8',
    color: '#333',
    margin: '0 0 20px 0',
    wordWrap: 'break-word'
  },
  // Responsive styles
  '@media (max-width: 768px)': {
    container: {
      padding: '60px 15px'
    },
    profileContainer: {
      flexDirection: 'column',
      gap: '40px'
    },
    imageContainer: {
      flex: '1',
      maxWidth: '100%',
      width: '100%'
    },
    contentContainer: {
      maxWidth: '100%',
      width: '100%'
    }
  }
};

export default LeadershipProfile;