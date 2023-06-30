import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './SiteHeader.css';    

export default function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    let menuRef = useRef();
    let buttonRef = useRef();

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    function hideMenu() {
        setMenuOpen(false);
    }

    // useEffect below closes menu whenever sth not being NavBar is clicked
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
                <NavLink to='/' style={{color: 'black'}}>
                    <h2>ALFA MOTORS</h2>
                </NavLink>
                <p>Centrum Wyselekcjonowanych Krajowych Samochodów Marek Premium</p>
            </div>

            <ul 
                className={`SiteHeader__navbar ${menuOpen ? 
                'SiteHeader__navbar--shown' : 'SiteHeader__navbar--hidden'}`}
                ref={menuRef}
            >
                <NavLink onClick={hideMenu} to='/' ><li><span>Oferta</span></li></NavLink>
                <NavLink onClick={hideMenu} to='/Sold' ><li><span>Sprzedane</span></li></NavLink>
                <NavLink onClick={hideMenu} to='/About' > <li><span>O nas</span></li></NavLink>
                <NavLink onClick={hideMenu} to='/Buy' > <li><span>Odkup pojazdów</span></li></NavLink>
                <NavLink onClick={hideMenu} to='/Financing' > <li><span>Finansowanie</span></li></NavLink> 
                <NavLink onClick={hideMenu} to='/Contact' > <li><span>Kontakt</span></li></NavLink>
                {/* <li><NavLink onClick={hideMenu} to='/Sold' >Sprzedane</NavLink></li>
                <li><NavLink onClick={hideMenu} to='/About' >O nas</NavLink></li>
                <li><NavLink onClick={hideMenu} to='/Buy' >Odkup pojazdów</NavLink></li>
                <li><NavLink onClick={hideMenu} to='/Financing' >Finansowanie</NavLink> </li>
                <li><NavLink onClick={hideMenu} to='/Contact' >Kontakt</NavLink></li> */}
            </ul>

            <img 
                id='SiteHeader__menuBtn' 
                src={require('../assets/menuBtn.png')}
                onClick={toggleMenu}
                ref={buttonRef}
                alt='Najlepsze samochody używane w Małopolsce'
            />

            <div className='SiteHeader__phoneData'>
                <img src={require('../assets/phoneIcon.png')} alt="Znajdź auto klasy premium" />
                <p>+48 505 964 955</p>
            </div>
        </div>
    )
}