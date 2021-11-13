import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navigation/Navbar/Navbar';
import Feature from '../Feature/Feature';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <Products/>
            <Reviews/>
            <Feature/>
            <Footer/>
        </>
    );
};

export default Home;