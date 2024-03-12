import React from 'react';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import About from '../components/About';
import Products from '../components/Products';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Banner/>
      <About/>
      <Products/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default Home;
