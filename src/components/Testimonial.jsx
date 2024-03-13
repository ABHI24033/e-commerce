import React from 'react';

import "../css/testimonial.css";
import carousel2 from "../assets/carousel2.jpg";
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
                                                I recently purchased the a Shirt from [E-commerce Website Name], and I must say, I'm absolutely delighted with my purchase! The quality of the fabric is exceptional, and the intricate embroidery work is truly stunning. The fit is perfect, just as described in the size chart.
                                                <i className="fa-solid fa-quote-right"></i>
                                            </p>
                                            <h2>Mohan Singh</h2>
                                            <h4>Ranchi, Jharkhand</h4>
                                            {/* <h4>CEO & Founder</h4> */}
                                        </div>
                                        {/* <div className="img">
                                            <img src={carousel2} alt=""/>
                                        </div> */}
                                    </div>
                            </div>

                            <div className="carousel-item ">
                                <div className="content">
                                    <div className="content-text">
                                        <p>
                                            <i className="fa-solid fa-quote-left"></i>
                                            I recently purchased a Lahnga from [E-commerce Website Name], and it was exactly as described in the product description. Not only is this outfit beautiful, but it's also incredibly comfortable to wear. I wore it to a family function, and I received so many compliments. It's definitely a head-turner!
                                            <i className="fa-solid fa-quote-right"></i>
                                        </p>
                                        <h2>Sara Singh</h2>
                                        <h4>Delhi</h4>
                                    </div>
                                    {/* <div className="img">
                                        <img src="./asset/testimonials/testimonials-2.jpg" alt=""/>
                                    </div> */}
                                </div>
                            </div>

                            <div className="carousel-item ">
                                <div className="content">
                                    <div className="content-text">
                                        <p>
                                            <i className="fa-solid fa-quote-left"></i>
                                            Overall, I'm satisfied with my purchase and the service provided by [E-commerce Website Name]. I would definitely consider shopping here again for Indian clothing needs.


                                            <i className="fa-solid fa-quote-right"></i>
                                        </p>
                                        <h2>Manish Kumar</h2>
                                        <h4>Benglore, Karnataka</h4>
                                        {/* <h4>Store Owner</h4> */}
                                    </div>
                                    {/* <div className="img">
                                        <img src="./asset/testimonials/testimonials-3.jpg" alt=""/>
                                    </div> */}
                                </div>
                            </div>

                            <div className="carousel-item ">
                                <div className="content">
                                    <div className="content-text">
                                        <p>
                                            <i className="fa-solid fa-quote-left"></i>
                                            One of the things I appreciate the most about this purchase is the fit. Often, it's challenging to find Indian clothing that fits perfectly, especially when ordering online. However, the size chart provided by [E-commerce Website Name] was accurate, and the outfit fits me like a dream.
                                            <i className="fa-solid fa-quote-right"></i>
                                        </p>
                                        <h2>Sweta Jha</h2>
                                        <h4>Patana, Bihar</h4>
                                        {/* <h4>Entrepreneur</h4> */}
                                    </div>
                                    {/* <div className="img">
                                        <img src="./asset/testimonials/testimonials-4.jpg" alt=""/>
                                    </div> */}
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
