import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [allCars, setAllCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setAllCars(data))
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/deleteCar/${id}`
        fetch(url, {
            method: "DELETE",
            headers: { "content-type": "application.json" }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Are You Sure To DELETE')
                    const remaining = allCars.filter(service => service._id !== id);
                    setAllCars(remaining);
                }
            })
    }
    return (
        <div>
            <h2>Manage Product</h2>
            <div className="row mx-auto">
                {allCars?.map((car) => (
                    <div className="col-12 col-md-6 col-lg-6 p-3" key={car._id}>
                        <div className="rounded-3 p-2 bg-info">
                            <img src={car?.img} className="w-75 rounded-3" alt="" />
                            <h5>{car?.name}</h5>
                            <h5>Brand:{car?.name}</h5>
                            <h5>${car?.price}</h5>
                            <h6>Date:-{car?.date}</h6>
                            <h6>{car?.description}</h6>
                            <button onClick={() => handleDelete(car._id)} className="btn btn-danger px-4">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageProduct;