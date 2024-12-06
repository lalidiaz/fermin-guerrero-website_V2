import styled from "styled-components";
import { device } from "../styles/device";

const Footer = () => {
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/fermin_guerrero",
      column: 6,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/fermin-guerrero-616237173/",
      column: 5,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ferminguerrero_design/",
      column: 4,
    },
  ];

  return (
    <FooterContainer>
      <Copyright>
        <Name>
          ©{new Date().getFullYear()} <span>&#8212; </span> Fermín Guerrero
        </Name>
      </Copyright>

      <FooterLinks>
        {socialLinks.map((link, index) => (
          <SocialLink
            key={link.name}
            row={index + 1}
            laptopColumn={link.column}
          >
            <a href={link.url} target="_blank" rel="noreferrer">
              <u>{link.name}</u>
            </a>
          </SocialLink>
        ))}
      </FooterLinks>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  --footer-padding: 20px;
  --border-color: white;

  position: inherit;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: var(--footer-padding) var(--footer-padding) 0;
  height: auto;
  border-top: 1px solid var(--border-color);

  @media ${device.laptop} {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
    padding: 10px var(--footer-padding);
    font-size: 16px;
  }
`;

const Copyright = styled.div`
  grid-column: 1/2;

  @media ${device.laptop} {
    grid-column: 1/3;
    grid-row: 1;
    color: white;
  }
`;

const Name = styled.p`
  font-size: 0.8rem;
`;

const FooterLinks = styled.div`
  grid-template-columns: 1fr;
  height: 80px;
  text-align: right;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column: 6/13;
    grid-row: 1;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: underline;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const SocialLink = styled.div`
  grid-column: 2;
  grid-row: ${(props) => props.row};

  @media ${device.laptop} {
    text-align: right;
    grid-column: ${(props) => props.laptopColumn};
    grid-row: 1;
  }
`;
export default Footer;
