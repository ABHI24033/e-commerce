import React from 'react';

import "../css/about.css";
import about from  "../assets/about.jpeg";
const About = () => {
    return (
        <div>
            <section className="about" id="about">
                <h4>ABOUT</h4>
                <h1>Learn More <span>About Us</span></h1>
                <div className="about-container">
                    <div className="about-left">
                        <img src={about} alt=""/>
                    </div>
                    <div className="about-right">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.</p>
                        <ul>
                            <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                        </ul>
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident</p>

                       
                    </div>
                </div>

            </section>
        </div>
    );
}

export default About;
