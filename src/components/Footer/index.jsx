import {
  FooterContainer,
  Copyright,
  Name,
  FooterLinks,
  Twitter,
  Linkedin,
  Instagram,
} from "../../styles/Footer";

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        <Name>
          ©2021 <span>&#8212; </span> Fermín Guerrero
        </Name>
      </Copyright>

      <FooterLinks>
        <Twitter>
          <a rel="noreferrer" href="https://twitter.com/fermin_guerrero" target="_blank">
            <u>Twitter</u>
          </a>
        </Twitter>

        <Linkedin>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/fermin-guerrero-616237173/"
            target="_blank"
          >
            <u>Linkedin</u>
          </a>
        </Linkedin>

        <Instagram>
          <a
            rel="noreferrer"
            href="https://www.instagram.com/ferminguerrero_design/"
            target="_blank"
          >
            <u>Instagram</u>
          </a>
        </Instagram>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
