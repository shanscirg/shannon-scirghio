import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './style.css';
import mern from '../../utils/images/mern.jpeg';
import positive2 from '../../utils/images/positive2.jpg';
import resume from '../../utils/Resume_ShannonScirghio.pdf';
import shanImg from '../../utils/images/shannonAbout.JPG';
import AboutImage from '../../components/Image';


export default function AboutMe() {

    return (
        <>
            <Row className='about-title'>
                <Col xs={12} lg={12}>
                    <h1 className='about-me-title'>Who Am I?</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={12}>
                    <h4 className='about-me'>I'm a foreign language teacher entering the beautiful world that is web development. I recently completed the <strong>Full Stack Web Development</strong> boot camp from the University of Arizona.</h4>

                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    >
                        <Col xs={12} lg={12}>

                        <AboutImage
                            callAnimClass='call-animation-about'
                            image={shanImg}
                            image2={shanImg}
                            style={{height: '50%', width: '50%', margin: 'auto'}}
                            />
                            </Col>
                    </div>
                    <h4 className='about-me'>I am excited to join a <strong>quality-driven</strong>, <strong>collaborative work environment</strong> where I can leverage my background and skill set!</h4>
                </Col>
            </Row>
            <hr class='new1'></hr>
            <Row className='about-title-2'>
                <Col xs={12} lg={12}>
                    <h1 className='about-me-title'>Why Hire Me?!</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={6} style={{ marginBottom: '20px' }}>
                    <h4 className='about-me-skills'>I work with <strong>CSS3/Bootstrap</strong>, <strong>JavaScript</strong>, including <strong>Express.js</strong>, <strong>Node.js</strong>, and <strong>React.js</strong>, and database technologies such as <strong>MongoDB</strong> and <strong>MySQL</strong>.</h4>
                    <Row>
                        <Col xs={12} lg={12}>
                            <Image src={mern} className='mern-image' alt='MERN Stack Development' thumbnail />
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} lg={6} style={{ marginBottom: '20px' }}>
                    <h4 className='about-me-skills'>I am infectiously <strong>optimistic</strong>, <strong>collaborative</strong>, <strong>organized</strong>, and I have strong <strong>work ethic</strong>, great <strong>communication</strong>, and innovative <strong>problem solving</strong> skills.</h4>
                    <Row>
                        <Col xs={12} lg={12}>
                            <Image src={positive2} className='posi-image' alt='positive' thumbnail />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='about-title-2'>
                <Col xs={12} lg={12}>
                    <h1 className='about-me-title-2'><strong>Check out my <a target='_blank' rel="noopener noreferrer" href={resume}>resume</a> to learn more!</strong></h1>
                </Col>
            </Row>
        </>
    )
}