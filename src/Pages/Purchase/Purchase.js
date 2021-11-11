import { Button, Card, CardContent, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Shared/Navigation/Navbar/Navbar';

const Purchase = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [purchaseInfo, setPurchaseInfo] = useState({})

    useEffect(() =>{
        const url = `http://localhost:5000/products/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    }, [id]);

    const getPurchaseInfo = e =>{
        const field = e.target.name;
        const value = e.target.value;
        purchaseInfo[field]= value;
        const newPurchaseInfo = {...purchaseInfo};
        setPurchaseInfo(newPurchaseInfo);
    };

    const handlePurchase = e =>{
        e.preventDefaul();
    }

    const style ={display:'flex', flexDirection:'column', maxWidth:'550px',margin:'auto'};

    return (
        <>
        <Navbar/>
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={5}>
                    <Card sx={{ maxWidth: '100%' }}>
                        <CardMedia
                            sx={{bgcolor:'rgb(115, 198, 182)'}}
                            component="img"
                            alt="green iguana"
                            width="100%"
                            image={product?.photoUrl}
                            />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {product?.name}
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div">
                            Color: {product?.Color}
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div">
                            Metarial: {product?.metarial}
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div">
                            Price: {product?.price}
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div">
                            Price: {product?.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={7}>
                    <Box sx={{ mt:8}}>
                    <Box sx={style}>
                        <Typography variant='h6'>Register</Typography>
                        <form 
                            onSubmit={handlePurchase} 
                            style={{display:'flex', flexDirection:'column', padding:'10px'}}
                            >
                            <TextField 
                            onBlur={getPurchaseInfo} 
                            sx={{mt:2, py:1}} 
                            type='text' 
                            name="Name" 
                            label="Name" 
                            variant="outlined" 
                            />
                            <TextField 
                            onBlur={getPurchaseInfo} 
                            sx={{mt:2, py:1}} 
                            type='email' 
                            name='email' 
                            label="Email" 
                            variant="outlined" 
                            />
                            <TextField 
                            onBlur={getPurchaseInfo} 
                            sx={{mt:2}} 
                            type='password' 
                            label="Password" 
                            variant="outlined" 
                            />
                            <TextField 
                            onBlur={getPurchaseInfo} 
                            sx={{mt:2}} 
                            type='password' 
                            name='password2' 
                            label="Confirm Password" 
                            variant="outlined" 
                            />
                            <Button 
                            sx={{my:2}} 
                            color='secondary' 
                            variant='contained'
                            >
                                Login
                            </Button>
                        </form>
                        </Box>
                    </Box>
                </Grid>
        </Grid>
        </Container>
        </>
    );
};

export default Purchase;