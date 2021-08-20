import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href="tel:041 508 552">+386 41 508 552</LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:perko.domen@gmail.com">
                        perko.domen@gmail.com
                    </LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>Lets make contact! 😀 </Slogan>
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
