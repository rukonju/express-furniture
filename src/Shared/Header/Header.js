import { Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import banner from '../../images/banner.png';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box sx={{ width: '100%', backgroundColor:'rgb(14, 102, 85)' }}>
            <Grid 
            container 
            rowSpacing={{ xs: 1, sm: 1, md: 1 }} 
            columnSpacing={{ xs: 4, sm: 4, md: 3 }}
            sx={{alignItems:'center', justifyContent:'center', position:'relative'}} 
            >
                <Grid item xs={12} md={6}>
                    <Container>
                        <Box 
                        variant='h3' 
                        sx={{textAlign:'left',m:'auto', width:'90%', pl:2, borderLeft:'5px solid white', color:'white'}}
                        >
                            <Typography variant='h6'>Make Your Home Beautiful With</Typography>
                            <Typography variant={`${isMobile?'h4':'h2'}`}>EXPRESS FURNITURE</Typography>
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                <img src={banner} alt=""  width="100%" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Header;