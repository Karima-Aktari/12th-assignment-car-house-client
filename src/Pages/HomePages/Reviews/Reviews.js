import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    //Show Reviews
    useEffect(() => {
        fetch('https://shielded-wave-62421.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className=" bg-secondary py-4 text-warning">
            <h1 className='py-3'>Consumer reviews</h1>
            <div className="row mx-auto text-secondary">
                {
                    reviews.map(review =>
                        <div key={review._id} className="col-12 col-lg-6 p-2" data-aos="fade-up"
                            data-aos-duration="3000">
                            <div className="bg-light rounded-pill py-3 w-100">
                                <h2>{review.name}</h2>
                                <h2>{review.email}</h2>
                                <h5>{review.description}</h5>
                                <h4>{review.date}</h4>
                                <p className=" mb-1 fs-5">
                                    <Rating initialRating={review.rating} emptySymbol="far fa-star text-warning"
                                        fullSymbol="fas fa-star text-warning" readonly>
                                    </Rating>
                                </p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;