import React, { useContext } from 'react';
import Hamburger from './index.js';
import { MyContext } from '../../utils/Context';

export default function BurgIcon() {


    const { isMenuOpen } = useContext(MyContext);


    return (
        <div className='centerRoot call-animation-burger'>
            <Hamburger active={isMenuOpen} loading={false} />
        </div>
    )
}