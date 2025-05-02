import React, { useEffect, useState } from 'react';
import LeadModal from './leadmodal';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/du0cxgoic/image/upload/v1745911560/chairbord_b8byxn.webp"
              alt="Logo"
              className="logo-img"
            />
          </div>

          <ul className="nav-links desktop-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/why">Why</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="#services">Product</a></li>
            <li><a href="/download">Download</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

          <div className="right-controls">
            <button className="enquire-button" onClick={openModal}>
              Enquire
            </button>

            <div className="hamburger" onClick={toggleMobileMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <ul className="mobile-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/why">Why</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="#services">Product</a></li>
            <li><a href="/download">Download</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><button className="enquire-button mobile" onClick={openModal}>Enquire</button></li>
          </ul>
        )}
      </nav>

      {isModalOpen && <LeadModal isOpen={isModalOpen} onClose={closeModal} />}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          padding: 12px 0;
          margin-top: -1px;
          background-color: transparent;
          transition: background-color 0.3s ease;
        }

        .navbar.scrolled {
          background-color: rgba(0, 0, 0, 0.9);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }

        .logo-img {
          height: 42px;
        }

        .right-controls {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .nav-links, .mobile-menu {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-links a, .mobile-menu a {
          text-decoration: none;
          color: #fff;
          font-size: 18px;
        }

        .enquire-button {
          background: linear-gradient(90deg, #3674B5, #578FCA, #A1E3F9, #D1F8EF);
          background-size: 200% auto;
          color: #fff;
          border: none;
          padding: 8px 16px;
          font-size: 16px;
          border-radius: 6px;
          cursor: pointer;
          transition: background-position 0.5s ease;
        }

        .enquire-button:hover {
          background-position: right center;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
        }

        .bar {
          width: 25px;
          height: 3px;
          background-color: #fff;
          margin: 3px 0;
          transition: 0.4s;
        }

        .mobile-menu {
          background-color: #000;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 10px 20px;
        }

        .mobile-menu li {
          margin-bottom: 10px;
        }

        .enquire-button.mobile {
          margin-top: 10px;
          width: 100%;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .enquire-button {
            display: none;
          }

          .logo-img {
            height: auto;
            max-height: 36px;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
