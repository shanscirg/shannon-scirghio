import React, { useEffect, useContext } from 'react';
import ContactMenu from '../../components/ContactMenu';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { MyContext } from '../../utils/Context';
import BackToHome from '../../components/Button/index';
import './style.css';

export default function Contact() {

    const { menuOpenState, setMenuOpenState } = useContext(MyContext)
    const location = useLocation();

    useEffect(() => {
        menuOpenState && setMenuOpenState(!menuOpenState);
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Container fluid='md' style={{marginBottom: '50px'}}>
                <Row
                    style={{
                        textAlign: 'center',
                        marginTop: location.pathname === '/Contact' ? '100px' : '3%'
                    }}
                >
                    <Col xs={12} lg={12}>
                        <h1 className='about-me-title'>Contact Me!</h1>
                    </Col>
                </Row>
                <Row className='about-title-2'>
                    <Col xs={12} lg={12}>
                        <ContactMenu />
                    </Col>
                </Row>
            </Container >
            {location.pathname === '/Contact'
                &&
                <BackToHome
                    path='/'
                    text='Back to Home'
                />
            }
        </>
    )
}