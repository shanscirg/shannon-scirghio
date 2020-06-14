import React, { useContext, useState } from 'react';
import { Navbar, Nav, Row, Col, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../utils/assets/images/shanlogo.png';
import { scaleRotate as Menu } from 'react-burger-menu'
import { MyContext } from '../../utils/Context';
// import Button from '../Button';
import BurgIcon from '../Hamburger/burgIcon';

export default function NavMenu() {
    const ctx = useContext(MyContext)

    return (
        <Menu
            id={"sidebar"}
            className={"my-menu"}
            htmlClassName={"my-class"}
            bodyClassName={"my-class"}
            width={280}
            height={"100vh"}
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            customBurgerIcon={<BurgIcon />}
            customCrossIcon={<BurgIcon />}
            isOpen={ctx.isMenuOpen}
            onStateChange={(state) => ctx.stateChangeHandler(state)}
        >
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/About">About</a>
            <a id="projects" className="menu-item" href="/Projects">Projects</a>
            <a id="contact" className="menu-item" href="/Contact">Contact</a>
        </Menu>
    )
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
}

{/* <Navbar collapseOnSelect expand='lg' bg='light' className='navnav'>
                <Navbar.Brand className='brand' href='/'>
                    <Image src={logo} style={{ "height": "70px", "width": "70px" }} alt="SS" />
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
            </Navbar> */}