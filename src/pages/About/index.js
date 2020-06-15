import React, { useEffect, useContext } from 'react';
import AboutMe from '../../components/AboutMe';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
import ContactMenu from '../../components/ContactMenu';
import { MyContext } from '../../utils/Context';

export default function About() {

    const { isMenuOpen, toggleMenu } = useContext(MyContext)

    useEffect(() => {
        isMenuOpen && toggleMenu();
    }, []);

    return (
        <>
            <Row className='contact-row'>
                <ContactMenu />
            </Row>
            <Container fluid='md'>
                <AboutMe />
            </Container>
        </>
    )
}


