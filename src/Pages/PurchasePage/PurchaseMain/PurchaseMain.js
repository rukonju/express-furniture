import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navigation/Navbar/Navbar';
import Purchase from '../Purchase/Purchase';

const PurchaseMain = () => {
    return (
        <div>
            <Navbar/>
            <Purchase/>
            <Footer/>
        </div>
    );
};

export default PurchaseMain;