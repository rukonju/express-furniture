import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navigation/Navbar/Navbar';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Products/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Home;