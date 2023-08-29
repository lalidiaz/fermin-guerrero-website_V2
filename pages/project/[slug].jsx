import Head from "next/head";
import { client } from "src/lib/cms";
import { useAnimationInView } from "@/hooks/useAnimationInView";
import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "@/styles/device";
import {
  ImageGallery,
  CoverImg,
  Tags,
  AnimateContent,
  RichText,
  Credits,
} from "@/components/index";

const Project = ({ project }) => {
  const [textRef, textAnimation] = useAnimationInView();
  const [imageRef, imageAnimation] = useAnimationInView();

  const { id, name, description, mainImage, tags, year, credits, media } =
    project.fields;

  return (
    <>
      <Head>
        <title>{name}</title>
        {/* FIX ME: description[0] ? */}
        <meta name="description" content={description[0]} />
      </Head>
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
                <AnimateContent
                  delay={0.6}
                  animate={textAnimation}
                  style={{ paddingBorrom: "1rem" }}
                >
                  <Credits credits={credits} />
                  {/* <RichText texts={credits} /> */}
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
            <ImageGallery media={media} />
          </AnimateContent>
        </GridImg>
      </motion.div>
    </>
  );
};

export async function getStaticPaths() {
  const response = await client.getEntries({ content_type: "project" });
  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const response = await client.getEntries({
    content_type: "project",
    "fields.slug": slug,
  });

  if (!response?.items?.length) {
    return {
      redirect: {
        destination: "/all",
        permanent: false,
      },
    };
  }

  return {
    props: {
      project: response.items[0],
    },
  };
}

export default Project;

const GridContainer = styled.div`
  grid-template-columns: 1fr;
  padding: 20px;

  @media ${device.laptop} {
    display: grid;
    grid-column-gap: 8px;
    grid-template-columns: 1fr 1fr 2fr;
    min-height: 100px;
    padding: 15px 20px;
    font-weight: regular;
  }
`;

const GridName = styled.p`
  font-weight: bold;
`;

const YearTags = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0px;

  @media ${device.laptop} {
    padding: 0px;
  }
`;

const GridDesc = styled.div`
  line-height: 1.4;
`;

const GridImg = styled.div`
  padding: 20px 20px 40px 20px;
  @media ${device.laptop} {
    padding: 20px 20px 60px 0px;
  }
`;
