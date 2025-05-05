import React from 'react';

const Banner = () => {
    // Data assigned in an object
    const bannerData = [
        {
            videoUrl: "https://res.cloudinary.com/du0cxgoic/video/upload/v1745914494/WEBSITE_OPEN_VIDEO_kgnuiz.webm",
            heading: "Welcome to Rayzon Solar",
            subheading: "Powering a sustainable future"
        }
    ];

    return (
        <div style={styles.container}>
            <video
                autoPlay
                loop
                muted
                playsInline
                style={styles.video}
            >
                <source
                    src={bannerData[0].videoUrl}
                    type="video/webm"
                />
                Your browser does not support the video tag.
            </video>
            <div style={styles.overlayContent}>
                <h1 style={styles.heading}>{bannerData[0].heading}</h1>
                <p style={styles.subheading}>{bannerData[0].subheading}</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    overlayContent: {
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: '#fff',
        padding: '0 20px',
        textAlign: 'center',
    },
    heading: {
        fontSize: 'clamp(24px, 6vw, 64px)', // Responsive font size
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    subheading: {
        fontSize: 'clamp(16px, 3vw, 24px)',
    },
};

export default Banner;
