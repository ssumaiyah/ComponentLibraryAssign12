import React from 'react';
import Section from './components/Section/Section';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import './Appcss.css';

import "@fontsource/outfit";
import "@fontsource/roboto";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {

  const headerLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Skills", url: "/skills" },
    { label: "Contact", url: "/contact" },
  ];

  const footerLinks = [
    { label: "Twitter", url: "https://twitter.com", disabled: false },
    { label: "GitHub", url: "https://github.com", disabled: false },
    { label: "LinkedIn", url: "https://linkedin.com", disabled: false },
  ];

  return (
    <> 
    <Section className="section">
    <Header  className="Header" links={headerLinks} />
      </Section>
      
      
      <Section className="section">
        <Home />
        <About />
        <Skills />
        <Contact />
      </Section>
      
      
    </>
  );
}

export default App;
