import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {LeftSection} from "../Hero/HeroStyles";
import MyPhoto from "../BackgroundImage/MyPhoto";


const AboutMe = () => {

    return (
        <Section row nopadding id={"about"}>
            <LeftSection>
                <SectionTitle main>
                    {"<AboutMe/>"} <br/>
                </SectionTitle>
                <SectionText>
                    Ever since writing my first program in Python and manipulating it to produce the desired output, I
                    have been obsessed with the idea of using software to solve practical problems. Software engineering
                    is a never-ending puzzle that I am passionately engaged in solving. <br/>
                </SectionText>
            </LeftSection>
           <MyPhoto/>
        </Section>
    );
};

export default AboutMe;