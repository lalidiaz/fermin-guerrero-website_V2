import styled from "styled-components";
import { device } from "../styles/device";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    padding: 0px 0px 20px 0px;
    font-size: 1.1rem;
  }
`;

export const Year = styled.p`
  grid-column: 1/3;
`;

export const Title = styled.div`
  grid-column: 3/8;
`;

export const Country = styled.p`
  grid-column: 9/11;
`;

// #exhibitions {
//   padding-top: 100px;
// }
