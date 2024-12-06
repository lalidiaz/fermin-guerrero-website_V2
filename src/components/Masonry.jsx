import {
  ImageList,
  ImageListItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useWindowSize } from "@/hooks/useWindowSize";
import { isImage } from "@/utils/helpers";

const flashAnimation = keyframes`
  0% { opacity: 0.4; }
  100% { opacity: 1; }
`;

const masonryAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const mediaStyles = css`
  min-height: 300px;
  background-color: black;
  width: 100%;

  &:hover {
    animation: ${flashAnimation} 1.5s;
  }
`;

const MediaContent = ({ type, src, alt }) => {
  if (type === "video") {
    return (
      <MasonryVideo preload="none" playsInline autoPlay muted loop>
        <source src={src} type="video/mp4" />
      </MasonryVideo>
    );
  }
  return <MasonryImg src={src} alt={alt} loading="lazy" />;
};

const Masonry = ({ data }) => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const { width } = useWindowSize();
  const isMobile = width <= 480;
  const cols = isNotMobile || !isMobile ? 3 : 1;

  return (
    <ImageList variant="masonry" cols={cols} gap={13}>
      {data.map((project) => (
        <Link
          key={project.fields.slug}
          href={`/project/${project.fields.slug}`}
          passHref
        >
          <MasonryItem
            variants={masonryAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <ImageListItem style={{ height: "200px", width: "100%" }}>
              <MediaContent
                type={isImage(project.fields.imageGallery) ? "image" : "video"}
                src={project.fields.imageGallery}
                alt={project.fields.name}
              />
              <MasonryText>{project.fields.name}</MasonryText>
            </ImageListItem>
          </MasonryItem>
        </Link>
      ))}
    </ImageList>
  );
};

const MasonryItem = styled(motion.a)`
  display: block;
  margin: 0 0 8px;
  padding: 0 0 20px;

  &:hover {
    font-weight: bold;
  }
`;

const MasonryVideo = styled.video`
  ${mediaStyles}
`;

const MasonryImg = styled.img`
  ${mediaStyles}
`;

const MasonryText = styled.p`
  font-size: 1.1rem;
  padding: 20px 0 25px;
`;

export default Masonry;
