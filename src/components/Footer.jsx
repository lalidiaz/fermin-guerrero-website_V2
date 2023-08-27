import styled from "styled-components";
import { device } from "../styles/device";

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
          <a
            rel="noreferrer"
            href="https://twitter.com/fermin_guerrero"
            target="_blank"
          >
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

const FooterContainer = styled.footer`
  position: inherit;
  grid-template-columns: repeat(2, 1fr);
  display: grid;
  padding: 20px 20px 0px 20px;
  height: auto;
  border-top: 1px solid white;

  @media ${device.laptop} {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 3;
    border-top: 1px solid white;
    padding-top: 5px;
    font-size: 16px;
    padding: 10px 20px;
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
`;

const Twitter = styled.div`
  grid-column: 2;
  grid-row: 1;

  @media ${device.laptop} {
    text-align: right;
    grid-column: 6;
    grid-row: 1;
  }
`;

const Linkedin = styled.div`
  grid-column: 2;
  grid-row: 2;

  @media ${device.laptop} {
    text-align: right;
    grid-column: 5;
    grid-row: 1;
  }
`;

const Instagram = styled.div`
  grid-column: 2;
  grid-row: 3;

  @media ${device.laptop} {
    text-align: right;
    grid-column: 4;
    grid-row: 1;
  }
`;
