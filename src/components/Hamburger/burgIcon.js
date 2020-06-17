import React, { useState, useContext } from 'react';
import Hamburger from './index.js';
import { MyContext } from '../../utils/Context';

export default function BurgIcon() {


    const { isMenuOpen } = useContext(MyContext);


    return (
        <div className='centerRoot'>
            <Hamburger active={isMenuOpen} loading={false} />
        </div>
    )
}