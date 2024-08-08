import React from 'react';
import styled from 'styled-components';
import { HeroProps } from './Hero.types';

interface StyledHeroProps {
  background?: string;
  disabled?: boolean;
}

export function sum(a: number, b: number) {
  return a + b;
 }

 const StyledHero = styled.div<StyledHeroProps>`
 padding: 40px;
 background: ${({ background }) => background || 'lightblue'};
 color: white;
 text-align: center;
 opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
 cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
`;


const Title = styled.h1`
  margin: 0;
  font-size: 2.5em;
`;

const Subtitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
  font-weight: 300;
`;

const Hero: React.FC<HeroProps> = ({ title, subtitle, background, disabled = false, visibility = false }) => {
  if (visibility) {
    return null; // Component hidden when visibility is true
  }

  return (
    <StyledHero background={background} disabled={disabled}>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </StyledHero>
  );
};

export default Hero;
