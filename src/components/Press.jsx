import { HoverComponent, RichText } from "@/components/index";
import styled from "styled-components";
import { device } from "@/styles/device";
import { v4 as uuidv4 } from "uuid";
import { sortByYear } from "../utils/helpers";

const Press = ({ paperOnline = [], paperPress = [] }) => {
  const pressOnlineSorted = sortByYear(paperOnline);
  const pressPaperSorted = sortByYear(paperPress);

  const renderPressItems = (items, isOnline = false) => {
    return items.map((item) => {
      const { fields } = item;

      return (
        <HoverComponent
          item={fields}
          year={fields.year}
          key={fields.id}
          index={fields}
          url={fields.image}
          link={fields.link}
        >
          {isOnline ? (
            <a
              href={fields.link}
              target="_blank"
              rel="noreferrer"
              key={uuidv4()}
            >
              {fields.title}
            </a>
          ) : (
            <RichText texts={fields.description} key={fields.id} />
          )}
        </HoverComponent>
      );
    });
  };

  return (
    <Container>
      <Title>Print (Selected):</Title>
      {renderPressItems(pressPaperSorted)}
      <Title>Print Online (Selected):</Title>
      {renderPressItems(pressOnlineSorted, true)}
    </Container>
  );
};

const Title = styled.h2`
  padding: 1rem 0 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  border-bottom: 1px solid white;

  @media ${device.laptop} {
    font-size: 1.1rem;
    border-bottom: none;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

export default Press;
