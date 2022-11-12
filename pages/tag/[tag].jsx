import { Masonry } from "@/components/index";
import { getPathTags, getProjectsData } from "@/utils/helpers";
import Head from "next/head";
import { MainWrapper, MasonryWrapper } from "@/styles/Layout";

const Tag = ({ data, path, video }) => {
  const tag = data.filter((project) => project.tags && project.tags.includes(path));

  return (
    <>
      <Head>
        <title>{path}</title>
        <meta name="description" content="tag graphic typeface design" />
      </Head>
      <MainWrapper>
        <MasonryWrapper>
          <Masonry data={tag} extractVideo={video} />
        </MasonryWrapper>
      </MainWrapper>
    </>
  );
};

export async function getStaticPaths() {
  const paths = await getPathTags();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const path = params.tag;
  const data = await getProjectsData();
  const videoFilter = data.filter((elem) => elem.id === 31);
  const video = videoFilter[0].mp4Gallery;
  return {
    props: {
      data,
      path,
      video,
    },
  };
}

export default Tag;
