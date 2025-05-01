import React from 'react';
import DownloadBanner from '../components/download/downloadbanner';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DownloadResources from '../components/download/downloadfiles';

const Download = () => {
    return (
        <div>
            <Navbar />
           <DownloadBanner />
           <DownloadResources />
           <Footer />
        </div>
    );
};

export default Download;