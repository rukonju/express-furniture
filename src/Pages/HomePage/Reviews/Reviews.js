import { Avatar, Button, Container, Rating, Stack, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <Container>

        <Typography variant='h5' sx={{borderBottom:'4px solid green', p:0, mb:2}}>Customer review </Typography>
            {
                reviews.map(review=><Container sx={{textAlign:'center', border:'1px solid black', my:2}} key={review._id}>
                    {review.photo?
                    <img style={{borderRadius:'50px'}} src={review.photo} width='100px' height='100px' alt=""/>
                    :<Stack alignItems="center">
                    <Avatar sx={{ bgcolor: deepOrange[500],width:'100px', height:'100px', textAlign:'center' }} >{review?.name?.slice(0,1).toLocaleUpperCase()}</Avatar>
                  </Stack>
                    }
                    <Typography>{review?.name}</Typography>
                    <Rating name="read-only" value={review?.rating} readOnly />
                    <Typography>{review?.comment}</Typography>
                </Container>)
            }
            <Button>See more</Button>
        </Container>
    );
};

export default Reviews;