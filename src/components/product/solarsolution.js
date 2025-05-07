import React, { useState, useEffect } from 'react';
/* ---------- DATA ---------- */

const gridTieData = [
  {
    roofArea: '100–200 Sq. Ft.',
    solution: 'TATA POWER SOLAR SOLUTION 1',
    inverter: '1 kVA Grid Tie Solar Inverter (Single Phase)',
    modules: '4 nos Modules of 320 Wp each',
    extras: 'Cables & Other Accessories',
    generation: 'You generate 1,400 units annually'
  },
  {
    roofArea: '200–300 Sq. Ft.',
    solution: 'TATA POWER SOLAR SOLUTION 2',
    inverter: '2 kVA Grid Tie Solar inverter (Single Phase)',
    modules: '7 nos Modules of 320 Wp each',
    extras: 'Cables & Other Accessories',
    generation: 'You generate 2,800 units annually'
  },
  {
    roofArea: '300–500 Sq. Ft.',
    solution: 'TATA POWER SOLAR SOLUTION 3',
    inverter: '3 kVA Grid Tie Solar Inverter (Single / Three Phase)',
    modules: '10 nos Modules of 320 Wp each',
    extras: 'Cables & Other Accessories',
    generation: 'You generate 4,200 units annually'
  },
  {
    roofArea: '500–700 Sq. Ft.',
    solution: 'TATA POWER SOLAR SOLUTION 4',
    inverter: '5 kVA Grid Tie Solar Inverter (Single / Three Phase)',
    modules: '16 nos Modules of 320 Wp each',
    extras: 'Cables & Other Accessories',
    generation: 'You generate 7,000 units annually'
  },
  {
    roofArea: '700–1,000 Sq. Ft.',
    solution: 'TATA POWER SOLAR SOLUTION 5',
    inverter: '8 kVA Grid Tie Solar Inverter (Three Phase)',
    modules: '24 nos Modules of 320 Wp each',
    extras: 'Cables & Other Accessories',
    generation: 'You generate 8,400 units annually'
  },
  {
    roofArea: '1,000–1,200 Sq. Ft.',
    solution: 'TATA POWER SOLAR SOLUTION 6',
    inverter: '10 kVA Grid Tie Solar Inverter (Three Phase)',
    modules: '32 nos Modules of 320 Wp each',
    extras: 'Cables & Other Accessories',
    generation: 'You generate 14,000 units annually'
  }
];

