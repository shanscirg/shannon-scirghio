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
import shannon from '../../utils/images/shannon.JPG';
import shannonTree from '../../utils/images/shantree.webp'



export default function Home() {
    const { menuOpenState, setMenuOpenState } = useContext(MyContext)
    const [show, setShow] = useState({
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
            setShow(state => {
                if (window.scrollY === 0) {
                    return { itemOne: false, itemTwo: false, itemThree: false };
                }
                if (div1Pos < scrollPos) {
                    return { ...state, itemOne: true }
                }
                if (div2Pos < scrollPos) {
                    return { ...state, itemTwo: true }
                }
                if (div3Pos < scrollPos) {
                    return { ...state, itemThree: true }
                }
                return { itemOne: false, itemTwo: false, itemThree: false };
            })
        };

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }

    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        menuOpenState && setMenuOpenState(!menuOpenState);
    }, []);

    return (
        <Container fluid='md'>
            <Container fluid='md' className='home-container center-container'>
                <Row className='home-row'>
                    <Col xs={12} lg={6}>
                        <AboutImage
                            callAnimClass='call-animation'
                            image={shannonTree}
                            image2={shannon}
                        />
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
            <Container fluid='md' className='contact-container'>
                <Contact />
            </Container>
        </Container>
    )
};

const Hr = styled.hr`
    border-top: 1px solid goldenrod;
    transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
    transition: transform 1.5s;
    margin-top: 8vh;
`;