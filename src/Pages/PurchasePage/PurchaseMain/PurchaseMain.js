import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navigation/Navbar/Navbar';
import Purchase from '../Purchase/Purchase';

const PurchaseMain = () => {
    const {id} = useParams();
    console.log(id)
    return (
        <>
            <Navbar/>
            <Purchase id={id}></Purchase>
            <Footer/>
        </>
    );
};

export default PurchaseMain;