import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MyContext } from '../../utils/Context';
import ProjectCard from '../../components/ProjectCard';
import slangSS from '../../utils/images/slangSS2.png';
import slangFavicon from '../../utils/images/slangFavicon.png';
import placeholder from '../../utils/images/placeholder.png';
import whatsSS from '../../utils/images/whatsSS.png';
import whatsFav from '../../utils/images/whatsFav.png';
import ContactMenu from '../../components/ContactMenu';

export default function Projects() {

    const { isMenuOpen, toggleMenu } = useContext(MyContext)

    useEffect(() => {
        isMenuOpen && toggleMenu();
    }, []);

    const slangHref = 'https://slanguageapp.herokuapp.com';
    const slangDescription = 'is a language-learning app for developing proficiency in slang and colloquialisms from a variety of world languages. Created by a team of 4 motivated and hardworking individuals.';
    const slangRole = 'I worked with both the frontend and backend, including React JS components, hooks, and API routes and calls, database models, and overall functionality and communication between the frontend and backend.';
    const slangTechs = 'HTML5, CSS3, JavaScript, React.js, MongoDB, Express.js, Node.js, Bootstrap, Mic Recorder To MP3, Axios, React Audio Player, React Bootstrap, React Router Dom, Bcrypt JS, Heroku'
    const slangGithub = 'https://github.com/cha2169540/Slanguage';

    const whatsHref = 'https://whats-my-life.herokuapp.com/';
    const whatsDescription = 'is a personality assessment app that provides the user a description of their Myers Briggs Indicator Type and six fun facts about them, such as what travel destination might suit them best. Developed by a team of four creative and passionate individuals.';
    const whatsRole = 'I worked on the backend and frontend, developed API routes and AJAX calls to have frontend and backend communicate with data from the MySQL database and localstorage. Wrote Handlebars template files to dynamically generate user results.';
    const whatsTechs = 'HTML5, CSS3, Bootstrap, JavaScript, MySQL2, Sequelize, Express.js, Node.js, Express Handlebars, Bcrypt JS, Heroku';
    const whatsGithub = 'https://github.com/shanscirg/whats-my-life';

    return (
        <Container fluid='md' className='home-container'>
            <Row className='contact-row'>
                <ContactMenu />
            </Row>
            <Row className='about-title'>
                <Col xs={12} lg={12}>
                    <h1 className='about-me-title'>My Projects</h1>
                </Col>
            </Row>
            <Row
                style={{
                    height: '450px',
                    display: 'flex',
                    'justify-content': 'center',
                    'align-items': 'center',
                    'margin-bottom': '40px'
                }}
            >
                <ProjectCard
                    imageSrc={slangSS}
                    siteName={'Slanguage'}
                    liveSite={slangHref}
                    description={slangDescription}
                    role={slangRole}
                    techs={slangTechs}
                    githubSite={slangGithub}
                    siteLogo={slangFavicon}
                />
                <ProjectCard
                    imageSrc={whatsSS}
                    siteName={'What\'s My Life!?'}
                    liveSite={whatsHref}
                    description={whatsDescription}
                    role={whatsRole}
                    techs={whatsTechs}
                    githubSite={whatsGithub}
                    siteLogo={whatsFav}
                />
            </Row>
            {/* <Row
                style={{
                    height: '450px',
                    display: 'flex',
                    'justify-content': 'center',
                    'align-items': 'center',
                    'margin-bottom': '40px'
                }}
            >
                <ProjectCard
                    imageSrc={placeholder}
                    siteName={'IdkYet'}
                    liveSite={slangHref}
                    description={slangDescription}
                    role={slangRole}
                    techs={slangTechs}
                    githubSite={slangGithub}
                    siteLogo={slangFavicon}
                />
            </Row> */}
        </Container >
    )
}