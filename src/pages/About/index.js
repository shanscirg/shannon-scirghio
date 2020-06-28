import React, { useEffect, useContext } from 'react';
import AboutMe from '../../components/AboutMe';
import BackToHome from '../../components/BackToHome/index';
import { Container } from 'react-bootstrap';
import './style.css';
import { MyContext } from '../../utils/Context';

export default function About() {

    const { isMenuOpen, toggleMenu } = useContext(MyContext)

    useEffect(() => {
        isMenuOpen && toggleMenu();
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Container fluid='md' style={{ 'margin-top': '75px' }}>
                <AboutMe />
            </Container>
            <BackToHome />
        </>
    )
}


