import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../AboutMe/style.css';
import './style.css';

export default function ButtonComp({ text, path }) {
    return (
        <Row style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            <Link to={path}>
                <button type='button' className='myBtn'>
                    {text}
                </button>
            </Link>
        </Row>
    )
}