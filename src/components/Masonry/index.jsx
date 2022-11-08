/* eslint-disable @next/next/no-img-element */
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { masonryAnimation } from "@/utils/animations";

const Masonry = ({ data, video }) => {
  const theme = useTheme();
  const notMobile = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div>
      <ImageList variant="masonry" cols={notMobile ? 3 : 1} gap={13}>
        {data.map((project, i) => {
          return (
            <Link passHref key={project.id} href={`/graphic-design/${project.slug}`}>
              <motion.a
                className="masonry-item"
                variants={masonryAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6 }}
              >
                <ImageListItem key={project.id}>
                  {project.id == 31 ? (
                    <video
                      preload="none"
                      playsinline
                      autoPlay
                      muted
                      loop
                      width="100%"
                      height="auto"
                      className="video-masonry"
                    >
                      <source src={video} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={project.image} alt={project.name} className="img-masonry" />
                  )}

                  <p className="text">{project.name}</p>
                </ImageListItem>
              </motion.a>
            </Link>
          );
        })}
      </ImageList>
    </div>
  );
};

export default Masonry;
