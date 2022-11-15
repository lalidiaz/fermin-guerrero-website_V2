import styled from "styled-components";

export const ActiveLinkStyles = styled.a`
  color: ${(props) => (props.pathname === props.href ? "white" : "white")};
  font-weight: ${(props) => (props.pathname === props.href ? "bold" : "regular")};
`;
