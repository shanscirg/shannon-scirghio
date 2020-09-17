import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from '../../components/ProjectCard';
import projects from './projects';
import ButtonComp from '../../components/Button';

export default function ProjPrev() {

    const firstTwoProj = projects.slice(0, 2);

    return (
        <>
            <Row className='about-title'>
                <Col xs={12} lg={12}>
                    <header>
                        <h3 className='about-me-title'>My Projects</h3>
                    </header>
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
                {firstTwoProj.map((project, index) => (
                    <ProjectCard
                        project={project}
                        key={index}
                    />
                ))}
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
                    text='See More Projects'
                    path='/Projects'
                />
            </Row>
        </>
    )
}