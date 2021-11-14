import {  Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';

const PageNotFound = () => {
    return (
        <Container >
            <Grid container spacing={2} alignItems='center'>
            <Grid item xs={12} md={6}>
                <img src="https://account.mongodb.com/static/images/sadface.gif" alt="" width="100%" />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant='h3'>Page not found </Typography>
                <Typography variant='h5'>
                    <Link to='/'>Back to home</Link>
                </Typography>
            </Grid>
            </Grid>
        </Container>
    );
};

export default PageNotFound;