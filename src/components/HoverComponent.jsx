/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {
  HoverContainer,
  Year,
  Description,
  Media,
} from "../styles/HoverComponent";

const HoverComponent = ({
  data,
  year,
  description,
  descriptionTwo,
  index,
  link,
  url,
  titlePressOnline,
}) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <>
      <HoverContainer id="research">
        <Year>{year}</Year>

        <Description
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(-1)}
        >
          {titlePressOnline && (
            <a href={url} target="_blank" rel="noreferrer">
              <u>{titlePressOnline}</u>
            </a>
          )}
          {link && (
            <a href={url} target="_blank" rel="noreferrer">
              <u>{link}</u>
            </a>
          )}
          <p>{description}</p>
          <p>{descriptionTwo}</p>
        </Description>
        <div>
          {data[activeIndex] && data[activeIndex].image ? (
            <Media
              src={data[activeIndex].image}
              alt="article-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          ) : null}
        </div>
      </HoverContainer>
    </>
  );
};

export default HoverComponent;
