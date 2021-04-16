/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { scroller } from 'react-scroll';
import './Cta.css';

export default function Cta() {

  const ScrollToContact = (e) => {
    e.preventDefault();
    scroller.scrollTo('contact', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-left">
            <h3>¿Cómo puedes hablar con nosotros?</h3>
            <p>Al día de hoy, contamos con un correo electronico por el cual puedes escribirnos y dos números telefónicos donde nos puedes llamar o escribir vía WhatsApp.</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" onClick={(e) => ScrollToContact(e)} href="#">¡Contáctanos!</a>
          </div>
        </div>
      </div>
    </section>
  )
}
