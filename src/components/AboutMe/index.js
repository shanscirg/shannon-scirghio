import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import CardComp from '../Card';
import './style.css';
import mern from '../../utils/images/mern.png';
import positive from '../../utils/images/positive.jpeg';
import positive2 from '../../utils/images/positive2.jpg';
import coding from '../../utils/images/coding.png';
import resume from '../../utils/ShannonScirghio_Resume.pdf';

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
                    <h4 className='about-me'>I am excited to join a <strong>quality-driven</strong>, <strong>collaborative work environment</strong> where I can leverage my background and skill set!</h4>
                </Col>
            </Row>
            <hr></hr>
            <Row className='about-title-2'>
                <Col xs={12} lg={12}>
                    <h1 className='about-me-title'>Why Hire Me?!</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={6}>
                    <h4 className='about-me-skills'>I work with <strong>CSS/Bootstrap</strong>, <strong>JavaScript</strong>, including <strong>Express.js</strong>, <strong>Node.js</strong>, and <strong>React.js</strong>, and database technologies such as <strong>MongoDB</strong> and <strong>MySQL</strong>.</h4>
                    <Row>
                        <Col xs={12} lg={12}>
                            <Image src={mern} className='mern-image' alt='MERN Stack Development' thumbnail />
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} lg={6}>
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
                    <h1 className='about-me-title-2'><strong>Check out my <a target="_blank" href={resume}>resume</a> to learn more!</strong></h1>
                </Col>
            </Row>
            <hr></hr>
            <Row>

            </Row>
        </>
    )
}


{/* <Row className='text-center mt-4'>
</Row> */}
{/* <Row className='text-center'>
    <Col xs={12} lg={6}>
        <CardComp
            header={<h3 className='mx-auto d-block pt-1 header'>Who Am I?</h3>}
            text={<h5 className='p-2'>I love programming almost as much as I love climbing trees. I'm a foreign language teacher entering the beautiful world that is web development. I recently completed the Full Stack Web Development boot camp from the University of Arizona. </h5>}
        >
        </CardComp>
    </Col>
    <Col xs={12} lg={6}>
        <CardComp
            header={<h3 className='mx-auto d-block pt-1 header'>What Are My Skills?</h3>}
            text={<><h5 className='p-1'><strong>Technical:</strong> CSS/Bootstrap, MongoDB/MySQL, JavaScript, including Express.js, Node.js, and React.js</h5>
            <h5><strong>Transferable:</strong> Infectiously optimistic, strong work ethic, great communication skills, collaborative, innovative problem solving, organized</h5></>}
        >
        </CardComp>
    </Col>
</Row> */}