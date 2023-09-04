import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {FiMenu} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'

import logo from './../../assets/images/logo.png'
import './Header.scss'


export default function Header(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    function handleResize() {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() =>{
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, [])
    console.log(windowWidth)

    const burgerButtonStyleColor = menuIsOpen ? 'rgba(255, 255, 255, 0.6)': 'white';
    
    return(
        <header className="header" id="header">
            <nav className="navigation">
                <Link to='/' style={{width: 80, height:80, borderRadius: '50%'}} onClick={() => setMenuIsOpen(false)}>
                    <img src={logo} alt="Logo"
                    style={{width: 80, height:80, borderRadius: '50%'}}/>
                </Link>
                {windowWidth < 767 ? 
                    
                        <FiMenu onClick={() => setMenuIsOpen((v) => !v)} style={{height: 40, width: 40, color: burgerButtonStyleColor, cursor: 'pointer'}} ></FiMenu>
                        : 
                    <div className="link-section">
                        <NavLink to={`/about`}
                            className={({isActive}) => isActive ? 'link-active': null}>about</NavLink>
                        <NavLink to='/portfolio'
                            className={({isActive}) => isActive ? 'link-active': null}>portfolio</NavLink>
                        <NavLink to='/contact'
                            className={({isActive}) => isActive ? 'link-active': null}>contact</NavLink>
                    </div>
                }
            </nav>
            
            {windowWidth < 767 &&
                <div className="menu-burger">
                    <ul className={menuIsOpen ? 'menu-list': 'close-menu'}>
                        <li>
                            <NavLink to={`/about`} onClick={() => setMenuIsOpen(false)}>about</NavLink>
                        </li>
                        <li>
                            <NavLink to='/portfolio' onClick={() => setMenuIsOpen(false)}>portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' onClick={() => setMenuIsOpen(false)}>contact</NavLink>
                        </li>
                    </ul>
                </div>}
        </header>
    )
}