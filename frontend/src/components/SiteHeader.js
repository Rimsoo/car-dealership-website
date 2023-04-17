import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                <li><Link onClick={toggleMenu} to='/' >Oferta</Link></li>
                <li><Link onClick={toggleMenu} to='/Sold' >Sprzedane</Link></li>
                <li><Link onClick={toggleMenu} to='/About' >O nas</Link></li>
                <li><Link onClick={toggleMenu} to='/Buy' >Skup aut</Link></li>
                <li><Link onClick={toggleMenu} to='/Financing' >Finansowanie</Link> </li>
                <li><Link onClick={toggleMenu} to='/Contact' >Kontakt</Link></li>
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