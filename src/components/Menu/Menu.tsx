import React, { useState } from 'react';
import { MenuProps } from './Menu.types';

const Menu: React.FC<MenuProps> = ({ initialState = 'closed', className, disabled = false }) => {
  const [isOpen, setIsOpen] = useState(initialState === 'open');

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`menu ${isOpen ? 'open' : 'closed'} ${className} ${disabled ? 'disabled' : ''}`}>
      <button onClick={handleToggle} disabled={disabled}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      {isOpen && !disabled && <div className="menu-content">Menu Content</div>}
    </div>
  );
};

export default Menu;
