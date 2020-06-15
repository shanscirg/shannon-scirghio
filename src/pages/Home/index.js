import React from 'react';
import AboutImage from '../../components/Image';
import AboutIntro from '../../components/AboutIntro';
import { Container, Row, Col } from 'react-bootstrap';
import ContactMenu from '../../components/ContactMenu';
import './style.css';

export default function Home() {
    return (
        <>
            <Row className='contact-row'>
                <ContactMenu />
            </Row>
            <Container fluid="md" className="home-container">
                <Row className='mt-5 home-row'>
                    <Col xs={12} lg={6}>
                        <AboutImage />
                    </Col>
                    <Col xs={12} lg={6}>
                        <AboutIntro />
                    </Col>
                </Row>
            </Container>
        </>
    )
}