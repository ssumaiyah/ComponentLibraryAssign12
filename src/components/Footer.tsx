import React from 'react';

interface FooterProps {
  links: { label: string; url: string; disabled?: boolean }[];
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ links }) => {
  return (
    <footer>
      <nav>
        {links.map((link, index) => (
          !link.disabled ? (
            <a key={index} href={link.url}>{link.label}</a>
          ) : (
            <span key={index}>{link.label}</span>
          )
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
