import { Container, Year, Title, Prize } from "../../styles/Awards";

const Awards = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <Container key={index}>
          <Year>{item.year}</Year>
          <Title>
            <p>{item.title}</p>
          </Title>

          <Prize>{item.prize}</Prize>
        </Container>
      ))}
    </>
  );
};
export default Awards;
