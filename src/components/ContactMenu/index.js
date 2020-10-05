import React from 'react';
import { Image } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './style.css';
import linkedin from '../../utils/images/linkedin.png';
import github from '../../utils/images/github.webp';
import gmail from '../../utils/images/gmail.png';
import resume from '../../utils/images/resume.png';
import linkedinHome from '../../utils/images/linkedin-home.png';
import githubHome from '../../utils/images/github-home.png';
import gmailHome from '../../utils/images/gmail-home.png';
import resumeHome from '../../utils/images/resume-home.png';
import resumePdf from '../../utils/Scirghio_FrontendSoftwareDev_Oct2020.pdf';

export default function ContactMenu() {
    const location = useLocation();

    const style = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }

    return (
        <article style={style}>
            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/shanscirg'>
                <Image className={location.pathname !== '/Contact' ? 'contact-img-home' : 'contact-img'} src={location.pathname !== '/Contact' ? linkedinHome : linkedin} alt='LinkedIn'></Image>
            </a>
            <a target='_blank' rel="noopener noreferrer" href='mailto:shanscirg7@gmail.com'>
                <Image className={location.pathname !== '/Contact' ? 'contact-img-home-gmail' : 'contact-img-gmail'} src={location.pathname !== '/Contact' ? gmailHome : gmail} alt='Gmail'></Image>
            </a>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/shanscirg'>
                <Image className={location.pathname !== '/Contact' ? 'contact-img-home' : 'contact-img'} src={location.pathname !== '/Contact' ? githubHome : github} alt='GitHub'></Image>
            </a>
            <a target='_blank' rel="noopener noreferrer" href={resumePdf}>
                <Image className={location.pathname !== '/Contact' ? 'contact-img-home' : 'contact-img'} src={location.pathname !== '/Contact' ? resumeHome : resume} alt='Resume'></Image>
            </a>
        </article>
    )
}