import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductBanner from '../components/product/productbanner';
import WhySolar from '../components/product/whysolar';
import SolarSolutions from '../components/product/solarsolution';
import LandmarkProjects from '../components/product/landmarkproject';
import SolarRecommendationSystem from '../components/product/solarrecommendationsystem';
// import RemoteMonitoring from '../components/product/remotemonitoring';

const Product = () => {
    return (
        <div>
            <Navbar/>
            <ProductBanner/>
            <WhySolar/>
            <SolarSolutions/>
            {/* <RemoteMonitoring/> */}
            <LandmarkProjects/>
            <SolarRecommendationSystem/>
            <Footer/>
        </div>
    );
};

export default Product;