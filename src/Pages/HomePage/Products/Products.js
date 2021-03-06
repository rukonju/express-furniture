import { Box, Container, Grid, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const numbers = [1,2,3,4,5,6];

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('https://damp-meadow-99405.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    return (
        <Container sx={{my:4}}>
            <Typography variant='h5' sx={{borderBottom:'4px solid green', p:0, mb:2}}>
                Our Products 
            </Typography>
            <Grid container spacing={{ xs: 2, md: 4 }}>
                {
                    products.length?products.slice(0, 6).map(product=><Product 
                    key={product._id} 
                    product={product}
                    >   
                    </Product>)
                    : numbers.map(num=><Grid key={num} item xs={12} sm={6} md={4}>
                        <Box elevation={16} sx={{ maxWidth: '100%' }}>
                        <Skeleton variant="rectangular" width='100%' height='400px' />
                        <Skeleton width="60%" />
                        <Skeleton width="80%" />
                        </Box>
                      </Grid>  )
                }
            </Grid>
            <Typography variant='h5' sx={{ my:2, textAlign:'end' }}>
                <Link to='/products'> Explore more</Link>
            </Typography>
        </Container>
    );
};

export default Products;