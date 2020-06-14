import React from 'react';
import AboutImage from '../../components/Image';
import AboutIntro from '../../components/AboutIntro';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

export default function Home() {
    return (
        <Container fluid="md">
            <Row className='mt-5 home-row'>
                <Col xs={12} lg={6}>
                    <AboutImage />
                </Col>
                <Col xs={12} lg={6}>
                    <AboutIntro />
                </Col>
            </Row>
        </Container>
    )
}