import React from 'react';
import { Row } from 'react-bootstrap';
import './style.css';

export default function AboutIntro() {
    return (
        <>
            <Row className='text-center mt-4'>
                <h3 className='mx-auto d-block about-intro'>Hi there! Glad you're here.</h3>
            </Row>
            <Row className='text-center mb-3'>
                <h4 className='mx-auto d-block about-intro'>My name is Shannon Scirghio.</h4>
            </Row>
        </>
    )
}