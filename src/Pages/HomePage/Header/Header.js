import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import banner from '../../../images/banner.png'

const Header = () => {
    return (
        <Box sx={{ width: '100%', backgroundColor:'rgb(250, 229, 211)' }}>
            <Grid container rowSpacing={1} sx={{alignItems:'center', justifyContent:'center', position:'relative'}} columnSpacing={{ xs: 4, sm: 4, md: 3 }}>
                <Grid item xs={12} md={6}>
                 <Typography variant='h4'>Welcome to express furniture</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                <img src={banner} alt=""  width="100%" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Header;