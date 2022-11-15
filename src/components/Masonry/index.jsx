/* eslint-disable @next/next/no-img-element */
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import { masonryAnimation } from "@/utils/animations";
import { MasonryItem, MasonryVideo, MasonryImg, MasonryText } from "@/styles/Masonry";
import { useWindowSize } from "@/hooks/useWindowSize";

const Masonry = ({ data, video }) => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const size = useWindowSize();
  const isMobile = size.width <= 480;

  console.log("!isMobile", !isMobile);

  return (
    <ImageList variant="masonry" cols={isNotMobile || !isMobile ? 3 : 1} gap={13}>
      {data.map((project, i) => {
        return (
          <Link passHref key={project.id} href={`/graphic-design/${project.slug}`}>
            <MasonryItem
              variants={masonryAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6 }}
            >
              <ImageListItem key={project.id} style={{ height: "200px", width: "100%" }}>
                {project.id == 31 ? (
                  <MasonryVideo
                    preload="none"
                    playsinline
                    autoPlay
                    muted
                    loop

                    // width="100%"
                    // height="auto"
                  >
                    <source src={video} type="video/mp4" />
                  </MasonryVideo>
                ) : (
                  <MasonryImg src={project.image} alt={project.name} />
                )}

                <MasonryText>{project.name}</MasonryText>
              </ImageListItem>
            </MasonryItem>
          </Link>
        );
      })}
    </ImageList>
  );
};

export default Masonry;
