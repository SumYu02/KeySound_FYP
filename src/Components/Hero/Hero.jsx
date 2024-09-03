import React from 'react';
import './Hero.css';
import BannerImg from '../Assets/Frontend_Assets/banner-img.png'; // Ensure this path is correct

const Hero = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Convallis interdum purus adipiscing dis parturient posuere ac a quam a eleifend montes parturient posuere curae tempor
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="Banner" /> {/* Added alt attribute */}
      </div>
    </div>
  );
};

export default Hero;
