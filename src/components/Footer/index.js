import React from 'react';



export default function Footer() {

    const footerStyle = {
        textAlign: 'right',
        position: 'absolute',
        bottom: '0px',
        right: '25px'
    }

    const pStyle = {
        color: 'white',
        display: 'inline-block'
    }

    return (
        <footer style={footerStyle}>
            <p style={pStyle}>&copy; 2020 | Shannon Scirghio</p>
        </footer>
    )
}