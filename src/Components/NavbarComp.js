// NavbarComp.js
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/krstack.jpg";
import Button from 'react-bootstrap/Button';

const NavbarComp = () => {
    

    return (
        <>
            <Navbar bg="dark" variant="dark" className='sticky-top navigation-custom'>
                <Container>
                    <Navbar.Brand as={Link} to="/"><img className='pt-3' src={logo} alt="movietrailers" width={110} height={80} /></Navbar.Brand>
                    <Nav className="me-auto mt-3">
                        <Nav.Link as={Link} to="/">CoreJava</Nav.Link>
                        <Nav.Link as={Link} to="/Trailers2023">JDBC</Nav.Link>
                        <Nav.Link as={Link} to="/servlet">Servlets</Nav.Link>
                        <Nav.Link as={Link} to="/hibernate">Hibernate</Nav.Link>
                        <Nav.Link as={Link} to="/jpa">JPA</Nav.Link>
                        <Nav.Link as={Link} to="/spring">Spring</Nav.Link>
                        <Nav.Link as={Link} to="/springboot">SpringBoot</Nav.Link>
                        <Nav.Link as={Link} to="/html">HTML</Nav.Link>
                        <Nav.Link as={Link} to="/css">CSS</Nav.Link>
                        <Nav.Link as={Link} to="/bootstrap">Bootstrap</Nav.Link>
                        <Nav.Link as={Link} to="/javascript">JavaScript</Nav.Link>
                        <Nav.Link as={Link} to="/reactjs">ReactJS</Nav.Link>
                    </Nav>
                    <div className="button">
                        <Button className='me-3' variant="outline-light" as={Link} to="/login">Login</Button>
                        <Button variant="outline-light">Sign Up</Button>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

const categories = [
    "All",
    "Alexa Skills",
    "Amazon Devices",
    "Amazon Fashion",
    "Amazon Fresh",
    "Amazon Pharmacy",
    "Appliances",
    "Apps & Games",
    "Audible Audiobooks",
    "Baby",
    "Beauty",
    "Books",
    "Car & Motorbike",
    "Clothing & Accessories",
    "Collectibles",
    "Computers & Accessories",
    "Deals",
    "Electronics",
    "Furniture",
    "Garden & Outdoors",
    "Gift Cards",
    "Grocery & Gourmet Foods",
    "Health & Personal Care",
    "Home & Kitchen",
    "Industrial & Scientific",
    "Jewellery",
    "Kindle Store",
    "Luggage & Bags",
    "Luxury Beauty",
    "Movies & TV Shows",
    "MP3 Music",
    "Music",
    "Musical Instruments",
    "Office Products",
    "Pet Supplies",
    "Prime Video",
    "Shoes & Handbags",
    "Software",
    "Sports, Fitness & Outdoors",
    "Subscribe & Save",
    "Tools & Home Improvement",
    "Toys & Games",
    "Under ₹500",
    "Video Games",
    "Watches"
];

export default NavbarComp;
