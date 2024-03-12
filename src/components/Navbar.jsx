import React, { useState } from 'react';

import "../css/header.css";
const Navbar = () => {
    const [openNav,setOpenNav]=useState(false);

    function toggleNav(){
        setOpenNav(!openNav);
    }

    return (
        <div>
            <header className="header">
                <h1>E- commerce.</h1>
                <nav className={`nav ${openNav ? `toggle` : ``}`}>
                    <ul>
                        <li><a href="#home" className="active-className">Home</a></li>
                        <li><a href="#chefs" >Privacy Policy</a></li>
                        <li><a href="#chefs" >Terms  & Conditions</a></li>
                        <li><a href="#contact" >Contact</a></li>
                    </ul>
                </nav>
                <div className="buttons">
                    <i className={`fa-solid ${openNav?"fa-xmark":"fa-bars"}`} id="bars" onClick={toggleNav}></i>
                </div>

            </header>

        </div>
    );
}

export default Navbar;
