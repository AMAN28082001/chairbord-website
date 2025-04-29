import React from 'react';

const Product = () => {
  return (
    <>
      <div className="culture-container">
        <div className="culture-grid">
          {/* Left side - Core Values */}
          <div className="core-values">
            <h2 className="core-title">CORE VALUES</h2>
            <div className="value-list">
              {['TEAMWORK', 'HONESTY', 'INNOVATION', 'QUALITY'].map((value) => (
                <div key={value} className="value-item">
                  <h3 className="value-title">{value}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Description */}
          <div className="culture-description">
            <h2 className="culture-title">Corporate Culture that Shapes our Footprint</h2>
            <p className="culture-text">
              As a leading manufacturer of PV module and smart energy solution, Rayzon delivers world class solar PV products, applications, and services to promote global sustainable development...
            </p>
          </div>
        </div>
      </div>

      {/* Embedded CSS */}
      <style>{`
        .culture-container {
          padding: 80px 40px;
          background-color: #f8f9fa;
        }

        .culture-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .core-values {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .core-title {
          font-size: 36px;
          font-weight: bold;
          color: #2a4365;
          margin-bottom: 40px;
          text-align: center;
        }

        .value-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          width: 100%;
        }

        .value-item {
          background-color: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: all 0.3s ease;
        }

        .value-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }

        .value-title {
          font-size: 24px;
          font-weight: 600;
          color: #2a4365;
          margin: 0;
        }

        .culture-description {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .culture-title {
          font-size: 32px;
          font-weight: bold;
          color: #2a4365;
          margin-bottom: 30px;
          line-height: 1.3;
        }

        .culture-text {
          font-size: 18px;
          line-height: 1.6;
          color: #4a5568;
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .culture-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .value-list {
            grid-template-columns: 1fr;
          }

          .core-title {
            font-size: 28px;
          }

          .culture-title {
            font-size: 26px;
          }

          .culture-text {
            font-size: 16px;
          }

          .value-title {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Product;
