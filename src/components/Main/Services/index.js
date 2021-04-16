/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Icon from '@iconify/react';
import bxlDribbble from '@iconify-icons/bx/bxl-dribbble';
import bxFile from '@iconify-icons/bx/bx-file';
import bxTachometer from '@iconify-icons/bx/bx-tachometer'

import './Services.css';

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
              <div className="icon"><Icon className="bx bxl-dribbble" icon={bxlDribbble} /></div>
              <h4><a>Aplicaciones Web</a></h4>
              <p>Somos especialistas en el desarrollo de aplicaciones web, ideales para el crecimiento y optimización de tu negocio y empresa.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
            <div className="icon-box">
              <div className="icon"><Icon className="bx bx-file" icon={bxFile} /></div>
              <h4><a>Paginas Web</a></h4>
              <p>De igual manera, somos profesionales en la creación de paginas web para tu empresa y negocio.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay={300}>
            <div className="icon-box">
              <div className="icon"><Icon className="bx bx-tachometer" icon={bxTachometer} /></div>
              <h4><a>Social Marketing</a></h4>
              <p>Tenemos experiencia en el manejo de redes sociales dentro de varios negocios que hoy en día han crecido de forma exponencial.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
