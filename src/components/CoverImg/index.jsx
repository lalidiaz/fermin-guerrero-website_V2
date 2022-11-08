/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { imageVariants } from "@/utils/animations";

const CoverImg = ({ element }) => {
  return (
    <motion.div className="main-image" variants={imageVariants}>
      {element.mp4 ? (
        <video
          loop
          autoPlay
          muted
          playsinline
          webkit-playsinline
          controlsList="nofullscreen"
          className="video-main-image"
        >
          <source src={element.mp4Slug} type="video/mp4" />
        </video>
      ) : (
        <img alt="graphic-design" src={element.imageSlag} className="graphic-design-img" />
      )}
    </motion.div>
  );
};

export default CoverImg;
