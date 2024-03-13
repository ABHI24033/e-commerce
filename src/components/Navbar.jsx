import React, { useState } from 'react';

import "../css/header.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const [activeNav, setActiveNav] = useState('home');

    function toggleNav() {
        setOpenNav(!openNav);
    }

    function activeNavLink(nav) {
        setActiveNav(nav);
    }

    return (
        <div>
            <header className="header">
                <h1>E- commerce.</h1>
                <nav className={`nav ${openNav ? `toggle` : ``}`}>
                    <ul>
                        <li>
                            <Link to={'/'} className={`${activeNav === "home" ? "active-class" : ""}`} onClick={() => activeNavLink("home")}>Home</Link>
                        </li>
                        <li><Link to={'/privacy_policy'} className={`${activeNav === "privacy_policy" ? "active-class" : ""}`} onClick={() => activeNavLink("privacy_policy")}>Privacy Policy</Link></li>
                        <li><Link to={'/term_condition'} className={`${activeNav === "term_condition" ? "active-class" : ""}`} onClick={() => activeNavLink("term_condition")}>Terms  & Conditions</Link></li>
                        {/* <li><a href="#contact" >Contact</a></li> */}
                    </ul>
                </nav>
                <div className="buttons">
                    <i className={`fa-solid ${openNav ? "fa-xmark" : "fa-bars"}`} id="bars" onClick={toggleNav}></i>
                </div>

            </header>

        </div>
    );
}

export default Navbar;
