import React from 'react';
import './Hero.css';
import { scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import HeroImg from '../../../img/hero-img.png'
/* eslint-disable jsx-a11y/anchor-is-valid*/
const Hero = () => {

  const ScrollToAboutUs = (e) => {
    e.preventDefault();
    scroller.scrollTo('about', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay={200}>
            <h1>Haciendo tu negocio más facil y flexible.</h1>
            <h2>Creamos las soluciones tecnologicas ideales para su negocio y su bolsillo.</h2>
            <div className="d-lg-flex">
              <a
                href="#"
                onClick={(e) => ScrollToAboutUs(e)}
                className="btn-get-started"
              >
                ¡INICIEMOS!
              </a>
              <FontAwesomeIcon className="playIcon" icon={faPlayCircle} size="3x" />
              <a href="#" className="venobox btn-watch-video" data-vbtype="video" data-autoplay="true"> Nuestra Presentación </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay={200}>
            <img src={HeroImg} className="img-fluid animated" id="hero-a" alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
