import React, { useEffect, useContext } from 'react';
import ContactMenu from '../../components/ContactMenu';
import { Container, Row, Col } from 'react-bootstrap';
import { MyContext } from '../../utils/Context';
import './style.css';
// import RadialMenu from '../../components/RadialMenu';
import RadialMenu from "react-radial-menu"
import facebook from '../../utils/images/social/facebook.png';
import flickr from '../../utils/images/social/flickr.png';

export default function Contact() {

    const { isMenuOpen, toggleMenu } = useContext(MyContext)

    useEffect(() => {
        isMenuOpen && toggleMenu();
    }, []);

    const items = [
        {"href":"http://www.facebook.com", "image":`url(${facebook})`},
        {"href":"http://www.reddit.com", "image":"url(../../utils/images/social/reddit.png)"},
        {"href":"http://www.flickr.com", "image":`url(${flickr})`},
        {"href":"http://www.google.com", "image":"url(../../utils/images/social/googleplus.png)"},
        {"href":"http://www.linkedin.com", "image":"url(../../utils/images/social/linkedin.png)"},
        {"href":"http://www.twitter.com", "image":"url(../../utils/images/social/twitter.png)"},
        {"href":"http://www.twitter.com", "image":"url(../../utils/images/social/twitter.png)"}
    ];
    
    const center = {
        "image": "url(../../utils/images/social/share.png)"
    };

    return (
        <RadialMenu
          items={items}
          center={center}
        />
    )
}