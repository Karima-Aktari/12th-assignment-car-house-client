import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddProduct.css';
import useAuth from '../../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const { isLoading } = useAuth();

    const onSubmit = data => {
        axios.post('http://localhost:5000/cars', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    }

    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    };

    return (
        <div className="addProduct p-4">
            <h1 className="text-secondary">Add a Latest CAR </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;