import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const MyOrders = () => {
    const { user, isLoading } = useAuth();
    const [orders, setOrders] = useState([]);
    const email = user?.email;
    useEffect(() => {
        fetch(`https://shielded-wave-62421.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [email]);
    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    };

    return (
        <div className="p-4 mx-auto">
            <h1>My Orders List:- {orders.length}</h1>
            <div className="row text-center mx-auto">
                {orders?.map((order) => (
                    <div className="col-12 col-lg-6" key={order._id}>
                        <div className="border rounded-3 p-1 py-3 bg-info">
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
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/"><button className="btn btn-danger px-4">Go Back</button></Link>
        </div >
    );
};

export default MyOrders;