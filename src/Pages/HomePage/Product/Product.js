import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const{_id, name, Color, metarial, photoUrl, price} = product;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: '100%' }}>
                <CardMedia
                    sx={{bgcolor:'rgb(115, 198, 182)'}}
                    component="img"
                    alt="green iguana"
                    width="100%"
                    image={photoUrl}
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {name}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                    Color: {Color}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                    Metarial: {metarial}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                    Price: {price}
                    </Typography>
                    <Link to={`products/${_id}`}>
                        <Button size="small">Purchase</Button>
                    </Link>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Product;