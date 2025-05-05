import React from 'react';
import WhyBanner from '../components/why/whybanner';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import QualitySection from '../components/why/qualitysection';
import QualityControlSection from '../components/why/qualitycontrolsection';
import ManufacturingExpertiseSection from '../components/why/ManufacturingExpertiseSection';
import FAQSection from '../components/why/faqsection';
const Why = () => {
    return (
        <div>
            <Navbar/>
           <WhyBanner/>
           <QualitySection/>
           <QualityControlSection/>
           <ManufacturingExpertiseSection/>
           <FAQSection/>
           <Footer/>
        </div>
    );
};

export default Why;