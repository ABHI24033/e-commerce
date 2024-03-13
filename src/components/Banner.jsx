import React from 'react';
import "../css/home.css";
import about from "../assets/about.jpeg";
import carousel from '../assets/carousel3.jpg';
import carousel2 from '../assets/carousel2.jpg';
const Banner = () => {
    return (
        // <section className="home" id="home">
        //     <div className="leftside">
        //         <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h1>
        //         <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum
        //             quaerat.</p>
        //         {/* <div className="button">
        //             <a href="#"><button>Book a Table </button></a>
        //             <a href=" https://youtu.be/LXb3EKWsInQ">
        //                 <i className="fa-solid fa-circle-play"></i>Watch video
        //             </a>
        //         </div> */}
        //     </div>
        //     <div className="rightside">
        //         <img src={banner_img} alt="hero img"/>
        //     </div>
        // </section>
        <div id="carouselExampleAutoplaying" class="carousel slide mt-5" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner carousel_size">
                <div class="carousel-item active ">
                    <img src={about} class="d-block w-100" alt="..." />
                    <div class="carousel-caption  d-md-block banner_content">
                        <div>
                            <h1>First slide label</h1>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                        
                    </div>

                </div>
                <div class="carousel-item">
                    <img src={carousel2} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-md-block banner_content">
                        <div>
                            <h1>Second slide label</h1>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>

                    </div>
                </div>
                <div class="carousel-item">
                    <img src={carousel} class="d-block w-100" alt="..." />
                    <div class="carousel-caption  d-md-block banner_content">
                        <div>
                            <h1>Third slide label</h1>
                            <p>Some representative placeholder content for the third slide.</p>
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
