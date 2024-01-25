import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { device } from "../styles/device";

const Awards = ({ data }) => {
  let awardsSorted = data.sort((a, b) => b.fields.year - a.fields.year);

  const getAwards = awardsSorted.map((item) => (
    <Container key={uuidv4()}>
      <Year key={uuidv4()}>
        <p>{item.fields.year}</p>
      </Year>
      <Title key={uuidv4()}>
        <p>{item.fields.title}</p>
      </Title>
      <Project>
        <p>{item.fields.project}</p>
      </Project>

      <Prize key={uuidv4()}>
        <p>{item.fields.prize}</p>
      </Prize>
    </Container>
  ));

  return <div>{getAwards}</div>;
};
export default Awards;

const Project = styled.div``;

const Container = styled.div`
  padding: 0rem 0rem 1rem 0rem;

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
