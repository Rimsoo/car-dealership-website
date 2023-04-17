import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SiteHeader.css';    

export default function SiteHeader() {
    const [menuBtnClicked, setMenuBtnClicked] = useState(false);

    function toggleMenu() {
        setMenuBtnClicked(!menuBtnClicked);
    }

    return (
        <div className='SiteHeader'>
            <h2>Mateusz Czarnota - premium cars</h2>

            <ul className={
                menuBtnClicked ? 
                'SiteHeader__navbar' : 
                'SiteHeader__navbar SiteHeader__navbar--hidden'
            }>
                <li><NavLink onClick={toggleMenu} to='/' >Oferta</NavLink></li>
                <li><NavLink onClick={toggleMenu} to='/Sold' >Sprzedane</NavLink></li>
                <li><NavLink onClick={toggleMenu} to='/About' >O nas</NavLink></li>
                <li><NavLink onClick={toggleMenu} to='/Buy' >Skup aut</NavLink></li>
                <li><NavLink onClick={toggleMenu} to='/Financing' >Finansowanie</NavLink> </li>
                <li><NavLink onClick={toggleMenu} to='/Contact' >Kontakt</NavLink></li>
            </ul>

            <img 
                id='SiteHeader__menuBtn' 
                src='./assets/menuBtn.png' 
                onClick={toggleMenu}
            />

            <div className='SiteHeader__phoneData'>
                <img src='./assets/phoneIcon.png' alt="phone icon" />
                <p>+48 XXX XXX XXX</p>
            </div>
        </div>
    )
}