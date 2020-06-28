import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../AboutMe/style.css';

export default function BackToHome() {
    return (
        <Row style={{
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            'margin-top': '15px'
        }}
        >
            <Link to='/'>
                <Button variant="primary" size="lg" style={{ border: '2px solid white' }}>
                    Back to Home
            </Button>
            </Link>
        </Row>
    )
}