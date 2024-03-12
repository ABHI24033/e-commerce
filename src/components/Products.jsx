import React from 'react';

import "../css/menu.css";

import shirt from '../assets/shirts.jpeg';
import t_shirt from '../assets/t-shirt.jpeg';
import pant from '../assets/jeans.jpeg';
import suit from '../assets/suit.jpg';
import coat from '../assets/coat.jpeg';
import saree from '../assets/saree.jpg';
const Products = () => {
    return (
        <section className="menu" id="menu">
            {/* <h4>OUR Products</h4> */}
            <h1> Our <span>Products</span></h1>
            
            <div className="menu-card">
                <div className="card">
                    <img src={coat} alt=""/>
                        <h2>Magnam Tiste</h2>
                        <p>Lorem, deren, trataro, filede, nerada</p>
                        <h1>$7.60</h1>
                </div>
                <div className="card">
                    <img src={saree} alt=""/>
                        <h2>Magnam Tiste</h2>
                        <p>Lorem, deren, trataro, filede, nerada</p>
                        <h1>$7.60</h1>
                </div>
                <div className="card">
                    <img src={suit} alt=""/>
                        <h2>Magnam Tiste</h2>
                        <p>Lorem, deren, trataro, filede, nerada</p>
                        <h1>$7.60</h1>
                </div>
                <div className="card">
                    <img src={t_shirt} alt=""/>
                        <h2>Magnam Tiste</h2>
                        <p>Lorem, deren, trataro, filede, nerada</p>
                        <h1>$7.60</h1>
                </div>
                <div className="card">
                    <img src={shirt} alt=""/>
                        <h2>Magnam Tiste</h2>
                        <p>Lorem, deren, trataro, filede, nerada</p>
                        <h1>$7.60</h1>
                </div>
                <div className="card">
                    <img src={pant} alt=""/>
                        <h2>Magnam Tiste</h2>
                        <p>Lorem, deren, trataro, filede, nerada</p>
                        <h1>$7.60</h1>
                </div>
            </div>
        </section>
    );
}

export default Products;
