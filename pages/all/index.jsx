import Head from "next/head";
import { Masonry, Loading } from "@/components/index";
import { getProjectsData } from "@/utils/helpers";
import { MainWrapper, MasonryWrapper } from "@/styles/Layout";

const AllProjects = ({ data, video }) => {
  return (
    <>
      <Head>
        <title>All</title>
        <meta name="description" content="Fermín Guerrero's projects." />
      </Head>
      <MainWrapper>
        <MasonryWrapper>
          <Masonry data={data} video={video} />
        </MasonryWrapper>
      </MainWrapper>
    </>
  );
};

export async function getStaticProps() {
  const data = await getProjectsData();
  const filterVideos = data.filter((elem) => elem.id === 31);
  const video = filterVideos[0].mp4Gallery;
  return {
    props: {
      data,
      video,
    },
  };
}

export default AllProjects;
