import React from 'react';
import ContactBanner from '../components/contact/contactbanner';
import ContactForm from '../components/contact/contactform';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LocationInfo from '../components/contact/howtoreach';

const Contact = () => {
    return (
        <div>
            <Navbar />
           <ContactBanner />
           <ContactForm />
           <LocationInfo />
           <Footer />
        </div>
    );
};

export default Contact;