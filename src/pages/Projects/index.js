import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MyContext } from '../../utils/Context';
import ProjectCard from '../../components/ProjectCard';
import ButtonComp from '../../components/Button/index';
import projects from './projects';

export default function Projects() {

    const { menuOpenState, setMenuOpenState } = useContext(MyContext)

    useEffect(() => {
        menuOpenState && setMenuOpenState(!menuOpenState);
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Container fluid='md' className='home-container' style={{ marginTop: '50px' }}>
                <Row className='about-title'>
                    <Col xs={12} lg={12}>
                        <h1 className='about-me-title'>My Projects</h1>
                    </Col>
                </Row>
                <Row
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        'margin': '0'
                    }}
                >
                    {projects.map(project => (
                        <ProjectCard
                            project={project}
                        />
                    ))}
                </Row>
            </Container>
            <ButtonComp
                path='/'
                text='Back to Home'
            />
        </>
    )
}