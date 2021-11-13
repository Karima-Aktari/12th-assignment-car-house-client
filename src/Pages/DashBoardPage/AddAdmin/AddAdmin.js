import React from 'react';
import { useState } from 'react';


const AddAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    };

    const handleAdminSubmit = (e) => {
        const user = { email };
        fetch('https://shielded-wave-62421.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('');
                    alert('Added Success');
                }

            })
        e.preventDefault()
    }


    return (
        <div className="p-4">
            <h1>Add As An admin</h1>
            <div>
                <form onSubmit={handleAdminSubmit}>
                    <input className="px-4 py-1 w-50 rounded-3" onBlur={handleOnBlur} type="email" name="email" placeholder="Enter Your Email" required />
                    <br />
                    <input className="mt-3 w-25 btn btn-info rounded-pill m-auto" type="submit" value="Add Admin" />
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;

// npm install -g serve