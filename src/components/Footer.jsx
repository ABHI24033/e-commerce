import React from 'react';

import "../css/footer.css";
const Footer = () => {
    return (
        <div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234447.15551001256!2d85.15651111977574!3d23.343433818639532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1698849337137!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <footer id="footer">
                <div className="upper-footer">
                    <div className="footer-address">
                        <div className="icon">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="para">
                            <h2>Address</h2>
                            <p>Nimbaheda Road </p>
                            <p>Chittori, Chittorgarh </p>
                        </div>
                    </div>

                    <div className="reservation">
                        <div className="icon">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="add">
                            <h2>Booking</h2>
                            <p><span>Phone:</span>+91 8005656761</p>
                            <p><span>Email:</span> vipsnew10@gmail.com </p>
                        </div>
                    </div>
                    <div className="opening-hours">
                        <div className="icon">
                            <i className="fa-regular fa-clock"></i>
                        </div>
                        <div className="add">
                            <h2>Opening hours</h2>
                            <p><span>Mon-Sat:</span>11:00AM-10:00PM</p>
                            <p><span>Sun:</span>Closed</p>
                        </div>
                    </div>
                    <div className="follow-us">
                        {/* <!-- <div> --> */}
                        <h2>Follow Us</h2>
                        {/* <!-- </div> --> */}
                        <div className="icon">
                            <a href=""><i className="fa-brands fa-x-twitter"></i></a>
                            <a href=""><i className="fa-brands fa-facebook"></i></a>
                            <a href=""><i className="fa-brands fa-instagram"></i></a>
                            <a href=""><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="lower-footer">
                    <p>&#169;copyright <span>E-Commerce. </span> All right reserve</p>
                    {/* <p>Designed by Abhishek Kumar</p> */}
                </div>
            </footer>
        </div>
    );
}

export default Footer;
