import { Container, Year, Title, Prize } from "../styles/Awards";

const Awards = ({ data }) => {
  const getAwards = data.map((item) => (
    <Container key={item.fields.id}>
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
