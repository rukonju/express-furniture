import { Button, Container, Rating, TextareaAutosize, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Feedback = () => {
    const {user} = useAuth()
    const [rating, setRating] = useState(0)
    console.log(rating)
    const [reviewInfo, setReviewInfo] = useState({});
    const getReviewInfo = e =>{
        const field = e.target.name;
        const value = e.target.value;
        reviewInfo[field] = value;
        const newReviewInfo ={...reviewInfo}
        newReviewInfo.rating= rating;
        newReviewInfo.name= user.displayName;
        newReviewInfo.email= user.email;
        newReviewInfo.photo= user.photoURL;
        setReviewInfo(newReviewInfo);
        console.log(newReviewInfo)
    }

    const handleReview = e =>{

        fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
        .then(res=>res.json())
        .then(result=>console.log(result))
        e.preventDefault();
    }
    return (
        <Container>
            <Typography>Rating</Typography>
            <form onSubmit={handleReview}>
            <TextareaAutosize
            onBlur={getReviewInfo}
            name='comment'
            minRows={4}
            placeholder="Minimum 3 rows"
            style={{ maxWidth: '700px' , fontSize:'20px'}}
            />
            <Typography component="legend">Controlled</Typography>
            <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                setRating(newValue);
                }}
            /> <br />
            <Button type="submit" variant='contained'>Review</Button>
            </form>
        </Container>
    );
};

export default Feedback;