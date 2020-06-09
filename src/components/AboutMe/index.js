import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CardComp from '../Card';
import './style.css';

export default function AboutMe() {
    return (
        <>
            {/* <Row className='text-center mt-4'>
            </Row> */}
            <Row className='text-center'>
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
                        <h5><strong>Transferable:</strong> Infectiously optimistic, strong work ethic, great communication skills, innovative problem solving, collaborative, organized</h5></>}
                    >
                    </CardComp>
                </Col>
            </Row>
        </>
    )
}