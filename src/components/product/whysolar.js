import React from 'react';

const dataPoints = [
  "India’s Most Trusted Brand",
  "#1 Solar Rooftop EPC Company for 8 years in a row*",
  "Pan India Presence",
  "20,000+ residential systems commissioned",
  "30+ years of experience with 1100+ MW of installations",
  "24X7 service support, for complete peace of mind",
];

const WhySolar = () => {
  return (
    <section style={styles.wrapper}>
      <div style={styles.container}>
        <h3 style={styles.subTitle}>WHY</h3>
        <h2 style={styles.title}>TATA POWER SOLAR?</h2>
      </div>

      <div style={styles.container}>
        <div style={styles.inner}>
          <div style={styles.textWrapper}>
            <ul style={styles.list}>
              {dataPoints.map((point, idx) => (
                <li key={idx} style={styles.listItem}>
                  › {point}
                </li>
              ))}
            </ul>
          </div>

          <div style={styles.imageWrapper}>
            <img
              src="https://res.cloudinary.com/du0cxgoic/image/upload/v1745911361/samples/ecommerce/leather-bag-gray.jpg"
              alt="Solar Panel"
              style={styles.image}
            />
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .why-inner {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }

          .why-line {
            display: none;
          }

          .why-image-wrapper {
            align-self: center;
          }
        }
      `}</style>
    </section>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#d9dbda',
    padding: '40px 24px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  subTitle: {
    color: '#555',
    fontWeight: 500,
    marginBottom: 6,
    letterSpacing: '0.05em',
    fontSize: 18,
  },
  title: {
    color: '#002b5c',
    fontWeight: 700,
    margin: 0,
    marginBottom: 25,
    fontSize: 26,
  },
  inner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  textWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
  },

  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    color: '#222',
  },
  listItem: {
    fontSize: 16,
    marginBottom: 12,
  },
  imageWrapper: {
    width: 250,
    height: 250,
    borderRadius: '50%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default WhySolar;
