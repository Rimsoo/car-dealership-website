import { useEffect, useState, useRef } from "react";
import { useLocation, NavLink } from "react-router-dom";
import menuBtn from "../assets/siteHeader/menuBtn.png";
import phoneIcon from "../assets/contact/phoneIcon.png";

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
      if (
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        hideMenu();
      }
    }
    document.addEventListener("mousedown", handler);
  });

  return (
    <div
      className="w-full relative
        lg:h-[120px]
        xl:w-[1200px] mx-auto text-17 font-semibold"
    >
      {/* Logo with a link and description below */}
      <div
        className="block w-full max-w-xs my-1 mx-auto py-1 px-0
                sm:max-w-none sm:inline-block sm:w-[450px] sm:inline-block sm:ml-8
                lg:p-0 lg:my-0"
      >
        <NavLink to="/" style={{ color: "black" }}>
          <h2
            className="p-0 pt-2 text-center font-inter text-4xl font-bold
                        sm:inline-block sm:pl-8"
          >
            GetTHEcar
          </h2>
        </NavLink>
        <p
          className="p-0 text-center font-inter font-thin text-lg
                lg:"
        >
          Centre de Véhicules Premium Nationaux Sélectionnés
        </p>
      </div>

      {/* Navbar */}
      <ul
        className={`absolute z-20 top-[139px] w-full
                sm:top-[92px]
                lg:top-[70px] lg:pl-3
                ${menuOpen ? "siteHeader__navbar--shown" : "siteHeader__navbar--hidden"}`}
        ref={menuRef}
      >
        <NavLink onClick={hideMenu} to="/">
          <li className="siteHeader__li">
            <span
              className={`siteHeader__li__span  ${location.pathname === "/" && "text-gray-300"}`}
            >
              Offre
            </span>
          </li>
        </NavLink>
        <NavLink onClick={hideMenu} to="/sold/1">
          <li className="siteHeader__li">
            <span
              className={`siteHeader__li__span  ${location.pathname.startsWith("/sold") || location.pathname.startsWith("/Sold") ? "text-gray-300" : ""}`}
            >
              Véhicules Vendus
            </span>
          </li>
        </NavLink>
        <NavLink onClick={hideMenu} to="/about">
          <li className="siteHeader__li">
            <span
              className={`siteHeader__li__span  ${location.pathname === "/about" && "text-gray-300"}`}
            >
              À propos
            </span>{" "}
          </li>
        </NavLink>
        {/* <NavLink onClick={hideMenu} to="/buy"> */}
        {/*   <li className="siteHeader__li"> */}
        {/*     <span */}
        {/*       className={`siteHeader__li__span  ${location.pathname === "/buy" && "text-gray-300"}`} */}
        {/*     > */}
        {/*       Rachat de véhicule */}
        {/*     </span> */}
        {/*   </li> */}
        {/* </NavLink> */}
        {/* <NavLink onClick={hideMenu} to="/financing"> */}
        {/*   <li className="siteHeader__li"> */}
        {/*     <span */}
        {/*       className={`siteHeader__li__span  ${location.pathname === "/financing" && "text-gray-300"}`} */}
        {/*     > */}
        {/*       Financement */}
        {/*     </span> */}
        {/*   </li> */}
        {/* </NavLink> */}
        <NavLink onClick={hideMenu} to="/contact">
          <li className="siteHeader__li">
            <span
              className={`siteHeader__li__span  ${location.pathname === "/contact" && "text-gray-300"}`}
            >
              Contact
            </span>
          </li>
        </NavLink>
      </ul>

      {/* Menu button */}
      <img
        className="block mx-auto mb-3 h-5 w-5 cursor-pointer
                sm:inline-block sm:float-right sm:mr-4 sm:mt-4
                lg:hidden"
        src={menuBtn}
        onClick={toggleMenu}
        ref={buttonRef}
        alt="Les meilleures occasions"
      />

      {/* Phone number with an icon */}
      <div
        className="SiteHeader__phoneData hidden relative mt-3 mr-1
            sm:hidden
            md:float-right md:inline-block"
      >
        <img
          className="inline-block h-4"
          src={phoneIcon}
          alt="Trouvez un véhicule premium"
        />
        <p className="inline-block h-4 px-2">+33 33 33 33 33</p>
      </div>
    </div>
  );
}
