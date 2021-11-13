import { Container, Typography } from '@mui/material';
import React from 'react';

const Feature = () => {
    return (
        <Container sx={{my:4}}>
            <Typography variant='h5' sx={{borderBottom:'4px solid green', p:0, mb:2}}>Our Features</Typography>
            <Typography>Completely Knockdown (CKD) Furniture</Typography>
            <Typography>Modern and Slim Look</Typography>
            <Typography>Durable & User-Friendly</Typography>
            <Typography>Furniture with Groove Design</Typography>
            <Typography>100% Termite Proof</Typography>
            <Typography>1 Year Service Warranty</Typography>
        </Container>
    );
};

export default Feature;