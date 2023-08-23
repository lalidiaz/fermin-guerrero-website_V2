import { Container, Year, Title, Country } from "@/styles/Exhibitions";

const Exhibitions = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <Container key={index}>
          <Year>{item.year}</Year>
          <Title>
            <p>{item.title}</p>
          </Title>
          <Country>{item.country}</Country>
        </Container>
      ))}
    </>
  );
};

export default Exhibitions;
