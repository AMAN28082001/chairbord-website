import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Logo & Description */}
          <div className="footer-column">
            <img
              src="https://res.cloudinary.com/du0cxgoic/image/upload/v1745911560/chairbord_b8byxn.webp"
              alt="Rayzon Solar"
              className="footer-logo"
            />
            <p className="footer-text">
              Rayzon is committed to mainstreaming sustainable business practices across industries domains and residential landscapes through its tech-oriented solar panel manufacturing and supply. To add one more step to a greener future, we aim to extend our production to 8 GW by the end of 2025.
            </p>
          </div>

          {/* Products */}
          <div className="footer-column">
            <h4 className="footer-heading">Our Products</h4>
            <ul className="footer-list">
              <li>L'Ilios Topcon Modules</li>
              <li>L'Ilios Bifacial Modules</li>
              <li>L'Ilios Monofacial Modules</li>
              <li>L'Ilios Black Modules</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Link</h4>
            <ul className="footer-list">
              <li>About Us</li>
              <li>Our Products</li>
              <li>Blogs</li>
              <li>Contact Us</li>
              <li>Career</li>
              <li>Apply For Distributor</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="footer-column">
            <h4 className="footer-heading">Email</h4>
            <p className="footer-text">Subscribe to receive exclusive updates and more.</p>
            <input type="email" placeholder="Email" className="footer-input" />
            <button className="footer-button">Submit</button>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">&copy; 2025 Rayzon Solar. All Rights Reserved.</p>
          <div className="footer-socials">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-x-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </footer>

      {/* Embedded CSS */}
      <style>{`
        .footer {
          background-color:rgb(201, 201, 201);
          padding: 40px 20px;
          font-family: sans-serif;
        }

        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-column {
          flex: 1 1 250px;
          min-width: 250px;
        }

        .footer-logo {
          width: 140px;
          margin-bottom: 20px;
        }

        .footer-heading {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 16px;
        }

        .footer-text {
          font-size: 14px;
          color: #444;
          line-height: 1.6;
        }

        .footer-list {
          list-style-type: none;
          padding: 0;
          font-size: 14px;
          color: #444;
          line-height: 1.8;
        }

        .footer-input {
          width: 100%;
          padding: 10px;
          font-size: 14px;
          margin-top: 10px;
          border: none;
          border-bottom: 1px solid #ccc;
          background: transparent;
          outline: none;
        }

        .footer-button {
          margin-top: 10px;
          padding: 10px 20px;
          font-size: 14px;
          background-color: #000;
          color: #fff;
          border: none;
          cursor: pointer;
        }

        .footer-divider {
          margin-top: 40px;
          border-top: 1px solid #ddd;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 20px;
          max-width: 1200px;
          margin-inline: auto;
          padding-bottom: 10px;
        }

        .footer-copy {
          font-size: 14px;
          color: #555;
        }

        .footer-socials {
          display: flex;
          gap: 15px;
          font-size: 18px;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-column {
            width: 100%;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
