/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styled from "styled-components";
import { device } from "@/styles/device";
import { motion } from "framer-motion";

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

const HoverContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
  }
`;

const Year = styled.p`
  grid-column: 1/2;
`;

const Description = styled.div`
  grid-column: 3/8;
  cursor: pointer;
  font-size: 1rem;
  @media ${device.laptop} {
    font-size: 1.1rem;
  }
`;

const Media = styled(motion.img)`
  display: none;

  @media ${device.laptop} {
    width: 240px;
    height: auto;
    object-fit: contain;
    cursor: pointer;
    pointer-events: none;
    grid-column: 7;
    position: absolute;
    display: block;
  }
`;
