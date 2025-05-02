import React from 'react';

const ProductBanner = () => {
    return (
        <div style={styles.container}>
            <video
                autoPlay
                loop
                muted
                playsInline
                style={styles.video}
            >
                <source
                    src="https://res.cloudinary.com/du0cxgoic/video/upload/v1746179791/4122971-uhd_3840_2160_25fps_a4ba0w.webm"
                    type="video/webm"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

};

export default ProductBanner;
