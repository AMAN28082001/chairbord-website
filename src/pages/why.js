import React from 'react';
import WhyBanner from '../components/why/whybanner';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import QualitySection from '../components/why/qualitysection';
import FAQSection from '../components/why/faqsection';
import FeatureSections from '../components/why/featuresection';
const Why = () => {
    return (
        <div>
            <Navbar/>
           <WhyBanner/>
           <QualitySection/>
           {/* <QualityControlSection/>
           <ManufacturingExpertiseSection/> */}
           <FeatureSections/>
           <FAQSection/>
           <Footer/>
        </div>
    );
};

export default Why;