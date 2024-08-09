import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';


type IconProps = {
  name: 'twitter' | 'github' | 'linkedin' | 'instagram';
  url: string;
};

const iconsMap = {
  twitter: faTwitter,
  github: faGithub,
  linkedin: faLinkedin,
  instagram: faInstagram,
};

const Icon: React.FC<IconProps> = ({ name, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="icon-link">
      <FontAwesomeIcon icon={iconsMap[name]} className="icon" />
    </a>
  );
};

export default Icon;
