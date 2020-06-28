import React, { useEffect, useContext } from 'react';
import ContactMenu from '../../components/ContactMenu';
import { Container, Row, Col } from 'react-bootstrap';
import { MyContext } from '../../utils/Context';
import './style.css';

export default function Contact() {

    const { isMenuOpen, toggleMenu } = useContext(MyContext)

    useEffect(() => {
        isMenuOpen && toggleMenu();
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container fluid='md'>
            <Row className='contact-title'>
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