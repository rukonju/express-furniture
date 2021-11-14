import React from 'react';
import { FacebookRounded, Google, YouTube } from '@mui/icons-material';
import { Container, Grid, Box, Typography } from '@mui/material';

const Footer = () => {

    const style ={
        color:'rgb(229, 231, 233)'
    }
    return (
        <Box sx={{bgcolor:'rgb(40, 55, 71 )', color:'rgb(229, 231, 233)', mt:8}}>
            <Container>
                <Grid container spacing={{ xs: 2, sm:3, md: 4 }} >
                    <Grid item xs={12} sm={6} md={4} >
                        <Box>
                        <Google fontSize="large" sx={{pr:4}}/>
                        <YouTube fontSize="large" sx={{pr:4}}/>
                        <FacebookRounded fontSize="large" sx={{pr:4}}/>
                        </Box>
                        
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                    <Typography style={style} to="/">Privecy policy</Typography>
                            <Typography style={style} to="/">About us</Typography>
                            <Typography style={style} to="/">Terms of use</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Typography>Contact: 34908834345</Typography>
                        <Typography>Email: easyqourier@gmail.com</Typography>
                        <Typography>Location: Sherpur Town,Sherpur,Mymensingh.</Typography>
                    </Grid>
                </Grid>
                <Typography sx={{py:4, textAlign:'center'}}>Copyright © 2021 Express Furniture. All right reserved.</Typography>
            </Container>
        </Box>
    );
};

export default Footer;