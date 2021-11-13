import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-background p-4">
            <div className="d-flex justify-content-around px-4 footer">
                <div className="fw-bolder">
                    <h3>Contact Information</h3>
                    <h4><i className="fas fa-phone-volume"></i>+0194458988005</h4>
                    <p className="fw-bolder">CARHOUSE,<br /> House No.54<br />Sheikh Kamal Sarani,<br />Road No. 16,<br />Rangs square (5th & 6th floor), <br />Basundhara, Dhaka 1209, Bangladesh</p>
                </div>
                <div className="fw-bolder">
                    <h1>CARHOUSE</h1>
                    <p>If You are a Car Lover then CARHOUSE is always with you!</p>
                    <div>
                        <div className=" d-flex justify-content-center">
                            <a rel="noopener noreferrer"
                                target="_blank" href="https://www.bmwgroup.com/"><i className="fab fa-facebook-square text-primary fs-1 p-1"></i></a>
                            <a rel="noopener noreferrer"
                                target="_blank" href="https://www.honda.com/"><i className="fab fa-linkedin text-danger fs-1 p-1"></i></a>
                            <a rel="noopener noreferrer"
                                target="_blank" href="https://www.mazda.com/"><i className="fab fa-instagram-square text-warning fs-1 p-1"></i></a>
                            <a rel="noopener noreferrer"
                                target="_blank" href="https://www.volvocars.com/intl"><i className="fab fa-skype text-info fs-1 p-1"></i></a>
                        </div>
                    </div>
                </div>
                <div className="fw-bolder quick-link">
                    <h3>QuickLinks</h3>
                    <Link to="/payment">Payment</Link><br />
                    <Link to="/payment">Shipment</Link><br />
                    <Link to="/payment">Where is my order</Link><br />
                    <Link to="/payment">Review</Link><br />

                </div>
            </div>
            <p className="text-center pt-3"> ©Stay connected,Stay Happy©</p>
        </div>
    );
};

export default Footer;