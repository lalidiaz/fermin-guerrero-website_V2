/* eslint-disable @next/next/no-img-element */
import { imageVariants } from "@/utils/animations";
import { MainImg, Video, Img } from "@/styles/CoverImg";

const CoverImg = ({ element }) => {
  return (
    <MainImg variants={imageVariants}>
      {element.mp4 ? (
        <Video loop autoPlay muted playsinline webkit-playsinline controlsList="nofullscreen">
          <source src={element.mp4Slug} type="video/mp4" />
        </Video>
      ) : (
        <Img alt="graphic-design" src={element.imageSlag} />
      )}
    </MainImg>
  );
};

export default CoverImg;
