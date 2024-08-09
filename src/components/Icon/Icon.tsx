import React from 'react';
import { IconProps } from './Icon.types';
 // Assuming you have a CSS file for styles

const Icon: React.FC<IconProps> = ({ type = 'primary', disabled = false, name, url }) => {
  return (
    <div className={`icon ${type} ${disabled ? 'disabled' : ''}`}>
      {/* Render the icon based on the name */}
      {name && <img src={`/path-to-icons/${name}.svg`} alt={name} />}
      {/* Optionally, handle the URL if needed */}
      {url && <a href={url}>Link</a>}
    </div>
  );
};

export default Icon;
