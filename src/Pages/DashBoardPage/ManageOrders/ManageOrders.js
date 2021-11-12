import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const { isLoading } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    // Delete Order
    const handleDelete = id => {
        const url = `http://localhost:5000/deleteOrder/${id}`
        fetch(url, {
            method: "DELETE",
            headers: { "content-type": "application.json" }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Are You Sure To DELETE')
                    const remaining = orders.filter(service => service._id !== id);
                    setOrders(remaining);
                }
            })
    }
    // Spinner setting
    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    };

    return (

        <div >
            <div className="row text-center mx-auto">
                {orders?.map((order) => (
                    <div className="col-12 col-md-6 col-lg-6 p-3" key={order._id}>
                        <div className="border rounded-3 p-2 bg-info">
                            <img src={order?.order.img} className="w-75 rounded-3" alt="" />
                            <h5>{order?.name}</h5>
                            <h4>{order.email}</h4>
                            <h5>{order.address}</h5>
                            <h5>{order.city}</h5>
                            <h5>Mobile-No.:{order.phone}</h5>
                            <h5>Brand:{order?.order.name}</h5>
                            <h5>${order?.order.price}</h5>
                            <h6>Date:-{order?.date}</h6>
                            <button className="btn btn-warning">{order.status}</button> <br /><br />
                            <button onClick={() => handleDelete(order._id)} className="btn btn-danger px-4">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ManageOrders;