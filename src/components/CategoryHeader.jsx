import styled from "styled-components";

const CategoryHeader = ({ category }) => (
  <Container>
    <Title>{category}</Title>
  </Container>
);

const Container = styled.div`
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding: 0.5rem;
  margin: 0rem 0rem 0.5rem 0rem;
  text-align: center;
  background-color: black;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 300;
`;

const Title = styled.h3`
  font-size: 1rem;
  color: white;
`;

export default CategoryHeader;
