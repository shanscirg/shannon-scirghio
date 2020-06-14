import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

export default function ContactMenu() {
    return (
        <Link to='https://www.linkedin.com/in/shanscirg'>
            <Image src='https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png'></Image>
        </Link>
    )
}