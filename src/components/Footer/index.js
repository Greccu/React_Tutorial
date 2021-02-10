import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { animateScroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="">How it works</FooterLink>
              <FooterLink to="">Testimonials</FooterLink>
              <FooterLink to="">Careers</FooterLink>
              <FooterLink to="">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Community</FooterLinkTitle>
              <FooterLink to="">Forums</FooterLink>
              <FooterLink to="">Chapters</FooterLink>
              <FooterLink to="">Events</FooterLink>
              <FooterLink to="">Competitions</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Languages</FooterLinkTitle>
              <FooterLink to="">HTML & CSS</FooterLink>
              <FooterLink to="">Python</FooterLink>
              <FooterLink to="">JavaScript</FooterLink>
              <FooterLink to="">C++</FooterLink>
              <FooterLink to="">Java</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle></FooterLinkTitle>
              <FooterLink to="">R</FooterLink>
              <FooterLink to="">C#</FooterLink>
              <FooterLink to="">SQL</FooterLink>
              <FooterLink to="">Bash/Shell</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              lil coders
            </SocialLogo>
            <WebsiteRights>
              lil coders © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/cristian.grecu.165/"
                target="_black"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/Greccu"
                target="_black"
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/cristian-grecu-b01257201/"
                target="_black"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
