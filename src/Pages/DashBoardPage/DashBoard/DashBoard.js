import React from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import './DashBoard.css';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import MyOrders from '../MyOrders/MyOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import ManageOrders from '../ManageOrders/ManageOrders';
import AddAdmin from '../AddAdmin/AddAdmin';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    return (
        <div className="row mx-auto">
            <div className="col-12 col-md-2 bg-light text-success">
                <nav>
                    {admin && <div>
                        <Link to={`${url}/addProduct`}>
                            <li>Add Product</li>
                        </Link>
                        <Link to={`${url}/manageProduct`}>
                            <li>Manage Product</li>
                        </Link>
                        <Link to={`${url}/manageOrders`}>
                            <li>Manage Orders</li>
                        </Link>
                        <Link to={`${url}/addAdmin`}>
                            <li>Add Admin</li>
                        </Link>
                    </div>}

                    {admin || <div>
                        <Link to={`${url}/payment`}>
                            <li> Payment</li>
                        </Link>
                        <Link to={`${url}/myOrders`}>
                            <li>My Orders</li>
                        </Link>
                        <Link to={`${url}/review`}>
                            <li>Review</li>
                        </Link> </div>}

                </nav>
                <h2>Dash Link</h2>
            </div>
            <div className="col-12 col-md-10 dasBoard-home">
                <h1 className="text-warning">This is DashBoard</h1>
                <Switch>
                    <Route exact path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route exact path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route exact path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute exact path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/manageProduct`}>
                        <ManageProduct></ManageProduct>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/addAdmin`}>
                        <AddAdmin></AddAdmin>
                    </AdminRoute>
                </Switch>

            </div>
        </div>
    );
};

export default DashBoard;
