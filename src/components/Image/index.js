import React from 'react';
import { Image, Row } from 'react-bootstrap';

export default function AboutImage() {

    return (
        <Row className="text-center">
            <Image 
            src='https://avatars3.githubusercontent.com/u/56829409?s=460&u=3e3847363643442f8683eb9d7d9015577b6bd4ea&v=4' 
            onMouseOver={e => (e.currentTarget.src = require('../../utils/assets/images/profpic1.jpg'))} onMouseOut={e => (e.currentTarget.src = 'https://avatars3.githubusercontent.com/u/56829409?s=460&u=3e3847363643442f8683eb9d7d9015577b6bd4ea&v=4')} className='mx-auto d-block' rounded />
        </Row>
    )
}