import React from 'react';
import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {LeftSection} from './HeroStyles';



const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle style={{padding: "10px"}}>
                print("Hello World") <br/>
            </SectionTitle>
            <SectionText>
                Hi I'm Domen, a software development student from Maribor, Slovenia.
            </SectionText>
        </LeftSection>
    </Section>
);

export default Hero;