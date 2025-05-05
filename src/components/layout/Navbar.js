import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LeadModal from './leadmodal';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation(); // <-- React Router Hook

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Why', href: '/why' },
    { label: 'About', href: '/about' },
    { label: 'Product', href: '/product' },
    { label: 'Download', href: '/download' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/du0cxgoic/image/upload/v1745911560/chairbord_b8byxn.webp"
              alt="Logo"
              style={{ height: '40px' }}
            />
          </div>

          <ul className="nav-links desktop-nav">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={isActive(link.href) ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="right-controls">
            <button className="enquire-button" onClick={openModal}>
              Enquire
            </button>

            <div
              className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={toggleMobileMenu}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu-container">
            <div className="mobile-menu-header">
              <img
                src="https://res.cloudinary.com/du0cxgoic/image/upload/v1745911560/chairbord_b8byxn.webp"
                alt="Logo"
                style={{ height: '40px' }}
              />
            </div>
            <ul className="mobile-menu">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={isActive(link.href) ? 'active' : ''}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  className="enquire-button mobile"
                  onClick={() => {
                    openModal();
                    closeMobileMenu();
                  }}
                >
                  Enquire
                </button>
              </li>
            </ul>
          </div>
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

        .right-controls {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .nav-links,
        .mobile-menu {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-links a,
        .mobile-menu a {
          text-decoration: none;
          color: #fff;
          font-size: 18px;
        }

        .nav-links a.active,
        .mobile-menu a.active {
          color: #A1E3F9;
          border-bottom: 2px solid #A1E3F9;
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
          width: 30px;
          height: 21px;
          position: relative;
          z-index: 1001;
        }

        .hamburger.open .bar:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.open .bar:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open .bar:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .bar {
          width: 100%;
          height: 3px;
          background-color: #fff;
          transition: all 0.3s ease;
        }

        .mobile-menu-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.98);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          padding-top: 70px;
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-menu {
          display: flex;
          flex-direction: column;
          padding: 20px;
          flex-grow: 1;
        }

        .mobile-menu li {
          margin-bottom: 15px;
        }

        .mobile-menu a {
          font-size: 18px;
          display: block;
          padding: 10px 0;
        }

        .enquire-button.mobile {
          margin-top: 20px;
          width: 100%;
          padding: 12px;
          font-size: 18px;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .enquire-button:not(.mobile) {
            display: none;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu-container {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
