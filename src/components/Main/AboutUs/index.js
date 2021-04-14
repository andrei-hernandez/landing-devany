import React from 'react';
import './AboutUs.css';
import { Icon } from '@iconify/react';
import checkDoubleLine from '@iconify-icons/ri/check-double-line';


export default function AboutUS() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Acerca de Nosotros</h2>
        </div>
        <div className="row content">
          <div className="col-lg-6">
            <p>
              Somos una empresa dedicada a la consultoría y desarrollo de soluciones tecnológicas. Te ofrecemos:
            </p>
            <ul>
              <li><Icon className="ri-check-double-line" icon={checkDoubleLine} /> Tarifas preferenciales <span className="conditions">(1)</span>.</li>
              <li><Icon className="ri-check-double-line" icon={checkDoubleLine} /> Presupuesto ajustable a tu bolsillo <span className="conditions">(2)</span>.</li>
              <li><Icon className="ri-check-double-line" icon={checkDoubleLine} /> Trabajo rápido y a tu medida.</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              Tu empresa y negocio nos interesa, estamos seguros que tu proyecto nos apasionará tanto como a tí, no dudes en contactarnos y confiarnos la idea para tu negocio. Siéntete importante porque lo eres para nosotros, haremos lo que hay en tu mente, una realidad.
            </p>
          </div>
          <div className="col-lg-12">
            <span className="conditions">
              (1) Las tarfias se ajustan de acuerdo a la cantidad de proyectos u horas que hayas trabajado con nosotros.
              <br />
              (2) Los presupuestos varín de acuerdo a la complejidad del proyecto.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
