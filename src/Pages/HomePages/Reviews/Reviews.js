import React, { useState, useEffect } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    //Show Reviews
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className=" bg-success p-4 text-warning">
            <h1>Consumer reviews</h1>
            <div className="row mx-auto text-secondary">
                {
                    reviews.map(review =>
                        <div key={review._id} className="col-12 col-md-6 p-4">
                            <div className="bg-light p-4">
                                <h2>{review.name}</h2>
                                <h2>{review.email}</h2>
                                <h5>{review.description}</h5>
                                <h4>{review.date}</h4>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;