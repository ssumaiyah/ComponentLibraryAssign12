import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Routes from './routes';
import Hero from './components/Hero/Hero';
import Link from './components/Link/Link';
import Image from './components/Image/Image';
import Section from './components/Section/Section';
import Text from './components/Text/Text'; 
import Icon from './components/Icon/Icon';
import './Appcss.css';
import "@fortawesome/fontawesome-free/css/all.min.css";



function App() {
  return (
    <>
    <div className="all">
      <Section>
       
          <header>
            <nav>
              <Link href="/" color="primary">Home</Link>
              <Link href="/about" color="primary">About</Link>
              <Link href="/skills" color="primary">Skills</Link>
              <Link href="/contact" color="primary">Contact</Link>
            </nav>
          </header> 
          <Hero
            title="SUMAIYAH"
            subtitle="A full stack web development student who is passionate, eager to learn and committed to building dynamic and user-friendly web applications."
            image={<Image src="./images/sam.jpg" alt="Profile" size="200px" shape="round" />}
          />
        
      </Section>
      
      <Section>
        <div className="about">
          <Link href="/" color="primary">Home</Link>
          <Text size="large" >About me</Text>
          <Text size="medium">Hi, I am Sumaiyah. Currently pursuing Full Stack Web Development at Red River Polytechnic College.</Text>
          <Text size="medium">Skills I have: HTML, CSS, JavaScript, PHP, DBMS, Java</Text>
          <Text size="medium">Tools and Platforms: Git, Visual Studio Code</Text>
        </div>
      </Section>
      <Section>
      <div className="skills">
        <header>
          <nav>
            <Link href="/" color="primary">Home</Link>
          </nav>
        </header>
        
          <h2>Skills</h2>
          <p>React, TypeScript, Vite, Storybook, Jest, Node.js</p>
          </div>
        </Section>
     
        <Section>
      <div className="contact">
        <Link href="/" color="primary">Home</Link>
        
          <Text size="large">Contact me</Text>
          <div className="icons">
            <Icon name="instagram" url="www" />
            <Icon name="email" url="your-email-url-here" />
            <Icon name="linkedin" url="your-linkedin-url-here" />
            <Icon name="twitter" url="your-twitter-url-here" />
            <Icon name="github" url="your-github-url-here" />
          </div>
       
      </div>
      </Section>
      </div>
    </>
  );
}

export default App;
