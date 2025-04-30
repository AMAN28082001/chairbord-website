import React, { useRef, useEffect } from 'react';

const milestones = [
  { year: '2030', value: null, desc: 'Successful Journey Ahead', icons: ['map'] },
  { year: '2017', value: null, desc: 'Rayzon Established', icons: ['map-pin', 'star'] },
  { year: '2030', value: null, desc: 'Successful Journey Ahead', icons: ['map'] },
  { year: '2017', value: null, desc: 'Rayzon Established', icons: ['map-pin', 'star'] },
];

const SolarMilestoneComponent = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 1; // Speed of scroll (px)
    let scrollInterval;

    if (carousel) {
      carousel.scrollLeft = 0;

      scrollInterval = setInterval(() => {
        carousel.scrollLeft += scrollAmount;

        if (carousel.scrollLeft >= (carousel.scrollWidth / 2)) {
          carousel.scrollLeft = 0;
        }
      }, 15); // smoother scroll
    }

    return () => clearInterval(scrollInterval);
  }, []);

  const loopedMilestones = [...milestones, ...milestones];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('https://images.pexels.com/photos/371917/pexels-photo-371917.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
          zIndex: 1,
        }}
      />

      {/* Title Section */}
      <div style={{ position: 'relative', zIndex: 2, padding: '80px 5% 40px' }}>
        <h2 style={{ fontSize: '48px', fontWeight: '300', marginBottom: '10px' }}>Milestone</h2>
        <div style={{ width: '60px', height: '4px', backgroundColor: 'white', marginBottom: '30px' }} />
        <p style={{ fontSize: '18px', maxWidth: '400px' }}>
          One of India's leading solar panel manufacturers
        </p>
      </div>

      {/* Infinite Auto Carousel */}
      <div
        ref={carouselRef}
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          overflowX: 'auto',
          gap: '40px',
          paddingLeft: '0%', // ✅ removed left padding to align to left
          height: 'calc(100vh - 300px)',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          scrollBehavior: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {loopedMilestones.map((milestone, index) => (
          <div
            key={index}
            style={{
              minWidth: '300px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '10px',
              padding: '30px',
              textAlign: 'center',
              scrollSnapAlign: 'center',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {milestone.value && (
              <h3 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>
                {milestone.value}
              </h3>
            )}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                marginBottom: '30px',
              }}
            >
              {milestone.icons.map((icon, i) =>
                icon === 'star' ? (
                  <svg key={i} width="30" height="30" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ) : (
                  <svg key={i} width="30" height="30" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                )
              )}
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>
              {milestone.year}
            </h2>
            <p style={{ fontSize: '16px', maxWidth: '250px', margin: '0 auto' }}>{milestone.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolarMilestoneComponent;
