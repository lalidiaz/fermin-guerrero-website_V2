import styled from "styled-components";
import { memo } from "react";
import { device } from "../styles/device";

const sortByYear = (a, b) => b.fields.year - a.fields.year;

const Awards = memo(({ data }) => {
  const awardsSorted = [...data].sort(sortByYear);

  return (
    <div>
      {awardsSorted.map((item) => (
        <Container key={item.fields.year + item.fields.title}>
          <Year>{item.fields.year}</Year>
          <Title>{item.fields.title}</Title>
          <div>{item.fields.project}</div>
          <Prize>{item.fields.prize}</Prize>
        </Container>
      ))}
    </div>
  );
});

const Container = styled.div`
  padding: 0 0 1rem;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    padding-bottom: 20px;
  }
`;

const Year = styled.p`
  grid-column: 1/3;
`;

const Title = styled.div`
  grid-column: 3/8;
`;

const Prize = styled.p`
  grid-column: 9/11;
`;

export default Awards;
