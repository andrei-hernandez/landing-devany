/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import bxUpArrowAlt from '@iconify-icons/bx/bx-up-arrow-alt';
import { animateScroll as scroll } from "react-scroll";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import '../App.css';
import './animations';
import Headder from './Header';
import Main from './Main/Main';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


const LandingPage = () => {

  AOS.init({
    duration: 1000,
    once: true
  });

  const scrollToTop = (e) => {
    e.preventDefault();
    scroll.scrollToTop();
  };


  // Newsletter 
  const [NewsletterEmail, setNewsletterEmail] = useState(
    {
      news_email: ''
    }
  );

  const handleNewsSubmit = async (e) => {
    e.preventDefault();
    console.log(NewsletterEmail);
  }

  const handleChangeNews = (e) => {
    const valueNewsField = e.target.value;
    setNewsletterEmail({ ...NewsletterEmail, news_email: valueNewsField });
  }

  return (
    <>
      <Headder />
      <Main />
      <Footer
        handleNewsSubmit={handleNewsSubmit}
        handleChangeNews={handleChangeNews} />
      <a href="#" onClick={scrollToTop} className="back-to-top">
        <Icon icon={bxUpArrowAlt} className="ri-arrow-up-line" id="arrow-up" />
      </a>
      <div id="preloader"></div>
    </>

  );
}
export default LandingPage;
