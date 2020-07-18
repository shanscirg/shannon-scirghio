import React, { useContext } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { scaleRotate as Menu } from 'react-burger-menu'
import { MyContext } from '../../utils/Context';
import BurgIcon from '../Hamburger/burgIcon';

export default function NavMenu() {
    const { menuOpenState, stateChangeHandler } = useContext(MyContext)

    return (
        <Menu
            noOverlay
            width={280}
            height={'100vh'}
            pageWrapId={'page-wrap'}
            outerContainerId={'outer-container'}
            customBurgerIcon={<BurgIcon />}
            customCrossIcon={<BurgIcon />}
            isOpen={menuOpenState}
            onStateChange={(state) => stateChangeHandler(state)}
        >
            <Link id='home' className='menu-item' to='/'>Home</Link>
            <Link id='about' className='menu-item' to='/About'>About</Link>
            <Link id='projects' className='menu-item' to='/Projects'>Projects</Link>
            <Link id='contact' className='menu-item' to='/Contact'>Contact</Link>
        </Menu>
    )
}
