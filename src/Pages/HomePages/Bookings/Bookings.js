import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';
import './Booking.css';
import { Spinner } from 'react-bootstrap';

const Bookings = () => {
    const { bookingId } = useParams();
    const [booking, setBooking] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user, isLoading } = useAuth();

    const onSubmit = data => {
        data.order = booking;
        data.status = "pending";
        data.date = new Date().toLocaleDateString();
        axios.post('https://shielded-wave-62421.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    }

    useEffect(() => {
        const url = `https://shielded-wave-62421.herokuapp.com/cars/${bookingId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data));
    }, [])

    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    }

    return (
        <div className="p-4 bg-info text-light">
            <div className="d-flex justify-content-around booking">
                <div className="bookingForm w-75">
                    <h1>{user.displayName}</h1>
                    <h2 className="text-secondary"> Place Your Order For {booking.name}</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Address" defaultValue="" {...register("address")} />
                        <input placeholder="City" defaultValue="" {...register("city")} />
                        <input placeholder="Phone Number" defaultValue="" {...register("phone")} />

                        <input type="submit" />
                    </form>
                </div>
                <div className="p-4 text-secondary">
                    <img src={booking.img} className="img-fluid w-75 rounded-3" alt=""></img>
                    <h2>{booking.name}</h2>
                    <h5>$ {booking.price}</h5>
                    <p className="fw-bolder px-4 ">{booking.description}</p>
                </div>

            </div>
        </div>
    );
};

export default Bookings;