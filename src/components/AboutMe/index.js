import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Box from './box';

export default function AboutMe() {
    return (
        <>
            {/* <Row className='text-center mt-4'>
            </Row> */}
            <Row className='text-center'>
                <Col xs={12} md={6}>
                    <h3 className='mx-auto d-block pt-3'>Who Am I?</h3>
                    <Box>
                        <h5 className='p-3'>I love programming almost as much as I love climbing trees. I'm a former foreign language teacher entering the beautiful world that is web development. I recently completed the Full Stack Web Devopment boot camp from the University of Arizona. </h5>
                    </Box>
                </Col>
                <Col xs={12} md={6}>
                    <h3 className='mx-auto d-block pt-3'>What Are My Skills?</h3>
                    <Box>
                        <h5 className='p-3'>Technical: CSS/Bootstrap, MongoDB/MySQL, JavaScript, including Express.js, Node.js, and React.js</h5>
                        <h5>Transferable: Infectiously optimistic, strong work ethic, great communication skills, problem solving, organization.</h5>
                    </Box>
                </Col>
            </Row>
        </>
    )
}