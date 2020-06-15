import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MyContext } from '../../utils/Context';

export default function Projects() {

    const { isMenuOpen, toggleMenu } = useContext(MyContext)

    useEffect(() => {
        isMenuOpen && toggleMenu();
    }, []);

    return (
        <Container fluid="md">
            <Row className='mt-5'>
                <Col xs={12} lg={6}>
                    Projects Here
                </Col>
            </Row>
        </Container>
    )
}