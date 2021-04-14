import React from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import HeroImg from '../../../img/hero-img.png'

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay={200}>
            <h1>Haciendo tu negocio más facil y flexible.</h1>
            <h2>Creamos las soluciones tecnologicas ideales para su negocio y su bolsillo.</h2>
            <div className="d-lg-flex">
              <a href="#about" className="btn-get-started scrollto">¡INICIEMOS!</a>
              <FontAwesomeIcon className="playIcon" icon={faPlayCircle} size="3x" />
              <a href className="venobox btn-watch-video" data-vbtype="video" data-autoplay="true"> Nuestra Presentación </a>
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
