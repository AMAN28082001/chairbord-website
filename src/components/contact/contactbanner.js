import React from 'react';

const ContactBanner = () => {
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
          src="https://res.cloudinary.com/du0cxgoic/video/upload/v1746093585/5727833-uhd_3840_2160_30fps_jbvbrh.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      <div style={styles.overlay}>
        <div style={styles.overlayContent}>
          <img
            src="https://png.pngtree.com/png-vector/20231127/ourmid/pngtree-web-contact-us-icons-on-blue-tags-online-png-image_10709663.png"
            alt="Contact"
            style={styles.image}
          />
          <h1 style={styles.title}>We’re Here to Help</h1>
          <p style={styles.subtitle}>Have questions or need a custom solution? Reach out and let’s discuss your project today.</p>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 1rem',
    boxSizing: 'border-box',
  },
  overlayContent: {
    color: '#fff',
    textAlign: 'center',
    maxWidth: '600px',
  },
  image: {
    width: '250px',
    height: '200px',
    // borderRadius: '50%',
    marginBottom: '20px',
    objectFit: 'cover',
    // border: '3px solid #fff',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '18px',
    lineHeight: '1.6',
  },
};

export default ContactBanner;
