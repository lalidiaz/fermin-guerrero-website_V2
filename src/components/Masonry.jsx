/* eslint-disable @next/next/no-img-element */
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import { masonryAnimation } from "@/utils/animations";
import { isImage } from "@/utils/helpers";
import {
  MasonryItem,
  MasonryVideo,
  MasonryImg,
  MasonryText,
} from "@/styles/Masonry";
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

          <MasonryText>{project.name}</MasonryText>
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
