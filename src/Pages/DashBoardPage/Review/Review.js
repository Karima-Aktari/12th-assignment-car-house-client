import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        data.date = new Date().toLocaleDateString();
        axios.post('https://shielded-wave-62421.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <h2>Put Your Valuable Review</h2>
            <form className="py-2 my-4" onSubmit={handleSubmit(onSubmit)}>
                <input className="w-50 text-center rounded-3 py-2 border-0" defaultValue={user.displayName} {...register("name")} /><br />
                <input className="w-50 text-center rounded-3 my-3 py-2 border-0" defaultValue={user.email} {...register("email", { required: true })} /><br />

                <input className="w-50 text-center rounded-3 my-3 py-2 border-0" placeholder="Rating" type="number"{...register("rating", { required: true, min: "0", max: "5" })} /><br />

                <input className="w-50 text-center rounded-3 py-3 border-0" placeholder="Description" defaultValue="" {...register("description")} /><br />
                <input className="px-4 my-2 rounded-pill" type="submit" />
            </form>
        </div>
    );
};

export default Review;