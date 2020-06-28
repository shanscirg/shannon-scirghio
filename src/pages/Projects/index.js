import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MyContext } from '../../utils/Context';
import ProjectCard from '../../components/ProjectCard';
import ButtonComp from '../../components/Button/index';
import projects from './projects';

export default function Projects() {

    const { isMenuOpen, toggleMenu } = useContext(MyContext)

    useEffect(() => {
        isMenuOpen && toggleMenu();
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Container fluid='md' className='home-container' style={{ 'margin-top': '50px' }}>
                <Row className='about-title'>
                    <Col xs={12} lg={12}>
                        <h1 className='about-me-title'>My Projects</h1>
                    </Col>
                </Row>
                <Row
                    style={{
                        display: 'flex',
                        'justify-content': 'center',
                        'align-items': 'center',
                        'margin': '0'
                    }}
                >
                    {projects.map(project => (
                        <ProjectCard
                            imageSrc={project.image}
                            siteName={project.name}
                            liveSite={project.href}
                            description={project.description}
                            role={project.role}
                            techs={project.techs}
                            githubSite={project.github}
                            siteLogo={project.icon}
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