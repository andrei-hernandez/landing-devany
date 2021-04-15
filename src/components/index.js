import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import bxUpArrowAlt from '@iconify-icons/bx/bx-up-arrow-alt';
import { Link, animateScroll as scroll } from "react-scroll";
import 'bootstrap/dist/css/bootstrap.css'
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
    scroll.scrollToTop();
  };

  const prevent = (e) => {
    e.preventDefault();
  }

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
      <Link onClick={scrollToTop} duration={500} delay={1000}>
        <a href="s" onClick={prevent} className="back-to-top">
          <Icon icon={bxUpArrowAlt} className="ri-arrow-up-line" id="arrow-up" /></a></Link>
      <div id="preloader"></div>
    </>
  );
}
console.clear();
export default LandingPage;
