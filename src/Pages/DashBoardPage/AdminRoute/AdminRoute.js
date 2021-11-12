import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    };
    return (
        <div>
            <Route {...rest}
                render={({ location }) => user.email && admin ? children :
                    <Redirect to={{
                        pathname: "/",
                        state: { from: location }
                    }} ></Redirect>} >

            </Route>
        </div>
    );
};

export default AdminRoute;