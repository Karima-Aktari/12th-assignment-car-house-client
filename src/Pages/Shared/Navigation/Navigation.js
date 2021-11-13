import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="secondary" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand>CARHOUSE</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className="text-white" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/allCars">Explore</Nav.Link>

                        {
                            user.email ?
                                <div>
                                    <NavLink as={Link} className="text-white" to="/dashBoard">DashBoard</NavLink>
                                    <Button onClick={logout} variant="light">Logout</Button>
                                </div> :
                                <Nav.Link as={Link} className="text-white" to="/login">Login</Nav.Link>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;