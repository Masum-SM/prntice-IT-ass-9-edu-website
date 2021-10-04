import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>


            {/* <Link to="/home" >Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link> */}


            {<>
                <Navbar className="navbar-bg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/home" className='logo'>Prentice <span>IT</span></Navbar.Brand>
                        <Nav className="ms-auto navbar">
                            <Nav.Link as={Link} to="/home" className="nav">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services" className="nav">Services</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="nav">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="nav">Contact</Nav.Link>

                        </Nav>
                    </Container>
                </Navbar>
            </>}
        </div>
    );
};

export default Header;