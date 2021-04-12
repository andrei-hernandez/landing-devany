import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap';
import '../App.css';
import './animations';
import Headder from './Header';
import Main from './Main/Main';
import Footer from './Footer';


const LandingPage = () => {
  return (
    <>
      <Headder />
      <Main />
      <Footer />
      <a href="#hero" className="back-to-top"><i className="ri-arrow-up-line"></i></a>
      <div id="preloader"></div>
    </>
  );
}

export default LandingPage;
