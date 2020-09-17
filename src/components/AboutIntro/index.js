import React from 'react';
import { Row } from 'react-bootstrap';
import './style.css';

export default function AboutIntro() {

    return (
        <article>
            <section className='intro'>
                <Row className='mt-4'>
                    <header>
                        <h2 className='text-center mx-auto d-block about-intro'>Shannon Scirghio</h2>
                    </header>
                </Row>
                <Row className='mb-3'>
                    <h3 className='text-center mx-auto d-block about-intro words'>Developer | Innovator | Optimist</h3>
                </Row>
            </section>
            <section className='intro-mobile'>
                <Row className='mt-4'>
                    <h1 className='text-center mx-auto d-block about-intro'>Shannon Scirghio</h1>
                </Row>
                <Row className='slideIn1'>
                    <h3 className='text-center mx-auto d-block about-intro words'>&raquo; Developer &laquo;</h3>
                </Row>
                <Row className='slideIn2'>
                    <h3 className='text-center mx-auto d-block about-intro words'>&raquo;  Innovator &laquo;</h3>
                </Row>
                <Row className='slideIn3'>
                    <h3 className='text-center mx-auto d-block about-intro words'>&raquo; Optimist &laquo;</h3>
                </Row>
            </section>
        </article>
    )
}