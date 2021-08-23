import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:perko.domen@gmail.com">
                        perko.domen@gmail.com
                    </LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>Let's make contact! 😀 </Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons href="https://github.com/perkzen">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.linkedin.com/in/domen-perko-657b59219/">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.instagram.com/domen_perko/">
                        <AiFillInstagram size="3rem" />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
