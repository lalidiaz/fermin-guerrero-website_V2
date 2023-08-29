import { RichText } from ".";
import styled from "styled-components";

const Credits = ({ credits }) => {
  return (
    <Container>
      <RichText texts={credits} />
    </Container>
  );
};

export default Credits;

const Container = styled.div`
  padding-bottom: 1rem;
`;
