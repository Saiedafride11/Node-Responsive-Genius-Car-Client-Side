import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end header-nav">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                        {   
                            user?.displayName ? 
                            <Button onClick={logOut} variant="light">LogOut</Button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            {   
                                user?.displayName ? 
                                ' Signed in as: '
                                :
                                ''
                            }
                            <a href="#login">{user?.displayName} </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;






// react router route with hash not working (google search)
// npm install --save react-router-hash-link
// import { HashLink } from 'react-router-hash-link';
