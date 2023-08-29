/* eslint-disable @next/next/no-img-element */
import { imageVariants } from "@/utils/animations";
import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "@/styles/device";
import { isImage } from "@/utils/helpers";

const CoverImg = ({ src }) => {
  return (
    <MainImg variants={imageVariants}>
      {!isImage(src) ? (
        <Video
          loop
          autoPlay
          muted
          playsinline
          webkit-playsinline
          controlsList="nofullscreen"
        >
          <source src={src} type="video/mp4" />
        </Video>
      ) : (
        <Img alt="graphic-design" src={src} />
      )}
    </MainImg>
  );
};

export default CoverImg;

const MainImg = styled(motion.div)`
  padding: 38px 20px 0px;
  background-color: black;
  min-height: auto;

  @media ${device.laptop} {
    // min-height: 900px;
    height: auto;
  }
`;

const Video = styled.video`
  width: 100% !important;
  height: auto !important;
  object-fit: cover !important;
  object-position: center !important;
  outline-style: none !important;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  outline-style: none;
`;
