import React from 'react';
import { Row } from 'react-bootstrap';
import './style.css';

export default function AboutIntro() {

    return (
        <div className='intro'>
            <Row className='text-center mt-4'>
                <h1 className='mx-auto d-block about-intro'>Shannon Scirghio</h1>
            </Row>
            <Row className='text-center mb-3'>
                <h3 className='mx-auto d-block about-intro words'>Developer | Innovator | Optimist</h3>
            </Row>
        </div>
    )
}