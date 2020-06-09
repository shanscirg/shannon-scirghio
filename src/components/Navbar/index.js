import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';


export default function NavBar() {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className="brand" href="/About">Shannon Scirghio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/About" className="navbartext">About</Link>
                        <Link to="/Projects" className="navbartext">Projects</Link>
                        <Link to="/Contact" className="navbartext">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}