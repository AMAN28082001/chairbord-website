import React from 'react';
import Banner from '../components/home/banner'; // Adjust path if necessary
import About from '../components/home/about'; // Adjust path if necessary
import Navbar from '../components/layout/Navbar';
import Solutions from '../components/home/solutions';
import Product from '../components/home/product';
import GlobalPresence from '../components/home/globalpresence';
import Contact from '../components/home/contact';
import CustomerReviews from '../components/home/customerreview'; // Adjust path if necessary
import Footer from '../components/layout/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <About />
            <Solutions />
            <Product />
            <GlobalPresence />
            <CustomerReviews />
            <Contact/>
            {/* Add more sections like About, Services, etc. below */}
            <Footer />
        </div>
    );
};

export default Home;
