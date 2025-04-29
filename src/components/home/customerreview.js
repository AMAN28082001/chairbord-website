import React, { useState, useEffect } from 'react';

const newsItems = [
    {
        image: 'https://res.cloudinary.com/du0cxgoic/image/upload/v1714370225/ipl1_card.webp',
        title: 'RAYZON SOLAR X IPL 2025: HOW RENEWABLE ENERGY...',
        description: 'Cricket is more than a sport in India — it’s an emotion that unites millions. As the...',
    },
    {
        image: 'https://res.cloudinary.com/du0cxgoic/image/upload/v1714370225/solar_bill_card.webp',
        title: 'HOW TO READ YOUR SOLAR ENERGY BILL?',
        description: 'Solar energy has transformed the way we power our homes and businesses. With...',
    },
    {
        image: 'https://res.cloudinary.com/du0cxgoic/image/upload/v1714370225/ipl2_card.webp',
        title: 'RAYZON SOLAR & CHENNAI SUPER KINGS:...',
        description: 'As cricket enthusiasts gear up for IPL 2025, the Chennai Super Kings (CSK) are not only...',
    },
    {
        image: 'https://res.cloudinary.com/du0cxgoic/image/upload/v1714370225/ipl1_card.webp',
        title: 'RAYZON SOLAR X IPL 2025: HOW RENEWABLE ENERGY...',
        description: 'Cricket is more than a sport in India — it’s an emotion that unites millions. As the...',
    },
    {
        image: 'https://res.cloudinary.com/du0cxgoic/image/upload/v1714370225/solar_bill_card.webp',
        title: 'HOW TO READ YOUR SOLAR ENERGY BILL?',
        description: 'Solar energy has transformed the way we power our homes and businesses. With...',
    },
    {
        image: 'https://res.cloudinary.com/du0cxgoic/image/upload/v1714370225/ipl2_card.webp',
        title: 'RAYZON SOLAR & CHENNAI SUPER KINGS:...',
        description: 'As cricket enthusiasts gear up for IPL 2025, the Chennai Super Kings (CSK) are not only...',
    },
];

const CustomerReview = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

    function getItemsPerSlide() {
        if (window.innerWidth <= 600) return 1;
        if (window.innerWidth <= 900) return 2;
        return 3;
    }

    useEffect(() => {
        const handleResize = () => {
            setItemsPerSlide(getItemsPerSlide());
            setCurrentIndex(0); // Reset on resize
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = Math.ceil(newsItems.length / itemsPerSlide);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
    };

    const start = currentIndex * itemsPerSlide;
    const currentItems = newsItems.slice(start, start + itemsPerSlide);

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Latest News</h2>

            <div style={styles.carousel}>
                <button onClick={goToPrev} style={styles.navBtn} disabled={currentIndex === 0}>
                    ◀
                </button>

                <div style={styles.wrapper}>
                    {currentItems.map((item, index) => (
                        <div key={index} style={{ ...styles.card, flex: `1 0 calc(100% / ${itemsPerSlide} - 20px)` }}>
                            <img src={item.image} alt="news" style={styles.image} />
                            <div style={styles.content}>
                                <h3 style={styles.title}>{item.title}</h3>
                                <p style={styles.description}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button onClick={goToNext} style={styles.navBtn} disabled={currentIndex === totalSlides - 1}>
                    ▶
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '40px 20px',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    carousel: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'nowrap',
    },
    wrapper: {
        display: 'flex',
        gap: '20px',
        overflow: 'hidden',
        maxWidth: '1000px',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minWidth: 0, // important for flex
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    },
    content: {
        padding: '16px',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    description: {
        fontSize: '14px',
        color: '#555',
    },
    navBtn: {
        fontSize: '24px',
        padding: '10px',
        border: 'none',
        backgroundColor: '#fff',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        margin: '0 10px',
        borderRadius: '50%',
        minWidth: '40px',
        minHeight: '40px',
    },
};

export default CustomerReview;
