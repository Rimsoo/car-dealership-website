import React from 'react';
import { Link } from 'react-router-dom';
import './SiteHeader.css';    

export default function Financing() {

    return (
        <div className='SiteHeader'>
            <h2>Mateusz Czarnota - premium cars</h2>

            <ul className='SiteHeader__navbar'>
                <li><Link to='/' >Oferta</Link></li>
                <li><Link to='/Sold' >Sprzedane</Link></li>
                <li><Link to='/About' >O nas</Link></li>
                <li><Link to='/Buy' >Skup aut</Link></li>
                <li><Link to='/Financing' >Finansowanie</Link> </li>
                <li><Link to='/Contact' >Kontakt</Link></li>
            </ul>

            <div className='SiteHeader__phoneData'>
                {/* <img src='../src/images/phoneIcon.png' id='phoneIcon'></img> */}
                <img src='./images/phoneIcon.png' alt="phone icon" ></img>
                <p>+48 XXX XXX XXX</p>
            </div>
        </div>
    )
}