import { Avatar, Box, Container, Rating, Skeleton, Stack, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay, Pagination,Navigation} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

// Import Swiper React components

  
  // install Swiper modules
  SwiperCore.use([Autoplay,Pagination,Navigation]);

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://damp-meadow-99405.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    return (
        <Container>
            <Typography 
            variant='h5' 
            sx={{borderBottom:'4px solid green', p:0, mb:2}}
            >
                Customer review 
            </Typography>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
            "delay": 4000,
            "disableOnInteraction": false
            }} pagination={{
            "clickable": true
            }} navigation={true} >
            

            {
                reviews.length?reviews.map(review=><SwiperSlide key={review?._id}><Container 
                    sx={{textAlign:'center',  p:2, my:2}} 
                    
                    >
                    {
                        review.photo?
                        <img 
                        style={{borderRadius:'50px'}} 
                        src={review.photo} 
                        width='80px' 
                        height='80px' 
                        alt=""
                        />
                        :<Stack alignItems="center">
                            <Avatar 
                            sx={{ bgcolor: deepOrange[500],width:'80px', height:'80px', textAlign:'center', fontSize:'24px' }} 
                            >
                            {review?.name?.slice(0,1).toLocaleUpperCase()}
                            </Avatar>
                        </Stack>
                    }
                    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>

                    <Typography variant='h6'>{review?.name}</Typography>
                    <Rating name="read-only" value={review?.rating} readOnly />
                    <Typography  variant="h8" component="div">{review?.comment}</Typography>
                    </Box>
                </Container></SwiperSlide>)
                :[1,2,3].map(num=><Box 
                    key={num} 
                    sx={{ pt: 0.5, m:4 }}>
                    <Skeleton variant='circular' width="60px" height='60px' />
                    <Skeleton width="50%" />
                    <Skeleton variant="rectangular" width='70%' height='150px' />
                </Box> )
            }
            </Swiper>
        </Container>
    );
};

export default Reviews;