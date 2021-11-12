import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInUsingGoogle } = useAuth();

    const location = useLocation();
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
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history);
    }

    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    };

    return (
        <div className="row py-4 mx-auto">
            <div className="col-md-6 col-12">
                <img src="https://cdn.pixabay.com/photo/2021/08/25/12/45/phishing-6573326__480.png" className="img-fluid w-100 p-4" alt="" />
            </div>
            <div className="col-md-6 col-12 pt-4">
                <h1>{user.displayName}</h1>
                <form onSubmit={handleSignIn}>
                    <h1 className="text-info p-2">Please Login</h1>
                    <br />
                    <input className="px-4 py-1 rounded-pill" onChange={handleOnChange} type="email" name="email" placeholder="Enter Your Email" required />
                    <br /><br />
                    <input className="px-4 py-1 rounded-pill" onBlur={handleOnChange} type="password" name="password" placeholder="Enter Your Password" id="" required />
                    <br /><br />
                    <input className="mt-3 w-50 btn btn-info rounded-3 m-auto" type="submit" value="Login" />
                </form>
                <br />
                {authError && <p>Wrong Number</p>}
                <br />
                <p>New to Our Site ? <Link to="/register">Please Register</Link></p>
                <div>------------------------------</div>
                <br />
                <button onClick={handleGoogleSignIn} className="btn btn-warning">Google SignIn</button>
            </div>

        </div>
    );
};

export default Login;