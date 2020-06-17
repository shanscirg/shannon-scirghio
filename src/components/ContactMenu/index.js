import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './style.css';
import linkedin from '../../utils/images/linkedin.png';
import github from '../../utils/images/github.png';
import gmail from '../../utils/images/gmail.png';
import resume from '../../utils/images/resume.png';
import resumePdf from '../../utils/ShannonScirghio_Resume.pdf';

export default function ContactMenu() {
    const location = useLocation();
    return (
        <>
                {/* <Col xs={8} lg={8}>
                </Col> */}
                {/* <Col xs={1} lg={1}> */}
                    <a target='_blank' href='https://www.linkedin.com/in/shanscirg'>
                        <Image className={location.pathname !== '/Contact' ? 'contact-img-home' : 'contact-img'} src={linkedin}></Image>
                    </a>
                {/* </Col> */}
                {/* <Col xs={1} lg={1}> */}
                    <a target='_blank' href='https://github.com/shanscirg'>
                        <Image className={location.pathname !== '/Contact' ? 'contact-img-home' : 'contact-img'} src={github}></Image>
                    </a>
                {/* </Col> */}
                {/* <Col xs={1} lg={1}> */}
                    <a target='_blank' href='mailto:shanscirg7@gmail.com'>
                        <Image className={location.pathname !== '/Contact' ? 'contact-img-home' : 'contact-img'} src={gmail}></Image>
                    </a>
                {/* </Col> */}
                {/* <Col xs={1} lg={1}> */}
                    <a target='_blank' href={resumePdf}>
                        <Image className={location.pathname !== '/Contact' ? 'contact-img-home' : 'contact-img'} src={resume}></Image>
                    </a>
                {/* </Col> */}
</>
    )
}