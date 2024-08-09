import React from 'react';
import Text from '../components/Text';
import Section from '../components/Section';
import Link from '../components/Link';
import Icon from '../components/Icon';
import './Contact.css';

function Contact() { 
  const homeSocialLinks = [
    { icon: "twitter", url: "https://twitter.com" },
    { icon: "github", url: "https://github.com/ssumaiyah" },
    { icon: "linkedin", url: "https://www.linkedin.com/in/sumaiyah-sumaiyah-396b962a7/" },
    { icon: "instagram", url: "https://www.instagram.com/samxu.04/"}
  ];

  return (

   
      <Section className= "contact">
        <h1 className="contact-heading">Contact me</h1><br></br><br></br>
        <div className="icons">
          {homeSocialLinks.map((link, index) => (
            <Icon key={index} name={link.icon} url={link.url} />
          ))}
        </div>
      </Section>

  );
}

export default Contact;
