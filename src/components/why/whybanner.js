import React from 'react';

const WhyBanner = () => {
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
                    src="https://res.cloudinary.com/du0cxgoic/video/upload/v1746179791/4916813-hd_1920_1080_30fps_lduptc.webm"
                    type="video/webm"
                />
                Your browser does not support the video tag.
            </video>
            <div style={styles.overlay}>
                <div style={styles.overlayContent}>
                    <h1 style={styles.heading}>Welcome to Rayzon Solar</h1>
                    <p style={styles.subheading}>Powering a sustainable future</p>
                </div>
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
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // dark overlay for readability
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 1rem',
        boxSizing: 'border-box',
    },
    overlayContent: {
        color: '#fff',
        textAlign: 'center',
        maxWidth: '90%',
    },
    heading: {
        fontSize: 'clamp(2rem, 5vw, 4rem)',
        fontWeight: '700',
        marginBottom: '1rem',
    },
    subheading: {
        fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
        fontWeight: '400',
    },
};

export default WhyBanner;
