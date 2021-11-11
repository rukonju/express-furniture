import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navigation/Navbar/Navbar';
import Product from '../HomePage/Product/Product';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <>
        <Navbar/>
        <Container sx={{my:4}}>
            <Grid container spacing={{ xs: 2, md: 3 }}>
                {
                    products.map(product=><Product key={product._id} product={product}></Product>)
                }
            </Grid>
        </Container>
        </>
    
    );
};

export default AllProducts;