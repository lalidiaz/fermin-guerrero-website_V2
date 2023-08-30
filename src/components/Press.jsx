import { HoverComponent, RichText } from "@/components/index";
import styled from "styled-components";
import { device } from "@/styles/device";

const Press = ({ data }) => {
  const paperPress = data.filter((item) => item.fields.online === false);
  const paperOnline = data.filter((item) => item.fields.online === true);

  const displayPaperPress = paperPress.map((item) => (
    <HoverComponent
      item={item.fields}
      year={item.fields.year}
      key={item.fields.id}
      index={item.fields}
      url={item.fields.image}
      link={item.fields.link}
    >
      <RichText texts={item.fields.description} />
    </HoverComponent>
  ));

  const displayPaperOnline = paperOnline.map((item, index) => (
    <HoverComponent
      item={item.fields}
      year={item.fields.year}
      key={item.fields.id}
      index={item.fields}
      url={item.fields.image}
      link={item.fields.link}
    >
      <a href={item.fields.link} target="_blank" rel="noreferrer">
        {item.fields.title}
      </a>
    </HoverComponent>
  ));

  return (
    <>
      <Title>Print (Selected):</Title>
      {displayPaperPress}
      <Title>Print Online (Selected):</Title>
      {displayPaperOnline}
    </>
  );
};
export default Press;

const Title = styled.p`
  padding-bottom: 20px;
  font-weight: bold;
  font-size: 1rem;
  padding: 1rem 0rem 0.5rem 0rem;

  border-bottom: 1px solid white;

  @media ${device.laptop} {
    font-size: 1.1rem;
    border-bottom: none;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  padding-bottom: 20px;
  font-size: 1rem;

  @media ${device.laptop} {
    font-size: 1.1rem;
  }
`;

const Year = styled.p`
  grid-column: 1/3;
`;

const PressTitle = styled.div`
  grid-column: 3/8;
`;
