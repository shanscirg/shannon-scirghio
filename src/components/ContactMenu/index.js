import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './style.css';
import linkedin from '../../utils/images/linkedin.png';
import github from '../../utils/images/github.png';
import gmail from '../../utils/images/gmail.png';
import resume from '../../utils/images/resume.png';
import resumePdf from '../../utils/ShannonScirghio_Resume.pdf';

export default function ContactMenu({ headerMenu }) {
    const location = useLocation();
    return (
        <div style={{ display: 'flex', justifyContent: location.pathname !== '/Contact' ? 'flex-end' : 'center', 'flex-wrap': headerMenu ? '' : 'wrap', marginTop: headerMenu ? '25px' : '' }}>
            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/shanscirg'>
                <Image className={location.pathname !== '/Contact' ? 'contact-img-home' : 'contact-img'} src={linkedin}></Image>
            </a>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/shanscirg'>
                <Image className={location.pathname !== '/Contact' ? 'contact-img-home' : 'contact-img'} src={github}></Image>
            </a>
            <a target='_blank' rel="noopener noreferrer" href='mailto:shanscirg7@gmail.com'>
                <Image className={location.pathname !== '/Contact' ? 'contact-img-home' : 'contact-img'} src={gmail}></Image>
            </a>
            <a target='_blank' rel="noopener noreferrer" href={resumePdf}>
                <Image className={location.pathname !== '/Contact' ? 'contact-img-home' : 'contact-img'} src={resume}></Image>
            </a>
        </div>
    )
}