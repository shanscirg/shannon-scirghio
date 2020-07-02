import React from 'react';
import { Row } from 'react-bootstrap';
import './style.css';

export default function AboutIntro() {

    return (
        <div className='intro'>
            <Row className='mt-4'>
                <h1 className='text-center mx-auto d-block about-intro'>Shannon Scirghio</h1>
            </Row>
            <Row className='mb-3'>
                <h3 className='text-center mx-auto d-block about-intro words'>Developer | Innovator | Optimist</h3>
            </Row>
        </div>
    )
}