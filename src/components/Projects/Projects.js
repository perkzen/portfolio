import React from 'react';

import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    TagList,
    TitleContent,
    UtilityList,

} from './ProjectsStyles';
import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import {projects} from '../../constants/constants';
import {FaDiscord, FaEthereum, FaJava, FaPython, FaReact, SiJavascript} from "react-icons/all";


const Projects = () => (
    <Section nopadding id="projects">
        <SectionDivider/>
        <SectionTitle main>{"<Projects/>"}</SectionTitle>
        <GridContainer>
            {projects.map((p, i) => {
                return (
                    <BlogCard key={i}>
                        <TitleContent>
                            <HeaderThree title>{p.title}</HeaderThree>
                            <Hr/>
                        </TitleContent>
                        <CardInfo className="card-info">{p.description}</CardInfo>
                        <div>
                            <TitleContent>Technologies </TitleContent>
                            <TagList>
                                {p.tags.map((t, i) => {
                                    // eslint-disable-next-line default-case
                                    switch (t) {
                                        case "Java":
                                            return <FaJava key={i} style={{height:"50px", width:"50px"}}/>

                                        case "Python":
                                            return <FaPython key={i} style={{height:"50px", width:"50px"}}/>

                                        case "React":
                                            return <FaReact key={i} style={{height:"50px", width:"50px"}}/>

                                        case "JavaScript":
                                            return <SiJavascript key={i} style={{height:"50px", width:"50px"}}/>
                                        case "Solidity":
                                            return <FaEthereum key={i} style={{height:"50px", width:"50px"}}/>
                                        case "Discord.py":
                                            return <FaDiscord key={i} style={{height:"50px", width:"50px"}}/>

                                    }
                                    // return <Tag key={i}>{t}</Tag>;
                                })}
                            </TagList>
                        </div>
                        <UtilityList>
                            <ExternalLinks href={p.source}>Source Code</ExternalLinks>
                        </UtilityList>
                    </BlogCard>
                );
            })}
        </GridContainer>
    </Section>

);

export default Projects;