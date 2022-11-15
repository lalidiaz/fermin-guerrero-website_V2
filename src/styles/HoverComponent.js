import styled from "styled-components";
import { device } from "../styles/device";
import { motion } from "framer-motion";

export const HoverContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    padding: 0px 0px 50px 0px;
  }
`;

export const Year = styled.p`
  grid-column: 1/2;
`;

export const Description = styled.div`
  grid-column: 3/8;
  cursor: pointer;
  font-size: 1rem;
  @media ${device.laptop} {
    font-size: 1.1rem;
  }
`;

export const Media = styled(motion.img)`
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
