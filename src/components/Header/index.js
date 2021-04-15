/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, scroller, animateScroll as scroll } from "react-scroll";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './Header.css';

const Headder = () => {

  const scrollTo = (e) => {
    e.preventDefault();
    let nameToC = e.target.name;
    switch (nameToC) {
      case 'Start':
        scroller.scrollTo('hero', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
        break;
      case 'AboutUs':
        scroller.scrollTo('about', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
        break;
      case 'Services':
        scroller.scrollTo('services', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
        break;
      case 'Team':
        scroller.scrollTo('team', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
        break;
      case 'Contact':
        scroller.scrollTo('contact', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
        break;
      default: throw new Error('Unexpected State Component');
    }
  }

  const scrollToTop = (e) => {
    e.preventDefault();
    scroll.scrollToTop();
  };

  return (
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center">
        <h1 className="logo mr-auto">
          <Link
            onClick={(e) => scrollToTop(e)}
            duration={3000}
            delay={2000}
          >
            <a
              className="a"
              name="Start"
              href="#"
              id="logo"
            >
              DEVANY
            </a>
          </Link>
        </h1>
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active">
              <a

                className="nav-link"
                onClick={scrollTo}
                name="Start"
                href="#"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                onClick={scrollTo}
                name="AboutUs"
                id="AboutUs"
                href="#"
              >
                Acerca
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                onClick={scrollTo}
                name="Services"
                id="Services"
                href="#"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                onClick={scrollTo}
                name="Team"
                id="Team"
                href="#"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                onClick={scrollTo}
                name="Contact"
                id="Contact"
                href="#"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header >
  );
}

export default Headder;
