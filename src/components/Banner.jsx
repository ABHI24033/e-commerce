import React from 'react';
import "../css/home.css";
import carousel from "../assets/about.jpeg";
import carousel3 from '../assets/carousel3.jpg';
import carousel2 from '../assets/carousel2.jpg';
const Banner = () => {
    return (
      
        <div id="carouselExampleAutoplaying" class="carousel slide mt-5" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner carousel_size">
                <div class="carousel-item active ">
                    <img src={carousel} class="d-block w-100" alt="..." />
                    <div class="carousel-caption  d-md-block banner_content">
                        <div>
                            <h1>Quality Craftsmanship, Unbeatable Prices</h1>
                            <p>Experience luxury without the hefty price tag. We source our products from top-notch manufacturers, ensuring superior quality at affordable prices. Indulge in the finer things in life without breaking the bank – because you deserve the best.</p>
                        </div>
                        
                    </div>

                </div>
                <div class="carousel-item">
                    <img src={carousel2} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-md-block banner_content">
                        <div>
                            <h1>Express Yourself with Fashion</h1>
                            <p>Fashion is more than just clothing – it's a form of self-expression. Embrace your individuality and showcase your unique style with our diverse range of options. Whether you're classic, edgy, or somewhere in between, let your outfit speak volumes.</p>
                        </div>

                    </div>
                </div>
                <div class="carousel-item">
                    <img src={carousel3} class="d-block w-100" alt="..." />
                    <div class="carousel-caption  d-md-block banner_content">
                        <div>
                            <h1>Shop the Latest Trends</h1>
                            <p>Stay ahead of the curve with our ever-evolving selection of trendsetting pieces. Whether you're into bold prints, sophisticated silhouettes, or minimalist designs, we have something for every fashionista. Shop now and turn heads wherever you go.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Banner;
