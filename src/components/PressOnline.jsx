import { Title, Container, Year, PressTitle } from "@/styles/Press";

const PressOnline = ({ title, data }) => {
  return (
    <>
      <Title>{title}</Title>
      {data.map((item) => {
        const { url, year, title, id } = item;
        return (
          <Container key={id}>
            <Year>{year}</Year>
            <PressTitle>
              <a href={url} rel="noreferrer" target="_blank">
                <u>{title}</u>
              </a>
            </PressTitle>
          </Container>
        );
      })}
    </>
  );
};

export default PressOnline;
