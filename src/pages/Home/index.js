import React, { useEffect, useContext } from 'react';
import AboutImage from '../../components/Image';
import AboutIntro from '../../components/AboutIntro';
import { Container, Row, Col } from 'react-bootstrap';
import { MyContext } from '../../utils/Context';
import './style.css';

export default function Home() {
    const { isMenuOpen, toggleMenu } = useContext(MyContext)

    useEffect(() => {
        isMenuOpen && toggleMenu();
    }, []);

    return (
        <>
            <Container fluid='md' style={{overflowX: 'hidden'}} className='home-container'>
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