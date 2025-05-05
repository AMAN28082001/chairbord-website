import React from 'react';

const ContactBanner = () => {
  // Array of objects containing banner content data
  const bannerData = [
    {
      imageSrc: "https://png.pngtree.com/png-vector/20231127/ourmid/pngtree-web-contact-us-icons-on-blue-tags-online-png-image_10709663.png",
      title: "We’re Here to Help",
      subtitle: "Have questions or need a custom solution? Reach out and let’s discuss your project today.",
    },
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
          src="https://res.cloudinary.com/du0cxgoic/video/upload/v1746093585/5727833-uhd_3840_2160_30fps_jbvbrh.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      <div style={styles.overlay}>
        {bannerData.map((item, index) => (
          <div key={index} style={styles.overlayContent}>
            <img
              src={item.imageSrc}
              alt="Contact"
              style={styles.image}
            />
            <h1 style={styles.title}>{item.title}</h1>
            <p style={styles.subtitle}>{item.subtitle}</p>
          </div>
        ))}
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
    marginBottom: '20px',
    objectFit: 'cover',
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
