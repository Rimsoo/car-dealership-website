import { useEffect, useState, useRef } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import menuBtn from '../assets/menuBtn.png';    
import phoneIcon from '../assets/phoneIcon.png';    

export default function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    let menuRef: any = useRef();
    let buttonRef: any = useRef();

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    function hideMenu() {
        setMenuOpen(false);
    }

    // useEffect below closes menu whenever sth not being NavBar is clicked
    useEffect(() => {
        function handler(e: any) {
            if (!menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
                hideMenu();
            }
        }
        document.addEventListener('mousedown', handler);
    })

    useEffect(() => {
        console.log(location)
    }, [location])

    return (
        <div className='w-full relative
        lg:h-[120px]
        xl:w-[1200px] mx-auto text-17 font-semibold'>

            {/* Logo with a link and description below */}
            <div className='block w-full max-w-xs my-1 mx-auto py-1 px-0
                sm:max-w-none sm:inline-block sm:w-[450px] sm:inline-block sm:ml-8
                lg:p-0 lg:my-0'
            >
                <NavLink to='/' style={{color: 'black'}}>
                    <h2 className='p-0 pt-2 text-center font-bebasFont text-4xl font-thin
                        sm:inline-block sm:pl-8'
                    >ALFA MOTORS</h2>
                </NavLink>
                <p className='p-0 text-center font-bebasFont font-thin text-lg
                lg:'
                >Centrum Wyselekcjonowanych Krajowych Samochodów Marek Premium</p>
            </div>

            {/* Navbar */}
            <ul className={`absolute z-20 top-[139px] w-full
                sm:top-[92px]
                lg:top-[70px] lg:pl-3
                ${menuOpen ? 'siteHeader__navbar--shown' : 'siteHeader__navbar--hidden'}`}
                ref={menuRef}
            >
                <NavLink onClick={hideMenu} to='/' >
                    <li className='siteHeader__li'>
                        <span className={`siteHeader__li__span  ${location.pathname === '/' && 'text-gray-300'}`}>Oferta</span>
                    </li>
                </NavLink>
                <NavLink onClick={hideMenu} to='/Sold' >
                    <li className='siteHeader__li'>
                        <span className={`siteHeader__li__span  ${location.pathname === '/Sold' && 'text-gray-300'}`}>Sprzedane</span>
                    </li>
                </NavLink>
                <NavLink onClick={hideMenu} to='/About' > 
                     <li className='siteHeader__li'>
                        <span className={`siteHeader__li__span  ${location.pathname === '/About' && 'text-gray-300'}`}>O nas</span>
                    </li>
                </NavLink>
                <NavLink onClick={hideMenu} to='/Buy' > 
                    <li className='siteHeader__li'>
                        <span className={`siteHeader__li__span  ${location.pathname === '/Buy' && 'text-gray-300'}`}>Odkup pojazdów</span>
                    </li>
                </NavLink>
                <NavLink onClick={hideMenu} to='/Financing' > 
                    <li className='siteHeader__li'>
                        <span className={`siteHeader__li__span  ${location.pathname === '/Financing' && 'text-gray-300'}`}>Finansowanie</span>
                    </li>
                </NavLink> 
                <NavLink onClick={hideMenu} to='/Contact' > 
                    <li className='siteHeader__li'>
                        <span className={`siteHeader__li__span  ${location.pathname === '/Contact' && 'text-gray-300'}`}>Kontakt</span>
                    </li>
                </NavLink>
            </ul>

            {/* Menu button */}
            <img 
                className='block mx-auto mb-3 h-5 w-5 cursor-pointer
                sm:inline-block sm:float-right sm:mr-4 sm:mt-4
                lg:hidden'
                src={menuBtn}
                onClick={toggleMenu}
                ref={buttonRef}
                alt='Najlepsze samochody używane w Małopolsce'
            />

            {/* Phone number with an icon */}
            <div className='SiteHeader__phoneData hidden relative mt-3 mr-1
            sm:hidden
            md:float-right md:inline-block'>
                <img className='inline-block h-4' src={phoneIcon} alt="Znajdź auto klasy premium" />
                <p className='inline-block h-4 px-2'>+48 505 964 955</p>
            </div>
        </div>
    )
}