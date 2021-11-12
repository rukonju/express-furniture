import { Container, Grid, Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    const style ={
        color:'rgb(229, 231, 233)'
    }
    return (
        <Box sx={{bgcolor:'rgb(11, 83, 69 )', color:'rgb(229, 231, 233)', mt:8}}>
            <Container>
            <Grid container spacing={{ xs: 2, sm:3, md: 4 }} >
                <Grid item xs={12} sm={6} md={4} >
                    <p className="text-light">Contact: 34908834345</p>
                    <p className="text-light">Email: easyqourier@gmail.com</p>
                    <p className="text-light">Location: Sherpur Town,Sherpur,Mymensingh.</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                <Typography style={style} to="/">Privecy policy</Typography>
                          <Typography style={style} to="/">Who We Are</Typography>
                          <Typography style={style} to="/">Terms of use</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                gard
                </Grid>
            </Grid>
        </Container>
        </Box>
    );
};

export default Footer;