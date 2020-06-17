import React from 'react';
import { Col, Image } from 'react-bootstrap';
import githubLogo from '../../utils/images/github.png';



export default function ProjectCard({ imageSrc, siteName, liveSite, description, role, techs, githubSite, siteLogo }) {
    return (
        <Col className='project-card' style={{height:'100%', overflow: 'auto', border: '1px solid black', padding: '20px', margin: '30px', 'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', background: 'rgba(0, 0, 0, 0.3)'}} xs={12} lg={5}>
            <div className='image'>
                <a target='_blank' href={liveSite}>
                    <Image src={imageSrc} alt={siteName} style={{ height: '30%', width: '100%' }}/>
                </a>
            </div>
            <div className='links' style={{'margin-top': '10px'}}>
                <a target='_blank' href={githubSite} style={{'margin-right': '15px'}}>
                    <Image src={githubLogo} style={{ height: '20px', width: '20px', 'margin-right': '3px' }}/>
                    GitHub
                </a>
                <a target='_blank' href={liveSite}>
                    <Image src={siteLogo} style={{ height: '20px', width: '20px', 'margin-right': '3px' }}/>
                    {siteName}
                </a>
            </div>
            <div className='description' style={{color: 'white', 'margin-top': '10px'}}>
                <strong><i>{siteName}</i></strong> {description}
            </div>
            <div className='role' style={{color: 'white', 'margin-top': '10px'}}>
                <strong>My Role</strong>: {role}
            </div>
            <div className='techs' style={{color: 'white', 'margin-top': '10px'}}>
                <strong>Techs used</strong>: {techs}
            </div>
        </Col>
    )
}