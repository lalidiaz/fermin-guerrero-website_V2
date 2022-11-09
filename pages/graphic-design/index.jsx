import Head from "next/head";
import { Masonry, Loading } from "@/components/index";
import { getProjectsData } from "@/utils/helpers";
import { useState, useEffect, useRef } from "react";

const GraphicDesign = ({ data, video }) => {
  const [timer, setTimer] = useState(1);
  const [preloader, setPreloader] = useState(true);
  const id = useRef(null);

  const clear = () => {
    window.clearInterval();
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      <Head>
        <title>Graphic Design</title>
        <meta name="description" content="Fermin Guerrero's Graphic Design Projects" />
      </Head>
      <div className="main-wrapper">
        <div className="masonry-wrap">
          {preloader ? <Loading /> : <Masonry data={data} video={video} />}
        </div>
      </div>
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
