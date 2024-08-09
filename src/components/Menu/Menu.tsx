import React, { useState } from 'react';
import { MenuProps } from './Menu.types';
import './Menu.css'; // Assuming you have a CSS file for styles

const Menu: React.FC<MenuProps> = ({ initialState = 'closed' }) => {
  const [isOpen, setIsOpen] = useState(initialState === 'open');

  return (
    <div className={`menu ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      {isOpen && <div className="menu-content">Menu Content</div>}
    </div>
  );
};

export default Menu;
 