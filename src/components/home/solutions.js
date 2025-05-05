import React from 'react';

const Solutions = () => {
  // Data for the video and text content
  const videoData = {
    videoUrl: "https://res.cloudinary.com/du0cxgoic/video/upload/v1745918504/mid_header_1_kudray.webm",
    heading: "WIDE RANGE OF SOLAR SOLUTION",
    subheading: "Since We Design The Solar From The Beginning",
    buttons: [
      { text: "DISCOVER MORE", className: "discover-button" },
      { text: "I have a question", className: "inquiry-button" },
      { text: "Tell me more", className: "tellme-button" }
    ]
  };

  return (
    <>
      <div className="video-container">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        >
          <source src={videoData.videoUrl} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        <div className="content-overlay">
          <div className="video-content">
            <h2 className="heading">{videoData.heading}</h2>
            <p className="subheading">{videoData.subheading}</p>

            <div className="buttons-container">
              <button className={videoData.buttons[0].className}>{videoData.buttons[0].text}</button>

              <div className="inquiry-buttons">
                {videoData.buttons.slice(1).map((button, index) => (
                  <button key={index} className={button.className}>{button.text}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded CSS */}
      <style>{`
        .video-container {
          position: relative;
          width: 100%;
          height: 43vh;
          overflow: hidden;
        }

        .background-video {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translate(-50%, -50%);
          z-index: 1;
        }

        .content-overlay {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.4);
          padding: 10px;
          text-align: center;
        }

        .video-content {
          max-width: 800px;
          width: 100%;
          color: white;
        }

        .heading {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 5px;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        .subheading {
          font-size: 18px;
          margin-bottom: 5px;
          font-style: italic;
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
        }

        .buttons-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
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
          text-transform: uppercase;
          transition: all 0.3s ease;
        }

        .inquiry-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .inquiry-button,
        .tellme-button {
          padding: 10px 25px;
          font-size: 14px;
          font-weight: 500;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .inquiry-button {
          background-color: transparent;
          color: white;
          border: 1px solid white;
        }

        .tellme-button {
          background-color: white;
          color: #2a4365;
          border: 1px solid white;
        }

        @media (max-width: 768px) {
          .video-container {
            height: auto;
          }

          .heading {
            font-size: 28px;
          }

          .subheading {
            font-size: 16px;
          }

          .discover-button {
            padding: 12px 30px;
            font-size: 14px;
          }

          .inquiry-button,
          .tellme-button {
            font-size: 13px;
            padding: 10px 20px;
          }

          .buttons-container {
            gap: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Solutions;
