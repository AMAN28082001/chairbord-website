import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        const responsiveCSS = `
            @media (max-width: 768px) {
                .contact-heading {
                    font-size: 24px !important;
                }
                .contact-subheading {
                    font-size: 14px !important;
                }
                .buttons-container {
                    flex-direction: column !important;
                    gap: 15px !important;
                }
                .video-container {
                    height: auto !important;
                }
                .inquiry-buttons {
                    flex-direction: column !important;
                    gap: 10px !important;
                }
            }
        `;
        const styleTag = document.createElement('style');
        styleTag.innerHTML = responsiveCSS;
        document.head.appendChild(styleTag);

        return () => {
            document.head.removeChild(styleTag);
        };
    }, []);

    return (
        <div className="video-container" style={styles.videoContainer}>
            {/* Background Video */}
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                style={styles.backgroundVideo}
            >
                <source src="https://res.cloudinary.com/du0cxgoic/video/upload/v1745918504/mid_header_1_kudray.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>

            {/* Content Overlay */}
            <div style={styles.contentOverlay}>
                <div style={styles.content}>
                    <h2 className="contact-heading" style={styles.heading}>WIDE RANGE OF SOLAR SOLUTION</h2>
                    <p className="contact-subheading" style={styles.subheading}>Since We Design The Solar From The Beginning</p>

                    <div className="buttons-container" style={styles.buttonsContainer}>
                        <button style={styles.discoverButton}>DISCOVER MORE</button>
                        
                        <div className="inquiry-buttons" style={styles.inquiryButtons}>
                            <button style={styles.inquiryButton}>I have a question</button>
                            <button style={styles.tellMeButton}>Tell me more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    videoContainer: {
        position: 'relative',
        width: '100%',
        height: '43vh',
        overflow: 'hidden',
    },
    backgroundVideo: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
    },
    contentOverlay: {
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: '20px',
    },
    content: {
        maxWidth: '800px',
        width: '100%',
        textAlign: 'center',
        color: 'white',
    },
    heading: {
        fontSize: '36px',
        fontWeight: 'bold',
        marginBottom: '3px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textShadow: '0 2px 4px rgba(0,0,0,0.5)',
    },
    subheading: {
        fontSize: '18px',
        marginBottom: '5px',
        fontStyle: 'italic',
        textShadow: '0 1px 2px rgba(0,0,0,0.5)',
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '25px',
    },
    discoverButton: {
        backgroundColor: '#2a4365',
        color: 'white',
        border: 'none',
        padding: '15px 40px',
        fontSize: '16px',
        fontWeight: '600',
        borderRadius: '4px',
        cursor: 'pointer',
        textTransform: 'uppercase',
        transition: 'all 0.3s ease',
        marginBottom: '20px',
    },
    inquiryButtons: {
        display: 'flex',
        gap: '15px',
        justifyContent: 'center',
        width: '100%',
    },
    inquiryButton: {
        backgroundColor: 'transparent',
        color: 'white',
        border: '1px solid white',
        padding: '10px 25px',
        fontSize: '14px',
        fontWeight: '500',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    tellMeButton: {
        backgroundColor: 'white',
        color: '#2a4365',
        border: '1px solid white',
        padding: '10px 25px',
        fontSize: '14px',
        fontWeight: '500',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
};

export default Contact;
