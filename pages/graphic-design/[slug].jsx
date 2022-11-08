import Head from "next/head";
import { getPaths, getProject, getProjectsData } from "@/utils/helpers";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
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
    <div className="container">
      {data.map((element, i) => (
        <>
          <Head>
            <title>{element.name}</title>
            <meta name="description" content={element.description} />
          </Head>

          <motion.div key={element.id + i} initial="exit" animate="enter" exit="exit">
            <CoverImg element={element} />
            <div className="grid-container" ref={textRef}>
              <AnimateContent delay={0.4} animate={textAnimation}>
                <p className="name">{element.name}</p>
              </AnimateContent>

              <div className="year-and-tags">
                <AnimateContent delay={0.5} animate={textAnimation}>
                  <p>{element.year}</p>
                </AnimateContent>
                <AnimateContent delay={0.6} animate={textAnimation}>
                  <Credits element={element} />
                  <Tags element={element} />
                </AnimateContent>
              </div>

              <AnimateContent delay={0.5} animate={textAnimation}>
                <div className="description">
                  <Description element={element.description} />
                </div>
              </AnimateContent>
            </div>

            <div className="img-gallery-wrapper" ref={imageRef}>
              <AnimateContent delay={0.4} animate={imageAnimation}>
                <ImageGallery element={element} />
              </AnimateContent>
            </div>
          </motion.div>
        </>
      ))}
    </div>
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
