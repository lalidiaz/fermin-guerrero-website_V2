import { useState } from "react";
import styled from "styled-components";
import { device } from "@/styles/device";
import { motion, AnimatePresence } from "framer-motion";

const HoverComponent = ({ item, children, year, key, url, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <HoverContainer>
        <Year>{year}</Year>

        <Description
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
        </Description>
        <AnimatePresence>
          {isHovered && url && (
            <Media
              src={url}
              alt={item?.title || "Press article image"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </HoverContainer>
    </>
  );
};

export default HoverComponent;

const HoverContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  position: relative;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 20px;
  }
`;

const Year = styled.p`
  grid-column: 1/2;
  margin: 0;
`;

const Description = styled.div`
  grid-column: 3/8;
  cursor: pointer;
  font-size: 1rem;
  @media ${device.laptop} {
    font-size: 1.1rem;
  }
  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Media = styled(motion.img)`
  display: none;

  @media ${device.laptop} {
    display: block;
    width: 240px;
    height: auto;
    object-fit: contain;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    grid-column: 8/-1;
  }
`;
