import { useAnimationInView } from "@/hooks/useAnimationInView";
import { motion } from "framer-motion";
import {
  ImageGallery,
  CoverImg,
  Tags,
  AnimateContent,
  RichText,
} from "@/components/index";
import {
  GridContainer,
  GridName,
  YearTags,
  GridDesc,
  GridImg,
} from "@/styles/Layout";

const ProjectLayout = ({ project }) => {
  const [textRef, textAnimation] = useAnimationInView();
  const [imageRef, imageAnimation] = useAnimationInView();

  const {
    id,
    name,
    description,
    images,
    videos,
    mainImage,
    tags,
    year,
    credits,
  } = project.fields;

  return (
    <motion.div key={id} initial="exit" animate="enter" exit="exit">
      <CoverImg src={mainImage} />
      <GridContainer ref={textRef}>
        <AnimateContent delay={0.4} animate={textAnimation}>
          <GridName>{name}</GridName>
        </AnimateContent>

        <YearTags>
          <AnimateContent delay={0.5} animate={textAnimation}>
            <p>{year}</p>
          </AnimateContent>
          <div>
            {credits && (
              <AnimateContent delay={0.6} animate={textAnimation}>
                <RichText texts={credits} />
              </AnimateContent>
            )}
            {tags && (
              <AnimateContent delay={0.7} animate={textAnimation}>
                <Tags tags={tags} />
              </AnimateContent>
            )}
          </div>
        </YearTags>

        <AnimateContent delay={0.6} animate={textAnimation}>
          <GridDesc>
            <RichText texts={description} />
          </GridDesc>
        </AnimateContent>
      </GridContainer>
      <GridImg ref={imageRef}>
        <AnimateContent delay={0.4} animate={imageAnimation}>
          <ImageGallery images={images} videos={videos} />
        </AnimateContent>
      </GridImg>
    </motion.div>
  );
};

export default ProjectLayout;