const offGridData = [
  {
    roofArea: '100–200 Sq. Ft.',
    solution: 'TATA POWER SOLAR SOLUTION A',
    pcu: '2 kVA PCU (Single Phase)',
    modules: '4 nos Modules of 320 Wp each',
    batteries: '2 nos Batteries of 12 V / 150 Ah each',
    extras: 'Cables & Other Accessories',
    generation: 'You generate 1,400 units annually'
  },
  {
    roofArea: '200–300 Sq. Ft.',
    solution: 'TATA POWER SOLAR SOLUTION B',
    pcu: '3.75 kVA PCU (Single Phase)',
    modules: '6 nos Modules of 320 Wp each',
    batteries: '4 nos Batteries of 12 V / 150 Ah each',
    extras: 'Cables & Other Accessories',
    generation: 'You generate 2,600 units annually'
  },
  {
    roofArea: '300–500 Sq. Ft.',
    solution: 'TATA POWER SOLAR SOLUTION C',
    pcu: '6.25 kVA PCU (Single Phase)',
    modules: '12 nos Modules of 320 Wp each',
    batteries: '6 nos Batteries of 12 V / 150 Ah each',
    extras: 'Cables & Other Accessories',
    generation: 'You generate 5,000 units annually'
  },
  {
    roofArea: '500–700 Sq. Ft.',
    solution: 'TATA POWER SOLAR SOLUTION D',
    pcu: '7.5 kVA PCU (Single Phase)',
    modules: '16 nos Modules of 320 Wp each',
    batteries: '10 nos Batteries of 12 V / 150 Ah each',
    extras: 'Cables & Other Accessories',
    generation: 'You generate 7,000 units annually'
  }
];

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return isMobile;
  };
  
  /* ---------- MAIN COMPONENT ---------- */
  
  const SolarSolutions = () => {
    const isMobile = useIsMobile();
  
    return (
      <section style={{ ...styles.wrapper }}>
        <div
          style={{
            ...styles.container,
            padding: isMobile ? '20px 16px' : '40px 24px',
            textAlign: isMobile ? 'center' : 'left'
          }}
        >
          <h3 style={{ ...styles.subTitle, fontSize: isMobile ? 12 : 14 }}>TATA POWER SOLAR</h3>
          <h2 style={{ ...styles.title, fontSize: isMobile ? 20 : 26 }}>
            GRID‑TIE ROOFTOP SOLUTIONS
          </h2>
        </div>
  
        <div style={styles.container}>
          <TableBlock title="GRID‑TIE SYSTEM" data={gridTieData} variant="grid" isMobile={isMobile} />
          <TableBlock title="OFF‑GRID SYSTEM" data={offGridData} variant="off" isMobile={isMobile} />
        </div>
      </section>
    );
  };
  
  /* ---------- SUB-COMPONENT ---------- */
  
  const TableBlock = ({ title, data, variant, isMobile }) => {
    const isGridTie = variant === 'grid';
  
    const customTableStyle = {
      ...styles.table,
      gridTemplateColumns: !isMobile && isGridTie ? 'repeat(6, 1fr)' : styles.table.gridTemplateColumns
    };
  
    return (
      <>
        <h3 style={{ ...styles.blockTitle, fontSize: isMobile ? 16 : 18 }}>{title}</h3>
        <div className="solar-table" style={customTableStyle}>
          {data.map((col, idx) => (
            <div
              key={idx}
              className="solar-column"
              style={{
                ...styles.column,
                borderRight: isMobile ? 'none' : '1px solid #dcdcdc'
              }}
            >
              <div
                className="header-cell"
                style={{
                  ...styles.headerCell,
                  fontSize: isMobile ? 12 : 14,
                  backgroundColor: isGridTie ? '#003c71' : '#01235c'
                }}
              >
                If you have a roof of area <br />
                <strong>{col.roofArea}</strong>
              </div>
  
              <div
                className="solution-bar"
                style={{ ...styles.solutionBar, fontSize: isMobile ? 12 : 13 }}
              >
                {col.solution}
              </div>
  
              <div style={{ ...styles.bodyCell, fontSize: isMobile ? 12 : 13 }}>
                {isGridTie ? col.inverter : col.pcu}
              </div>
              <div style={{ ...styles.bodyCell, fontSize: isMobile ? 12 : 13 }}>
                {col.modules}
              </div>
              {!isGridTie && (
                <div style={{ ...styles.bodyCell, fontSize: isMobile ? 12 : 13 }}>
                  {col.batteries}
                </div>
              )}
              <div style={{ ...styles.bodyCell, fontSize: isMobile ? 12 : 13 }}>
                {col.extras}
              </div>
              <div
                style={{
                  ...styles.bodyCell,
                  fontWeight: 600,
                  fontSize: isMobile ? 12 : 13
                }}
              >
                {col.generation}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  
  /* ---------- STYLES ---------- */
  
  const styles = {
    wrapper: {
      backgroundColor: '#fff'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    subTitle: {
      color: '#555',
      fontWeight: 500,
      marginBottom: 6,
      letterSpacing: '0.05em'
    },
    title: {
      color: '#002b5c',
      fontWeight: 700,
      margin: 0,
      marginBottom: 25
    },
    blockTitle: {
      textAlign: 'center',
      margin: '20px 0 10px',
      textTransform: 'uppercase',
      color: '#003c71'
    },
    table: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      border: '1px solid #dcdcdc',
      borderRadius: 8,
      overflow: 'hidden',
      marginBottom: 40
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      wordBreak: 'break-word',
      backgroundColor: '#f9f9f9'
    },
    headerCell: {
      padding: '14px 8px',
      color: '#fff',
      textAlign: 'center',
      fontWeight: 600,
      lineHeight: 1.4
    },
    solutionBar: {
      background: 'linear-gradient(135deg,#f9c623 0%,#f5b100 100%)',
      color: '#003c71',
      fontWeight: 700,
      textAlign: 'center',
      padding: '10px 6px'
    },
    bodyCell: {
      textAlign: 'center',
      padding: '12px 8px',
      borderTop: '1px solid #dcdcdc',
      lineHeight: 1.4
    }
  };

export default SolarSolutions;
