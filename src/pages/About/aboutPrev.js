import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import shanImg from '../../utils/images/shan.jpeg';
import ButtonComp from '../../components/Button';
import AboutImage from '../../components/Image';

export default function AboutPrev() {


    return (
        <>
            <Row className='about-title'>
                <Col xs={12} lg={12}>
                    <h1 className='about-me-title'>About Me</h1>
                </Col>
            </Row>
            <Row
            >
                <Col xs={12} lg={12}>
                    <AboutImage
                        callAnimClass='call-animation'
                        image={shanImg}
                        image2={shanImg}
                    />
                </Col>
            </Row>
            <Row
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '15px',
                    marginLeft: '-7px',
                    marginRight: '-7px'
                }}
            >
                <h4 className='about-me'>I'm a foreign language teacher entering the beautiful world that is web development. I recently completed the <strong>Full Stack Web Development</strong> boot camp from the University of Arizona.</h4>
            </Row>
            <Row
                style={{
                    margin: 'auto',
                    marginTop: '15px'
                }}>
                <h4 className='about-me-skills'>HTML5 <strong>|</strong> CSS3/Bootstrap <strong>|</strong> JavaScript <strong>|</strong> Express JS <strong>|</strong> Node JS <strong>|</strong> React JS <strong>|</strong> MongoDB <strong>|</strong> MySQL</h4>
            </Row>
            <Row
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '50px'
                }}
            >
                <ButtonComp
                    text='More About Me'
                    path='/About'
                />
            </Row>
        </>
    )
}