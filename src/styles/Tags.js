import styled from "styled-components";
import { device } from "../styles/device";

export const TagName = styled.div`
  margin-right: 8px;

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
  }
`;

export const TagLink = styled.div`
  margin-right: 8px;
`;
