import React, { useContext } from 'react';
import './style.css';
import { scaleRotate as Menu } from 'react-burger-menu'
import { MyContext } from '../../utils/Context';
import BurgIcon from '../Hamburger/burgIcon';

export default function NavMenu() {
    const ctx = useContext(MyContext)

    return (
        <Menu
            id={"sidebar"}
            className={"my-menu"}
            htmlClassName={"my-class"}
            bodyClassName={"my-class"}
            width={280}
            height={"100vh"}
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            customBurgerIcon={<BurgIcon />}
            customCrossIcon={<BurgIcon />}
            isOpen={ctx.isMenuOpen}
            onStateChange={(state) => ctx.stateChangeHandler(state)}
        >
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/About">About</a>
            <a id="projects" className="menu-item" href="/Projects">Projects</a>
            <a id="contact" className="menu-item" href="/Contact">Contact</a>
        </Menu>
    )
}
