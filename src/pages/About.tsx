import React from 'react';
import Text from '../components/Text';
import Section from '../components/Section';
import Link from '../components/Link';

function About() {
  return (
    <div className="about">
      <Link href="/" color="primary">Home</Link>
      <Section>
        <Text size="large">About me</Text>
        <Text size="medium">Hi, I am Sumaiyah. Currently pursuing Full Stack Web Development at Red River Polytechnic College.</Text>
        <Text size="medium">Skills I have: HTML, CSS, JavaScript, PHP, DBMS, Java</Text>
        <Text size="medium">Tools and Platforms: Git, Visual Studio Code</Text>
      </Section>
    </div>
  );
}

export default About;
