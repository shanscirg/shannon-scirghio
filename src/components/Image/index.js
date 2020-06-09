import React from 'react';
import { Image } from 'react-bootstrap';
import './style.css';

export default function AboutImage() {

    return (
        <Image
            src='https://avatars3.githubusercontent.com/u/56829409?s=460&u=3e3847363643442f8683eb9d7d9015577b6bd4ea&v=4'
            onMouseOver={e => (e.currentTarget.src = 'https://github.com/shanscirg/shanscirg.github.io/blob/master/assets/images/profpic1.jpg?raw=true')} onMouseOut={e => (e.currentTarget.src = 'https://avatars3.githubusercontent.com/u/56829409?s=460&u=3e3847363643442f8683eb9d7d9015577b6bd4ea&v=4')} className='mx-auto d-block' roundedCircle />
    )
}