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
                    products.length?products.map(product=><Product key={product._id} product={product}></Product>):[1,2,3,4,5,6].map(num=><Box key={num} sx={{ pt: 0.5, m:4 }}>
                        <Skeleton variant="rectangular" width={280} height={450} />
                        <Skeleton width="60%" />
                        <Skeleton width="80%" />
                      </Box> )
                }
            </Grid>
        </Container>
        <Footer/>
        </>
    
    );
};

export default AllProducts;