import React from 'react';
import Text from '../components/Text';
import Section from '../components/Section';


function About() {
  return (
    <Section className="about-section">
      <div className="about-content">
       <h1 className="about-heading">About me</h1>
        <div className="about-details">
        <div>  <Text size="medium" className="about-text">Hi, I am Sumaiyah. Currently pursuing Full Stack Web Development at Red River Polytechnic College.</Text></div><br></br>
         <div> <Text size="medium" className="about-text">Skills I have: HTML, CSS, JavaScript, PHP, DBMS, Java</Text></div><br></br>
          <div><Text size="medium" className="about-text">Tools and Platforms: Git, Visual Studio Code</Text></div><br></br>
        </div>
      </div>
    </Section>
  );
}

export default About;
