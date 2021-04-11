import React from 'react';
import Headder from './Headder';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap';
import Hero from './Hero';
import './styles.css';

const LandingPage = () => {
  return (
    <>
      <Headder />
      <Hero />
    </>
  );
}

export default LandingPage;
