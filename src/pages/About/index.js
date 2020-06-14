import React from 'react';
import AboutMe from '../../components/AboutMe';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

export default function About() {
    return (
        <Container fluid="md">
            <Row className='mt-5 about-row'>
                <Col xs={12} lg={6}>
                    <AboutMe />
                </Col>
            </Row>
        </Container>
    )
}