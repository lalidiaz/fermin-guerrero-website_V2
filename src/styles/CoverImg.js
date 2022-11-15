import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../styles/device";

export const MainImg = styled(motion.div)`
  padding: 38px 20px 0px;
  background-color: black;
  min-height: auto;

  @media ${device.laptop} {
    min-height: 900px;
  }
`;

export const Video = styled.video`
  width: 100% !important;
  height: auto !important;
  object-fit: cover !important;
  object-position: center !important;
  outline-style: none !important;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  outline-style: none;
`;
