import React from 'react';
import { Link } from 'react-router-dom';
import './ShowAllProduct.css';

const ShowAllProduct = ({ car }) => {
    const { _id, img, name, price, description } = car;

    return (
        <div className="col-12 col-md-6 col-lg-4 p-2">
            <div>
                <img src={img} className="w-75 rounded-3" alt=""></img>
                <h2>{name}</h2>
                <h3>${price}</h3>
                <p className="px-4">{description}</p>
                <Link to={`/booking/${_id}`}><button className="btn btn-success">Buy Now</button></Link>
            </div>
        </div>
    );
};

export default ShowAllProduct;