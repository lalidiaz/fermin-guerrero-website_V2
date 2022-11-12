import styled from "styled-components";

export const Link = styled.a`
  color: ${(props) => (props.pathname === props.href ? "white" : "white")};
  font-weight: ${(props) => (props.pathname === props.href ? "bold" : "regular")};
`;
