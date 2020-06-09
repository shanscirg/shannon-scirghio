import React from 'react';
import { Card } from 'react-bootstrap';
import '../AboutMe/style.css';

export default function CardComp(props) {
    return(
    <Card className='mt-5 mb-3 card'>
        <Card.Header>{props.header}</Card.Header>
        <Card.Body>
            <Card.Text>{props.text}</Card.Text>
        </Card.Body>
    </Card>
    )
}