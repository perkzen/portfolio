import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
        <SectionTitle style={{padding:"10px"}}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            print("Hello World") <br/>
        </SectionTitle>
        <SectionText>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Hi I'm Domen, I'm a software development student from Maribor, Slovenia.
            Thank you for check out my portfolio website. 😀
        </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;