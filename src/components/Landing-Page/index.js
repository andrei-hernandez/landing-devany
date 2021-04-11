import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap';
import Headder from './Headder';
import Main from './Main';
import './styles.css';
import Footer from './Footer';


const LandingPage = () => {
  return (
    <>
      <Headder />
      <Main />
      <Footer />
      <a href="a" class="back-to-top"><i class="ri-arrow-up-line"></i></a>
      <div id="preloader"></div>
    </>
  );
}

export default LandingPage;
