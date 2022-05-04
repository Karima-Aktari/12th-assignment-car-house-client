import React from 'react';
import { useState, useEffect } from 'react';
import ShowAllProduct from '../ShowAllProduct/ShowAllProduct';

const ShowAllProducts = () => {
    const [allCars, setAllCars] = useState([]);

    useEffect(() => {
        fetch('https://shielded-wave-62421.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setAllCars(data))
    }, [])
    return (
        <div className="bg-dark text-info py-4 mx-auto">
            <h1>Latest Brands Collection</h1>
            <div className="mx-auto p-3 row row-cols-1 row-cols-md-3 g-4">
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