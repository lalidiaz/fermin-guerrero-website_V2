/* eslint-disable @next/next/no-img-element */
import { imageVariants } from "@/utils/animations";
import { MainImg, Video, Img } from "@/styles/CoverImg";
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
