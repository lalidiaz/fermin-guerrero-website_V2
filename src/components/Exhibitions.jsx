import styled from "styled-components";
import { device } from "../styles/device";
import { v4 as uuidv4 } from "uuid";
import { useMemo } from "react";

const Exhibitions = ({ data }) => {
  const exhibitionsSorted = useMemo(
    () => data.sort((a, b) => b.fields.year - a.fields.year),
    [data]
  );

  const getExhibitions = exhibitionsSorted.map((item) => (
    <Container key={uuidv4()}>
      <Year>{item.fields.year}</Year>
      <Title>
        <p>{item.fields.title}</p>
      </Title>
      <Country>
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
