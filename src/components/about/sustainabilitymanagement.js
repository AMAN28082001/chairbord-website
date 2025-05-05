import React, { useState } from 'react';

// Sustainability items data in an array of objects
const sustainabilityItems = [
    {
        title: "Environmental",
        description: "We prioritize environmental stewardship by utilizing renewable energy sources, implementing efficient manufacturing.",
        image: "https://previews.123rf.com/images/grgroup/grgroup1611/grgroup161111928/105604798-half-body-man-with-formal-shirt-vector-illustration.jpg"
    },
    {
        title: "Society",
        description: "At Rayzon, we embody our core values of 'Reliable, Value-added, Delighted': ensuring stakeholder satisfaction and...",
        image: "https://png.pngtree.com/png-clipart/20230405/original/pngtree-flat-illustration-half-body-png-image_9026829.png"
    },
    {
        title: "Governance",
        description: "Rayzon is dedicated to upholding consistent operational excellence while collaborating closely with our",
        image: "https://previews.123rf.com/images/grgroup/grgroup1611/grgroup161111928/105604798-half-body-man-with-formal-shirt-vector-illustration.jpg"
    }
];

const SustainabilityManagement = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>SUSTAINABILITY MANAGEMENT</h2>
            <div style={styles.grid}>
                {sustainabilityItems.map((item, index) => (
                    <div
                        key={index}
                        style={styles.card}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img src={item.image} alt={item.title} style={styles.image} />
                        <div style={styles.overlay}>
                            <div style={{ ...styles.content, opacity: hoveredIndex === index ? 0 : 1 }}>
                                <h3 style={styles.title}>{item.title}</h3>
                            </div>
                            <div style={{ ...styles.content, opacity: hoveredIndex === index ? 1 : 0 }}>
                                <p style={styles.description}>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '80px 40px',
        backgroundColor: '#ffffff',
        fontFamily: "'Arial', sans-serif",
        maxWidth: '1200px',
        margin: '0 auto'
    },
    heading: {
        fontSize: '32px',
        fontWeight: '700',
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: '60px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px'
    },
    card: {
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        height: '300px',
        cursor: 'pointer',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.4s ease-in-out',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        background: 'rgba(0, 0, 0, 0.6)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        textAlign: 'center',
        transition: 'all 0.3s ease-in-out',
    },
    content: {
        position: 'absolute',
        top: '50%',
        left: '45%',
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.3s ease-in-out',
        width: '80%',
    },
    title: {
        fontSize: '24px',
        fontWeight: '700',
        marginTop: '100px',
        margin: 0,
        padding: '10px 0',
    },
    description: {
        fontSize: '16px',
        lineHeight: '1.5',
        margin: 0,
        padding: '10px 0',
        marginTop: '100px',
    }
};

export default SustainabilityManagement;
