import React from 'react';
import './Cta.css';

export default function Cta() {
  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-left">
            <h3>¿Cómo puedes hablar con nosotros?</h3>
            <p>Al día de hoy, contamos con un correo electronico por el cual puedes escribirnos y dos números telefónicos donde nos puedes llamar o escribir vía WhatsApp.</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#contact">¡Contáctanos!</a>
          </div>
        </div>
      </div>
    </section>
  )
}
