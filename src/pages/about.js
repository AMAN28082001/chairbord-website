import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutBanner from '../components/about/aboutbanner';
import CorporateCulture from '../components/about/corporateculture';
import BrandVision from '../components/about/brandvision';
import LeadershipProfile from '../components/about/leadershipprofile';
import EntrepreneurProfile from '../components/about/entrepreneurprofile';
import MilestoneCarousel from '../components/about/milestonecarousel';
import FinancialHighlights from '../components/about/financialhighlights';
import SustainabilityManagement from '../components/about/sustainabilitymanagement';

const About = () => {
    return (
        <div>
            <Navbar />
            <AboutBanner />
            <CorporateCulture />
            <BrandVision />
            <LeadershipProfile />
            <EntrepreneurProfile />
            <MilestoneCarousel />
            <FinancialHighlights />
            <SustainabilityManagement />
            <Footer />
        </div>
    );
};

export default About;