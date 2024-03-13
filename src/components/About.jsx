import React from 'react';

import "../css/about.css";
import about from  "../assets/about.jpg";
const About = () => {
    return (
        <div>
            <section className="about" id="about">
                {/* <h4>ABOUT</h4> */}
                <h1>About<span> Us</span></h1>
                <div className="about-container">
                    <div className="about-left">
                        <img src={about} alt=""/>
                    </div>
                    <div className="about-right">
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.</p>
                        <ul>
                            <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                        </ul>
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident</p> */}

                            <p>Welcome to [Your Fashion E-commerce Store], where style meets convenience! We're passionate about bringing you the latest trends, timeless classics, and everything in between, all at your fingertips.</p>

                            <p>Our journey began with a simple idea: to create a space where fashion enthusiasts could explore, discover, and express their unique style effortlessly. Whether you're searching for the perfect outfit for a special occasion or just looking to refresh your wardrobe, we've got you covered.</p>

                            <p>At [Your Fashion E-commerce Store], we believe that fashion is more than just clothing; it's a form of self-expression. That's why we curate a diverse collection of high-quality pieces from both established designers and emerging talents, ensuring that there's something for every style, taste, and budget.</p>

                            <p>But we're not just about selling clothes. We're about creating an experience. From our user-friendly website to our dedicated customer support team, we're here to make your shopping journey seamless and enjoyable.</p>

                            <p>Join us as we redefine the way you shop for fashion online. Welcome to [Your Fashion E-commerce Store] – where style is limitless, and possibilities are endless. Let's make every outfit unforgettable together.</p>

                       
                    </div>
                </div>

            </section>
        </div>
    );
}

export default About;
