import React, { useEffect, useContext, useState, useRef, useLayoutEffect } from 'react';
import AboutImage from '../../components/Image';
import AboutIntro from '../../components/AboutIntro';
import ProjPrev from '../Projects/projPrev';
import AboutPrev from '../About/aboutPrev';
import Contact from '../Contact/index';
import { Container, Row, Col } from 'react-bootstrap';
import { MyContext } from '../../utils/Context';
import styled from "styled-components";
import './style.css';


export default function Home() {
    const { isMenuOpen, toggleMenu } = useContext(MyContext)
    const [show, doShow] = useState({
        itemOne: false,
        itemTwo: false,
        itemThree: false
    });

    const ourRef = useRef(null);
    const anotherRef = useRef(null);
    const refThree = useRef(null);

    useLayoutEffect(() => {
        const topPos = element => element.getBoundingClientRect().top;
        const div1Pos = topPos(ourRef.current);
        const div2Pos = topPos(anotherRef.current);
        const div3Pos = topPos(refThree.current);

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            if (div1Pos < scrollPos) {
                doShow(state => ({ ...state, itemOne: true }));
            } else if (div2Pos < scrollPos) {
                doShow(state => ({ ...state, itemTwo: true }));
            } else if (div3Pos < scrollPos) {
                doShow(state => ({ ...state, itemThree: true }));
                if (window.scrollY === 0) {
                    doShow(state => ({ ...state, itemThree: false }));
                }
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }

    }, []);

    useEffect(() => {
        isMenuOpen && toggleMenu();
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container fluid='md'>
            <Container fluid='md' className='home-container'>
                <Row className='home-row'>
                    <Col xs={12} lg={6}>
                        <AboutImage />
                    </Col>
                    <Col xs={12} lg={6}>
                        <AboutIntro />
                    </Col>
                </Row>
            </Container>
            <Hr animate={show.itemThree} ref={refThree}></Hr>
            <Container fluid='md' className='home-container'>
                <ProjPrev
                    style={{
                        width: '100%',
                        height: '100%',
                        overflowY: 'scroll',
                        paddingRight: '17px',
                        boxSizing: 'content-box'
                    }}
                />
            </Container>
            <Hr animate={show.itemTwo} ref={anotherRef}></Hr>
            <Container fluid='md' className='home-container'>
                <AboutPrev />
            </Container>
            <Hr animate={show.itemOne} ref={ourRef}></Hr>
            <Container fluid='md' className='home-container'>
                <Contact />
            </Container>
        </Container>
    )
};

const Hr = styled.hr`
    border-top: 1px solid goldenrod;
    transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
    transition: transform 1.5s;
`;