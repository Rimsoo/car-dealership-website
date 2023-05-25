import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './SiteHeader.css';    

export default function SiteHeader() {
    const [menuBtnClicked, setMenuBtnClicked] = useState(false);
    let menuRef = useRef();
    let buttonRef = useRef();

    function toggleMenu() {
        setMenuBtnClicked(!menuBtnClicked);
    }

    function hideMenu() {
        setMenuBtnClicked(false);
    }

    useEffect(() => {
        function handler(e) {
            if (!menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
                hideMenu();
            }
        }

        document.addEventListener('mousedown', handler);
    })

    return (
        <div className='SiteHeader'>
            <div className='SiteHeader__name'>
                <h2>ALFA MOTORS</h2>
                <p>Centrum Wyselekcjonowanych Krajowych Samochodów Marek Premium</p>
            </div>

            <ul className={
                    menuBtnClicked ? 
                    'SiteHeader__navbar' : 
                    'SiteHeader__navbar SiteHeader__navbar--hidden'
                }
                ref={menuRef}
            >
                <li><NavLink onClick={hideMenu} to='/' >Oferta</NavLink></li>
                <li><NavLink onClick={hideMenu} to='/Sold' >Sprzedane</NavLink></li>
                <li><NavLink onClick={hideMenu} to='/About' >O nas</NavLink></li>
                <li><NavLink onClick={hideMenu} to='/Buy' >Skup aut</NavLink></li>
                <li><NavLink onClick={hideMenu} to='/Financing' >Finansowanie</NavLink> </li>
                <li><NavLink onClick={hideMenu} to='/Contact' >Kontakt</NavLink></li>
            </ul>

            <img 
                id='SiteHeader__menuBtn' 
                src={require('../assets/menuBtn.png')}
                onClick={toggleMenu}
                ref={buttonRef}
            />

            <div className='SiteHeader__phoneData'>
                <img src={require('../assets/phoneIcon.png')} alt="phone icon" />
                <p>+48 XXX XXX XXX</p>
            </div>
        </div>
    )
}