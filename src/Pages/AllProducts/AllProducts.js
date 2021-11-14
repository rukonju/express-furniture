import { Box, Container, Grid, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navigation/Navbar/Navbar';
import Product from '../HomePage/Product/Product';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('https://damp-meadow-99405.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <>
        <Navbar/>
        <Container sx={{my:4}}>
            <Grid container spacing={{ xs: 2, md: 3 }}> 
                {
                    products.length?products.map(product=><Product key={product._id} product={product}></Product>)
                    :[1,2,3,4,5,6].map(num=><Grid key={num} item xs={12} sm={6} md={4}>
                        <Box elevation={16} sx={{ maxWidth: '100%' }}>
                        <Skeleton variant="rectangular" width='100%' height='400px' />
                        <Skeleton width="60%" />
                        <Skeleton width="80%" />
                        </Box>
                      </Grid> )
                }
            </Grid>
        </Container>
        <Footer/>
        </>
    
    );
};

export default AllProducts;