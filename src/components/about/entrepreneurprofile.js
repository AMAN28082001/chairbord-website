import React, { useEffect, useState } from 'react';

const entrepreneurData = [
  {
    id: 1,
    name: "HARDIK KOTHIYA - Inspirational Entrepreneur",
    title: "Founder & Managing Director",
    image: "https://i.pinimg.com/736x/2e/dd/02/2edd02160b51797f7adb807a79d96d36.jpg",
    paragraphs: [
      "He is a dynamic and visionary leader who has played a pivotal role in the success and growth of Rayzon Solar. With over eight years of extensive experience in various facets of the solar industry, including Tactical Planning, Sales, International Business Development and Marketing, Mr. Chiraq Nakani has demonstrated his profound understanding of the market and his ability to drive the company's progress.",
      "Under his leadership, Rayzon Solar has emerged as a highly regarded solar manufacturer on an international scale. By effectively leading the sales and operations teams, he has positioned the company as a dominant force in the solar market. His expertise and strategic vision have been instrumental in expanding the company's reach and achieving remarkable milestones.",
      "Mr.Nakani's innovative thinking and unwavering commitment to the company's mission have set Rayzon Solar apart from its competitors. His dedication to sustainability and clean energy has not only solidified the company's reputation for excellence and dependability but has also contributed to the advancement of the renewable energy sector as a whole."
    ]
  }
];

const EntrepreneurProfile = () => {
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
      <div style={styles.profileContainer}>
        {entrepreneurData.map(({ id, name, title, image, paragraphs }) => (
          <React.Fragment key={id}>
            {/* Left - Text Content */}
            <div style={styles.contentContainer}>
              <h1 style={styles.name}>{name}</h1>
              <h2 style={styles.title}>{title}</h2>
              <div style={styles.description}>
                {paragraphs.map((text, index) => (
                  <p style={styles.paragraph} key={index}>{text}</p>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div style={styles.imageContainer}>
              <img 
                src={image}
                alt={`${name} - ${title}`}
                style={styles.profileImage}
              />
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
    padding: isMobile ? '40px 15px' : '80px 20px',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box'
  },
  profileContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'center' : 'flex-start',
    gap: isMobile ? '40px' : '60px'
  },
  contentContainer: {
    flex: '1',
    maxWidth: isMobile ? '100%' : '60%',
    textAlign: isMobile ? 'center' : 'left',
    boxSizing: 'border-box'
  },
  imageContainer: {
    flex: isMobile ? '1' : '0 0 40%',
    maxWidth: isMobile ? '100%' : '40%',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center'
  },
  profileImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '8px'
  },
  name: {
    fontSize: 'clamp(24px, 3vw, 32px)',
    fontWeight: 'bold',
    color: '#2c3e50',
    margin: '0 0 10px 0',
    lineHeight: '1.3'
  },
  title: {
    fontSize: 'clamp(18px, 2vw, 24px)',
    fontWeight: '600',
    color: '#555',
    margin: '0 0 30px 0'
  },
  description: {
    marginBottom: '30px'
  },
  paragraph: {
    fontSize: 'clamp(14px, 1.5vw, 16px)',
    lineHeight: '1.8',
    color: '#333',
    margin: '0 0 20px 0'
  }
});

export default EntrepreneurProfile;
