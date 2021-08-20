import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';


const Technologies = () =>  (
    <Section id="tech">
        <SectionDivider divider />
        <SectionTitle style={{padding:"10px"}}>{"<Technologies/>"}</SectionTitle>
        <SectionText>
            I’m familiar with a variety of programming languages, including JavaScript, Python, Java and Solidity, but I’m always adding new skills to my repertoire.
        </SectionText>
        <List>
            <ListItem>
                <picture>
                    <img src="https://img.icons8.com/nolan/64/react-native.png" alt={"react"}/>
                </picture>
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Experiece with <br />
                        React.js
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <picture>
                    <img src="https://img.icons8.com/nolan/64/database.png" alt={"database"}/>
                </picture>
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        Node and Databases
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <picture>
                    <img src="https://img.icons8.com/nolan/64/bitcoin.png" alt={"block"}/>
                </picture>
                <ListContainer>
                    <ListTitle>Blockchain</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        Solidity
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
        <SectionDivider style={{marginBottom:"40px"}}/>
    </Section>
);

export default Technologies;
