/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {
  HoverContainer,
  Year,
  Description,
  Media,
} from "../styles/HoverComponent";

const HoverComponent = ({ year, children, index, item }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <>
      <HoverContainer>
        <Year>{year}</Year>

        <Description
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(-1)}
        >
          {children}
        </Description>
        <div>
          {activeIndex && activeIndex.image && (
            <Media
              src={activeIndex.image}
              alt="article-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </div>
      </HoverContainer>
    </>
  );
};

export default HoverComponent;
