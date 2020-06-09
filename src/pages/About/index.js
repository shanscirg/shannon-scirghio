import React from 'react';
import AboutImage from '../../components/Image';
import AboutIntro from '../../components/AboutIntro';
import AboutMe from '../../components/AboutMe';
import { Container } from 'react-bootstrap';

export default function About () {
    return (
        <Container fluid="md">
            <AboutIntro />
            <AboutImage />
            <AboutMe />
        </Container>
    )
}