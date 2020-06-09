import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';


export default function NavBar() {

    return (
        <>
            <Navbar collapseOnSelect expand='lg' bg='light' className='navnav'>
                <Navbar.Brand className='brand' href='/'>
                    <Image src="https://github.com/shanscirg/shanscirg.github.io/blob/master/assets/images/shanlogo.png?raw=true" style={{ "height": "70px", "width": "70px" }} alt="SS" />
                </Navbar.Brand>
                <Navbar.Brand className='brand' href='/'>
                    <h3 className='navhead'>Shannon Scirghio</h3>
                    <h6 className='navhead'>Full Stack Web Developer</h6>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ml-auto'>
                        <Link to='/' className='navbartext'>About</Link>
                        <Link to='/Projects' className='navbartext'>Projects</Link>
                        <Link to='/Contact' className='navbartext'>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}