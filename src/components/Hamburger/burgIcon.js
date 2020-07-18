import React, { useContext } from 'react';
import Hamburger from './index.js';
import { MyContext } from '../../utils/Context';

export default function BurgIcon() {


    const { menuOpenState } = useContext(MyContext);


    return (
        <div className='centerRoot call-animation-burger'>
            <Hamburger active={menuOpenState} loading={false} />
        </div>
    )
}