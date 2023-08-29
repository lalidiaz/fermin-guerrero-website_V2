/* eslint-disable @next/next/no-img-element */
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import { masonryAnimation } from "@/utils/animations";
import { isImage } from "@/utils/helpers";
import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "@/styles/device";
import { useWindowSize } from "@/hooks/useWindowSize";

const Masonry = ({ data }) => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const size = useWindowSize();
  const isMobile = size.width <= 480;
 
  const displayGallery = data.map((project, i) => (
    <Link passHref key={i} href={`/project/${project.fields.slug}`}>
      <MasonryItem
        variants={masonryAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6 }}
      >
        <ImageListItem
          key={project.id}
          style={{ height: "200px", width: "100%" }}
        >
          {isImage(project.fields.imageGallery) ? (
            <MasonryImg
              src={project.fields.imageGallery}
              alt={project.fields.name}
            />
          ) : (
            <MasonryVideo preload="none" playsinline autoPlay muted loop>
              <source src={project.fields.imageGallery} type="video/mp4" />
            </MasonryVideo>
          )}

          <MasonryText>{project.fields.name}</MasonryText>
        </ImageListItem>
      </MasonryItem>
    </Link>
  ));

  return (
    <ImageList
      variant="masonry"
      cols={isNotMobile || !isMobile ? 3 : 1}
      gap={13}
    >
      {displayGallery}
    </ImageList>
  );
};

export default Masonry;

const MasonryItem = styled(motion.a)`
  display: block;
  margin: 0px 0px 8px 0px;
  padding: 0px 0px 20px 0px;

  &:hover {
    font-weight: bold;
  }

  @media ${device.laptop} {
    padding: 0px 0px 20px 0px;

    &:hover {
      font-weight: bold;
    }
  }
`;

const MasonryVideo = styled.video`
  min-height: 300px;
  background-color: black;
  width: 100%;

  &:hover {
    opacity: 1;
    -webkit-animation: flash 1.5s;
    animation: flash 1.5s;

    @-webkit-keyframes flash {
      0% {
        opacity: 0.4;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes flash {
      0% {
        opacity: 0.4;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const MasonryImg = styled.img`
  min-height: 300px;
  background-color: black;
  width: 100%;

  &:hover {
    opacity: 1;
    -webkit-animation: flash 1.5s;
    animation: flash 1.5s;

    @-webkit-keyframes flash {
      0% {
        opacity: 0.4;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes flash {
      0% {
        opacity: 0.4;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const MasonryText = styled.p`
  font-size: 1.1rem;
  padding-top: 20px;
  padding-bottom: 25px;
`;
