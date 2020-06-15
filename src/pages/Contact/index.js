import React from 'react';
import ContactMenu from '../../components/ContactMenu';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

export default function Contact() {
    return (
        <Container fluid="md">
            <Row className='about-title'>
                <Col xs={12} lg={12}>
                    <h1 className='about-me-title'>Contact Me!</h1>
                </Col>
            </Row>
            <Row className='about-title-2'>
                <Col xs={12} lg={12}>
                <ContactMenu />
                </Col>
            </Row>
        </Container>

    )
}