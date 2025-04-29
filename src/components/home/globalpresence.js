import React from 'react';

const GlobalPresence = () => {
  return (
    <>
      <div className="global-container">
        <div className="global-content">
          <div className="left-column">
            <div className="titles">
              <h2 className="section-title">RAYZON IN THE WORLD</h2>
              <h3 className="sub-title">GLOBAL PRESENCE</h3>
            </div>
            <p className="description">
              Rayzon Solar has established itself as a dominant force in the solar energy sector, 
              boasting a formidable global presence that spans continents. As a leading solar panel 
              manufacturer, Rayzon Solar's footprint extends across key markets worldwide, from 
              North America to Europe, Asia, and beyond. Through cutting-edge technology and a 
              commitment to sustainability, Rayzon Solar has earned a reputation for delivering 
              high-quality solar solutions tailored to meet the diverse needs of businesses and 
              consumers alike. With an extensive network of distributors and partners, coupled with 
              a dedication to innovation and customer satisfaction, Rayzon Solar continues to 
              illuminate the path towards a brighter, more sustainable future for generations to come.
            </p>
            <button className="discover-button">DISCOVER MORE</button>
          </div>

          <div className="right-column">
            <div className="image-container">
              <img 
                src="https://media.istockphoto.com/id/1334079644/vector/simple-vector-world-map-flat-icon.jpg?s=612x612&w=0&k=20&c=KYPLNgyrBY7vJSRuIRrxD7LWDM_Rwya5ZBhFUTXdRXs=" 
                alt="Global Presence"
                className="image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS inside component */}
      <style>{`
        .global-container {
          padding: 80px 40px;
          background-color: #f8f9fa;
        }

        .global-content {
          display: flex;
          max-width: 1200px;
          margin: 0 auto;
          gap: 60px;
          align-items: center;
          flex-wrap: wrap;
        }

        .left-column,
        .right-column {
          flex: 1;
          min-width: 300px;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .titles {
          padding: 0 20px;
        }

        .section-title {
          font-size: 42px;
          font-weight: bold;
          color: #2a4365;
          margin-bottom: 15px;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .sub-title {
          font-size: 24px;
          font-weight: 600;
          color: #4a5568;
          margin-bottom: 0;
        }

        .description {
          font-size: 18px;
          line-height: 1.6;
          color: #4a5568;
          margin-bottom: 20px;
        }

        .discover-button {
          background-color: #2a4365;
          color: white;
          border: none;
          padding: 15px 40px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          align-self: flex-start;
        }

        .discover-button:hover {
          background-color: #1e365d;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .image-container {
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.3s ease;
        }

        .image:hover {
          transform: scale(1.02);
        }

        @media (max-width: 768px) {
          .global-content {
            flex-direction: column;
            gap: 40px;
          }

          .section-title {
            font-size: 32px;
          }

          .sub-title {
            font-size: 20px;
          }

          .description {
            font-size: 16px;
          }

          .discover-button {
            align-self: center;
          }
        }
      `}</style>
    </>
  );
};

export default GlobalPresence;
