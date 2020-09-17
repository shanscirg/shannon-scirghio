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

    const rowStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        'margin': '0'
    }

    const marginTop = {
        marginTop: '50px'
    }

    return (
        <>
            <Container fluid='md' className='home-container' style={marginTop}>
                <Row className='about-title'>
                    <Col xs={12} lg={12}>
                        <header>
                            <h1 className='about-me-title'>My Projects</h1>
                        </header>
                    </Col>
                </Row>
                <Row
                    style={rowStyle}
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            project={project}
                            key={index}
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