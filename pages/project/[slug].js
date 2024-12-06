import { client } from "src/lib/cms";
import { useAnimationInView } from "@/hooks/useAnimationInView";
import { motion } from "framer-motion";
import { CoverImg } from "@/components/index";
import {
  ProjectMeta,
  ProjectHeader,
  ProjectGallery,
} from "@/components/ProjectDetail";

const Project = ({ project }) => {
  const [textRef, textAnimation] = useAnimationInView();
  const [imageRef, imageAnimation] = useAnimationInView();

  const { id, name, description, mainImage, tags, year, credits, media } =
    project.fields;

  return (
    <>
      <ProjectMeta name={name} description={description} />

      <motion.div key={id} initial="exit" animate="enter" exit="exit">
        <CoverImg src={mainImage} />

        <div ref={textRef}>
          <ProjectHeader
            name={name}
            year={year}
            credits={credits}
            tags={tags}
            description={description}
            textAnimation={textAnimation}
          />
        </div>

        <div ref={imageRef}>
          <ProjectGallery media={media} imageAnimation={imageAnimation} />
        </div>
      </motion.div>
    </>
  );
};

export async function getStaticPaths() {
  try {
    const response = await client.getEntries({ content_type: "project" });
    const paths = response.items.map((item) => ({
      params: { slug: item.fields.slug },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error generating paths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  try {
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
  } catch (error) {
    console.error("Error fetching project:", error, "Slug:", params?.slug);
    return {
      redirect: {
        destination: "/all",
        permanent: false,
      },
    };
  }
}

export default Project;
