import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';

import {ProjectCards} from "./ProjectCards";
import {ProjectCarousel} from "./ProjectCarousel";




const Projects = () => {
    const mql = window.matchMedia('(max-width: 600px)');
    const mobileView = mql.matches;
    return (
        <Section nopadding id="projects">
            <SectionDivider/>
            <SectionTitle main>{"<Projects/>"}</SectionTitle>
            {mobileView ? <ProjectCards/> : <ProjectCarousel/>}
        </Section>
    );
}

export default Projects;