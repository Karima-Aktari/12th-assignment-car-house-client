import React from 'react';
import { Link } from 'react-router-dom';
import './ShowProduct.css';

const ShowProduct = ({ car }) => {
    const { _id, img, name, description } = car;
    return (
        <div className="col-12 col-md-4 product p-3 px-4">
            <div className="py-3 border rounded-3 h-100">
                <img src={img} className="w-75 rounded-3" alt=""></img>
                <h2>{name}</h2>
                <p className="px-4">{description}</p>
                <Link to={`/booking/${_id}`}><button className="btn btn-info">Buy Now</button></Link>

            </div>
        </div>
    );
};

export default ShowProduct;