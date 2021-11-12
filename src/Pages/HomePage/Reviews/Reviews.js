import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
            <h2>This is Reviews{reviews.length}</h2>
            {
                reviews.map(review=>console.log(review))
            }
        </div>
    );
};

export default Reviews;