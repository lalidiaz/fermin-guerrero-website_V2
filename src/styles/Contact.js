import styled from "styled-components";
import { device } from "../styles/device";

export const Container = styled.div`
  display: grid;
`;

export const EmailContainer = styled.div`
  font-size: 1rem;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    font-size: 1.1rem;
  }
`;

export const EmailTitle = styled.p`
  grid-column: 1/3;
`;

export const EmailContent = styled.div`
  grid-column: 3/8;
  padding-left: 3px;
`;

export const TimeDisplay = styled.div`
  display: flex;
  align-items: center;
  grid-column: 8/12;
`;

export const Follow = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

export const FollowText = styled.p`
  grid-column: 1/3;

  @media ${device.laptop} {
    font-size: 1.1rem;
    padding: 10px 0px;
  }
`;

export const FollowContent = styled.ul`
  grid-column: 3/8;
  padding-left: 3px;
  font-size: 1rem;

  @media ${device.laptop} {
    font-size: 1.1rem;
    padding: 10px 0px;
  }
`;
