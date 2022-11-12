import Head from "next/head";
import { Masonry, Loading } from "@/components/index";
import { getProjectsData } from "@/utils/helpers";

import { MainWrapper, MasonryWrapper } from "@/styles/Layout";

const GraphicDesign = ({ data, video }) => {
  return (
    <>
      <Head>
        <title>Graphic Design</title>
        <meta name="description" content="Fermín Guerrero's Graphic Design Projects" />
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
  const projects = await getProjectsData();
  const data = projects.filter((element) => element.type === "graphic");
  const videoMp4 = projects.filter((elem) => elem.id === 31);
  const video = videoMp4[0].mp4Gallery;

  return {
    props: {
      data,
      video,
    },
  };
}
export default GraphicDesign;
