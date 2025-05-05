import React, { useEffect, useState } from 'react';

const About = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // Set on load
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Data for content and image
    const aboutData = [
        {
            heading: "WE'RE\nRAYZON SOLAR",
            paragraph1: "Rayzon Solar, India's top solar panel manufacturing company, has emerged as a leader in the industry with its innovative solutions and widespread presence PAN India. With a strong foothold in the United States and Europe, the company has garnered the trust of more than 1000 satisfied customers worldwide.",
            paragraph2: "Rayzon Solar's production capacity has reached an impressive 6 GW with the latest TOPCon technology. This achievement is made possible because of our visionary founder's continuous drive for innovation and excellence."
        }
    ];

    const imageData = {
        src: "https://res.cloudinary.com/du0cxgoic/image/upload/v1745917058/SOLAR_GIF_vuskmd.gif",
        alt: "Solar Panel Technology",
    };

    return (
        <div style={{ 
            ...styles.container, 
            flexDirection: isMobile ? 'column' : 'row', 
            padding: isMobile ? '20px' : '40px' 
        }}>
            {/* Left side content */}
            <div style={styles.leftSide}>
                {aboutData.map((data, index) => (
                    <div key={index}>
                        <h2 style={{
                            ...styles.heading,
                            fontSize: isMobile ? '32px' : '48px',
                            textAlign: isMobile ? 'center' : 'left'
                        }}>
                            {data.heading}
                        </h2>
                        <p style={{ 
                            ...styles.paragraph, 
                            fontSize: isMobile ? '16px' : '18px', 
                            textAlign: isMobile ? 'center' : 'left' 
                        }}>
                            {data.paragraph1}
                        </p>
                        <p style={{ 
                            ...styles.paragraph, 
                            fontSize: isMobile ? '16px' : '18px', 
                            textAlign: isMobile ? 'center' : 'left' 
                        }}>
                            {data.paragraph2}
                        </p>
                    </div>
                ))}
            </div>

            {/* Right side image/GIF */}
            <div style={{ 
                ...styles.rightSide, 
                justifyContent: isMobile ? 'center' : 'flex-end' 
            }}>
                <img
                    src={imageData.src}
                    alt={imageData.alt}
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
        backgroundColor: '#ffffff',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    leftSide: {
        flex: 1,
        color: '#2d3748',
        minWidth: '300px',
    },
    rightSide: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
