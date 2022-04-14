import React from 'react';
import { HeroContainer, HeroImg, HeroH1Containter, HeroH1 } from './heroElements';
import heroImage from '../../Assets/imgs/HeroImgDesk.png';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImg image={heroImage} />
      <HeroH1Containter>
        <HeroH1>Bienestar Emocional</HeroH1>
      </HeroH1Containter>
    </HeroContainer>
  )
}

export default Hero;