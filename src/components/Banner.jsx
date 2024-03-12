import React from 'react';
import "../css/home.css";
import banner_img from "../assets/banner.png";
const Banner = () => {
    return (
        <section className="home" id="home">
            <div className="leftside">
                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h1>
                <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum
                    quaerat.</p>
                {/* <div className="button">
                    <a href="#"><button>Book a Table </button></a>
                    <a href=" https://youtu.be/LXb3EKWsInQ">
                        <i className="fa-solid fa-circle-play"></i>Watch video
                    </a>
                </div> */}
            </div>
            <div className="rightside">
                <img src={banner_img} alt="hero img"/>
            </div>
        </section>
    );
}

export default Banner;
