import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { IconProps } from './Icon.types';

const iconsMap = {
  twitter: faTwitter,
  github: faGithub,
  linkedin: faLinkedin,
  instagram: faInstagram,
};

const Icon: React.FC<IconProps> = ({ name, url, type, disabled }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`icon-link ${type} ${disabled ? 'disabled' : ''}`}>
      <FontAwesomeIcon icon={iconsMap[name]} className="icon" data-testid="icon" />
    </a>
  );
};

export default Icon;
