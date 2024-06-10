import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Link from './components/Link'; // Importing Link directly
import Section from './components/Section'; // Importing Section directly
import Image from './components/Image'; // Importing Image directly
import Hero from './components/Hero'; // Importing Hero directly
import Text from './components/Text'; // Importing Text directly

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      

      {/* Using imported components */}
      <Section background="#f0f0f0">
        <h2>Section Example</h2>
        <p>This is an example section with a background color.</p>
      </Section>

      <Hero
        title="Hero Title"
        subtitle="Hero subtitle goes here"
        background="lightblue"
      />

      <Text size="medium" bold>
        This is a medium, bold text.
      </Text>

      <Link href="https://example.com" color="blue">
        Example Link
      </Link>

      <Image
        src="https://via.placeholder.com/150"
        alt="Placeholder"
        size="150px"
        shape="square"
      />
    </>
  );
}

export default App;
