import React from 'react'

export default function Services() {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
          <p />
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble" /></div>
              <h4><a href>Aplicaciones Web</a></h4>
              <p>Somos especialistas en el desarrollo de aplicaciones web, ideales para el crecimiento y optimización de tu negocio y empresa.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file" /></div>
              <h4><a href>Paginas Web</a></h4>
              <p>De igual manera, somos profesionales en la creación de paginas web para tu empresa y negocio.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay={300}>
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer" /></div>
              <h4><a href>Social Marketing</a></h4>
              <p>Tenemos experiencia en el manejo de redes sociales dentro de varios negocios que hoy en día han crecido de forma exponencial.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
