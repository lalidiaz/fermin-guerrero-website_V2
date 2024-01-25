import styled from "styled-components";
import { device } from "../styles/device";
import { v4 as uuidv4 } from "uuid";

const Exhibitions = ({ data }) => {
  let exhibitionsSorted = data.sort((a, b) => b.fields.year - a.fields.year);

  const getExhibitions = exhibitionsSorted.map((item) => (
    <Container key={uuidv4()}>
      <Year key={uuidv4()}>{item.fields.year}</Year>
      <Title key={uuidv4()}>
        <p key={uuidv4()}>{item.fields.title}</p>
      </Title>
      <Country key={uuidv4()}>
        {item.fields.city}, {item.fields.country}
      </Country>
    </Container>
  ));
  return <>{getExhibitions}</>;
};

export default Exhibitions;

const Container = styled.div`
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

const Year = styled.p`
  grid-column: 1/3;
`;

const Title = styled.div`
  grid-column: 3/8;
`;

const Country = styled.p`
  grid-column: 9/11;
`;
