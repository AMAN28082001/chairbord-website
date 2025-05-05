import React, { useState, useEffect } from 'react';

const financialItems = [
  { id: 1, label: "Strong Financial Support" },
  { id: 2, label: "Steady Revenue Growth" },
  { id: 3, label: "Low Debt Ratio" },
  { id: 4, label: "Sound Bankability" },
  { id: 5, label: "Effective Supply Chain Integration" }
];

const FinancialHighlights = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      padding: isMobile ? '40px 15px' : '60px 20px',
      backgroundColor: '#f4f4f8',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
        gap: isMobile ? '15px' : '20px',
        maxWidth: '1200px',
        width: '100%',
        justifyItems: 'center',
      }}>
        {financialItems.map((item, index) => (
          <div 
            key={item.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              width: isMobile ? '100px' : '120px',
              height: isMobile ? '110px' : '140px',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              backgroundColor: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              transform: hoveredIndex === index ? 'scale(1.05) translateY(-5px)' : 'none',
              boxShadow: hoveredIndex === index 
                ? '0 10px 25px rgba(0, 0, 0, 0.15)' 
                : '0 5px 15px rgba(0, 0, 0, 0.1)',
              zIndex: hoveredIndex === index ? 2 : 1,
              borderLeft: '3px solid #2e86de',
              borderColor: hoveredIndex === index ? '#2e86de' : 'transparent',
              padding: '15px',
              boxSizing: 'border-box',
            }}
          >
            <p style={{
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: '600',
              color: '#2c3e50',
              lineHeight: '1.4',
            }}>
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialHighlights;
