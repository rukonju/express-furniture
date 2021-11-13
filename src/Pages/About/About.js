import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import banner from '../../images/banner.png'
import Footer from '../../Shared/Footer/Footer'
import Navbar from '../../Shared/Navigation/Navbar/Navbar';

const About = () => {
    return (
        <>
        <Navbar/>
        <Box sx={{ width: '100%', backgroundColor:'rgb(14, 102, 85)' }}>
            <Grid container rowSpacing={1} sx={{alignItems:'center', justifyContent:'center', position:'relative'}} columnSpacing={{ xs: 4, sm: 4, md: 3 }}>
                <Grid item xs={12} md={6}>
                    <Container>
                        <Box 
                        variant='h3' 
                        sx={{textAlign:'left',m:'auto', width:'90%', pl:2, borderLeft:'5px solid white', color:'white'}}
                        >  
                            <Typography variant='h4'>Welcome To</Typography>
                            <Typography variant='h3'>EXPRESS FURNITURE</Typography>                      
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                <img src={banner} alt=""  width="100%" />
                </Grid>
            </Grid>
        </Box>
        <Container>
            <Typography variant='h5' sx={{borderBottom:'4px solid green', p:0, my:4}}>
                About Express Furniture 
            </Typography>
            <Typography>
            Regal Furniture, a brand of RFL, is now considered as a well-known furniture brand in Bangladesh. With the utmost promise to provide the finest home and office furniture Regal started its journey in 2013. Regal has introduced a large variety of quality product with exclusive, contemporary and customized design. To cope up with the national and international demand of furniture, Regal established world class factories in Narayangonj and produces furniture using best quality imported raw materials, modern machineries, seasoning plant, CNC machine etc with the help of experienced engineers, architects and hundreds of skilled labors. From the conceptualization to the final delivery, all out production goes through strict quality control process.
            <br /> <br />
            Regal is relentlessly trying with a vision to provide quality products at a reasonable price and absolute services towards its valued customers, even after sales. Regal family believes that this would ensure Regal Furniture as a trusted name in Bangladesh and beyond.
            <br /> <br />
            Regal welcomes the opportunity to become your partner and is ready to deliver you with the appropriate goods and services.
            </Typography>

            <Typography variant='h5' sx={{borderBottom:'4px solid green', p:0, my:4}}>Factory Details </Typography>
            <Typography >We have three individual furniture manufacturing industries in Bangladesh. One is situated in Rupgonj, Narayangonj which area is approximate 2 lacs square feet and another two factories are situated in Gawsia, Narayangonj which area is approximate 1.25 lacs square feet.
            <br /> <br />

            Selection is done based on merits and qualifications. Everyone has got clear-cut job descriptions and got equal opportunity to contribute and share their ideas and thoughts to grow in the company.
            <br /> <br />

            Employees are rewarded with salary, commission and incentives as per standards. Workers and staffs are provided with free and subsidized food from the factory and office cafeterias.
            </Typography>
        </Container>
        <Footer/>
         </>
    );
};

export default About;