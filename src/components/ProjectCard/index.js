import React from 'react';
import { Col, Image } from 'react-bootstrap';
import githubLogo from '../../utils/images/github.png';



export default function ProjectCard({ imageSrc, siteName, liveSite, description, githubSite, siteLogo }) {
    return (
        <Col className='project-card' style={{height:'100%', border: "1px solid black", padding: "20px", margin: "30px", "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", background: "rgba(0, 0, 0, 0.3)"}} xs={12} lg={5}>
            <div className='image'>
                <a target="_blank" href={liveSite}>
                    <Image src={imageSrc} alt={siteName} style={{ height: "30%", width: "100%" }}/>
                </a>
            </div>
            <div className='description' style={{color: "white"}}>
                {description}
            </div>
            <div className='links'>
                <a target="_blank" href={githubSite} style={{'margin-right': '10px'}}>
                    <Image src={githubLogo} style={{ height: "20px", width: "20px" }}/>
                    GitHub
                </a>
                <a target="_blank" href={liveSite}>
                    <Image src={siteLogo} style={{ height: "20px", width: "20px" }}/>
                    {siteName}
                </a>
            </div>
        </Col>
    )
}