import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import door from '../../../images/door.png';
import look from '../../../images/warranty (1).png';
import warranty from '../../../images/warranty.png';
import handred from '../../../images/100.png';

const Feature = () => {
    return (
        <Container sx={{my:4}}>
            <Typography variant='h5' sx={{borderBottom:'4px solid green', p:0, mb:2}}>Our Features</Typography>
            <Grid container spacing={2}>
            <Grid sx={{textAlign:'center'}} item xs={12} sm={6} md={3}>
                <img src={handred} alt="" width="100px" />
            <Typography variant='h6'>Completely Knockdown (CKD) Furniture</Typography>
            </Grid>
            <Grid sx={{textAlign:'center'}} item xs={12} sm={6} md={3}> 
            <img src={look} alt="" width="100px" />
            <Typography variant='h6'>Modern and Slim Look</Typography>
            </Grid>
            <Grid sx={{textAlign:'center'}} item xs={12} sm={6} md={3}>
            <img src={door} alt="" width="100px" />
            <Typography variant='h6'>Furniture with Groove Design</Typography>
            </Grid>
            <Grid sx={{textAlign:'center'}} item xs={12} sm={6} md={3}>
            <img src={warranty} alt="" width="100px" />
            <Typography variant='h6'>1 Year Service Warranty</Typography>
            </Grid>
            </Grid>
        </Container>
    );
};

export default Feature;