import React, { useContext } from 'react';
import { MyContext } from '../../utils/Context';

export default function Button() {
    const ctx = useContext(MyContext)
    return (
        <button onClick={ctx.toggleMenu}>
            Menu
        </button>
    )
}