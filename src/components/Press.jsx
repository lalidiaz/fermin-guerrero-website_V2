import { HoverComponent, RichText } from "@/components/index";
import styled from "styled-components";
import { device } from "@/styles/device";
import { v4 as uuidv4 } from "uuid";
import { sortByYear } from "../utils/helpers";

const Press = ({ paperOnline, paperPress }) => {
  const pressOnlineSorted =
    paperOnline && paperOnline.length && sortByYear(paperOnline);

  const pressPaperSorted =
    paperPress && paperPress.length && sortByYear(paperPress);

  const displayPaperPress =
    pressPaperSorted &&
    pressPaperSorted.length &&
    pressPaperSorted.map((item) => (
      <HoverComponent
        item={item.fields}
        year={item.fields.year}
        key={item.fields.id}
        index={item.fields}
        url={item.fields.image}
        link={item.fields.link}
      >
        <RichText texts={item.fields.description} key={item.fields.id} />
      </HoverComponent>
    ));

  const displayPaperOnline =
    pressOnlineSorted &&
    pressOnlineSorted.length &&
    pressOnlineSorted.map((item) => (
      <HoverComponent
        item={item.fields}
        year={item.fields.year}
        key={item.fields.id}
        index={item.fields}
        url={item.fields.image}
        link={item.fields.link}
      >
        <a
          href={item.fields.link}
          target="_blank"
          rel="noreferrer"
          key={uuidv4()}
        >
          {item.fields.title}
        </a>
      </HoverComponent>
    ));

  return (
    <Container>
      <Title>Print (Selected):</Title>
      {displayPaperPress}
      <Title>Print Online (Selected):</Title>
      {displayPaperOnline}
    </Container>
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

const Container = styled.div``;
