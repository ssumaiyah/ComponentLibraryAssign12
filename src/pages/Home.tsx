import React from 'react';
import Hero from '../components/Hero/Hero';
import Link from '../components/Link/Link';
import Image from '../components/Image/Image';
import Section from '../components/Section/Section';
import Text from '../components/Text/Text';

function Home() {
  return (
    <div className="home">
      <header>
        <nav>
          <Link href="/" color="primary">Home</Link>
          <Link href="/about" color="primary">About</Link>
          <Link href="/skills" color="primary">Skills</Link>
          <Link href="/contact" color="primary">Contact</Link>
        </nav>
      </header>
      <Section className="section">
        <Hero
          className="hero"
          title="SUMAIYAH"
          subtitle="A full stack web development student who is passionate, eager to learn and committed to building dynamic and user-friendly web applications."
          image={<Image src="./images/sam.jpg" alt="Profile" size="200px" shape="round" />}
        />
      </Section>
    </div>
  );
}

export default Home;
