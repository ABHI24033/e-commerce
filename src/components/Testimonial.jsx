import React from 'react';

import "../css/testimonial.css";
const Testimonial = () => {
    return (
        <div>
            <section className="testimonial" id="testimonial">
                {/* <h4>TESTIMONIALS</h4> */}
                <h1>Customers <span> Says</span></h1>
                <div className="container">
                    <div id="carouselExampleIndicators" className="carousel slide slider" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                {/* <!-- <img src="..." className="d-block w-100" alt="..."> --> */}
                                    <div className="content">
                                        <div className="content-text">
                                            <p>
                                                <i className="fa-solid fa-quote-left"></i>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                                                dignissimos voluptatem nisi obcaecati quia cupiditate modi consequatur blanditiis
                                                error quasi non voluptatibus perspiciatis et odit, voluptas tenetur quaerat, magnam
                                                vitae.
                                                <i className="fa-solid fa-quote-right"></i>
                                            </p>
                                            <h2>Soul Goodman</h2>
                                            <h4>CEO & Founder</h4>
                                        </div>
                                        <div className="img">
                                            <img src="./asset/testimonials/testimonials-1.jpg" alt=""/>
                                        </div>
                                    </div>
                            </div>

                            <div className="carousel-item ">
                                <div className="content">
                                    <div className="content-text">
                                        <p>
                                            <i className="fa-solid fa-quote-left"></i>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                                            dignissimos voluptatem nisi obcaecati quia cupiditate modi consequatur blanditiis
                                            error quasi non voluptatibus perspiciatis et odit, voluptas tenetur quaerat, magnam
                                            vitae.
                                            <i className="fa-solid fa-quote-right"></i>
                                        </p>
                                        <h2>Sara Wilsson</h2>
                                        <h4>Designer</h4>
                                    </div>
                                    <div className="img">
                                        <img src="./asset/testimonials/testimonials-2.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item ">
                                <div className="content">
                                    <div className="content-text">
                                        <p>
                                            <i className="fa-solid fa-quote-left"></i>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                                            dignissimos voluptatem nisi obcaecati quia cupiditate modi consequatur blanditiis
                                            error quasi non voluptatibus perspiciatis et odit, voluptas tenetur quaerat, magnam
                                            vitae.
                                            <i className="fa-solid fa-quote-right"></i>
                                        </p>
                                        <h2>Jana Karlis</h2>
                                        <h4>Store Owner</h4>
                                    </div>
                                    <div className="img">
                                        <img src="./asset/testimonials/testimonials-3.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item ">
                                <div className="content">
                                    <div className="content-text">
                                        <p>
                                            <i className="fa-solid fa-quote-left"></i>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                                            dignissimos voluptatem nisi obcaecati quia cupiditate modi consequatur blanditiis
                                            error quasi non voluptatibus perspiciatis et odit, voluptas tenetur quaerat, magnam
                                            vitae.
                                            <i className="fa-solid fa-quote-right"></i>
                                        </p>
                                        <h2>John Larson</h2>
                                        <h4>Entrepreneur</h4>
                                    </div>
                                    <div className="img">
                                        <img src="./asset/testimonials/testimonials-4.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonial;
