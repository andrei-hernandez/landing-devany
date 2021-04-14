import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';


export default function Contact({ handleChangeContact = () => { }, handleContactSubmit = () => { } }) {
  return (
    <section id="contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>¡CONTÁCTANOS!</h2>
          <p>¿Quieres empezar ya? ¡No lo dudes y contáctanos!</p>
          <p>Estaremos trabajando en tu empresa, más ráapido de lo que te imaginas.</p>
        </div>
        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="email">
                <div className="icons">
                  <FontAwesomeIcon icon={faEnvelope} className="icofont-envelope" id="iconContact" />
                </div>
                <h4>Email:</h4>
                <p><a href="mailto:contacto@devany.mx">contacto@devany.mx</a></p>
              </div>
              <div className="phone">
                <div className="icons">
                  <FontAwesomeIcon icon={faPhoneAlt} className="icofont-phone" id="iconContact" />
                </div>
                <h4>Llámanos:</h4>
                <p>55 4519 7342</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form className="php-email-form">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Tu nombre</label>
                  <input type="text" name="name" className="form-control" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={handleChangeContact} /> {/* Name field */}
                  <div className="validate" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Email</label>
                  <input type="email" className="form-control" name="email" data-rule="email" data-msg="Please enter a valid email" onChange={handleChangeContact} />
                  <div className="validate" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Asunto</label>
                <input type="text" className="form-control" name="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate" onChange={handleChangeContact} />
              </div>
              <div className="form-group">
                <label htmlFor="name">Mensaje</label>
                <textarea className="form-control" name="message" rows={10} data-rule="required" onChange={handleChangeContact} data-msg="Please write something for us" defaultValue={""} />
                <div className="validate" />
              </div>
              <div className="mb-3">
                <div className="loading">Cargando</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button onClick={handleContactSubmit}>Enviar mensaje</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
