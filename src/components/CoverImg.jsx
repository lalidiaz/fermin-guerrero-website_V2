import styled from "styled-components";
import { motion } from "framer-motion";
import { isImage } from "@/utils/helpers";
import { imageVariants } from "@/utils/animations";
import { memo } from "react";

const CoverImg = memo(({ src, alt = "graphic-design" }) => {
  return (
    <Container variants={imageVariants}>
      {!isImage(src) ? (
        <StyledVideo
          loop
          muted
          autoPlay
          playsInline
          controlsList="nofullscreen"
        >
          <source src={src} type="video/mp4" />
        </StyledVideo>
      ) : (
        <StyledImage alt={alt} src={src} />
      )}
    </Container>
  );
});

const commonStyles = `
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  outline: none;
`;

const Container = styled(motion.div)`
  padding: 2.375rem 1.25rem 0;
  background-color: black;
  min-height: auto;
`;

const StyledVideo = styled.video`
  ${commonStyles}
`;

const StyledImage = styled.img`
  ${commonStyles}
`;

export default CoverImg;
