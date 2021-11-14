import { Button, Container, Rating, TextareaAutosize, Typography, Dialog, DialogTitle, DialogActions } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Feedback = () => {
    const {user} = useAuth()
    const [reviewInfo, setReviewInfo] = useState({});
    const [rating, setRating] = useState(null);
    const [open, setOpen] = useState(false);
    console.log(rating)
    const getReviewInfo = e =>{
        const field = e.target.name;
        const value = e.target.value;
        reviewInfo[field] = value;
        const newReviewInfo ={...reviewInfo};
        newReviewInfo.rating= rating;
        newReviewInfo.name= user?.displayName;
        newReviewInfo.email= user?.email;
        newReviewInfo.photo= user?.photoURL;
        setReviewInfo(newReviewInfo);
        console.log(newReviewInfo)
    }

    const handleReview = e =>{
        fetch('https://damp-meadow-99405.herokuapp.com/reviews',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId){
                setOpen(true);
            }
        })
        e.preventDefault();
    }

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <Container>
            <Typography>Comment</Typography>
            <form onSubmit={handleReview}>
            <TextareaAutosize
            onBlur={getReviewInfo}
            name='comment'
            minRows={4}
            placeholder="Write your comment here..."
            style={{ maxWidth: '700px' , fontSize:'20px'}}
            />
            <Typography component="legend">Rating</Typography>
            <Rating
                name="rating"
                onBlur={getReviewInfo}
                value={rating}
                
                onChange={(event, newValue) => {
                setRating(newValue);
                }}
            /> <br />
            <Button  type="submit" variant='contained'>Review</Button>
            </form>
             <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Thank you for review"}
                </DialogTitle>
                <DialogActions>
                  
                  <Button onClick={handleClose} autoFocus>
                    OK
                  </Button>
                </DialogActions>
              </Dialog>
        </Container>
    );
};

export default Feedback;