import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/> My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Technically sophisticated professional with nearly 8+ years of experience as Full Stack Developer with ReactJS, HTML, CSS, JavaScript, JQuery, Ajax, PHP, MySQL and etc.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/chanchalkumarmandal/recent-activity/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;