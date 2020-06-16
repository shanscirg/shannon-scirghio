import React, { useContext, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { MyContext } from '../../utils/Context';
import ProjectCard from '../../components/ProjectCard';
import slangSS from '../../utils/images/slangSS1.png';
import slangFavicon from '../../utils/images/slangFavicon.png';
import placeholder from '../../utils/images/placeholder.png';
import whatsSS from '../../utils/images/whatsSS.png';
import whatsFav from '../../utils/images/whatsFav.png';

export default function Projects() {

    const { isMenuOpen, toggleMenu } = useContext(MyContext)

    useEffect(() => {
        isMenuOpen && toggleMenu();
    }, []);

    const slangHref = "https://slanguageapp.herokuapp.com"
    const slangDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const slangGithub = 'https://github.com/cha2169540/Slanguage';

    const whatsHref = 'https://whats-my-life.herokuapp.com/';
    const whatsDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    const whatsGithub = 'https://github.com/shanscirg/whats-my-life'

    return (
        <Container fluid='md' className='home-container'>
            <Row>
                <ProjectCard
                    imageSrc={slangSS}
                    siteName={'Slanguage'}
                    liveSite={slangHref}
                    description={slangDescription}
                    githubSite={slangGithub}
                    siteLogo={slangFavicon}
                />
                <ProjectCard
                    imageSrc={whatsSS}
                    siteName={'What\'s My Life!?'}
                    liveSite={whatsHref}
                    description={whatsDescription}
                    githubSite={whatsGithub}
                    siteLogo={whatsFav}
                />
                <ProjectCard
                    imageSrc={placeholder}
                    siteName={'idkyet'}
                    liveSite={whatsHref}
                    description={slangDescription}
                />
            </Row>
        </Container>
    )
}