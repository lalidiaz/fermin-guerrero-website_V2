import styled from "styled-components";
import { device } from "../styles/device";

export const FooterContainer = styled.footer`
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

export const Copyright = styled.div`
  grid-column: 1/2;

  @media ${device.laptop} {
    grid-column: 1/3;
    grid-row: 1;
    color: white;
  }
`;

export const Name = styled.p`
  font-size: 0.8rem;
`;

export const FooterLinks = styled.div`
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

export const Twitter = styled.div`
  grid-column: 2;
  grid-row: 1;

  @media ${device.laptop} {
    text-align: right;
    grid-column: 6;
    grid-row: 1;
  }
`;

export const Linkedin = styled.div`
  grid-column: 2;
  grid-row: 2;

  @media ${device.laptop} {
    text-align: right;
    grid-column: 5;
    grid-row: 1;
  }
`;

export const Instagram = styled.div`
  grid-column: 2;
  grid-row: 3;

  @media ${device.laptop} {
    text-align: right;
    grid-column: 4;
    grid-row: 1;
  }
`;
