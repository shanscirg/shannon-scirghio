import React from 'react';
import { Row } from 'react-bootstrap';
import './style.css';

export default function AboutIntro() {
    
    return (
        <>
            <Row className='text-center mt-4'>
                <h1 className='mx-auto d-block about-intro'>Hi there! Glad you're here.</h1>
            </Row>
            <Row className='text-center mb-3'>
                <h2 className='mx-auto d-block about-intro name'>My name is Shannon Scirghio.</h2>
            </Row>
        </>
    )
}