import React, { useEffect, useContext } from 'react';
import AboutImage from '../../components/Image';
import AboutIntro from '../../components/AboutIntro';
import ProjPrev from '../Projects/projPrev';
import AboutPrev from '../About/aboutPrev';
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
            <Container fluid='md' className='home-container'>
                <Row className='mt-5 home-row'>
                    <Col xs={12} lg={6}>
                        <AboutImage />
                    </Col>
                    <Col xs={12} lg={6}>
                        <AboutIntro />
                    </Col>
                </Row>
            </Container>
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
            <Container fluid='md' className='home-container'>
                <AboutPrev />
            </Container>
        </>
    )
}