import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard';
import projects from './projects';

export default function ProjPrev() {

    const firstTwoProj = projects.slice(0, 2);

    return (
        <>
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
                {firstTwoProj.map(project => (
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
            <Row
                style={{
                    display: 'flex',
                    'justify-content': 'center',
                    'align-items': 'center',
                    'margin-top': '50px'
                }}
            >
                <Link to='/Projects'>
                    <Button variant="primary" size="lg" style={{border: '2px solid white'}}>See More Projects</Button>
                </Link>
            </Row>
        </>
    )
}