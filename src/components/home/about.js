import React, { useEffect, useState } from 'react';

const About = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // Set on load
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ 
            ...styles.container, 
            flexDirection: isMobile ? 'column' : 'row', 
            padding: isMobile ? '20px' : '40px' 
        }}>
            {/* Left side content */}
            <div style={styles.leftSide}>
                <h2 style={{
                    ...styles.heading,
                    fontSize: isMobile ? '32px' : '48px',
                    textAlign: isMobile ? 'center' : 'left'
                }}>
                    WE'RE<br />RAYZON SOLAR
                </h2>
                <p style={{ 
                    ...styles.paragraph, 
                    fontSize: isMobile ? '16px' : '18px', 
                    textAlign: isMobile ? 'center' : 'left' 
                }}>
                    Rayzon Solar, India's top solar panel manufacturing company, has emerged as a leader in the industry with its innovative solutions and widespread presence PAN India. With a strong foothold in the United States and Europe, the company has garnered the trust of more than 1000 satisfied customers worldwide.
                </p>
                <p style={{ 
                    ...styles.paragraph, 
                    fontSize: isMobile ? '16px' : '18px', 
                    textAlign: isMobile ? 'center' : 'left' 
                }}>
                    Rayzon Solar's production capacity has reached an impressive 6 GW with the latest TOPCon technology. This achievement is made possible because of our visionary founder's continuous drive for innovation and excellence.
                </p>
            </div>

            {/* Right side image/GIF */}
            <div style={{ 
                ...styles.rightSide, 
                justifyContent: isMobile ? 'center' : 'flex-end' 
            }}>
                <img
                    src="https://res.cloudinary.com/du0cxgoic/image/upload/v1745917058/SOLAR_GIF_vuskmd.gif"
                    alt="Solar Panel Technology"
                    style={{ 
                        ...styles.image, 
                        width: isMobile ? '100%' : '90%', 
                        maxWidth: '600px' 
                    }}
                />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f7fafc',
        flexWrap: 'wrap',
    },
    leftSide: {
        flex: 1,
        padding: '20px',
        color: '#2d3748',
        maxWidth: '600px',
    },
    rightSide: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
    },
    heading: {
        fontWeight: 'bold',
        color: '#2a4365',
        lineHeight: '1.2',
        marginBottom: '30px',
    },
    paragraph: {
        lineHeight: '1.6',
        color: '#4a5568',
        marginBottom: '20px',
    },
    image: {
        height: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
};

export default About;
