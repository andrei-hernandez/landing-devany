import React from 'react';
import BrandingIonos from './BrandingIonos';
import Services from './Services';
import Contact from './Contact';
import Pircing from './Pircing';
import AboutUS from './AboutUs';
import Skills from './Skills';
import WhyUS from './WhyUs';
import Team from './Team';
import Hero from './Hero';
import Cta from './Cta';

export default function Main() {
  return (
    <main>
      <Hero />
      <BrandingIonos />
      <AboutUS />
      <WhyUS />
      <Skills />
      <Services />
      <Cta />
      <Team />
      <Pircing />
      <Contact />
    </main>
  )
}
