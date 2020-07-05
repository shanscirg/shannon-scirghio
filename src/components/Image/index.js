import React from 'react';
import { Image } from 'react-bootstrap';
import './style.css';

export default function AboutImage({ callAnimClass, image, image2 }) {

    return (
        <div className={callAnimClass}>
            <Image
                src={image}
                onMouseOver={e => (e.currentTarget.src = image2)} onMouseOut={e => (e.currentTarget.src = image)} className='mx-auto d-block prof-img' fluid />
        </div>
    )
}