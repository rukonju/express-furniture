import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlaceOrder from '../PlaceOrder/PlaceOrder';

const Purchase = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() =>{
        const url = `http://localhost:5000/products/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    }, [id]);

    return (
            <Grid container sx={{mt:4, px:1}} spacing={2}>
                
                    <Grid item xs={12} sm={6} md={3}>
                        <img style={{background:'rgb(115, 198, 182)'}} width="100%" src={product?.photoUrl} alt="" />  
                    </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Box sx={{p:2}}>
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
                                {product?.description}
                                </Typography>
                            </Box>
                        </Grid>

                <Grid item xs={12} sm={12} md={5}>
                    
                        <PlaceOrder product={product}></PlaceOrder>

                </Grid>
            </Grid>
    );
};

export default Purchase;