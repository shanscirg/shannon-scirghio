import React, { useState } from 'react';
import { Col, Image, Collapse } from 'react-bootstrap';
import githubLogo from '../../utils/images/github.webp';

export default function ProjectCard(props) {
    const [open, setOpen] = useState(false);

    const { image, name, href, description, role, techs, github, icon } = props.project;

    const buttonStyle = {
        padding: '3px 8px',
        fontSize: '14px',
        marginTop: '10px'
    }

    const projectCardStyle = {
        minHeight: '420px',
        overflow: 'auto',
        border: '1px solid black',
        padding: '20px',
        margin: '30px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        background: 'rgba(34, 49, 63, 0.8)'
    }

    const titleStyle = {
        color: 'white',
        marginTop: '10px'
    }

    const logoStyle = {
        height: '20px',
        width: '20px',
        marginRight: '3px'
    }

    return (
        <Col className='project-card' style={projectCardStyle} xs={12} lg={5}>
            <a target='_blank' className='image' rel='noopener noreferrer' href={href}>
                <Image src={image} alt={name} style={{ height: '30%', width: '100%' }} />
            </a>
            <section className='links' style={{ marginTop: '10px' }}>
                <a target='_blank' rel='noopener noreferrer' href={github} style={{ marginRight: '15px' }}>
                    <Image src={githubLogo} alt='GitHub Logo' style={{ height: '20px', width: '20px', marginRight: '3px' }} />
                    GitHub
                </a>
                <a target='_blank' rel='noopener noreferrer' href={href}>
                    <Image src={icon} alt='Project Logo' style={logoStyle} />
                    {name}
                </a>
            </section>
            <section className='description' style={titleStyle}>
                <strong><i>{name}</i></strong> {description}{!open && <span id='dots' style={{ color: 'white' }}>..</span>}
            </section>
            <Collapse in={open}>
                <section id='collapse-text'>
                    <div className='role' style={titleStyle}>
                        <strong>My Role</strong>: {role}
                    </div>
                    <div className='techs' style={titleStyle}>
                        <strong>Techs used</strong>: {techs}
                    </div>
                </section>
            </Collapse>
            <button type='button' className='myBtn' style={buttonStyle} onClick={() => setOpen(!open)} aria-expanded={open}>
                Read {open ? <>Less <i className="fas fa-chevron-up"></i></> : <>More <i className="fas fa-chevron-down"></i></>}
            </button>
        </Col>
    )
}