import React, { useState } from 'react';
import { SendEmailContact } from '../../services/email';
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

  // Email Contact
  const [EmailContact, setEmailContact] = useState(
    {
      from_name: '',
      form_email: '',
      subject: '',
      message: ''
    }
  );

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    await SendEmailContact(EmailContact);
  }

  const handleChangeContact = (e) => {
    const nameField = e.target.name;
    const valueField = e.target.value;
    switch (nameField) {
      case 'name':
        setEmailContact({ ...EmailContact, from_name: valueField });
        break;
      case 'email':
        setEmailContact({ ...EmailContact, form_email: valueField });
        break;
      case 'subject':
        setEmailContact({ ...EmailContact, subject: valueField });
        break;
      case 'message':
        setEmailContact({ ...EmailContact, message: valueField });
        break;
      default:
        console.log('the name field is invalid, please check out');
        break;
    }
  }

  return (
    <main>
      <Hero />
      <BrandingIonos />
      <AboutUS />
      <WhyUS />
      <Skills />
      <Services />
      <Cta
      />
      <Team />
      <Pircing />
      <Contact
        handleContactSubmit={handleContactSubmit}
        handleChangeContact={handleChangeContact} />
    </main>
  )
}
