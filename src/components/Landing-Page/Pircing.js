import React from 'react'

export default function Pircing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Nuestras Tarifas</h2>
          <p>En <strong>devany</strong> manejamos un modelo por medio de tarifas preferenciales, entre más horas o proyectos trabajes con nosotros, esta tarifa se irá mejorando,
            te invito a que conozcas más sobre nuestros precios en nuestro correo de contacto. <br />
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="box">
              <h3>Devany Free</h3>
              <h4><sup>$</sup>0<span>por hora</span></h4>
              <ul>
                <li><i className="bx bx-check" /> Revisión de tu empresa</li>
                <li><i className="bx bx-check" /> Junta general</li>
                <li><i className="bx bx-check" /> SET-UP de Monday.com</li>
                <li className="na"><i className="bx bx-x" /> <span>Desarrollo web a tus necesidades</span></li>
                <li className="na"><i className="bx bx-x" /> <span>Servicios Web</span></li>
              </ul>
              <a href="#contact" className="buy-btn">Get Started</a>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={200}>
            <div className="box featured">
              <h3>Devany Gold</h3>
              <h4><sup>$</sup>180<span>por hora</span></h4>
              <ul>
                <li><i className="bx bx-check" /> Revisión de tu empresa</li>
                <li><i className="bx bx-check" /> Junta general</li>
                <li><i className="bx bx-check" /> SET-UP de Monday.com</li>
                <li><i className="bx bx-check" /> <span>Desarrollo web a tus necesidades</span></li>
                <li><i className="bx bx-check" /> <span>Servicios Web</span></li>
              </ul>
              <a href="#contact" className="buy-btn">Get Started</a>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={300}>
            <div className="box">
              <h3>Devany Business</h3>
              <h4><sup>$</sup>150<span>por hora</span></h4>
              <ul>
                <li><i className="bx bx-check" /> Revisión de tu empresa</li>
                <li><i className="bx bx-check" /> Junta general</li>
                <li><i className="bx bx-check" /> SET-UP de Monday.com</li>
                <li><i className="bx bx-check" /> <span>Desarrollo web a tus necesidades</span></li>
                <li><i className="bx bx-check" /> <span>Servicios Web</span></li>
                <li><i className="bx bx-check" /> <span>Atención personalizada</span></li>
              </ul>
              <a href="#contact" className="buy-btn">Get Started</a>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <br />
            <strong style={{ fontSize: '13px' }}>TODOS NUESTROS PRECIOS SON EN PESOS MEXICANOS</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
