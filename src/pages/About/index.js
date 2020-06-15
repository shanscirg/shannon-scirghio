import React from 'react';
import AboutMe from '../../components/AboutMe';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
import ContactMenu from '../../components/ContactMenu';

export default function About() {
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


