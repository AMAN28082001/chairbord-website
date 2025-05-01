import React from 'react';

const DownloadBanner = () => {
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
                    src="https://res.cloudinary.com/du0cxgoic/video/upload/v1746099882/7685201-hd_1920_1080_24fps_h0vq3n.webm"
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

export default DownloadBanner;
