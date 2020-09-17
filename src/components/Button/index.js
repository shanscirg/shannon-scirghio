import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../AboutMe/style.css';
import './style.css';

export default function ButtonComp({ text, path }) {

    const rowStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <Row style={rowStyle}>
            <Link to={path}>
                <button type='button' className='myBtn'>
                    {text}
                </button>
            </Link>
        </Row>
    )
}