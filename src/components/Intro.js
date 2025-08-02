import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Intro.css";



const Intro = () =>{


   const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
    };
return (
    <div id="intro">
        <div className="intro-container">
                <div className="intro-header">
                <Slider {...settings} className="carousel-container">
                    <div className="carousel-slide">
                        <div className="carousel-overlay"></div>
                        <div ><img src="/assets/mee.jpg" alt="me in mx" className="carousel-image" /></div>
                   </div>
                   <div className="carousel-slide">
                        <div className="carousel-overlay"></div>
                        <div><img src="/assets/familyy.jpg" alt="family picnic" className="carousel-image" /></div>
                    </div>
                    <div className="carousel-slide">
                        <div className="carousel-overlay"></div>
                        <div><img src="/assets/mee3.JPG" alt="me in chi" className="carousel-image" /></div>      
                    </div>
                </Slider>   
                   <div className="intro-text-overlay">
                    <h1 className="intro-name">Gracie Guevara</h1>
                    <p className="intro-desc">Security+ certified cybersecurity professional with hands-on experience
                         in threat detection, cloud security, and automated incident response. </p>
                    </div>      
            </div>
          </div>
        </div>
        );
}

export default Intro;
