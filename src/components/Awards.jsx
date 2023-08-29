import styled from "styled-components";

const Awards = ({ data }) => {
  const getAwards = data.map((item, index) => (
    <Container key={item.fields.id + index}>
      <Year>{item.fields.year}</Year>
      <Title>
        <p>{item.fields.title}</p>
      </Title>

      <Prize>{item.fields.prize}</Prize>
    </Container>
  ));

  return <div>{getAwards}</div>;
};
export default Awards;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  padding-bottom: 20px;
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
