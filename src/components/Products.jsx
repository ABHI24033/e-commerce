import React from 'react';

import "../css/product.css";

import kids from '../assets/kids.jpeg';
import wedding from '../assets/wedding.jpg';
import bag from '../assets/bags.jpeg';
import suit from '../assets/suit.jpg';
import coat from '../assets/coat.jpeg';
import sports from '../assets/sports.jpeg';
import winter_men from "../assets/winter_men.jpeg"
import winter_women from "../assets/winter_women.jpeg"
const Products = () => {
    return (
        <section className="menu" id="menu">
            {/* <h4>OUR Products</h4> */}
            <h1> Our <span>Products</span></h1>
            
            <div className="menu-card">
                <div className="card">
                    <img src={coat} alt="" />
                        <h2>Men's Wear</h2>
                        {/* <p>Lorem, deren, trataro, filede, nerada</p> */}
                        {/* <h1>$7.60</h1> */}
                </div>
                <div className="card">
                    <img src={suit} alt="" />
                        <h2>Women's Wear</h2>
                        {/* <p>Lorem, deren, trataro, filede, nerada</p> */}
                        {/* <h1>$7.60</h1> */}
                </div>
                <div className="card">
                    <img src={kids} alt="" />
                        <h2>Kid's Wear</h2>
                        {/* <p>Lorem, deren, trataro, filede, nerada</p> */}
                        {/* <h1>$7.60</h1> */}
                </div>
                <div className="card">
                    <img src={wedding} alt="" />
                        <h2>Wedding Cloths</h2>
                        {/* <p>Lorem, deren, trataro, filede, nerada</p> */}
                        {/* <h1>$7.60</h1> */}
                </div>
                <div className="card">
                    <img src={sports} alt="" />
                        <h2>Sport's Wear</h2>
                        {/* <p>Lorem, deren, trataro, filede, nerada</p> */}
                        {/* <h1>$7.60</h1> */}
                </div>
                <div className="card">
                    <img src={bag} alt="" />
                        <h2>Bags</h2>
                        {/* <p>Lorem, deren, trataro, filede, nerada</p> */}
                        {/* <h1>$7.60</h1> */}
                </div>
                <div className="card">
                    <img src={winter_men} alt="" />
                        <h2>Winter men's Cloths</h2>
                        {/* <p>Lorem, deren, trataro, filede, nerada</p> */}
                        {/* <h1>$7.60</h1> */}
                </div>
                <div className="card">
                    <img src={winter_women} alt="" />
                        <h2>Winter Women's Cloths</h2>
                        {/* <p>Lorem, deren, trataro, filede, nerada</p> */}
                        {/* <h1>$7.60</h1> */}
                </div>
            </div>
        </section>
    );
}

export default Products;
