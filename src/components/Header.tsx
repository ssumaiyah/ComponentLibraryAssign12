import React from 'react';

interface HeaderProps {
  links: { label: string; url: string }[];
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <header>
      <nav>
        {links.map((link, index) => (
          <a key={index} href={link.url}>{link.label}</a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
