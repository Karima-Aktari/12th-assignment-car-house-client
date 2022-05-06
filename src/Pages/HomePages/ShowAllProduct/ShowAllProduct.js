import React from 'react';
import { Link } from 'react-router-dom';
import './ShowAllProduct.css';

const ShowAllProduct = ({ car }) => {
    const { _id, img, name, price, description } = car;

    return (
        // <div className="col-12 col-md-6 col-lg-4 p-2 product">
        //     <div className="h-96 mx-auto">
        //         <div className="h-96">
        //             <img src={img} className="w-75 rounded-3" alt=""></img>
        //         </div>
        //         <h2>{name}</h2>
        //         <h3>${price}</h3>
        //         <p className="px-4">{description}</p>
        //         <Link to={`/booking/${_id}`}><button className="btn btn-success">Buy Now</button></Link>
        //     </div>
        // </div>

        <div class="col product mx-auto">
            <div class="card h-100">
                <img src={img} className="w-full h-full rounded-3" alt="" />
                <div class="card-body bg-dark">
                    <h2 class="card-title">{name}</h2>
                    <h3 class="card-title">${price}</h3>
                    <p class="card-text">{description}</p>
                </div>
            </div>
        </div>

    );
};

export default ShowAllProduct;