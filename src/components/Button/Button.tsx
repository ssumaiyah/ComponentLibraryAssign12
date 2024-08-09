import React from 'react';
import { ButtonProps } from './Button.types';
import './Button.css'; // Assuming you have a CSS file for styles

const Button: React.FC<ButtonProps> = ({ variant = 'primary', disabled = false, children }) => {
  return (
    <button
      className={`button ${variant} ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
