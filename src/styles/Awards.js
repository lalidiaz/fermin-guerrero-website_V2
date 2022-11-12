import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  padding-bottom: 20px;
`;

export const Year = styled.p`
  grid-column: 1/3;
`;

export const Title = styled.div`
  grid-column: 3/8;
`;

export const Prize = styled.p`
  grid-column: 9/11;
`;
