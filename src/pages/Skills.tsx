import React from 'react';
import Section from '../components/Section';
import Link from '../components/Link';

function Skills() {
  return (
    <div className="skills">
      <header>
        <nav>
          <Link href="/" color="primary">Home</Link>
        </nav>
      </header>
      <Section>
        <h2>Skills</h2>
        <p>React, TypeScript, Vite, Storybook, Jest, Node.js</p>
      </Section>
    </div>
  );
}

export default Skills;
