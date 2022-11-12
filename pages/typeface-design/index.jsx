import Head from "next/head";
import { Masonry } from "@/components/index";
import { getProjectsData } from "@/utils/helpers";
import { Loading } from "@/components/index";
import { MainWrapper, MasonryWrapper } from "@/styles/Layout";

const TypefaceDesign = ({ data }) => {
  return (
    <>
      <Head>
        <title>Typeface Design</title>
        <meta name="description" content="Fermín Guerrero's typefaces" />
      </Head>
      <MainWrapper>
        <MasonryWrapper>
          <Masonry data={data} />
        </MasonryWrapper>
      </MainWrapper>
    </>
  );
};

export async function getStaticProps() {
  const projects = await getProjectsData();
  const data = projects.filter((element) => element.type === "typeface");
  return {
    props: {
      data,
    },
  };
}

export default TypefaceDesign;
