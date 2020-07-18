import React, { useEffect, useContext } from 'react';
import AboutMe from '../../components/AboutMe';
import ButtonComp from '../../components/Button/index';
import { Container } from 'react-bootstrap';
import './style.css';
import { MyContext } from '../../utils/Context';

export default function About() {

    const { menuOpenState, setMenuOpenState } = useContext(MyContext)

    useEffect(() => {
        menuOpenState && setMenuOpenState(!menuOpenState);
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Container fluid='md' style={{ marginTop: '75px', marginBottom: '50px' }}>
                <AboutMe />
            </Container>
            <ButtonComp
                path='/'
                text='Back to Home'
            />
        </>
    )
}


