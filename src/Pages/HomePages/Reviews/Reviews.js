import React, { useState, useEffect } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    //Show Reviews
    useEffect(() => {
        fetch('https://shielded-wave-62421.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className=" bg-success py-4 text-warning">
            <h1>Consumer reviews</h1>
            <div className="row mx-auto text-secondary">
                {
                    reviews.map(review =>
                        <div key={review._id} className="col-12 col-lg-6 p-2">
                            <div className="bg-light p-2 py-3 w-100">
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