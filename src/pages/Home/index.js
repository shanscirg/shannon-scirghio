import React, { useEffect, useContext } from 'react';
import AboutImage from '../../components/Image';
import AboutIntro from '../../components/AboutIntro';
import ProjPrev from '../Projects/projPrev';
import AboutPrev from '../About/aboutPrev';
import Contact from '../Contact/index';
import { Container, Row, Col } from 'react-bootstrap';
import { MyContext } from '../../utils/Context';
import './style.css';


export default function Home() {
    const { isMenuOpen, toggleMenu } = useContext(MyContext)

    useEffect(() => {
        isMenuOpen && toggleMenu();
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container fluid='md'>
            <Container fluid='md' className='home-container'>
                <Row className='home-row'>
                    <Col xs={12} lg={6}>
                        <AboutImage />
                    </Col>
                    <Col xs={12} lg={6}>
                        <AboutIntro />
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <Container fluid='md' className='home-container'>
                <ProjPrev
                    style={{
                        width: '100%',
                        height: '100%',
                        overflowY: 'scroll',
                        paddingRight: '17px',
                        boxSizing: 'content-box'
                    }}
                />
            </Container>
            <hr></hr>
            <Container fluid='md' className='home-container'>
                <AboutPrev />
            </Container>
            <hr></hr>
            <Container fluid='md' className='home-container'>
                <Contact />
            </Container>
        </Container>
    )
}