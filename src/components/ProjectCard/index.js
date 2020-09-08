import React, { useState } from 'react';
import { Col, Image, Collapse } from 'react-bootstrap';
import githubLogo from '../../utils/images/github.png';

export default function ProjectCard(props) {
    const [open, setOpen] = useState(false);

    const { image, name, href, description, role, techs, github, icon } = props.project

    return (
        <Col className='project-card' style={{ minHeight: '420px', overflow: 'auto', border: '1px solid black', padding: '20px', margin: '30px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', background: 'rgba(34, 49, 63, 0.4)' }} xs={12} lg={5}>
            <div className='image'>
                <a target='_blank' rel='noopener noreferrer' href={href}>
                    <Image src={image} alt={name} style={{ height: '30%', width: '100%' }} />
                </a>
            </div>
            <div className='links' style={{ marginTop: '10px' }}>
                <a target='_blank' rel='noopener noreferrer' href={github} style={{ marginRight: '15px' }}>
                    <Image src={githubLogo} alt='GitHub Logo' style={{ height: '20px', width: '20px', marginRight: '3px' }} />
                    GitHub
                </a>
                <a target='_blank' rel='noopener noreferrer' href={href}>
                    <Image src={icon} alt='Project Logo' style={{ height: '20px', width: '20px', marginRight: '3px' }} />
                    {name}
                </a>
            </div>
            <div className='description' style={{ color: 'white', marginTop: '10px' }}>
                <strong><i>{name}</i></strong> {description}{!open && <span id='dots' style={{ color: 'white' }}>..</span>}

            </div>
            <Collapse in={open}>
                <div id='collapse-text'>
                    <div className='role' style={{ color: 'white', marginTop: '10px' }}>
                        <strong>My Role</strong>: {role}
                    </div>
                    <div className='techs' style={{ color: 'white', marginTop: '10px' }}>
                        <strong>Techs used</strong>: {techs}
                    </div>
                </div>
            </Collapse>
            <button type='button' class='myBtn' style={{ padding: '3px 8px', fontSize: '14px', marginTop: '10px' }} onClick={() => setOpen(!open)} aria-controls='collapse-text'
                aria-expanded={open}>
                Read {open ? <>Less <i class="fas fa-chevron-up"></i></> : <>More <i class="fas fa-chevron-down"></i></>}
            </button>
        </Col>
    )
}