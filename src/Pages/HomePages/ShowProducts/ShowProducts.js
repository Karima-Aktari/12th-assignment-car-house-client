import React, { useState, useEffect } from 'react';
import ShowProduct from '../ShowProduct/ShowProduct';

const ShowProducts = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://shielded-wave-62421.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <div className="bg-dark py-4">
            <h1 className="text-info">Popular Brand</h1>
            <div className="row mx-auto p-4 text-white ">
                {
                    cars.slice(0, 6).map(car => <ShowProduct
                        key={car._id}
                        car={car}
                    ></ShowProduct>)
                }
            </div>
        </div>
    );
};

export default ShowProducts;