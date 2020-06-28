import React, { useEffect, useContext } from 'react';
import AboutMe from '../../components/AboutMe';
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
            <Container fluid='md'>
                <AboutMe />
            </Container>
        </>
    )
}


