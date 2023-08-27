import { Container, Year, Title, Country } from "@/styles/Exhibitions";

const Exhibitions = ({ data }) => {
  const getExhibitions = data.map((item) => (
    <Container key={item.fields.id}>
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
