import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <Container sx={{my:4}}>
            <Typography variant='h5' sx={{borderBottom:'4px solid green', p:0, mb:2}}>Our Products </Typography>
            <Grid container spacing={{ xs: 2, md: 4 }}>
                {
                    products.slice(0, 6).map(product=><Product key={product._id} product={product}></Product>)
                }
            </Grid>
            <Typography variant='h5' sx={{ my:2, textAlign:'end' }}>
                <Link to='/products'> Explore more</Link>
            </Typography>
        </Container>
    );
};

export default Products;