import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';


export default function NavBar() {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light">
                <Navbar.Brand className="brand" href="/About">
                    <h3 className="navhead">Shannon Scirghio</h3>
                    <h5 className="navhead">Full Stack Web Developer</h5>
                </Navbar.Brand>
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