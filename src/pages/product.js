import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductBanner from '../components/product/productbanner';

const Product = () => {
    return (
        <div>
            <Navbar/>
            <ProductBanner/>
            <Footer/>
        </div>
    );
};

export default Product;