import React from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import shanImg from '../../utils/images/shan.jpeg';

export default function AboutPrev() {


    return (
        <>
            <Row className='about-title'>
                <Col xs={12} lg={12}>
                    <h1 className='about-me-title'>About Me</h1>
                </Col>
            </Row>
            <Row>
                <Image
                    src={shanImg}
                    style={{
                        display: 'block',
                        'margin-left': 'auto',
                        'margin-right': 'auto',
                        width: '40%',
                        'margin-bottom': '15px'
                    }}
                    className='mx-auto d-block prof-img' fluid />
            </Row>
            <Row
                style={{
                    display: 'flex',
                    'justify-content': 'center',
                    'align-items': 'center',
                    'margin': '0'
                }}
            >
                <h4 className='about-me'>I'm a foreign language teacher entering the beautiful world that is web development. I recently completed the <strong>Full Stack Web Development</strong> boot camp from the University of Arizona.</h4>
            </Row>
            <Row
                style={{
                    width: '500px',
                    margin: 'auto',
                    width: '60%',
                    'margin-top': '15px'
                }}>
                <h4 className='about-me-skills'>HTML5 <strong>|</strong> CSS3/Bootstrap <strong>|</strong> JavaScript <strong>|</strong> Express JS <strong>|</strong> Node JS <strong>|</strong> React JS <strong>|</strong> MongoDB <strong>|</strong> MySQL</h4>
            </Row>
            <Row
                style={{
                    display: 'flex',
                    'justify-content': 'center',
                    'align-items': 'center',
                    'margin-top': '50px'
                }}
            >
                <Link to='/About'>
                    <Button variant="primary" size="lg" style={{ border: '2px solid white' }}>More About Me</Button>
                </Link>
            </Row>
        </>
    )
}