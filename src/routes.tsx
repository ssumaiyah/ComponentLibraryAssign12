import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';



const Routes: React.FC = () => {
  return (
  
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </ReactRoutes>
    
  );
};

export default Routes;
