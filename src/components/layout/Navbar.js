import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav
            style={{
                ...styles.navbar,
                backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
                transition: 'background-color 0.3s ease',
            }}
        >
            <div style={styles.navContainer}>
                <div style={styles.logo}>
                    <img
                        src="https://res.cloudinary.com/du0cxgoic/image/upload/v1745911560/chairbord_b8byxn.webp"
                        alt="Logo"
                        style={{ height: '40px' }}
                    />
                </div>

                {/* Desktop Nav */}
                <ul style={styles.navLinks} className="desktop-nav">
                    <li><a href="/home" style={styles.navLink}>Home</a></li>
                    <li><a href="/why" style={styles.navLink}>Why</a></li>
                    <li><a href="/about" style={styles.navLink}>About</a></li>
                    <li><a href="#services" style={styles.navLink}>Product</a></li>
                    <li><a href="#contact" style={styles.navLink}>Contact</a></li>
                </ul>

                {/* Hamburger Icon */}
                <div className="hamburger" onClick={toggleMobileMenu}>
                    <div style={styles.bar}></div>
                    <div style={styles.bar}></div>
                    <div style={styles.bar}></div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <ul style={styles.mobileMenu}>
                    <li><a href="/home" style={styles.navLink}>Home</a></li>
                    <li><a href="/why" style={styles.navLink}>Why</a></li>
                    <li><a href="/about" style={styles.navLink}>About</a></li>
                    <li><a href="#services" style={styles.navLink}>Product</a></li>
                    <li><a href="#contact" style={styles.navLink}>Contact</a></li>
                </ul>
            )}
        </nav>
    );
};

const styles = {
    navbar: {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '10px 0',
    },
    navContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
    },
    logo: {
        color: '#fff',
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '30px',
        margin: 0,
        padding: 0,
    },
    navLink: {
        textDecoration: 'none',
        color: '#fff',
        fontSize: '18px',
    },
    bar: {
        width: '25px',
        height: '3px',
        backgroundColor: '#fff',
        margin: '4px 0',
        transition: '0.4s',
    },
    mobileMenu: {
        listStyle: 'none',
        padding: '10px 20px',
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
};

// Inject responsive CSS (or use Tailwind / SCSS instead in real projects)
const styleSheet = `
@media (max-width: 768px) {
    .desktop-nav {
        display: none !important;
    }
    .hamburger {
        display: block !important;
        cursor: pointer;
    }
}
@media (min-width: 769px) {
    .hamburger {
        display: none !important;
    }
}
`;
const styleTag = document.createElement('style');
styleTag.innerHTML = styleSheet;
document.head.appendChild(styleTag);

export default Navbar;
