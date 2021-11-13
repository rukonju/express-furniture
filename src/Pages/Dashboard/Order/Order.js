import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Order = ({order}) => {
    const {name, Color, photoUrl, price} = order?.product;
    const {handleCancelOrder} = useAuth();

    
    return (

        <Grid item xs={12} sm={6} md={3}>
            <Card elevation={12} sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="100%"
                image={photoUrl}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Color: {Color}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Price: {price}
                </Typography>
                <Button onClick={() =>handleCancelOrder(order._id)} variant='contained'>Cencel</Button>
            </CardContent>
            </Card>
        </Grid>
  

    );
};

export default Order;