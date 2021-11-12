import React from 'react';
import { useState, useEffect } from 'react';
import ShowAllProduct from '../ShowAllProduct/ShowAllProduct';

const ShowAllProducts = () => {
    const [allCars, setAllCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setAllCars(data))
    }, [])
    return (
        <div className="bg-dark text-info py-4">
            <h1>Latest Brands Collection</h1>
            <div className="row mx-auto p-3">
                {
                    allCars.map(car => <ShowAllProduct
                        key={car._id}
                        car={car}>
                    </ShowAllProduct>)
                }
            </div>
        </div>
    );
};

export default ShowAllProducts;