import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './Header.css';

const Headder = () => {
  return (
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center">
        <h1 className="logo mr-auto"><Link className="a" to="/" id="logo">DEVANY</Link></h1>
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active"><Link className="nav-link" to="/">Inicio</Link></li>
            <li><Link className="nav-link" to="#about">Acerca</Link></li>
            <li><Link className="nav-link" to="#services">Servicios</Link></li>

            <li><Link className="nav-link" to="#team">Nosotros</Link></li>

            <li><Link className="nav-link" to="#contact">Contacto</Link></li>
          </ul>
        </nav>
        <Link to="#about" className="get-started-btn">Recorrido</Link>
      </div>
    </header >
  );
}

export default Headder;
