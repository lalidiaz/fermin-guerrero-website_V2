import Head from "next/head";
import { Masonry } from "@/components/index";
import { getProjectsData } from "@/utils/helpers";
import { useState, useEffect, useRef } from "react";
import { Loading } from "@/components/index";

const TypefaceDesign = ({ data }) => {
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
        <title>Typeface Design</title>
        <meta name="description" content="Fermin Guerrero's typefaces" />
      </Head>
      <div className="main-wrapper">
        <div className="masonry-wrap-typeface">
          {preloader ? <Loading /> : <Masonry data={data} />}
        </div>
      </div>
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
