import React from 'react';

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
    <Container>
        <Div1>
            <a href="/">
                <a style={{ display: 'flex', alignItems: 'center', color:"white", marginBottom:'20px'}}>
                    <img src="https://img.icons8.com/nolan/32/share-2.png" alt={"logo"}/>
                     <Span>Portfolio</Span>
                </a>
            </a>
        </Div1>
        <Div2>
            <li>
                <a href={"#projects"}>
                    <NavLink>Projects</NavLink>
                </a>
            </li>
            <li>
                <a href={"#tech"}>
                    <NavLink>Technologies</NavLink>
                </a>
            </li>
            <li>
                <a href={"#about"}>
                    <NavLink>About</NavLink>
                </a>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href="https://github.com/perkzen">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/domen-perko-657b59219/">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/domen_perko/">
                <AiFillInstagram size="3rem"/>
            </SocialIcons>
        </Div3>
    </Container>
);

export default Header;