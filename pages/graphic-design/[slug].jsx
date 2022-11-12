import Head from "next/head";
import { getPaths, getProject, getProjectsData } from "@/utils/helpers";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { GridContainer, GridName, YearTags, GridDesc, GridImg } from "@/styles/Layout";
import {
  ImageGallery,
  CoverImg,
  Credits,
  Tags,
  Description,
  AnimateContent,
} from "@/components/index";

const GraphicProject = ({ data }) => {
  const textAnimation = useAnimation();
  const [textRef, textInView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (textInView) {
      textAnimation.start("visible");
    }
  }, [textAnimation, textInView]);

  const imageAnimation = useAnimation();
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (imageInView) {
      imageAnimation.start("visible");
    }
  }, [imageAnimation, imageInView]);

  return (
    <>
      {data.map((element, i) => (
        <>
          <Head>
            <title>{element.name}</title>
            <meta name="description" content={element.description} />
          </Head>

          <motion.div key={element.id + i} initial="exit" animate="enter" exit="exit">
            <CoverImg element={element} />
            <GridContainer ref={textRef}>
              <AnimateContent delay={0.4} animate={textAnimation}>
                <GridName>{element.name}</GridName>
              </AnimateContent>

              <YearTags>
                <AnimateContent delay={0.5} animate={textAnimation}>
                  <p>{element.year}</p>
                </AnimateContent>
                <div>
                  <AnimateContent delay={0.6} animate={textAnimation}>
                    <Credits element={element} />
                  </AnimateContent>
                  <AnimateContent delay={0.7} animate={textAnimation}>
                    <Tags element={element} />
                  </AnimateContent>
                </div>
              </YearTags>

              <AnimateContent delay={0.5} animate={textAnimation}>
                <GridDesc>
                  <Description element={element.description} />
                </GridDesc>
              </AnimateContent>
            </GridContainer>

            <GridImg ref={imageRef}>
              <AnimateContent delay={0.4} animate={imageAnimation}>
                <ImageGallery element={element} />
              </AnimateContent>
            </GridImg>
          </motion.div>
        </>
      ))}
    </>
  );
};

export async function getStaticPaths() {
  const paths = await getPaths();
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const path = params.slug;
  const data = await getProject(path);
  const projects = await getProjectsData();

  return {
    props: {
      data,
      projects,
      path,
    },
  };
}

export default GraphicProject;
