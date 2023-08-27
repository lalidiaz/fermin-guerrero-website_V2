import styled from "styled-components";
import { device } from "../styles/device";

export const Title = styled.p`
  padding-bottom: 20px;
  font-weight: bold;
  font-size: 1rem;

  @media ${device.laptop} {
    font-size: 1.1rem;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  padding-bottom: 20px;
  font-size: 1rem;

  @media ${device.laptop} {
    font-size: 1.1rem;
  }
`;

export const Year = styled.p`
  grid-column: 1/3;
`;

export const PressTitle = styled.div`
  grid-column: 3/8;
`;
