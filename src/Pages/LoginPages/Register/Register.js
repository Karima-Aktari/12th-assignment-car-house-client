import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();

    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    }
    const handleSignIn = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }

    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    }
    return (
        <div>
            <h1>{user.displayName}</h1>
            <form onSubmit={handleSignIn}>
                <h1 className="text-info p-4">Register Your Account</h1>
                <input onBlur={handleOnChange} className="px-4 py-1 rounded-pill" type="text" name="name" placeholder="Your Name" />
                <br /><br />
                <input className="px-4 py-1 rounded-pill" onChange={handleOnChange} type="email" name="email" placeholder="Enter Your Email" required />
                <br /><br />
                <input className="px-4 py-1 rounded-pill" onBlur={handleOnChange} type="password" name="password" placeholder="Enter Your Password" id="" required />
                <br /><br />
                <input className="px-4 py-1 rounded-pill" onBlur={handleOnChange} type="password" name="password2" placeholder="ReEnter Your Password" id="" required />
                <br /><br />
                <input className="mt-3 w-50 btn btn-info m-auto" type="submit" value="Login" />
            </form>
            <h5 className="text-danger">{authError}</h5>
            <br />
            <p>Already have an account ? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default Register;