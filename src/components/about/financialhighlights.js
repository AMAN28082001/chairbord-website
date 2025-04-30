import React, { useState } from 'react';

const FinancialHighlights = () => {
  // Flat array of strings
  const financialItems = [
    "Strong Financial Support",
    "Steady Revenue Growth",
    "Low Debt Ratio",
    "Sound Bankability",
    "Effective Supply Chain Integration",
    // Add more if needed
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={{
      padding: '60px 20px',
      backgroundColor: '#f4f4f8',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)', // Force 5 hexagons per row
        gap: '50px',
        maxWidth: '1200px',
        position: 'relative',
        borderRadius: '10px',
      }}>
        {financialItems.map((item, index) => (
          <div 
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              position: 'relative',
              width: '120px',
              height: '140px',
              margin: '0 auto',
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
              padding: '20px',
              borderWidth: '2px',
              borderColor: hoveredIndex === index ? '#2e86de' : 'transparent',
            
            }}
          >
            <p style={{
              fontSize: '14px', // Reduced font size
              fontWeight: '600',
              color: '#2c3e50',
              lineHeight: '1.3',
            }}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialHighlights;
